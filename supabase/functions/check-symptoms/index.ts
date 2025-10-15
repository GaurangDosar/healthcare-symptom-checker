import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Expanded disclaimer text (exact)
const DISCLAIMER = "DISCLAIMER: This tool provides educational information only and is not medical advice. It does not replace a consultation with a licensed healthcare professional. If you are experiencing severe or life-threatening symptoms (e.g., chest pain, severe difficulty breathing, sudden weakness, uncontrolled bleeding), seek emergency medical care immediately.";

// Build the medical prompt with few-shot example
function buildPrompt(symptoms: string, age?: number | null, sex?: string | null): string {
  const demographicInfo = age || sex 
    ? `Patient demographics: ${age ? `Age ${age}` : ''}${age && sex ? ', ' : ''}${sex ? sex : ''}.`
    : '';

  return `You are an evidence-minded medical-information assistant for educational purposes only.

RULES:
1. Provide up to 4 possible conditions ranked most→least likely
2. For each condition provide: name, 1-2 sentence justification, confidence_score (0..1), and probability_rank (1..4)
3. Provide recommended_next_steps list focusing on triage and safe high-level guidance (no prescriptions, no dosing)
4. If symptoms indicate emergency red-flags (chest pain, severe difficulty breathing, sudden weakness, unresponsiveness, high fever >40°C, severe bleeding), include explicit emergency instruction
5. If input is insufficient, fill needed_info array with at most two clarifying questions
6. ALWAYS include the exact disclaimer text
7. Output MUST be valid JSON only matching the schema below - no extra prose

FEW-SHOT EXAMPLE:
Input: {"symptoms":"runny nose, sneezing, itchy eyes for 2 days. No fever. Started after visiting park.","age":28,"sex":"female"}

Output:
{
  "conditions": [
    {
      "name": "Allergic rhinitis",
      "probability_rank": 1,
      "confidence_score": 0.75,
      "reasoning": "Itchy eyes and sneezing shortly after park exposure suggest an allergic trigger."
    },
    {
      "name": "Viral upper respiratory infection (common cold)",
      "probability_rank": 2,
      "confidence_score": 0.2,
      "reasoning": "Runny nose can occur with viral infections; absence of fever makes this less likely."
    }
  ],
  "recommended_next_steps": [
    "Consider OTC antihistamine after checking with a pharmacist or clinician if you have chronic conditions.",
    "If symptoms worsen or fever develops, consult a primary care provider."
  ],
  "needed_info": null,
  "disclaimer": "${DISCLAIMER}"
}

JSON SCHEMA:
{
  "conditions": [{"name": string, "probability_rank": number, "confidence_score": number, "reasoning": string}],
  "recommended_next_steps": [string],
  "needed_info": [string] | null,
  "disclaimer": string,
  "llm_metadata": {"provider": string, "model": string, "prompt_version": string}
}

NOW ANALYZE THIS CASE:
Symptoms: ${symptoms}
${demographicInfo}

OUTPUT (JSON only):`;
}

// Simple PII redaction (basic regex)
function redactPII(text: string): string {
  return text
    .replace(/\b[\w\.-]+@[\w\.-]+\.\w+\b/g, '[EMAIL]')
    .replace(/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g, '[PHONE]')
    .replace(/\b\d{3}-\d{2}-\d{4}\b/g, '[SSN]');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { symptoms, age, sex, consentToStore } = await req.json();

    // Validate input
    if (!symptoms || typeof symptoms !== 'string' || symptoms.length < 10 || symptoms.length > 1000) {
      return new Response(
        JSON.stringify({ error: 'Symptoms must be between 10-1000 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (age !== undefined && age !== null && (typeof age !== 'number' || age < 0 || age > 150)) {
      return new Response(
        JSON.stringify({ error: 'Age must be between 0-150' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (sex !== undefined && sex !== null && !['male', 'female', 'other'].includes(sex)) {
      return new Response(
        JSON.stringify({ error: 'Sex must be male, female, or other' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Build prompt
    const prompt = buildPrompt(symptoms, age, sex);

    // Call Google Gemini
    const geminiKey = Deno.env.get('GEMINI_API_KEY');
    if (!geminiKey) {
      console.error('GEMINI_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'AI service not configured - Gemini API key missing' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Calling Google Gemini 2.5 Flash...');
    const aiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topP: 0.95,
        },
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('Gemini error:', aiResponse.status, errorText);
      return new Response(
        JSON.stringify({ error: 'AI service error', details: errorText }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const aiData = await aiResponse.json();
    const rawText = aiData.candidates?.[0]?.content?.parts?.[0]?.text || '';

    console.log('Raw AI response:', rawText.substring(0, 200) + '...');

    // Parse JSON from response
    let parsedResponse;
    try {
      // Remove markdown code blocks if present (```json ... ``` or ``` ... ```)
      let cleanedText = rawText.trim();
      cleanedText = cleanedText.replace(/^```json\s*/i, '').replace(/^```\s*/, '');
      cleanedText = cleanedText.replace(/\s*```$/, '');
      
      // Try to extract JSON from the response
      const jsonMatch = cleanedText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('No JSON found in response');
      }
      parsedResponse = JSON.parse(jsonMatch[0]);

      // Ensure disclaimer is present
      if (!parsedResponse.disclaimer) {
        parsedResponse.disclaimer = DISCLAIMER;
      }

      // Add metadata
      parsedResponse.llm_metadata = {
        provider: 'google',
        model: 'gemini-2.5-flash',
        prompt_version: '1.0'
      };

    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to parse AI response', 
          raw_response: rawText,
          parse_error: parseError instanceof Error ? parseError.message : 'Unknown error'
        }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Store in database if consent given
    if (consentToStore === true) {
      const supabaseClient = createClient(
        Deno.env.get('SUPABASE_URL') ?? '',
        Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
      );

      // Redact PII from symptoms before storing
      const redactedSymptoms = redactPII(symptoms);

      const { error: dbError } = await supabaseClient
        .from('queries')
        .insert({
          symptoms: redactedSymptoms,
          age: age || null,
          sex: sex || null,
          response: parsedResponse,
          consent: true
        });

      if (dbError) {
        console.error('Database insert error:', dbError);
        // Don't fail the request if storage fails, just log it
      } else {
        console.log('Query stored successfully');
      }
    }

    return new Response(
      JSON.stringify(parsedResponse),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
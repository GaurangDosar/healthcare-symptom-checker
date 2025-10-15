// Local Gemini Server (Secure Version)
// Author: Gaurang Dosar
// 
// This server is for LOCAL DEVELOPMENT ONLY
// For production, use Supabase Edge Functions
//
// Setup: Copy .env.example to .env and add your GEMINI_API_KEY
// Run with: node gemini-server-secure.mjs

import http from 'http';
import { config } from 'dotenv';

// Load environment variables
config();

const PORT = 3001;
const MODEL = 'gemini-2.5-flash';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('❌ Error: GEMINI_API_KEY not found in .env file');
  console.error('Please create a .env file with your API key');
  console.error('Copy .env.example to .env and add your key');
  process.exit(1);
}

const DISCLAIMER = "DISCLAIMER: This tool provides educational information only and is not medical advice. It does not replace a consultation with a licensed healthcare professional. If you are experiencing severe or life-threatening symptoms (e.g., chest pain, severe difficulty breathing, sudden weakness, uncontrolled bleeding), seek emergency medical care immediately.";

// Build the medical prompt with few-shot example (MATCHES Supabase Edge Function)
function buildPrompt(symptoms, age, sex) {
  const demographicInfo = age || sex 
    ? `Patient demographics: ${age ? `Age ${age}` : ''}${age && sex ? ', ' : ''}${sex || ''}.`
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

// Retry logic for 503 errors
async function callGeminiWithRetry(prompt, maxRetries = 3) {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`🔄 Attempt ${attempt}/${maxRetries}...`);
      
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.7, topP: 0.95 }
          })
        }
      );

      if (response.status === 503) {
        const waitTime = Math.pow(2, attempt) * 1000;
        console.log(`⏳ Model overloaded (503), waiting ${waitTime}ms before retry...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        continue;
      }

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Gemini API error: ${response.status} ${errorText}`);
      }

      return await response.json();
      
    } catch (error) {
      lastError = error;
      if (attempt < maxRetries) {
        const waitTime = Math.pow(2, attempt) * 1000;
        console.log(`⚠️ Error: ${error.message}, retrying in ${waitTime}ms...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }
  }
  
  throw lastError;
}

// Create HTTP server
const server = http.createServer(async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === '/check-symptoms' && req.method === 'POST') {
    let body = '';
    
    req.on('data', chunk => { body += chunk.toString(); });
    
    req.on('end', async () => {
      try {
        const { symptoms, age, sex } = JSON.parse(body);
        
        // Validate input
        if (!symptoms || symptoms.length < 10 || symptoms.length > 1000) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Symptoms must be 10-1000 characters' }));
          return;
        }

        console.log(`\n📝 Analyzing symptoms (${symptoms.length} chars)...`);
        
        const prompt = buildPrompt(symptoms, age, sex);
        const aiData = await callGeminiWithRetry(prompt);
        
        const rawText = aiData.candidates?.[0]?.content?.parts?.[0]?.text || '';
        
        // Parse JSON
        let cleanedText = rawText.trim()
          .replace(/^```json\s*/i, '')
          .replace(/^```\s*/, '')
          .replace(/\s*```$/, '');
        
        const jsonMatch = cleanedText.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
          throw new Error('No JSON found in response');
        }
        
        const parsedResponse = JSON.parse(jsonMatch[0]);
        parsedResponse.disclaimer = parsedResponse.disclaimer || DISCLAIMER;
        parsedResponse.llm_metadata = {
          provider: 'google',
          model: MODEL,
          prompt_version: '1.0'
        };

        console.log(`✅ Success! Returning ${parsedResponse.conditions?.length || 0} conditions`);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(parsedResponse));
        
      } catch (error) {
        console.error('❌ Error:', error.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`\n🚀 Local Gemini server running on http://localhost:${PORT}`);
  console.log(`📍 Endpoint: http://localhost:${PORT}/check-symptoms`);
  console.log(`🤖 Using model: ${MODEL}`);
  console.log(`⚠️  For LOCAL DEVELOPMENT ONLY - Use Supabase Edge Functions for production\n`);
});

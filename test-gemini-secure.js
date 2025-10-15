// Medical Symptom Checker - API Test (Secure Version)
// Author: Gaurang Dosar
// Run with: node test-gemini-secure.js
// 
// Setup: Copy .env.example to .env and add your GEMINI_API_KEY

import { config } from 'dotenv';
import { readFileSync } from 'fs';

// Load environment variables from .env file
config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL = 'gemini-2.5-flash';

if (!GEMINI_API_KEY) {
  console.error('❌ Error: GEMINI_API_KEY not found in environment variables');
  console.error('Please create a .env file with your API key');
  console.error('Copy .env.example to .env and add your key');
  process.exit(1);
}

const testPrompt = `You are an evidence-minded medical-information assistant for educational purposes only.

RULES:
1. Provide up to 4 possible conditions ranked most→least likely
2. For each condition provide: name, 1-2 sentence justification, confidence_score (0..1), and probability_rank (1..4)
3. Provide recommended_next_steps list focusing on triage and safe high-level guidance
4. Output MUST be valid JSON only - no extra prose

JSON SCHEMA:
{
  "conditions": [{"name": string, "probability_rank": number, "confidence_score": number, "reasoning": string}],
  "recommended_next_steps": [string],
  "needed_info": [string] | null,
  "disclaimer": string
}

NOW ANALYZE THIS CASE:
Symptoms: headache for 2 days, mild fever, feeling tired
Patient demographics: Age 28, female

OUTPUT (JSON only):`;

async function testGemini() {
  console.log('Testing Gemini 2.5 Flash...\n');
  
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: testPrompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topP: 0.95,
          },
        }),
      }
    );

    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Error:', errorText);
      return;
    }

    const data = await response.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    
    if (!rawText) {
      console.log('⚠️ No text in response');
      return;
    }

    // Try to parse JSON
    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      console.log('✅ Parsed JSON successfully:');
      console.log(JSON.stringify(parsed, null, 2));
      
      if (parsed.conditions && parsed.conditions.length > 0) {
        console.log('\n✅ All checks passed! Your Gemini API key is working perfectly! 🎉');
      }
    } else {
      console.log('⚠️ Could not extract JSON from response');
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testGemini();

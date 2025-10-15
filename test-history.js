// Test script to verify get-history Edge Function
// Run with: node test-history.js

import { readFileSync } from 'fs';

// Read .env file manually
const envFile = readFileSync('.env', 'utf8');
const envVars = {};
envFile.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    const key = match[1].trim();
    let value = match[2].trim();
    // Remove quotes
    value = value.replace(/^["']|["']$/g, '');
    envVars[key] = value;
  }
});

const SUPABASE_URL = envVars.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = envVars.VITE_SUPABASE_PUBLISHABLE_KEY;

async function testGetHistory() {
  console.log('\n🧪 Testing get-history Edge Function...\n');
  console.log('Supabase URL:', SUPABASE_URL);
  console.log('Using anon key:', SUPABASE_ANON_KEY ? '✅ Present' : '❌ Missing');

  try {
    const response = await fetch(`${SUPABASE_URL}/functions/v1/get-history`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'apikey': SUPABASE_ANON_KEY
      },
      body: JSON.stringify({})
    });

    console.log('\n📊 Response Status:', response.status, response.statusText);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Error response:', errorText);
      
      if (response.status === 404) {
        console.error('\n⚠️  Function NOT found! Please deploy get-history Edge Function:');
        console.error('   Go to: https://supabase.com/dashboard/project/rdwkblpfuibjwrmlhgjr/functions');
        console.error('   Create function named: get-history');
        console.error('   Copy code from: supabase/functions/get-history/index.ts\n');
      }
      return;
    }

    const data = await response.json();
    console.log('\n✅ Success! Response:');
    console.log(JSON.stringify(data, null, 2));
    
    if (data.queries && data.queries.length > 0) {
      console.log(`\n📝 Found ${data.queries.length} queries in history`);
      console.log('\n🔍 First query:');
      const first = data.queries[0];
      console.log('   ID:', first.id);
      console.log('   Symptoms:', first.symptoms.substring(0, 50) + '...');
      console.log('   Age:', first.age || 'N/A');
      console.log('   Sex:', first.sex || 'N/A');
      console.log('   Created:', first.created_at);
      console.log('   Conditions:', first.response.conditions?.length || 0);
    } else {
      console.log('\n📭 No queries in history yet');
      console.log('   Submit symptoms with consent checkbox to create history');
    }

  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    
    if (error.message.includes('fetch')) {
      console.error('\n⚠️  Network error - check your internet connection');
    }
  }
}

// Run test
testGetHistory();

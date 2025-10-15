# Database Setup Guide 🗄️

**Author**: Gaurang Dosar  
**Purpose**: Enable history storage and retrieval in Supabase

---

## 📋 Overview

Your application already has the database schema and Edge Functions ready! You just need to:
1. Run the database migration in Supabase
2. Deploy the `get-history` Edge Function
3. Test the history feature

---

## 🚀 Step-by-Step Setup

### Step 1: Run Database Migration

1. **Go to Supabase Dashboard**
   - URL: https://supabase.com/dashboard/project/rdwkblpfuibjwrmlhgjr

2. **Navigate to SQL Editor**
   - Click "SQL Editor" in the left sidebar

3. **Create New Query**
   - Click "+ New query"

4. **Copy the Migration SQL**
   - Open: `supabase/migrations/20251014121326_19dbeedc-6f2a-4f97-8311-56b2c55b452c.sql`
   - Copy all contents

5. **Paste and Run**
   - Paste the SQL into the editor
   - Click "Run" button (or press Ctrl+Enter)
   - You should see "Success. No rows returned"

**What this creates:**
- ✅ `queries` table with columns:
  - `id` (UUID, primary key)
  - `symptoms` (TEXT, 10-1000 chars)
  - `age` (INTEGER, 0-150)
  - `sex` (TEXT, male/female/other)
  - `response` (JSONB, AI analysis)
  - `consent` (BOOLEAN)
  - `created_at` (TIMESTAMP)
- ✅ Row Level Security policies
- ✅ Indexes for performance

---

### Step 2: Deploy `get-history` Edge Function

1. **Go to Edge Functions**
   - Dashboard → Edge Functions
   - Click "Create a new function"

2. **Function Configuration**
   - Function name: `get-history`
   - Click "Create function"

3. **Copy Function Code**
   ```powershell
   Get-Content "supabase\functions\get-history\index.ts" | Set-Clipboard
   Write-Host "✅ Code copied to clipboard!" -ForegroundColor Green
   ```

4. **Paste Code**
   - Paste the code into the Supabase editor
   - Click "Deploy" button

5. **No Secrets Needed**
   - This function uses `SUPABASE_ANON_KEY` (automatically available)
   - No additional secrets required

---

### Step 3: Verify Database Table

1. **Check Table Exists**
   - Go to "Table Editor" in Supabase Dashboard
   - You should see `queries` table
   - Initially empty (no rows)

2. **Check Policies**
   - Click on `queries` table
   - Go to "Policies" tab
   - Should see:
     - ✅ "Anyone can insert queries with consent"
     - ✅ "Anyone can read all queries"

---

### Step 4: Test the Complete Flow

#### Test 1: Submit Symptom with Consent

1. **Run Your App**
   ```powershell
   npm run dev
   ```

2. **Open Browser**
   - Go to: http://localhost:8080/

3. **Fill Form**
   - Symptoms: "Fever and headache for 2 days"
   - Age: 30
   - Sex: Male
   - ✅ **Check "Consent to store anonymized query"**

4. **Submit**
   - Click "Analyze Symptoms"
   - You should see results

5. **Verify Database**
   - Go to Supabase → Table Editor → `queries`
   - You should see 1 new row with your query
   - Note: Symptoms are redacted (emails/phones removed)

#### Test 2: View History

1. **In Your App**
   - Click "History" tab/button

2. **Should See**
   - Your previous query displayed
   - Symptoms, age, sex, conditions
   - Timestamp
   - Top conditions with confidence scores

3. **If Empty**
   - Make sure you checked consent checkbox
   - Check browser console for errors
   - Check Supabase logs (Dashboard → Logs → Edge Functions)

---

## 🔍 Troubleshooting

### History Shows "No History Yet"

**Possible Causes:**
1. ✅ Consent checkbox not checked when submitting symptoms
2. ✅ Database migration not run
3. ✅ `get-history` function not deployed

**Fix:**
```sql
-- Check if table exists (run in SQL Editor)
SELECT * FROM public.queries LIMIT 5;
```

If error: Run migration again (Step 1)

### Edge Function Error

**Check Logs:**
1. Supabase Dashboard → Logs → Edge Functions
2. Look for `get-history` errors

**Common Issues:**
- Missing `SUPABASE_ANON_KEY` (should be automatic)
- Table doesn't exist (run migration)

### No Data in Table

**Verify Consent:**
- Only queries with `consent: true` are stored
- Check the checkbox when submitting symptoms

**Test Insert Manually:**
```sql
-- Run in SQL Editor to test insert
INSERT INTO public.queries (symptoms, age, sex, response, consent)
VALUES (
  'Test symptoms',
  25,
  'male',
  '{"conditions": [], "recommended_next_steps": [], "disclaimer": "test"}',
  true
);
```

---

## 📊 Database Schema

```sql
CREATE TABLE public.queries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  symptoms TEXT NOT NULL,
  age INTEGER,
  sex TEXT,
  response JSONB NOT NULL,
  consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
```

**Privacy Features:**
- ✅ PII redaction (emails, phones, SSNs)
- ✅ Consent required for storage
- ✅ Anonymous (no user ID tracking)
- ✅ Educational purposes only

---

## 🎯 Expected Behavior

### With Consent Checked ✅
1. User submits symptoms
2. AI analyzes and returns results
3. Query stored in database (PII redacted)
4. Visible in History view

### Without Consent ❌
1. User submits symptoms
2. AI analyzes and returns results
3. Query **NOT** stored
4. Not visible in History

---

## 📈 Usage Limits (Free Tier)

| Resource | Limit | Notes |
|----------|-------|-------|
| Database Size | 500 MB | ✅ Plenty for queries |
| Rows | 2 GB | ✅ Millions of queries |
| Edge Function Calls | 500K/month | ✅ More than enough |
| Bandwidth | 5 GB | ✅ Sufficient |

---

## 🔒 Security

### Row Level Security (RLS)
- ✅ Enabled on `queries` table
- ✅ Only consented queries can be inserted
- ✅ Anyone can read (anonymous data)

### Data Privacy
- ✅ PII redacted before storage
- ✅ No user authentication required
- ✅ No personal identifiers stored

### Best Practices
- ✅ Store only with consent
- ✅ Redact sensitive information
- ✅ Don't store medical decisions
- ✅ Keep disclaimer visible

---

## 🧪 Testing Commands

### Check Table Structure
```sql
-- Run in Supabase SQL Editor
SELECT 
  column_name, 
  data_type, 
  is_nullable
FROM information_schema.columns
WHERE table_name = 'queries'
ORDER BY ordinal_position;
```

### View Recent Queries
```sql
-- Last 10 queries
SELECT 
  id,
  symptoms,
  age,
  sex,
  consent,
  created_at
FROM public.queries
ORDER BY created_at DESC
LIMIT 10;
```

### Count Queries
```sql
-- Total stored queries
SELECT COUNT(*) as total_queries FROM public.queries;
```

### Check Consent Rate
```sql
-- Consent statistics
SELECT 
  consent,
  COUNT(*) as count
FROM public.queries
GROUP BY consent;
```

---

## 🚀 Next Steps After Setup

1. ✅ Run migration in Supabase SQL Editor
2. ✅ Deploy `get-history` Edge Function
3. ✅ Test with consent checkbox
4. ✅ Verify history displays correctly
5. Optional: Add pagination for large history
6. Optional: Add date filters to history view
7. Optional: Export history as CSV

---

## 📞 Support

- **Supabase Issues**: Check Dashboard → Logs
- **Database Errors**: SQL Editor → Error messages
- **Edge Function Errors**: Logs → Edge Functions
- **Frontend Errors**: Browser console (F12)

---

## ✅ Checklist

- [ ] Database migration run successfully
- [ ] `get-history` Edge Function deployed
- [ ] `queries` table visible in Table Editor
- [ ] Row Level Security policies active
- [ ] Test query submitted with consent
- [ ] Query appears in database
- [ ] History view displays queries
- [ ] PII redaction working

---

**Developed by Gaurang Dosar**  
Last Updated: December 2024

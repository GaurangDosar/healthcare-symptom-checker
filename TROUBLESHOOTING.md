# History Feature Troubleshooting 🔧

**Author**: Gaurang Dosar  
**Issue**: "Failed to load history" error

---

## 🚨 Quick Diagnosis

Run this test to identify the issue:

```powershell
node test-history.js
```

---

## ✅ Checklist

### 1. Is the Database Table Created?

**Check in Supabase Dashboard:**
1. Go to: https://supabase.com/dashboard/project/rdwkblpfuibjwrmlhgjr/editor
2. Look for `queries` table in the left sidebar
3. Click on it to see if it exists

**If NOT found:**
- ❌ Run the migration SQL
- 📋 The SQL is in: `supabase/migrations/20251014121326_19dbeedc-6f2a-4f97-8311-56b2c55b452c.sql`
- Go to: https://supabase.com/dashboard/project/rdwkblpfuibjwrmlhgjr/sql/new
- Paste and run the SQL

---

### 2. Is the get-history Edge Function Deployed?

**Check in Supabase Dashboard:**
1. Go to: https://supabase.com/dashboard/project/rdwkblpfuibjwrmlhgjr/functions
2. Look for `get-history` function
3. Check if it shows "Deployed" status

**If NOT found:**
- ❌ Function needs to be deployed
- 📋 Code is in: `supabase/functions/get-history/index.ts`

**Deploy Steps:**
```powershell
# Copy code to clipboard
Get-Content "supabase\functions\get-history\index.ts" | Set-Clipboard
```

1. Go to: https://supabase.com/dashboard/project/rdwkblpfuibjwrmlhgjr/functions
2. Click "Create a new function"
3. Name: `get-history`
4. Paste code (Ctrl+V)
5. Click "Deploy"

**⚠️ Important:** NO secrets needed for this function!

---

### 3. Are There Any Queries in the Database?

**Check manually:**
1. Go to: https://supabase.com/dashboard/project/rdwkblpfuibjwrmlhgjr/editor
2. Click on `queries` table
3. Check if there are any rows

**If empty:**
- ⚠️ Submit symptoms with **consent checkbox checked**
- The checkbox is required to store queries
- Try again with consent enabled

**Test query manually:**
```sql
-- Run in SQL Editor
SELECT COUNT(*) FROM queries;
SELECT * FROM queries ORDER BY created_at DESC LIMIT 5;
```

---

### 4. Check Edge Function Logs

**View logs:**
1. Go to: https://supabase.com/dashboard/project/rdwkblpfuibjwrmlhgjr/logs/edge-functions
2. Look for `get-history` function logs
3. Check for error messages

**Common errors:**
- `Function not found` (404) → Function not deployed
- `Table does not exist` → Migration not run
- `Permission denied` → RLS policy issue

---

## 🧪 Test Commands

### Test 1: Check if Function Exists

```powershell
node test-history.js
```

**Expected output if working:**
```
✅ Success! Response:
{
  "queries": [...]
}
```

**Expected output if NOT deployed:**
```
❌ Error response: Function not found (404)
⚠️  Function NOT found! Please deploy get-history Edge Function
```

---

### Test 2: Direct API Call

```powershell
$headers = @{
    'apikey' = $env:VITE_SUPABASE_PUBLISHABLE_KEY
    'Authorization' = "Bearer $env:VITE_SUPABASE_PUBLISHABLE_KEY"
    'Content-Type' = 'application/json'
}

$response = Invoke-RestMethod -Uri "$env:VITE_SUPABASE_URL/functions/v1/get-history" -Method POST -Headers $headers -Body '{}'

$response | ConvertTo-Json -Depth 10
```

---

### Test 3: Check Database Directly

```sql
-- Run in Supabase SQL Editor
SELECT 
  id,
  symptoms,
  age,
  sex,
  consent,
  created_at,
  jsonb_array_length(response->'conditions') as condition_count
FROM queries
ORDER BY created_at DESC
LIMIT 10;
```

---

## 🔧 Solutions

### Solution 1: Deploy get-history Function

**The function code is ready!** Just needs deployment.

```powershell
# Step 1: Copy code
Get-Content "supabase\functions\get-history\index.ts" | Set-Clipboard

# Step 2: Go to Supabase Dashboard
# https://supabase.com/dashboard/project/rdwkblpfuibjwrmlhgjr/functions

# Step 3: Create function
# - Click "Create a new function"
# - Name: get-history
# - Paste code
# - Deploy
```

---

### Solution 2: Create Database Table

**If table doesn't exist:**

```powershell
# Copy migration SQL
Get-Content "supabase\migrations\20251014121326_19dbeedc-6f2a-4f97-8311-56b2c55b452c.sql" | Set-Clipboard

# Go to SQL Editor
# https://supabase.com/dashboard/project/rdwkblpfuibjwrmlhgjr/sql/new

# Paste and run
```

---

### Solution 3: Fix RLS Policies

**If policies are missing:**

```sql
-- Run in SQL Editor

-- Enable RLS
ALTER TABLE public.queries ENABLE ROW LEVEL SECURITY;

-- Allow insert with consent
CREATE POLICY "Anyone can insert queries with consent"
  ON public.queries
  FOR INSERT
  WITH CHECK (consent = true);

-- Allow read
CREATE POLICY "Anyone can read all queries"
  ON public.queries
  FOR SELECT
  USING (true);
```

---

## 🎯 Complete Setup Verification

Run these steps in order:

### Step 1: Verify Environment
```powershell
# Check .env file
Get-Content .env
```

Should show:
- ✅ VITE_SUPABASE_URL
- ✅ VITE_SUPABASE_PUBLISHABLE_KEY

### Step 2: Verify Database
```sql
-- Run in SQL Editor
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name = 'queries';
```

Should return: `queries`

### Step 3: Verify Edge Function
```powershell
node test-history.js
```

Should return: `✅ Success!`

### Step 4: Verify Complete Flow

1. Run app: `npm run dev`
2. Submit symptoms with consent ✅ checked
3. Check database has new row
4. Check History tab shows query

---

## 🆘 Still Not Working?

### Check Browser Console

1. Open browser (F12)
2. Go to Console tab
3. Look for error messages
4. Common errors:

**"Failed to fetch"**
- Network issue
- Wrong Supabase URL
- CORS issue

**"Function not found"**
- get-history not deployed
- Wrong function name

**"Table does not exist"**
- Migration not run
- Wrong table name

---

### Check Network Tab

1. Open browser (F12)
2. Go to Network tab
3. Submit symptoms
4. Look for request to `/functions/v1/check-symptoms`
5. Check response

**Expected:**
- Status: 200 OK
- Response: JSON with conditions

**If error:**
- Status: 404 → Function not found
- Status: 500 → Server error (check logs)

---

## 📞 Support Checklist

If still having issues, gather this info:

1. **Database status:**
   - [ ] Table `queries` exists
   - [ ] Has rows with data
   - [ ] RLS policies enabled

2. **Edge Function status:**
   - [ ] `check-symptoms` deployed
   - [ ] `get-history` deployed
   - [ ] Logs show no errors

3. **Frontend status:**
   - [ ] .env configured correctly
   - [ ] Browser console shows errors
   - [ ] Network requests visible

4. **Test results:**
   - [ ] `node test-history.js` output
   - [ ] Browser console errors
   - [ ] Supabase logs

---

**Developed by Gaurang Dosar**  
Last Updated: December 2024

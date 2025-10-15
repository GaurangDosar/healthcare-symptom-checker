# Test get-history Edge Function
# Run with: .\test-history.ps1

Write-Host "`n🧪 Testing get-history Edge Function...`n" -ForegroundColor Cyan

# Load environment variables
$envContent = Get-Content .env
$envVars = @{}
foreach ($line in $envContent) {
    if ($line -match '^([^=]+)=(.*)$') {
        $key = $matches[1].Trim()
        $value = $matches[2].Trim('"')
        $envVars[$key] = $value
    }
}

$SUPABASE_URL = $envVars['VITE_SUPABASE_URL']
$SUPABASE_ANON_KEY = $envVars['VITE_SUPABASE_PUBLISHABLE_KEY']

Write-Host "Supabase URL: $SUPABASE_URL" -ForegroundColor White
Write-Host "Using anon key: $(if($SUPABASE_ANON_KEY){'✅ Present'}else{'❌ Missing'})`n" -ForegroundColor $(if($SUPABASE_ANON_KEY){'Green'}else{'Red'})

if (-not $SUPABASE_URL -or -not $SUPABASE_ANON_KEY) {
    Write-Host "❌ Missing environment variables in .env file" -ForegroundColor Red
    exit 1
}

try {
    $headers = @{
        'Content-Type' = 'application/json'
        'Authorization' = "Bearer $SUPABASE_ANON_KEY"
        'apikey' = $SUPABASE_ANON_KEY
    }

    $url = "$SUPABASE_URL/functions/v1/get-history"
    Write-Host "📡 Calling: $url`n" -ForegroundColor Cyan

    $response = Invoke-RestMethod -Uri $url -Method POST -Headers $headers -Body '{}' -ErrorAction Stop

    Write-Host "✅ Success! Function is working!`n" -ForegroundColor Green
    
    if ($response.queries) {
        $count = $response.queries.Count
        Write-Host "📝 Found $count queries in history`n" -ForegroundColor Green
        
        if ($count -gt 0) {
            Write-Host "🔍 First query:" -ForegroundColor Cyan
            $first = $response.queries[0]
            Write-Host "   ID: $($first.id)" -ForegroundColor White
            Write-Host "   Symptoms: $($first.symptoms.Substring(0, [Math]::Min(50, $first.symptoms.Length)))..." -ForegroundColor White
            Write-Host "   Age: $(if($first.age){$first.age}else{'N/A'})" -ForegroundColor White
            Write-Host "   Sex: $(if($first.sex){$first.sex}else{'N/A'})" -ForegroundColor White
            Write-Host "   Created: $($first.created_at)" -ForegroundColor White
            Write-Host "   Conditions: $($first.response.conditions.Count)`n" -ForegroundColor White
        } else {
            Write-Host "📭 No queries in history yet" -ForegroundColor Yellow
            Write-Host "   Submit symptoms with consent checkbox to create history`n" -ForegroundColor White
        }
    }

} catch {
    $statusCode = $_.Exception.Response.StatusCode.value__
    $statusDesc = $_.Exception.Response.StatusDescription
    
    Write-Host "❌ Test failed!`n" -ForegroundColor Red
    Write-Host "Status: $statusCode $statusDesc" -ForegroundColor Red
    
    if ($statusCode -eq 404) {
        Write-Host "`n⚠️  Function NOT found! The get-history Edge Function is not deployed.`n" -ForegroundColor Yellow
        Write-Host "📋 SOLUTION:" -ForegroundColor Cyan
        Write-Host "1. Copy function code:" -ForegroundColor White
        Write-Host "   Get-Content 'supabase\functions\get-history\index.ts' | Set-Clipboard" -ForegroundColor Gray
        Write-Host "`n2. Go to Supabase Dashboard:" -ForegroundColor White
        Write-Host "   https://supabase.com/dashboard/project/rdwkblpfuibjwrmlhgjr/functions" -ForegroundColor Blue
        Write-Host "`n3. Create function named: get-history" -ForegroundColor White
        Write-Host "`n4. Paste code and deploy`n" -ForegroundColor White
    } elseif ($statusCode -eq 500) {
        Write-Host "`n⚠️  Server error. Check Supabase logs:" -ForegroundColor Yellow
        Write-Host "   https://supabase.com/dashboard/project/rdwkblpfuibjwrmlhgjr/logs/edge-functions" -ForegroundColor Blue
        Write-Host ""
    }
}

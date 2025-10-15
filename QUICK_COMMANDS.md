# Quick Commands for Database Setup

## Copy Migration SQL to Clipboard
```powershell
Get-Content "supabase\migrations\20251014121326_19dbeedc-6f2a-4f97-8311-56b2c55b452c.sql" | Set-Clipboard
Write-Host "✅ Migration SQL copied!" -ForegroundColor Green
```

## Copy get-history Function Code to Clipboard
```powershell
Get-Content "supabase\functions\get-history\index.ts" | Set-Clipboard
Write-Host "✅ get-history function code copied!" -ForegroundColor Green
```

## Test Database Connection
```powershell
npm run dev
```

## Quick Links

- **SQL Editor**: https://supabase.com/dashboard/project/rdwkblpfuibjwrmlhgjr/sql/new
- **Edge Functions**: https://supabase.com/dashboard/project/rdwkblpfuibjwrmlhgjr/functions
- **Table Editor**: https://supabase.com/dashboard/project/rdwkblpfuibjwrmlhgjr/editor
- **Logs**: https://supabase.com/dashboard/project/rdwkblpfuibjwrmlhgjr/logs/edge-functions

---

**Developed by Gaurang Dosar**

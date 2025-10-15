# 🏥 Healthcare Symptom Checker

AI-powered symptom analysis using Google Gemini 2.5 Flash.

---

## 🚀 Quick Start (2 Minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure API Key
Edit `gemini-server-simple.mjs` line 5:
```javascript
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY';
```

Get your free API key: https://makersuite.google.com/app/apikey

### 3. Start Backend
```bash
node gemini-server-simple.mjs
```

### 4. Start Frontend (New Terminal)
```bash
npm run dev
```

### 5. Open App
http://localhost:8080

---

## ✅ Test It Works

### Test 1: Simple Symptoms
```
Symptoms: runny nose, sneezing, sore throat
Age: 28
```

### Test 2: Emergency Scenario
```
Symptoms: severe chest pain, difficulty breathing
Age: 55
```

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `gemini-server-simple.mjs` | Local API server (backend) |
| `src/pages/Index.tsx` | Main app page (frontend) |
| `src/integrations/supabase/client-local.ts` | Routes to localhost |
| `test-gemini.js` | Test Gemini API directly |
| `test-local-server.js` | Test local server |

---

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **AI**: Google Gemini 2.5 Flash
- **UI**: Radix UI + Tailwind CSS + shadcn/ui
- **Local Server**: Node.js http module

---

## ✨ Features

- AI-powered symptom analysis
- Emergency symptom detection
- Confidence scores and reasoning
- Privacy-focused (no user accounts)
- Responsive design
- Educational disclaimers

---

## 🐛 Troubleshooting

### Server won't start
```bash
# Check if port 3001 is in use
netstat -ano | findstr :3001

# Kill process (replace PID)
taskkill /F /PID <PID>
```

### Frontend can't connect
1. Make sure backend is running: `node gemini-server-simple.mjs`
2. Check it's on port 3001
3. Verify `Index.tsx` line 9 uses `client-local`

### Empty or invalid response
Try stable model - edit `gemini-server-simple.mjs` line 6:
```javascript
const MODEL = 'gemini-1.5-flash';  // More stable
```

---

## 🧪 Testing

### Test Gemini API directly:
```bash
node test-gemini.js
```

### Test local server:
```bash
# Terminal 1
node gemini-server-simple.mjs

# Terminal 2
node test-local-server.js
```

---

## 🚀 Production Deployment (Optional)

For production with Supabase Edge Functions and database:

1. Set up Supabase project
2. Configure secrets:
   ```bash
   supabase secrets set GEMINI_API_KEY=your_key
   ```
3. Deploy functions:
   ```bash
   supabase functions deploy check-symptoms
   supabase functions deploy get-history
   ```
4. Update `Index.tsx` to use `client` instead of `client-local`

---

## 📝 License

MIT

---

## ⚠️ Disclaimer

This tool provides educational information only and is not medical advice. For emergencies, call your local emergency number immediately.

---

**Made with ❤️ using Google Gemini 2.5 Flash**

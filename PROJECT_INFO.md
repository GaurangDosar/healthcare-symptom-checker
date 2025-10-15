# Healthcare Symptom Checker

**Developer:** Gaurang Dosar  
**Version:** 1.0.0

## 🎯 Project Overview

An educational medical symptom checker application that provides health information based on user-entered symptoms. Built with modern web technologies and powered by Google Gemini API for intelligent symptom analysis.

## ⚠️ Medical Disclaimer

**For Educational Purposes Only**

This tool:
- Provides educational health information
- Does NOT replace professional medical advice
- Should NOT be used for diagnosis or treatment
- Is NOT for emergency medical situations

**For emergencies, call 911 or go to the nearest emergency room immediately.**

---

## 🏗️ Tech Stack

### Frontend
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS + shadcn/ui components
- **State Management:** TanStack React Query
- **Form Handling:** React Hook Form + Zod validation

### Backend
- **Runtime:** Node.js (local server)
- **AI Model:** Google Gemini 2.5 Flash
- **API:** Google Generative AI v1beta
- **Alternative:** Supabase Edge Functions (optional)

### Database (Optional)
- PostgreSQL via Supabase
- Stores anonymized query history with consent

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure API Key
Edit `gemini-server-simple.mjs`:
```javascript
const GEMINI_API_KEY = 'your-gemini-api-key-here';
```

### 3. Start Backend Server
```bash
node gemini-server-simple.mjs
```
Server runs on: `http://localhost:3001`

### 4. Start Frontend (New Terminal)
```bash
npm run dev
```
Frontend runs on: `http://localhost:8080`

### 5. Test the Application
- Open `http://localhost:8080`
- Enter symptoms like: "fever, cough, headache for 2 days"
- View AI-generated health information

---

## 📁 Project Structure

```
├── gemini-server-simple.mjs    # Backend API server
├── test-gemini.js              # Quick API test
├── test-enhanced.js            # Comprehensive test suite
├── src/
│   ├── pages/
│   │   └── Index.tsx           # Main application page
│   ├── components/
│   │   ├── SymptomForm.tsx     # Symptom input form
│   │   ├── ResultsView.tsx     # Results display
│   │   ├── HistoryView.tsx     # Query history
│   │   └── DisclaimerBanner.tsx # Safety disclaimer
│   ├── integrations/
│   │   └── supabase/
│   │       ├── client-local.ts  # Routes to localhost
│   │       └── client.ts        # Supabase client
│   └── types/
│       └── symptom.ts          # TypeScript types
└── supabase/
    └── functions/
        └── check-symptoms/     # Edge function (optional)
```

---

## ✨ Features

### Core Functionality
- ✅ Free-text symptom input (10-1000 characters)
- ✅ Optional demographics (age, sex)
- ✅ AI-powered differential diagnosis
- ✅ Confidence scoring (0-1 scale)
- ✅ Ranked condition list (3-5 conditions)
- ✅ Evidence-based reasoning
- ✅ Actionable next steps
- ✅ Emergency symptom detection

### Enhanced Features
- ✅ Input validation (type, range, format)
- ✅ Retry logic (handles API overload)
- ✅ Triple-layer JSON parsing
- ✅ Response structure validation
- ✅ Detailed error handling
- ✅ Safety disclaimers
- ✅ Mobile-responsive design

### Security & Privacy
- ✅ No automatic data storage
- ✅ Opt-in query history
- ✅ No PII collection
- ✅ Client-side processing where possible

---

## 🧪 Testing

### Quick API Test
```bash
node test-gemini.js
```

### Comprehensive Test Suite
```bash
node test-enhanced.js
```

Tests include:
- Standard respiratory symptoms
- Emergency cardiac symptoms
- Pediatric conditions
- Input validation
- Error handling

---

## ⚙️ Configuration

### Current Setup
- **Model:** `gemini-2.5-flash`
- **API Endpoint:** v1beta
- **Token Limit:** Unlimited
- **Retry Attempts:** 3 (with exponential backoff)
- **Ports:** 3001 (backend), 8080 (frontend)

### Model Options

| Model | Speed | Quality | Availability |
|-------|-------|---------|--------------|
| **gemini-2.5-flash** ⭐ | Fast | Excellent | Good |
| gemini-2.0-flash | Fastest | Good | Always |
| gemini-2.5-pro | Slow | Best | Limited |

To switch models, edit `MODEL` constant in `gemini-server-simple.mjs`.

---

## 📊 How It Works

1. **User Input:** Enters symptoms + optional demographics
2. **Validation:** Input checked for type, length, format
3. **API Call:** Sent to local server with retry logic
4. **AI Analysis:** Gemini API generates differential diagnosis
5. **JSON Parsing:** Triple-layer parsing ensures valid response
6. **Validation:** Response structure verified
7. **Display:** Results shown with confidence scores
8. **Safety:** Disclaimers and emergency warnings displayed

---

## 🔧 Troubleshooting

### Port Already in Use
```bash
taskkill /F /IM node.exe
node gemini-server-simple.mjs
```

### API Not Responding
1. Check server is running on port 3001
2. Verify API key in server file
3. Test with: `node test-gemini.js`

### 503 Service Overloaded
- Auto-retry handles this (3 attempts)
- Switch to `gemini-2.0-flash` if persistent

### Build Errors
```bash
npm install
npm run build
```

---

## 📦 Deployment

### Frontend
Deploy to static hosting:
- **Vercel:** `npm run build && vercel --prod`
- **Netlify:** `npm run build && netlify deploy --prod`
- **GitHub Pages:** Use Actions for auto-deploy

### Backend
Deploy Node.js server to:
- **Heroku:** `heroku create && git push heroku main`
- **Railway:** Connect GitHub repo
- **Render:** Deploy as web service

Or use Supabase Edge Functions for serverless.

---

## 🎓 Educational Use Cases

1. **Medical Students:** Learn differential diagnosis
2. **Healthcare Education:** Teach symptom evaluation
3. **Public Health:** Health information access
4. **Research:** Study AI in healthcare
5. **Development:** Learn medical app architecture

---

## 🤝 Contributing

Contributions are welcome! Areas for improvement:
- Additional AI model integrations
- More sophisticated diagnosis logic
- Multilingual support
- Accessibility enhancements
- Mobile app version

---

## 📄 License

This project is intended for educational purposes.

---

## 👨‍💻 Developer

**Gaurang Dosar**

Built with React, TypeScript, and Google Gemini API

---

## 📞 Support

For issues or questions, please open an issue on the GitHub repository.

---

**Remember:** This is an educational tool only. Always consult qualified healthcare professionals for medical advice, diagnosis, or treatment.

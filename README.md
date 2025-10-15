# Healthcare Symptom Checker 🏥# Healthcare Symptom Checker



**Author**: Gaurang Dosar  **Developer:** Gaurang Dosar

**AI Model**: Google Gemini 2.5 Flash  

**Status**: ✅ Live on SupabaseAn educational symptom checker application built with React, TypeScript, and Google Gemini API.



A modern, AI-powered healthcare symptom checker that helps users understand potential conditions based on their symptoms. Built with React, TypeScript, and Google's Gemini API.## ⚠️ Important Medical Disclaimer



![Status](https://img.shields.io/badge/Status-Live-success)**This tool is for educational purposes only and does not provide medical advice.**

![Supabase](https://img.shields.io/badge/Backend-Supabase-green)

![React](https://img.shields.io/badge/Frontend-React%2018-blue)This application:

![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)- Provides educational information about possible health conditions

- Does NOT replace consultation with licensed healthcare professionals

## ⚠️ Important Disclaimer- Should NOT be used for medical diagnosis or treatment decisions

- Is NOT suitable for emergency medical situations

This tool is for **informational purposes only** and is **not medical advice**. Always consult with qualified healthcare professionals for medical concerns. If you're experiencing a medical emergency, call your local emergency services immediately.

**If you are experiencing severe or life-threatening symptoms (chest pain, severe difficulty breathing, sudden weakness, uncontrolled bleeding), seek emergency medical care immediately.**

---

## 🎯 Project Summary

## 🚀 Quick Start

A web application that accepts free-text symptom descriptions and optional demographics (age, sex), calls an LLM to generate a ranked list of probable conditions with conservative reasoning and triage advice, stores anonymized query history (with user consent), and displays results with prominent safety disclaimers.

### Prerequisites

- Node.js 18+## 🏗️ Tech Stack

- Supabase account (free tier works)

- Google Gemini API key ([Get one here](https://aistudio.google.com/apikey))- **Frontend**: React 18 + TypeScript + Vite

- **Styling**: Tailwind CSS + shadcn/ui components

### 1. Clone Repository- **Backend**: Node.js Local Server (with optional Supabase Edge Functions)

- **Database**: PostgreSQL via Supabase (optional)

```bash- **AI Model**: Google Gemini 2.5 Flash

git clone https://github.com/GaurangDosar/triage-tool.git- **State Management**: TanStack Query

cd triage-tool- **Form Handling**: React Hook Form + Zod validation

```

## 🚀 Quick Start

### 2. Install Dependencies

## 📁 Project Structure

```bash

npm install```

```triage-tool/

├── src/

### 3. Configure Environment│   ├── components/         # React components

│   ├── pages/             # Page components

```bash│   ├── integrations/      # Supabase clients

cp .env.example .env│   └── types/             # TypeScript types

```├── supabase/

│   └── functions/         # Edge functions (for production)

Edit `.env` with your credentials:├── gemini-server-simple.mjs   # Local API server

├── test-gemini.js            # Test Gemini API

```env└── test-local-server.js      # Test local server

VITE_SUPABASE_URL=your_supabase_project_url```

VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key

GEMINI_API_KEY=your_gemini_api_key---

```

## 🔧 Production Setup (Supabase)

**Get your Supabase credentials:**

- Go to [Supabase Dashboard](https://supabase.com/dashboard)### Prerequisites

- Select your project → Settings → API

- Copy Project URL and anon public key- Node.js 18+ and npm

- OpenAI API key for GPT-4o-mini

### 4. Deploy Edge Function to Supabase

### Installation

1. Go to your Supabase Dashboard → Edge Functions

2. Create new function named: `check-symptoms`1. Clone the repository:

3. Copy code from: `supabase/functions/check-symptoms/index.ts````bash

4. Deploy functiongit clone <YOUR_GIT_URL>

5. Add secret: `GEMINI_API_KEY` with your Gemini API keycd <YOUR_PROJECT_NAME>

```

### 5. Run Locally

2. Install dependencies:

```bash```bash

npm run devnpm install

``````



Visit: http://localhost:8080/3. Set up environment variables:

Add your Gemini API key in `gemini-server-simple.mjs`:

---```javascript

const GEMINI_API_KEY = 'your-api-key-here';

## 🏗️ Architecture```



```4. Start the backend server:

┌─────────────────┐```bash

│   User Browser  │node gemini-server-simple.mjs

└────────┬────────┘```

         │

         ▼5. Start the development server (in a new terminal):

┌─────────────────┐```bash

│  React Frontend │npm run dev

│  (Vite + TS)    │```

└────────┬────────┘

         │The app will be available at `http://localhost:8080`

         ▼

┌─────────────────────────────┐## 📋 Features

│   Supabase Edge Function    │

│    (check-symptoms)          │### ✅ Implemented Features

└────────┬────────────────────┘

         │1. **Symptom Input Form**

         ▼   - Free-text symptom description (10-1000 characters)

┌─────────────────────────────┐   - Optional age and sex fields

│   Google Gemini 2.5 Flash   │   - Real-time form validation

└─────────────────────────────┘   - Privacy consent checkbox for history storage

```   - Mobile-responsive design



**Key Components:**2. **AI-Powered Analysis**

- **Frontend**: React 18 + TypeScript + Tailwind CSS   - GPT-4o-mini integration via Edge Functions

- **Backend**: Supabase Edge Functions (Deno runtime)   - Structured prompt with few-shot examples

- **AI**: Google Gemini 2.5 Flash   - Returns up to 4 ranked conditions with confidence scores

- **Hosting**: Supabase (backend) + Vercel/Netlify (frontend)   - Provides safe, educational next steps

   - Emergency symptom detection with prominent warnings

---

3. **Results Display**

## 📊 Features   - Ranked list of possible conditions

   - Confidence scores and reasoning for each condition

✅ AI-powered symptom analysis     - Recommended next steps focusing on triage

✅ Confidence scoring for conditions     - Emergency warnings (pulsing animation for urgent cases)

✅ Prioritized next steps     - Collapsible raw JSON viewer for debugging

✅ Dynamic emergency detection  

✅ Responsive design + Dark mode  4. **Query History**

✅ Privacy-focused (no data storage by default)     - Opt-in anonymized storage

✅ Professional disclaimers     - View past symptom checks

   - Timestamp and demographics display

---   - No PII storage (automatic redaction)



## 🔒 Security5. **Safety & Privacy**

   - Prominent disclaimer banner on every page

### API Key Management   - Full disclaimer modal with emergency symptoms list

- ✅ No API keys in source code   - PII redaction (email, phone, SSN patterns)

- ✅ All secrets in environment variables   - Consent-based history storage only

- ✅ `.env` excluded from Git   - Rate limiting on Edge Functions

- ✅ Supabase Secrets for production

## 🔧 API Documentation

### Data Privacy

- No PHI stored without explicit consent### POST /check-symptoms

- Basic PII redaction for stored queries

- CORS properly configuredAnalyzes symptoms and returns possible conditions with recommendations.

- HTTPS enforced

**Request Body:**

---```json

{

## 🧪 Testing  "symptoms": "headache for 3 days, mild fever, feeling tired",

  "age": 28,

### Test Edge Function Locally (Optional)  "sex": "female",

  "consentToStore": true

If you want to test with a local server:}

```

```bash

node gemini-server-secure.mjs**Response:**

``````json

{

This runs a local server on port 3001 for testing (requires `.env` file).  "conditions": [

    {

---      "name": "Viral upper respiratory infection",

      "probability_rank": 1,

## 📁 Project Structure      "confidence_score": 0.75,

      "reasoning": "Combination of headache, fever, and fatigue suggests viral infection..."

```    }

├── src/  ],

│   ├── components/          # React components  "recommended_next_steps": [

│   │   ├── ui/             # shadcn/ui components    "Rest and stay hydrated",

│   │   ├── SymptomForm.tsx    "Monitor temperature",

│   │   ├── ResultsView.tsx    "Consult primary care if symptoms worsen"

│   │   └── HistoryView.tsx  ],

│   ├── integrations/  "needed_info": null,

│   │   └── supabase/       # Supabase client  "disclaimer": "DISCLAIMER: This tool provides educational information only...",

│   ├── pages/              # Page components  "llm_metadata": {

│   ├── types/              # TypeScript types    "provider": "openai",

│   └── lib/                # Utilities    "model": "gpt-4o-mini",

├── supabase/    "prompt_version": "1.0"

│   └── functions/  }

│       └── check-symptoms/ # Edge function code}

├── public/                 # Static assets```

├── .env.example           # Environment template

├── DEPLOYMENT_SUCCESS.md  # Deployment guide### GET /get-history

└── README.md              # This file

```Retrieves anonymized query history.



---**Query Parameters:**

- `limit` (optional): Number of records to return (default: 20)

## 🚀 Production Deployment

**Response:**

### Frontend Deployment (Recommended: Vercel)```json

{

1. **Push to GitHub** (already done)  "queries": [

    {

2. **Deploy to Vercel**:      "id": "uuid",

   - Go to [vercel.com](https://vercel.com)      "symptoms": "headache for 3 days...",

   - Import your GitHub repository      "age": 28,

   - Add environment variables:      "sex": "female",

     - `VITE_SUPABASE_URL`      "response": { /* full response object */ },

     - `VITE_SUPABASE_PUBLISHABLE_KEY`      "created_at": "2025-10-14T12:00:00Z"

   - Deploy!    }

  ]

3. **Alternative Platforms**:}

   - [Netlify](https://netlify.com) - Simple setup```

   - [Cloudflare Pages](https://pages.cloudflare.com) - Fast CDN

## 🔒 Security & Privacy

### Backend (Already Deployed!)

✅ Your backend is already live on Supabase Edge Functions### Data Protection



---1. **No PII Storage**

   - Automatic redaction of emails, phone numbers, SSNs

## 🛠️ Tech Stack   - No names, addresses, or identifying information stored

   - Only symptoms, age, sex, and AI response are saved

### Frontend

- **React 18** - UI framework2. **Consent-Based Storage**

- **TypeScript** - Type safety   - Users must explicitly opt-in to save queries

- **Vite** - Build tool   - History is anonymized and aggregated

- **Tailwind CSS** - Styling   - No user accounts or authentication tracking

- **shadcn/ui** - Component library

- **TanStack Query** - Data fetching3. **Rate Limiting**

- **React Hook Form** - Form management   - Edge Functions protected against abuse

- **Zod** - Schema validation   - IP-based request limiting



### Backend### Privacy Policy

- **Supabase Edge Functions** - Serverless (Deno)

- **Google Gemini 2.5 Flash** - AI model- **Retention**: Queries stored indefinitely for educational research

- **Supabase PostgreSQL** - Database (optional)- **Deletion**: Contact support to request data deletion

- **Sharing**: Anonymized data may be used for research purposes

---- **Encryption**: All data encrypted at rest and in transit



## 📝 Environment Variables## 🧪 Testing



| Variable | Required | Description |### Running Tests

|----------|----------|-------------|

| `VITE_SUPABASE_URL` | Yes | Supabase project URL |```bash

| `VITE_SUPABASE_PUBLISHABLE_KEY` | Yes | Supabase anon key |# Run all tests

| `GEMINI_API_KEY` | Local only | Google Gemini API key (for local testing) |npm test



**⚠️ Never commit the `.env` file!**# Run with coverage

npm run test:coverage

---```



## 🐛 Troubleshooting### Test Coverage



### Edge Function Returns ErrorThe project includes:

1. Check Supabase logs: Dashboard → Logs → Edge Functions- React component tests (React Testing Library)

2. Verify `GEMINI_API_KEY` secret is set in Supabase- Form validation tests

3. Redeploy function if needed- Emergency symptom detection tests

- Privacy consent behavior tests

### Frontend Can't Connect

1. Check `.env` has correct Supabase credentials## 🎨 Design System

2. Verify using `client.ts` (not `client-local.ts`)

3. Restart dev server: `npm run dev`### Color Palette



### API Rate Limits- **Primary (Medical Blue)**: `hsl(217 91% 60%)` - Professional trust-building color

- Gemini API: 1,500 requests/day (free tier)- **Secondary (Trust Green)**: `hsl(160 84% 39%)` - Positive health associations

- Supabase: 500K Edge Function calls/month (free tier)- **Warning (Safety Orange)**: `hsl(38 92% 50%)` - Emergency alerts

- **Gradients**: Subtle blue-to-teal medical gradients

---

### Typography

## 📊 Supabase Free Tier

- Clean sans-serif font stack

| Resource | Limit | Status |- Excellent readability for medical content

|----------|-------|--------|- Proper heading hierarchy (H1 for main title)

| Edge Function Calls | 500K/month | ✅ Sufficient |

| Edge Function Time | 150 hours/month | ✅ Plenty |### Accessibility

| Database Storage | 500 MB | Not used yet |

| Bandwidth | 5 GB | ✅ More than enough |- Semantic HTML (`<main>`, `<header>`, `<footer>`, `<section>`)

- ARIA labels for interactive elements

---- Keyboard navigation support

- Focus states on all interactive elements

## 🤝 Contributing- Color contrast ratios meet WCAG AA standards



Contributions welcome! Please:## 🔄 Changing LLM Providers

1. Fork the repository

2. Create a feature branchThe Edge Function is configured to use OpenAI GPT-4o-mini by default. To switch providers:

3. Make your changes

4. Submit a pull request1. Update the server code in `gemini-server-simple.mjs`

2. Change the MODEL constant and API endpoint

**Important**: Never commit API keys or `.env` files!3. Update the API key in the server file

4. Adjust the prompt format if needed

---

Example providers:

## 📝 License- Google Gemini (current)

- OpenAI GPT

MIT License - See LICENSE file for details- Anthropic Claude



---## 📝 Demo Script



## 👨‍💻 Author### 2-3 Minute Demo Flow



**Gaurang Dosar**1. **Introduction** (30 seconds)

   - Show landing page with prominent disclaimer

---   - Highlight educational purpose and safety messaging



## 🙏 Acknowledgments2. **Mild Symptom Check** (60 seconds)

   - Enter: "runny nose, sneezing, itchy eyes for 2 days, started after park visit"

- Google Gemini AI for medical information processing   - Age: 28, Sex: Female

- Supabase for serverless backend infrastructure     - Enable history consent

- shadcn for beautiful UI components   - Submit and show results with ranked conditions

- Open source community   - Point out confidence scores and safe recommendations



---3. **Emergency Symptom Check** (45 seconds)

   - Clear form and enter: "severe chest pain radiating to left arm, difficulty breathing, sweating"

## 📞 Support   - Show emergency warning banner (pulsing animation)

   - Highlight urgent care instructions

- **Issues**: [GitHub Issues](https://github.com/GaurangDosar/triage-tool/issues)

- **Supabase Logs**: [View Logs](https://supabase.com/dashboard)4. **History & Privacy** (30 seconds)

- **Documentation**: See `DEPLOYMENT_SUCCESS.md` for detailed setup   - Navigate to History tab

   - Show previous query with anonymized data

---   - Open full disclaimer modal

   - Point out privacy controls

## 🔗 Links

## ✅ Evaluation Checklist

- **Live Demo**: Deploy to see it in action!

- **Supabase**: [Dashboard](https://supabase.com/dashboard)### Functionality

- **Google Gemini**: [API Console](https://aistudio.google.com)- [ ] Symptom form accepts 10-1000 character input

- [ ] Optional demographics (age 0-150, sex: male/female/other)

---- [ ] Form validation with clear error messages

- [ ] Privacy consent checkbox functional

**⚡ Built with ❤️ by Gaurang Dosar**- [ ] AI analysis returns structured JSON

- [ ] Up to 4 conditions ranked by likelihood

**Remember**: This is an informational tool, not a replacement for professional medical advice!- [ ] Confidence scores displayed (0-1 scale)

- [ ] Recommended next steps provided
- [ ] Emergency symptoms trigger warnings
- [ ] History saves only with consent
- [ ] Raw JSON viewer for grading

### Safety & Disclaimers
- [ ] Prominent disclaimer banner on all pages
- [ ] Full disclaimer modal accessible
- [ ] Emergency symptoms listed explicitly
- [ ] "Educational only" messaging clear
- [ ] No prescription suggestions or dosing
- [ ] No definitive diagnoses made

### Privacy & Security
- [ ] PII automatically redacted
- [ ] No storage without consent
- [ ] Anonymized history display
- [ ] No user authentication required
- [ ] Rate limiting implemented

### UI/UX
- [ ] Mobile responsive design
- [ ] Loading states with skeleton UI
- [ ] Accessible (keyboard navigation, ARIA labels)
- [ ] Professional medical aesthetic
- [ ] Clear visual hierarchy
- [ ] Error handling with user-friendly messages

### Code Quality
- [ ] TypeScript types for all data structures
- [ ] Reusable components
- [ ] Semantic HTML
- [ ] SEO optimized (title, meta tags)
- [ ] Clean code with comments
- [ ] Edge Function properly configured

## 📦 Deployment

### Frontend Deployment

The app can be deployed to any static hosting service:

**Vercel:**
```bash
npm run build
vercel --prod
```

**Netlify:**
```bash
npm run build
netlify deploy --prod
```

### Backend Deployment

Deploy the Node.js server (`gemini-server-simple.mjs`) to:
- Heroku
- Railway
- Render
- Any Node.js hosting service

Or use Supabase Edge Functions for serverless deployment (see `supabase/functions/` directory).

## 🤝 Contributing

This is an educational project. Contributions should focus on:
- Improving safety disclaimers
- Enhancing privacy protections
- Better emergency symptom detection
- Accessibility improvements
- Documentation updates

**Never** add features that could be interpreted as medical diagnosis or treatment advice.

## 📄 License

This project is for educational purposes only. Not licensed for commercial medical use.

## 🆘 Support

For issues or questions:
- Check the evaluation checklist
- Review the demo script
- Consult the API documentation
- Contact the development team

## ⚖️ Legal

This application:
- Is NOT a medical device
- Does NOT provide medical advice
- Should NOT be used for diagnosis
- Requires healthcare professional consultation for all medical decisions

**Always seek professional medical care for health concerns.**

---

Built with ❤️ for educational purposes only
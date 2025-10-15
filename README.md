# Healthcare Symptom Checker 🏥# Healthcare Symptom Checker 🏥# Healthcare Symptom Checker



**Developer:** Gaurang Dosar  

**AI Model:** Google Gemini 2.5 Flash  

**Status:** ✅ Live on Supabase**Author**: Gaurang Dosar  **Developer:** Gaurang Dosar



![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Supabase](https://img.shields.io/badge/Supabase-Integrated-green)**AI Model**: Google Gemini 2.5 Flash  



An AI-powered healthcare symptom checker that helps users understand potential conditions based on their symptoms. Built with React, TypeScript, and Google Gemini API.**Status**: ✅ Live on SupabaseAn educational symptom checker application built with React, TypeScript, and Google Gemini API.



---



## ⚠️ Important Medical DisclaimerA modern, AI-powered healthcare symptom checker that helps users understand potential conditions based on their symptoms. Built with React, TypeScript, and Google's Gemini API.## ⚠️ Important Medical Disclaimer



**This tool is for educational purposes only and does not provide medical advice.**



This application:![Status](https://img.shields.io/badge/Status-Live-success)**This tool is for educational purposes only and does not provide medical advice.**

- ✅ Provides educational information about possible health conditions

- ❌ Does NOT replace consultation with licensed healthcare professionals![Supabase](https://img.shields.io/badge/Backend-Supabase-green)

- ❌ Should NOT be used for medical diagnosis or treatment decisions

- ❌ Is NOT suitable for emergency medical situations![React](https://img.shields.io/badge/Frontend-React%2018-blue)This application:



**If you are experiencing severe or life-threatening symptoms (chest pain, severe difficulty breathing, sudden weakness, uncontrolled bleeding), seek emergency medical care immediately by calling your local emergency services.**![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)- Provides educational information about possible health conditions



---- Does NOT replace consultation with licensed healthcare professionals



## 🎯 Features## ⚠️ Important Disclaimer- Should NOT be used for medical diagnosis or treatment decisions



### Core Functionality- Is NOT suitable for emergency medical situations

- 🤖 **AI-Powered Analysis** - Uses Google Gemini 2.5 Flash for medical information processing

- 📊 **Ranked Conditions** - Displays possible conditions with confidence scores and reasoningThis tool is for **informational purposes only** and is **not medical advice**. Always consult with qualified healthcare professionals for medical concerns. If you're experiencing a medical emergency, call your local emergency services immediately.

- 📋 **Next Steps** - Provides prioritized recommendations for seeking care

- ⚠️ **Emergency Detection** - Highlights urgent symptoms with prominent warnings**If you are experiencing severe or life-threatening symptoms (chest pain, severe difficulty breathing, sudden weakness, uncontrolled bleeding), seek emergency medical care immediately.**

- 💾 **Query History** - Stores anonymized queries (with user consent)

- 🔒 **Privacy-Focused** - PII redaction for stored data---



### User Experience## 🎯 Project Summary

- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

- 🌓 **Dark Mode** - Automatic theme detection and switching## 🚀 Quick Start

- 🎨 **Modern UI** - Built with Tailwind CSS and shadcn/ui components

- ✨ **Smooth Animations** - Polished interactions and transitionsA web application that accepts free-text symptom descriptions and optional demographics (age, sex), calls an LLM to generate a ranked list of probable conditions with conservative reasoning and triage advice, stores anonymized query history (with user consent), and displays results with prominent safety disclaimers.

- 📖 **Expandable History** - Click-to-expand query cards with pagination (5 per page)

### Prerequisites

---

- Node.js 18+## 🏗️ Tech Stack

## 🚀 Quick Start

- Supabase account (free tier works)

### Prerequisites

- Node.js 18 or higher- Google Gemini API key ([Get one here](https://aistudio.google.com/apikey))- **Frontend**: React 18 + TypeScript + Vite

- Supabase account ([Sign up free](https://supabase.com))

- Google Gemini API key ([Get one here](https://aistudio.google.com/apikey))- **Styling**: Tailwind CSS + shadcn/ui components



### 1. Clone Repository### 1. Clone Repository- **Backend**: Node.js Local Server (with optional Supabase Edge Functions)



```bash- **Database**: PostgreSQL via Supabase (optional)

git clone https://github.com/GaurangDosar/healthcare-symptom-checker.git

cd healthcare-symptom-checker```bash- **AI Model**: Google Gemini 2.5 Flash

```

git clone https://github.com/GaurangDosar/triage-tool.git- **State Management**: TanStack Query

### 2. Install Dependencies

cd triage-tool- **Form Handling**: React Hook Form + Zod validation

```bash

npm install```

```

## 🚀 Quick Start

### 3. Configure Environment

### 2. Install Dependencies

Create a `.env` file in the root directory:

## 📁 Project Structure

```env

VITE_SUPABASE_URL=your_supabase_project_url```bash

VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key

GEMINI_API_KEY=your_gemini_api_keynpm install```

```

```triage-tool/

**Get your Supabase credentials:**

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)├── src/

2. Select your project → Settings → API

3. Copy Project URL and anon/public key### 3. Configure Environment│   ├── components/         # React components



### 4. Set Up Database (Optional - for history feature)│   ├── pages/             # Page components



See [DATABASE_SETUP.md](./DATABASE_SETUP.md) for complete instructions.```bash│   ├── integrations/      # Supabase clients



**Quick steps:**cp .env.example .env│   └── types/             # TypeScript types

1. Run the SQL migration in Supabase SQL Editor

2. Deploy the `check-symptoms` Edge Function```├── supabase/

3. Deploy the `get-history` Edge Function

│   └── functions/         # Edge functions (for production)

### 5. Run Development Server

Edit `.env` with your credentials:├── gemini-server-simple.mjs   # Local API server

```bash

npm run dev├── test-gemini.js            # Test Gemini API

```

```env└── test-local-server.js      # Test local server

Visit: http://localhost:8080

VITE_SUPABASE_URL=your_supabase_project_url```

---

VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key

## 🏗️ Tech Stack

GEMINI_API_KEY=your_gemini_api_key---

### Frontend

- **Framework:** React 18.3.1```

- **Language:** TypeScript 5.8.3

- **Build Tool:** Vite 5.4.19## 🔧 Production Setup (Supabase)

- **Styling:** Tailwind CSS + shadcn/ui

- **State Management:** TanStack Query 5.83.0**Get your Supabase credentials:**

- **Form Handling:** React Hook Form + Zod

- **Routing:** React Router 6.30.1- Go to [Supabase Dashboard](https://supabase.com/dashboard)### Prerequisites



### Backend- Select your project → Settings → API

- **Platform:** Supabase Edge Functions (Deno runtime)

- **Database:** PostgreSQL (Supabase)- Copy Project URL and anon public key- Node.js 18+ and npm

- **AI:** Google Gemini 2.5 Flash

- **Authentication:** Not required (public access)- OpenAI API key for GPT-4o-mini



### UI Components### 4. Deploy Edge Function to Supabase

- **Component Library:** shadcn/ui (Radix UI primitives)

- **Icons:** Lucide React### Installation

- **Animations:** CSS transitions + Tailwind CSS

- **Date Handling:** date-fns1. Go to your Supabase Dashboard → Edge Functions



---2. Create new function named: `check-symptoms`1. Clone the repository:



## 📁 Project Structure3. Copy code from: `supabase/functions/check-symptoms/index.ts````bash



```4. Deploy functiongit clone <YOUR_GIT_URL>

healthcare-symptom-checker/

├── src/5. Add secret: `GEMINI_API_KEY` with your Gemini API keycd <YOUR_PROJECT_NAME>

│   ├── components/          # React components

│   │   ├── ui/             # shadcn/ui components```

│   │   ├── SymptomForm.tsx # Main symptom input form

│   │   ├── ResultsView.tsx # AI analysis results display### 5. Run Locally

│   │   └── HistoryView.tsx # Query history with pagination

│   ├── pages/              # Page components2. Install dependencies:

│   │   ├── Index.tsx       # Main application page

│   │   └── NotFound.tsx    # 404 error page```bash```bash

│   ├── integrations/

│   │   └── supabase/       # Supabase client configurationnpm run devnpm install

│   ├── types/              # TypeScript type definitions

│   ├── lib/                # Utility functions``````

│   └── hooks/              # Custom React hooks

├── supabase/

│   ├── functions/          # Edge Functions

│   │   ├── check-symptoms/ # AI symptom analysisVisit: http://localhost:8080/3. Set up environment variables:

│   │   └── get-history/    # Query history retrieval

│   └── migrations/         # Database schemaAdd your Gemini API key in `gemini-server-simple.mjs`:

├── public/                 # Static assets

├── .env                    # Environment variables (not in git)---```javascript

├── .env.example           # Environment template

└── package.json           # Dependenciesconst GEMINI_API_KEY = 'your-api-key-here';

```

## 🏗️ Architecture```

---



## 🔒 Security & Privacy

```4. Start the backend server:

### Data Protection

- ✅ No hardcoded API keys (environment variables only)┌─────────────────┐```bash

- ✅ PII redaction (emails, phones, SSNs) before database storage

- ✅ Consent-based query storage (opt-in only)│   User Browser  │node gemini-server-simple.mjs

- ✅ Row Level Security (RLS) policies on database

- ✅ HTTPS enforced for all API calls└────────┬────────┘```

- ✅ CORS properly configured

         │

### Privacy Features

- No user authentication required (anonymous usage)         ▼5. Start the development server (in a new terminal):

- No tracking or analytics by default

- Query history only stored with explicit consent┌─────────────────┐```bash

- Data can be viewed by all users (demo configuration - see note below)

│  React Frontend │npm run dev

**⚠️ Production Note:** For production deployments, update database policies to restrict query access to individual users only.

│  (Vite + TS)    │```

---

└────────┬────────┘

## 📊 How It Works

         │The app will be available at `http://localhost:8080`

### 1. User Input

- User enters symptoms (10-1000 characters)         ▼

- Optional: Age (0-150) and biological sex

- Optional: Consent to store query anonymously┌─────────────────────────────┐## 📋 Features



### 2. AI Processing│   Supabase Edge Function    │

- Symptom text sent to Supabase Edge Function

- Edge Function calls Google Gemini 2.5 Flash API│    (check-symptoms)          │### ✅ Implemented Features

- AI generates structured medical information:

  - Up to 4 possible conditions (ranked by probability)└────────┬────────────────────┘

  - Confidence scores (0-1) for each condition

  - Medical reasoning for each condition         │1. **Symptom Input Form**

  - Recommended next steps (triage guidance)

  - Emergency warnings if applicable         ▼   - Free-text symptom description (10-1000 characters)



### 3. Results Display┌─────────────────────────────┐   - Optional age and sex fields

- Conditions ranked by confidence

- Each condition shows: name, probability rank, score, reasoning│   Google Gemini 2.5 Flash   │   - Real-time form validation

- Emergency warnings highlighted with pulsing animation

- Next steps displayed as prioritized list└─────────────────────────────┘   - Privacy consent checkbox for history storage

- Medical disclaimer always visible

```   - Mobile-responsive design

### 4. Query Storage (Optional)

- If user consents, query stored in Supabase PostgreSQL

- PII automatically redacted before storage

- Accessible in History tab with pagination (5 per page)**Key Components:**2. **AI-Powered Analysis**

- Expandable cards show full analysis details

- **Frontend**: React 18 + TypeScript + Tailwind CSS   - GPT-4o-mini integration via Edge Functions

---

- **Backend**: Supabase Edge Functions (Deno runtime)   - Structured prompt with few-shot examples

## 🚀 Deployment

- **AI**: Google Gemini 2.5 Flash   - Returns up to 4 ranked conditions with confidence scores

### Frontend Deployment (Recommended: Vercel)

- **Hosting**: Supabase (backend) + Vercel/Netlify (frontend)   - Provides safe, educational next steps

1. **Push to GitHub** (already done)

   - Emergency symptom detection with prominent warnings

2. **Deploy to Vercel:**

   - Go to [vercel.com](https://vercel.com)---

   - Import your GitHub repository

   - Add environment variables:3. **Results Display**

     - `VITE_SUPABASE_URL`

     - `VITE_SUPABASE_PUBLISHABLE_KEY`## 📊 Features   - Ranked list of possible conditions

   - Deploy!

   - Confidence scores and reasoning for each condition

3. **Alternative Platforms:**

   - [Netlify](https://netlify.com) - Simple setup✅ AI-powered symptom analysis     - Recommended next steps focusing on triage

   - [Cloudflare Pages](https://pages.cloudflare.com) - Fast CDN

✅ Confidence scoring for conditions     - Emergency warnings (pulsing animation for urgent cases)

### Backend (Already Deployed!)

✅ Backend is live on Supabase Edge Functions✅ Prioritized next steps     - Collapsible raw JSON viewer for debugging



---✅ Dynamic emergency detection  



## 🧪 API Reference✅ Responsive design + Dark mode  4. **Query History**



### Edge Function: check-symptoms✅ Privacy-focused (no data storage by default)     - Opt-in anonymized storage



**Endpoint:** `https://your-project.supabase.co/functions/v1/check-symptoms`✅ Professional disclaimers     - View past symptom checks



**Method:** POST   - Timestamp and demographics display



**Request Body:**---   - No PII storage (automatic redaction)

```json

{

  "symptoms": "fever and headache for 2 days",

  "age": 30,## 🔒 Security5. **Safety & Privacy**

  "sex": "male",

  "consentToStore": true   - Prominent disclaimer banner on every page

}

```### API Key Management   - Full disclaimer modal with emergency symptoms list



**Response:**- ✅ No API keys in source code   - PII redaction (email, phone, SSN patterns)

```json

{- ✅ All secrets in environment variables   - Consent-based history storage only

  "conditions": [

    {- ✅ `.env` excluded from Git   - Rate limiting on Edge Functions

      "name": "Viral upper respiratory infection",

      "probability_rank": 1,- ✅ Supabase Secrets for production

      "confidence_score": 0.75,

      "reasoning": "Fever and headache are common symptoms..."## 🔧 API Documentation

    }

  ],### Data Privacy

  "recommended_next_steps": [

    "Rest and hydration",- No PHI stored without explicit consent### POST /check-symptoms

    "Monitor symptoms for 48 hours"

  ],- Basic PII redaction for stored queries

  "needed_info": null,

  "disclaimer": "DISCLAIMER: This tool provides educational information only...",- CORS properly configuredAnalyzes symptoms and returns possible conditions with recommendations.

  "llm_metadata": {

    "provider": "google",- HTTPS enforced

    "model": "gemini-2.5-flash",

    "prompt_version": "1.0"**Request Body:**

  }

}---```json

```

{

### Edge Function: get-history

## 🧪 Testing  "symptoms": "headache for 3 days, mild fever, feeling tired",

**Endpoint:** `https://your-project.supabase.co/functions/v1/get-history`

  "age": 28,

**Method:** POST

### Test Edge Function Locally (Optional)  "sex": "female",

**Response:**

```json  "consentToStore": true

{

  "queries": [If you want to test with a local server:}

    {

      "id": "uuid",```

      "symptoms": "fever and headache",

      "age": 30,```bash

      "sex": "male",

      "response": { /* AI response */ },node gemini-server-secure.mjs**Response:**

      "created_at": "2024-12-15T10:30:00Z"

    }``````json

  ]

}{

```

This runs a local server on port 3001 for testing (requires `.env` file).  "conditions": [

---

    {

## 📚 Documentation

---      "name": "Viral upper respiratory infection",

- **[DATABASE_SETUP.md](./DATABASE_SETUP.md)** - Complete database setup guide

- **[DEPLOYMENT_SUCCESS.md](./DEPLOYMENT_SUCCESS.md)** - Deployment guide and verification      "probability_rank": 1,

- **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)** - Common issues and solutions

- **[QUICK_COMMANDS.md](./QUICK_COMMANDS.md)** - Handy copy-paste commands## 📁 Project Structure      "confidence_score": 0.75,



---      "reasoning": "Combination of headache, fever, and fatigue suggests viral infection..."



## 🔧 Development```    }



### Build Commands├── src/  ],



```bash│   ├── components/          # React components  "recommended_next_steps": [

# Development server

npm run dev│   │   ├── ui/             # shadcn/ui components    "Rest and stay hydrated",



# Production build│   │   ├── SymptomForm.tsx    "Monitor temperature",

npm run build

│   │   ├── ResultsView.tsx    "Consult primary care if symptoms worsen"

# Preview production build

npm run preview│   │   └── HistoryView.tsx  ],



# Lint code│   ├── integrations/  "needed_info": null,

npm run lint

```│   │   └── supabase/       # Supabase client  "disclaimer": "DISCLAIMER: This tool provides educational information only...",



### Testing│   ├── pages/              # Page components  "llm_metadata": {



The application includes validation for:│   ├── types/              # TypeScript types    "provider": "openai",

- ✅ Input length (10-1000 characters)

- ✅ Age range (0-150)│   └── lib/                # Utilities    "model": "gpt-4o-mini",

- ✅ Sex options (male, female, other)

- ✅ API response structure├── supabase/    "prompt_version": "1.0"

- ✅ Emergency keyword detection

│   └── functions/  }

---

│       └── check-symptoms/ # Edge function code}

## 📈 Usage Limits (Free Tier)

├── public/                 # Static assets```

### Gemini API

- **Requests:** 1,500 per day├── .env.example           # Environment template

- **Rate:** 15 requests per minute

- **Tokens:** Up to 65K output tokens per request├── DEPLOYMENT_SUCCESS.md  # Deployment guide### GET /get-history



### Supabase└── README.md              # This file

- **Edge Function Calls:** 500,000 per month

- **Edge Function Time:** 150 hours per month```Retrieves anonymized query history.

- **Database Storage:** 500 MB

- **Bandwidth:** 5 GB per month



These limits are more than sufficient for personal projects and small-scale deployments.---**Query Parameters:**



---- `limit` (optional): Number of records to return (default: 20)



## 🤝 Contributing## 🚀 Production Deployment



Contributions are welcome! Please:**Response:**



1. Fork the repository### Frontend Deployment (Recommended: Vercel)```json

2. Create a feature branch (`git checkout -b feature/amazing-feature`)

3. Commit your changes (`git commit -m 'Add amazing feature'`){

4. Push to the branch (`git push origin feature/amazing-feature`)

5. Open a Pull Request1. **Push to GitHub** (already done)  "queries": [



**Important:** Never commit API keys or `.env` files!    {



---2. **Deploy to Vercel**:      "id": "uuid",



## 📝 License   - Go to [vercel.com](https://vercel.com)      "symptoms": "headache for 3 days...",



MIT License - See LICENSE file for details   - Import your GitHub repository      "age": 28,



---   - Add environment variables:      "sex": "female",



## 👨‍💻 Author     - `VITE_SUPABASE_URL`      "response": { /* full response object */ },



**Gaurang Dosar**     - `VITE_SUPABASE_PUBLISHABLE_KEY`      "created_at": "2025-10-14T12:00:00Z"



- GitHub: [@GaurangDosar](https://github.com/GaurangDosar)   - Deploy!    }

- Project: [healthcare-symptom-checker](https://github.com/GaurangDosar/healthcare-symptom-checker)

  ]

---

3. **Alternative Platforms**:}

## 🙏 Acknowledgments

   - [Netlify](https://netlify.com) - Simple setup```

- **Google Gemini AI** - For advanced medical information processing

- **Supabase** - For serverless backend infrastructure   - [Cloudflare Pages](https://pages.cloudflare.com) - Fast CDN

- **shadcn/ui** - For beautiful, accessible UI components

- **Open Source Community** - For amazing tools and libraries## 🔒 Security & Privacy



---### Backend (Already Deployed!)



## 📞 Support✅ Your backend is already live on Supabase Edge Functions### Data Protection



- **Issues:** [GitHub Issues](https://github.com/GaurangDosar/healthcare-symptom-checker/issues)

- **Documentation:** See docs folder for detailed guides

- **Supabase Logs:** [View Logs](https://supabase.com/dashboard)---1. **No PII Storage**



---   - Automatic redaction of emails, phone numbers, SSNs



## 🔗 Links## 🛠️ Tech Stack   - No names, addresses, or identifying information stored



- **Live Application:** Deploy to see it in action!   - Only symptoms, age, sex, and AI response are saved

- **GitHub Repository:** [healthcare-symptom-checker](https://github.com/GaurangDosar/healthcare-symptom-checker)

- **Supabase Dashboard:** [Dashboard](https://supabase.com/dashboard)### Frontend

- **Google Gemini API:** [API Console](https://aistudio.google.com)

- **React 18** - UI framework2. **Consent-Based Storage**

---

- **TypeScript** - Type safety   - Users must explicitly opt-in to save queries

**⚡ Built with ❤️ by Gaurang Dosar**

- **Vite** - Build tool   - History is anonymized and aggregated

**Remember:** This is an educational tool, not a replacement for professional medical advice!

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
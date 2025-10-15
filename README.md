# Healthcare Symptom Checker 🏥# Healthcare Symptom Checker 🏥# Healthcare Symptom Checker 🏥# Healthcare Symptom Checker



**Developer:** Gaurang Dosar  

**AI Model:** Google Gemini 2.5 Flash  

**Status:** ✅ Live on Supabase**Developer:** Gaurang Dosar  



![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Supabase](https://img.shields.io/badge/Supabase-Integrated-green)**AI Model:** Google Gemini 2.5 Flash  



An AI-powered healthcare symptom checker that helps users understand potential conditions based on their symptoms. Built with React, TypeScript, and Google Gemini API.**Status:** ✅ Live on Supabase**Author**: Gaurang Dosar  **Developer:** Gaurang Dosar



---



## ⚠️ Important Medical Disclaimer![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Supabase](https://img.shields.io/badge/Supabase-Integrated-green)**AI Model**: Google Gemini 2.5 Flash  



**This tool is for educational purposes only and does not provide medical advice.**



This application:An AI-powered healthcare symptom checker that helps users understand potential conditions based on their symptoms. Built with React, TypeScript, and Google Gemini API.**Status**: ✅ Live on SupabaseAn educational symptom checker application built with React, TypeScript, and Google Gemini API.

- ✅ Provides educational information about possible health conditions

- ❌ Does NOT replace consultation with licensed healthcare professionals

- ❌ Should NOT be used for medical diagnosis or treatment decisions

- ❌ Is NOT suitable for emergency medical situations---



**If you are experiencing severe or life-threatening symptoms (chest pain, severe difficulty breathing, sudden weakness, uncontrolled bleeding), seek emergency medical care immediately by calling your local emergency services.**



---## ⚠️ Important Medical DisclaimerA modern, AI-powered healthcare symptom checker that helps users understand potential conditions based on their symptoms. Built with React, TypeScript, and Google's Gemini API.## ⚠️ Important Medical Disclaimer



## 🎯 Features



### Core Functionality**This tool is for educational purposes only and does not provide medical advice.**

- 🤖 **AI-Powered Analysis** - Uses Google Gemini 2.5 Flash for medical information processing

- 📊 **Ranked Conditions** - Displays possible conditions with confidence scores and reasoning

- 📋 **Next Steps** - Provides prioritized recommendations for seeking care

- ⚠️ **Emergency Detection** - Highlights urgent symptoms with prominent warningsThis application:![Status](https://img.shields.io/badge/Status-Live-success)**This tool is for educational purposes only and does not provide medical advice.**

- 💾 **Query History** - Stores anonymized queries (with user consent)

- 🔒 **Privacy-Focused** - PII redaction for stored data- ✅ Provides educational information about possible health conditions



### User Experience- ❌ Does NOT replace consultation with licensed healthcare professionals![Supabase](https://img.shields.io/badge/Backend-Supabase-green)

- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

- 🌓 **Dark Mode** - Automatic theme detection and switching- ❌ Should NOT be used for medical diagnosis or treatment decisions

- 🎨 **Modern UI** - Built with Tailwind CSS and shadcn/ui components

- ✨ **Smooth Animations** - Polished interactions and transitions- ❌ Is NOT suitable for emergency medical situations![React](https://img.shields.io/badge/Frontend-React%2018-blue)This application:

- 📖 **Expandable History** - Click-to-expand query cards with pagination (5 per page)



---

**If you are experiencing severe or life-threatening symptoms (chest pain, severe difficulty breathing, sudden weakness, uncontrolled bleeding), seek emergency medical care immediately by calling your local emergency services.**![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)- Provides educational information about possible health conditions

## 🚀 Quick Start



### Prerequisites

- Node.js 18 or higher---- Does NOT replace consultation with licensed healthcare professionals

- Supabase account ([Sign up free](https://supabase.com))

- Google Gemini API key ([Get one here](https://aistudio.google.com/apikey))



### 1. Clone Repository## 🎯 Features## ⚠️ Important Disclaimer- Should NOT be used for medical diagnosis or treatment decisions



```bash

git clone https://github.com/GaurangDosar/triage-tool.git

cd triage-tool### Core Functionality- Is NOT suitable for emergency medical situations

```

- 🤖 **AI-Powered Analysis** - Uses Google Gemini 2.5 Flash for medical information processing

### 2. Install Dependencies

- 📊 **Ranked Conditions** - Displays possible conditions with confidence scores and reasoningThis tool is for **informational purposes only** and is **not medical advice**. Always consult with qualified healthcare professionals for medical concerns. If you're experiencing a medical emergency, call your local emergency services immediately.

```bash

npm install- 📋 **Next Steps** - Provides prioritized recommendations for seeking care

```

- ⚠️ **Emergency Detection** - Highlights urgent symptoms with prominent warnings**If you are experiencing severe or life-threatening symptoms (chest pain, severe difficulty breathing, sudden weakness, uncontrolled bleeding), seek emergency medical care immediately.**

### 3. Configure Environment

- 💾 **Query History** - Stores anonymized queries (with user consent)

Create a `.env` file in the root directory:

- 🔒 **Privacy-Focused** - PII redaction for stored data---

```env

VITE_SUPABASE_URL=your_supabase_project_url

VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key

GEMINI_API_KEY=your_gemini_api_key### User Experience## 🎯 Project Summary

```

- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

**Get your Supabase credentials:**

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)- 🌓 **Dark Mode** - Automatic theme detection and switching## 🚀 Quick Start

2. Select your project → Settings → API

3. Copy Project URL and anon/public key- 🎨 **Modern UI** - Built with Tailwind CSS and shadcn/ui components



### 4. Set Up Database (Optional - for history feature)- ✨ **Smooth Animations** - Polished interactions and transitionsA web application that accepts free-text symptom descriptions and optional demographics (age, sex), calls an LLM to generate a ranked list of probable conditions with conservative reasoning and triage advice, stores anonymized query history (with user consent), and displays results with prominent safety disclaimers.



See [DATABASE_SETUP.md](./DATABASE_SETUP.md) for complete instructions.- 📖 **Expandable History** - Click-to-expand query cards with pagination (5 per page)



**Quick steps:**### Prerequisites

1. Run the SQL migration in Supabase SQL Editor

2. Deploy the `check-symptoms` Edge Function---

3. Deploy the `get-history` Edge Function

- Node.js 18+## 🏗️ Tech Stack

### 5. Run Development Server

## 🚀 Quick Start

```bash

npm run dev- Supabase account (free tier works)

```

### Prerequisites

Visit: http://localhost:8080

- Node.js 18 or higher- Google Gemini API key ([Get one here](https://aistudio.google.com/apikey))- **Frontend**: React 18 + TypeScript + Vite

---

- Supabase account ([Sign up free](https://supabase.com))

## 🏗️ Tech Stack

- Google Gemini API key ([Get one here](https://aistudio.google.com/apikey))- **Styling**: Tailwind CSS + shadcn/ui components

### Frontend

- **Framework:** React 18.3.1

- **Language:** TypeScript 5.8.3

- **Build Tool:** Vite 5.4.19### 1. Clone Repository### 1. Clone Repository- **Backend**: Node.js Local Server (with optional Supabase Edge Functions)

- **Styling:** Tailwind CSS + shadcn/ui

- **State Management:** TanStack Query 5.83.0

- **Form Handling:** React Hook Form + Zod

- **Routing:** React Router 6.30.1```bash- **Database**: PostgreSQL via Supabase (optional)



### Backendgit clone https://github.com/GaurangDosar/healthcare-symptom-checker.git

- **Platform:** Supabase Edge Functions (Deno runtime)

- **Database:** PostgreSQL (Supabase)cd healthcare-symptom-checker```bash- **AI Model**: Google Gemini 2.5 Flash

- **AI:** Google Gemini 2.5 Flash

- **Authentication:** Not required (public access)```



### UI Componentsgit clone https://github.com/GaurangDosar/triage-tool.git- **State Management**: TanStack Query

- **Component Library:** shadcn/ui (Radix UI primitives)

- **Icons:** Lucide React### 2. Install Dependencies

- **Animations:** CSS transitions + Tailwind CSS

- **Date Handling:** date-fnscd triage-tool- **Form Handling**: React Hook Form + Zod validation



---```bash



## 📁 Project Structure```



``````

healthcare-symptom-checker/

├── src/## 🚀 Quick Start

│   ├── components/          # React components

│   │   ├── ui/             # shadcn/ui components### 3. Configure Environment

│   │   ├── SymptomForm.tsx # Main symptom input form

│   │   ├── ResultsView.tsx # AI analysis results display### 2. Install Dependencies

│   │   └── HistoryView.tsx # Query history with pagination

│   ├── pages/              # Page componentsCreate a `.env` file in the root directory:

│   │   ├── Index.tsx       # Main application page

│   │   └── NotFound.tsx    # 404 error page## 📁 Project Structure

│   ├── integrations/

│   │   └── supabase/       # Supabase client configuration```env

│   ├── types/              # TypeScript type definitions

│   ├── lib/                # Utility functionsVITE_SUPABASE_URL=your_supabase_project_url```bash

│   └── hooks/              # Custom React hooks

├── supabase/VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key

│   ├── functions/          # Edge Functions

│   │   ├── check-symptoms/ # AI symptom analysisGEMINI_API_KEY=your_gemini_api_keynpm install```

│   │   └── get-history/    # Query history retrieval

│   └── migrations/         # Database schema```

├── public/                 # Static assets

├── .env                    # Environment variables (not in git)```triage-tool/

├── .env.example           # Environment template

└── package.json           # Dependencies**Get your Supabase credentials:**

```

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)├── src/

---

2. Select your project → Settings → API

## 🔒 Security & Privacy

3. Copy Project URL and anon/public key### 3. Configure Environment│   ├── components/         # React components

### Data Protection

- ✅ No hardcoded API keys (environment variables only)

- ✅ PII redaction (emails, phones, SSNs) before database storage

- ✅ Consent-based query storage (opt-in only)### 4. Set Up Database (Optional - for history feature)│   ├── pages/             # Page components

- ✅ Row Level Security (RLS) policies on database

- ✅ HTTPS enforced for all API calls

- ✅ CORS properly configured

See [DATABASE_SETUP.md](./DATABASE_SETUP.md) for complete instructions.```bash│   ├── integrations/      # Supabase clients

### Privacy Features

- No user authentication required (anonymous usage)

- No tracking or analytics by default

- Query history only stored with explicit consent**Quick steps:**cp .env.example .env│   └── types/             # TypeScript types

- Data can be viewed by all users (demo configuration - see note below)

1. Run the SQL migration in Supabase SQL Editor

**⚠️ Production Note:** For production deployments, update database policies to restrict query access to individual users only.

2. Deploy the `check-symptoms` Edge Function```├── supabase/

---

3. Deploy the `get-history` Edge Function

## 📊 How It Works

│   └── functions/         # Edge functions (for production)

### 1. User Input

- User enters symptoms (10-1000 characters)### 5. Run Development Server

- Optional: Age (0-150) and biological sex

- Optional: Consent to store query anonymouslyEdit `.env` with your credentials:├── gemini-server-simple.mjs   # Local API server



### 2. AI Processing```bash

- Symptom text sent to Supabase Edge Function

- Edge Function calls Google Gemini 2.5 Flash APInpm run dev├── test-gemini.js            # Test Gemini API

- AI generates structured medical information:

  - Up to 4 possible conditions (ranked by probability)```

  - Confidence scores (0-1) for each condition

  - Medical reasoning for each condition```env└── test-local-server.js      # Test local server

  - Recommended next steps (triage guidance)

  - Emergency warnings if applicableVisit: http://localhost:8080



### 3. Results DisplayVITE_SUPABASE_URL=your_supabase_project_url```

- Conditions ranked by confidence

- Each condition shows: name, probability rank, score, reasoning---

- Emergency warnings highlighted with pulsing animation

- Next steps displayed as prioritized listVITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key

- Medical disclaimer always visible

## 🏗️ Tech Stack

### 4. Query Storage (Optional)

- If user consents, query stored in Supabase PostgreSQLGEMINI_API_KEY=your_gemini_api_key---

- PII automatically redacted before storage

- Accessible in History tab with pagination (5 per page)### Frontend

- Expandable cards show full analysis details

- **Framework:** React 18.3.1```

---

- **Language:** TypeScript 5.8.3

## 🚀 Deployment

- **Build Tool:** Vite 5.4.19## 🔧 Production Setup (Supabase)

### Frontend Deployment (Recommended: Vercel)

- **Styling:** Tailwind CSS + shadcn/ui

1. **Push to GitHub** (already done)

- **State Management:** TanStack Query 5.83.0**Get your Supabase credentials:**

2. **Deploy to Vercel:**

   - Go to [vercel.com](https://vercel.com)- **Form Handling:** React Hook Form + Zod

   - Import your GitHub repository

   - Add environment variables:- **Routing:** React Router 6.30.1- Go to [Supabase Dashboard](https://supabase.com/dashboard)### Prerequisites

     - `VITE_SUPABASE_URL`

     - `VITE_SUPABASE_PUBLISHABLE_KEY`

   - Deploy!

### Backend- Select your project → Settings → API


 

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
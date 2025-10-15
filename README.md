# Healthcare Symptom Checker# Healthcare Symptom Checker# Healthcare Symptom Checker# Healthcare Symptom Checker# Healthcare Symptom Checker 🏥# Healthcare Symptom Checker 🏥# Healthcare Symptom Checker 🏥# Healthcare Symptom Checker 🏥# Healthcare Symptom Checker



A web app that analyzes symptoms using AI and provides possible conditions with next steps. Built with React, TypeScript, Supabase, and Google Gemini AI.



🌐 **Live Demo:** [Your deployed URL here]A web app that analyzes symptoms using AI and provides possible conditions with next steps. Built with React, TypeScript, Supabase, and Google Gemini AI.



**⚠️ Disclaimer:** This is for educational purposes only, not medical advice. For emergencies, call your local emergency services.



---**⚠️ Disclaimer:** This is for educational purposes only, not medical advice. For emergencies, call your local emergency services.A simple web app to check symptoms and get possible conditions. Built with React, Supabase, and Gemini AI.



## Features



- AI-powered symptom analysis with confidence scores---

- Emergency symptom detection

- Query history (optional, consent-based)

- Privacy-focused (PII automatically redacted)

- Mobile-responsive design## Features## How to UseAn AI-powered symptom checker that helps users understand potential health conditions. Uses Google Gemini AI to analyze symptoms and provide educational information.



---



## Quick Start- AI-powered symptom analysis with confidence scores



### Prerequisites- Emergency symptom detection



- Node.js 18+- Query history (optional, consent-based)1. **Enter your symptoms** (and optionally age/sex)

- Supabase account

- Google Gemini API key- Privacy-focused (PII automatically redacted)



### Installation2. **Submit** to get possible conditions and next steps



1. **Clone the repository:**---



```bash3. **History**: If you give consent, your query is saved (for demo, all history is public)**⚠️ Important:** This is an educational tool only. Always consult healthcare professionals for medical advice.**Developer:** Gaurang Dosar  

git clone https://github.com/GaurangDosar/triage-tool.git

cd triage-tool## Quick Start

npm install

```



2. **Set up environment variables:****1. Clone and install:**



Create a `.env` file in the root:## Setup



```env```bash

VITE_SUPABASE_URL=your_supabase_url

VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_keygit clone https://github.com/GaurangDosar/triage-tool.git

GEMINI_API_KEY=your_gemini_key

```cd triage-tool



Get your Supabase credentials from [Supabase Dashboard](https://supabase.com/dashboard) → Settings → APInpm installClone this repo:## Features**AI Model:** Google Gemini 2.5 Flash  



3. **Set up database (Optional - for history feature):**```



   - Run the SQL migration in `supabase/migrations/` via Supabase Dashboard

   - Deploy Edge Functions from `supabase/functions/`:

     - `check-symptoms` - Analyzes symptoms**2. Set up environment:**

     - `get-history` - Retrieves history


## API




### POST /get-history- 🤖 **AI-Powered Analysis** - Uses Google Gemini 2.5 Flash for medical information processing



Returns stored query history (consent-based).### 2. Install Dependencies



## Privacy- 📊 **Ranked Conditions** - Displays possible conditions with confidence scores and reasoning



- No PII storage (emails, phones redacted automatically)```bash

- Opt-in query history

- Public database policy for demo purposesnpm install- 📋 **Next Steps** - Provides prioritized recommendations for seeking care



## License```



[Status](https://img.shields.io/badge/Status-Live-success)**This tool is for educational purposes only and does not provide medical advice.**



# 3. Configure Environment



Gaurang Dosar - [GitHub](https://github.com/GaurangDosar)- 💾 **Query History** - Stores anonymized queries (with user consent)



---Create a `.env` file in the root directory:



Built with React + Supabase + Gemini AI- 🔒 **Privacy-Focused** - PII redaction for stored data- ✅ Provides educational information about possible health conditions


```env

VITE_SUPABASE_URL=your_supabase_project_url

VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key

GEMINI_API_KEY=your_gemini_api_key### User Experience- ❌ Does NOT replace consultation with licensed healthcare professionals![Supabase](https://img.shields.io/badge/Backend-Supabase-green)

```

- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

**Get your Supabase credentials:**

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)- 🌓 **Dark Mode** - Automatic theme detection and switching- ❌ Should NOT be used for medical diagnosis or treatment decisions

2. Select your project → Settings → API

3. Copy Project URL and anon/public key- 🎨 **Modern UI** - Built with Tailwind CSS and shadcn/ui components



### 4. Set Up Database (Optional - for history feature)- ✨ **Smooth Animations** - Polished interactions and transitions- ❌ Is NOT suitable for emergency medical situations![React](https://img.shields.io/badge/Frontend-React%2018-blue)This application:



See [DATABASE_SETUP.md](./DATABASE_SETUP.md) for complete instructions.- 📖 **Expandable History** - Click-to-expand query cards with pagination (5 per page)



**Quick steps:**

1. Run the SQL migration in Supabase SQL Editor

2. Deploy the `check-symptoms` Edge Function---

3. Deploy the `get-history` Edge Function

**If you are experiencing severe or life-threatening symptoms (chest pain, severe difficulty breathing, sudden weakness, uncontrolled bleeding), seek emergency medical care immediately by calling your local emergency services.**![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)- Provides educational information about possible health conditions

### 5. Run Development Server

## 🚀 Quick Start

```bash

npm run dev

```

### Prerequisites

Visit: `http://localhost:8080`

- Node.js 18 or higher---- Does NOT replace consultation with licensed healthcare professionals

---

- Supabase account ([Sign up free](https://supabase.com))

## 🏗️ Tech Stack

- Google Gemini API key ([Get one here](https://aistudio.google.com/apikey))

### Frontend

- **Framework:** React 18.3.1

- **Language:** TypeScript 5.8.3

- **Build Tool:** Vite 5.4.19### 1. Clone Repository## 🎯 Features## ⚠️ Important Disclaimer- Should NOT be used for medical diagnosis or treatment decisions

- **Styling:** Tailwind CSS + shadcn/ui

- **State Management:** TanStack Query 5.83.0

- **Form Handling:** React Hook Form + Zod

- **Routing:** React Router 6.30.1```bash




- **Platform:** Supabase Edge Functions (Deno runtime)

- **Database:** PostgreSQL (Supabase)cd triage-tool### Core Functionality- Is NOT suitable for emergency medical situations

- **AI:** Google Gemini 2.5 Flash

- **Authentication:** Not required (public access)```



### UI Components- 🤖 **AI-Powered Analysis** - Uses Google Gemini 2.5 Flash for medical information processing

- **Component Library:** shadcn/ui (Radix UI primitives)

- **Icons:** Lucide React### 2. Install Dependencies

- **Animations:** CSS transitions + Tailwind CSS

- **Date Handling:** date-fns- 📊 **Ranked Conditions** - Displays possible conditions with confidence scores and reasoningThis tool is for **informational purposes only** and is **not medical advice**. Always consult with qualified healthcare professionals for medical concerns. If you're experiencing a medical emergency, call your local emergency services immediately.



---



## 📁 Project Structure


``````

healthcare-symptom-checker/

├── src/- ⚠️ **Emergency Detection** - Highlights urgent symptoms with prominent warnings**If you are experiencing severe or life-threatening symptoms (chest pain, severe difficulty breathing, sudden weakness, uncontrolled bleeding), seek emergency medical care immediately.**

│   ├── components/          # React components

│   │   ├── ui/             # shadcn/ui components### 3. Configure Environment

│   │   ├── SymptomForm.tsx # Main symptom input form

│   │   ├── ResultsView.tsx # AI analysis results display- 💾 **Query History** - Stores anonymized queries (with user consent)

│   │   └── HistoryView.tsx # Query history with pagination

│   ├── pages/              # Page componentsCreate a `.env` file in the root directory:

│   │   ├── Index.tsx       # Main application page

│   │   └── NotFound.tsx    # 404 error page- 🔒 **Privacy-Focused** - PII redaction for stored data---

│   ├── integrations/

│   │   └── supabase/       # Supabase client configuration```env

│   ├── types/              # TypeScript type definitions

│   ├── lib/                # Utility functionsVITE_SUPABASE_URL=your_supabase_project_url

│   └── hooks/              # Custom React hooks

├── supabase/VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key

│   ├── functions/          # Edge Functions

│   │   ├── check-symptoms/ # AI symptom analysisGEMINI_API_KEY=your_gemini_api_key### User Experience## 🎯 Project Summary

│   │   └── get-history/    # Query history retrieval

│   └── migrations/         # Database schema```

├── public/                 # Static assets

├── .env                    # Environment variables (not in git)- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

├── .env.example           # Environment template

└── package.json           # Dependencies**Get your Supabase credentials:**

```

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)- 🌓 **Dark Mode** - Automatic theme detection and switching## 🚀 Quick Start

---

2. Select your project → Settings → API

## 🔒 Security & Privacy

3. Copy Project URL and anon/public key- 🎨 **Modern UI** - Built with Tailwind CSS and shadcn/ui components

### Data Protection

- ✅ No hardcoded API keys (environment variables only)

- ✅ PII redaction (emails, phones, SSNs) before database storage

- ✅ Consent-based query storage (opt-in only)### 4. Set Up Database (Optional - for history feature)- ✨ **Smooth Animations** - Polished interactions and transitionsA web application that accepts free-text symptom descriptions and optional demographics (age, sex), calls an LLM to generate a ranked list of probable conditions with conservative reasoning and triage advice, stores anonymized query history (with user consent), and displays results with prominent safety disclaimers.

- ✅ Row Level Security (RLS) policies on database

- ✅ HTTPS enforced for all API calls

- ✅ CORS properly configured

See [DATABASE_SETUP.md](./DATABASE_SETUP.md) for complete instructions.- 📖 **Expandable History** - Click-to-expand query cards with pagination (5 per page)

### Privacy Features

- No user authentication required (anonymous usage)

- No tracking or analytics by default

- Query history only stored with explicit consent**Quick steps:**### Prerequisites

- Data can be viewed by all users (demo configuration - see note below)

1. Run the SQL migration in Supabase SQL Editor

**⚠️ Production Note:** For production deployments, update database policies to restrict query access to individual users only.

2. Deploy the `check-symptoms` Edge Function---

---

3. Deploy the `get-history` Edge Function

## 📊 How It Works

- Node.js 18+## 🏗️ Tech Stack

## 🧪 API Reference


### Edge Function: check-symptoms


**Endpoint:** `https://your-project.supabase.co/functions/v1/check-symptoms`


**Method:** POST

- **Animations:** CSS transitions + Tailwind CSS


```


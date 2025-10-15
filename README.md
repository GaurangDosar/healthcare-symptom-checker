# Healthcare Symptom Checker# Healthcare Symptom Checker# Healthcare Symptom Checker# Healthcare Symptom Checker 🏥# Healthcare Symptom Checker 🏥# Healthcare Symptom Checker 🏥# Healthcare Symptom Checker 🏥# Healthcare Symptom Checker



A web app that analyzes symptoms using AI and provides possible conditions with next steps. Built with React, TypeScript, Supabase, and Google Gemini AI.



**⚠️ Disclaimer:** This is for educational purposes only, not medical advice. For emergencies, call your local emergency services.A simple web app to check symptoms and get possible conditions. Built with React, Supabase, and Gemini AI.



---



## Features## How to UseAn AI-powered symptom checker that helps users understand potential health conditions. Uses Google Gemini AI to analyze symptoms and provide educational information.



- AI-powered symptom analysis with confidence scores

- Emergency symptom detection

- Query history (optional, consent-based)1. **Enter your symptoms** (and optionally age/sex)

- Privacy-focused (PII automatically redacted)

2. **Submit** to get possible conditions and next steps

---

3. **History**: If you give consent, your query is saved (for demo, all history is public)**⚠️ Important:** This is an educational tool only. Always consult healthcare professionals for medical advice.**Developer:** Gaurang Dosar  

## Quick Start



**1. Clone and install:**

## Setup

```bash

git clone https://github.com/GaurangDosar/triage-tool.git

cd triage-tool

npm installClone this repo:## Features**AI Model:** Google Gemini 2.5 Flash  

```



**2. Set up environment:**

```bash

Create a `.env` file in the root:

git clone https://github.com/GaurangDosar/triage-tool.git

```env

VITE_SUPABASE_URL=your_supabase_urlcd triage-tool- AI-powered symptom analysis with confidence scores**Status:** ✅ Live on Supabase**Developer:** Gaurang Dosar  

VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key

GEMINI_API_KEY=your_gemini_keynpm install

```

```- Emergency symptom detection

Get Supabase credentials from [Dashboard](https://supabase.com/dashboard) → Settings → API



**3. Run locally:**

Add a `.env` file with your Supabase and Gemini API keys:- Query history with privacy controls

```bash

npm run dev

```

```- Mobile-friendly design

Open http://localhost:8080

VITE_SUPABASE_URL=your_supabase_url

---

VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key**AI Model:** Google Gemini 2.5 Flash  

## Database Setup (Optional)

GEMINI_API_KEY=your_gemini_key

For the history feature:

```

1. Run the SQL migration in `supabase/migrations/` via Supabase Dashboard

2. Deploy Edge Functions from `supabase/functions/`:

   - `check-symptoms` - Analyzes symptoms

   - `get-history` - Retrieves historyRun the dev server:## Setup



---



## Deployment```bash



- **Frontend:** Vercel, Netlify, or any static hostnpm run dev

- **Backend:** Supabase Edge Functions (already configured)

```### PrerequisitesAn AI-powered healthcare symptom checker that helps users understand potential conditions based on their symptoms. Built with React, TypeScript, and Google Gemini API.**Status:** ✅ Live on Supabase**Developer:** Gaurang Dosar  

---



## Tech Stack

Open [localhost:8080](http://localhost:8080)

- React 18 + TypeScript

- Vite

- Tailwind CSS + shadcn/ui

- Supabase (Edge Functions + PostgreSQL)## Deployment- Node.js 18+

- Google Gemini 2.5 Flash

- TanStack Query



---- **Frontend**: Vercel, Netlify, or any static host- Supabase account



## Privacy- **Backend**: Supabase Edge Functions (see `supabase/functions/`)



- No PII stored (emails, phones, SSNs redacted)- Google Gemini API key---

- Query history only with consent

- Public database policy for demo (⚠️ update for production)## Privacy



---



## Author- No personal info stored (emails, phones, etc. are redacted)



**Gaurang Dosar**  - All history is public for demo purposes### Installation

GitHub: [@GaurangDosar](https://github.com/GaurangDosar)



---

## Author

Built with React + Supabase + Gemini AI



Gaurang Dosar  ```bash## ⚠️ Important Medical Disclaimer![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Supabase](https://img.shields.io/badge/Supabase-Integrated-green)**AI Model:** Google Gemini 2.5 Flash  

[github.com/GaurangDosar](https://github.com/GaurangDosar)

git clone https://github.com/GaurangDosar/triage-tool.git

---

cd triage-tool

**Disclaimer:** This tool is for informational purposes only. Not medical advice. For emergencies, call your local emergency services.

npm install

```**This tool is for educational purposes only and does not provide medical advice.**



### Configuration



Create a `.env` file:This application:An AI-powered healthcare symptom checker that helps users understand potential conditions based on their symptoms. Built with React, TypeScript, and Google Gemini API.**Status:** ✅ Live on Supabase**Author**: Gaurang Dosar  **Developer:** Gaurang Dosar



```env- ✅ Provides educational information about possible health conditions

VITE_SUPABASE_URL=your_supabase_url

VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key- ❌ Does NOT replace consultation with licensed healthcare professionals

GEMINI_API_KEY=your_gemini_key

```- ❌ Should NOT be used for medical diagnosis or treatment decisions



Get your Supabase credentials from [supabase.com/dashboard](https://supabase.com/dashboard) → Settings → API- ❌ Is NOT suitable for emergency medical situations---



### Database Setup



1. Run the SQL migration in `supabase/migrations/` via Supabase Dashboard**If you are experiencing severe or life-threatening symptoms (chest pain, severe difficulty breathing, sudden weakness, uncontrolled bleeding), seek emergency medical care immediately by calling your local emergency services.**

2. Deploy the Edge Functions:

   - `check-symptoms` - Analyzes symptoms

   - `get-history` - Retrieves query history

---## ⚠️ Important Medical Disclaimer![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Supabase](https://img.shields.io/badge/Supabase-Integrated-green)**AI Model**: Google Gemini 2.5 Flash  

See [DATABASE_SETUP.md](./DATABASE_SETUP.md) for detailed steps.



### Run Locally

## 🎯 Features

```bash

npm run dev

```

### Core Functionality**This tool is for educational purposes only and does not provide medical advice.**

Visit `http://localhost:8080`

- 🤖 **AI-Powered Analysis** - Uses Google Gemini 2.5 Flash for medical information processing

## Tech Stack

- 📊 **Ranked Conditions** - Displays possible conditions with confidence scores and reasoning

- React 18 + TypeScript

- Vite- 📋 **Next Steps** - Provides prioritized recommendations for seeking care

- Tailwind CSS + shadcn/ui

- Supabase (Edge Functions + PostgreSQL)- ⚠️ **Emergency Detection** - Highlights urgent symptoms with prominent warningsThis application:An AI-powered healthcare symptom checker that helps users understand potential conditions based on their symptoms. Built with React, TypeScript, and Google Gemini API.**Status**: ✅ Live on SupabaseAn educational symptom checker application built with React, TypeScript, and Google Gemini API.

- Google Gemini 2.5 Flash

- TanStack Query- 💾 **Query History** - Stores anonymized queries (with user consent)




## Project Structure



```---

src/

├── components/**If you are experiencing severe or life-threatening symptoms (chest pain, severe difficulty breathing, sudden weakness, uncontrolled bleeding), seek emergency medical care immediately by calling your local emergency services.**

│   ├── SymptomForm.tsx      # Main input form

│   ├── ResultsView.tsx      # AI analysis results## 🚀 Quick Start

│   └── HistoryView.tsx      # Query history

├── pages/

│   └── Index.tsx            # Main page

└── integrations/supabase/   # Supabase client### Prerequisites



supabase/- Node.js 18 or higher---## ⚠️ Important Medical DisclaimerA modern, AI-powered healthcare symptom checker that helps users understand potential conditions based on their symptoms. Built with React, TypeScript, and Google's Gemini API.## ⚠️ Important Medical Disclaimer

├── functions/               # Edge Functions

└── migrations/              # Database schema- Supabase account ([Sign up free](https://supabase.com))

```

- Google Gemini API key ([Get one here](https://aistudio.google.com/apikey))

## API




### POST /get-history- 🤖 **AI-Powered Analysis** - Uses Google Gemini 2.5 Flash for medical information processing



Returns stored query history (consent-based).### 2. Install Dependencies



## Privacy- 📊 **Ranked Conditions** - Displays possible conditions with confidence scores and reasoning



- No PII storage (emails, phones redacted automatically)```bash

- Opt-in query history

- Public database policy for demo purposesnpm install- 📋 **Next Steps** - Provides prioritized recommendations for seeking care



## License```



[Status](https://img.shields.io/badge/Status-Live-success)**This tool is for educational purposes only and does not provide medical advice.**



## Author### 3. Configure Environment



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



---```bash



## 📁 Project Structurenpm install- 📋 **Next Steps** - Provides prioritized recommendations for seeking care



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


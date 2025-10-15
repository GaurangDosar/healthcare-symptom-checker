# Healthcare Symptom Checker



A web app that analyzes symptoms using AI and provides possible conditions with next steps. Built with React, TypeScript, Supabase, and Google Gemini AI.
Note that this project is serverless since we are using Supabase Edge functions. This makes our website more responsive.



🌐 **Live Demo:** [[Click here](https://healthcare-symptom-checker-new.vercel.app/)]A web app that analyzes symptoms using AI and provides possible conditions with next steps. Built with React, TypeScript, Supabase, and Google Gemini AI.







---**⚠️ Disclaimer:** This is for educational purposes only, not medical advice. For emergencies, call your local emergency services.A simple web app to check symptoms and get possible conditions. Built with React, Supabase, and Gemini AI.
Also the history functional is open to see for every user just for demo. Later each user can its own history.






## 📺 Demo Video
unmute the video before playing..


https://github.com/user-attachments/assets/e06dcb0e-a3b6-4ebd-a036-31220dce5942




## Features
...



## Features



- AI-powered symptom analysis with confidence scores---

- Emergency symptom detection

- Query history (optional, consent-based)

- Privacy-focused (PII automatically redacted)

- Mobile-responsive design



---






### Prerequisites- Emergency symptom detection



- Node.js 18+- Query history (optional, consent-based)1. **Enter your symptoms** (and optionally age/sex)

- Supabase account

- Google Gemini API key- Privacy-focused (PII automatically redacted)



### Installation



1. **Clone the repository:**---



```bash3. **History**: If you give consent, your query is saved (for demo, all history is public)**⚠️ Important:** This is an educational tool only. Always consult healthcare professionals for medical advice.**Developer:** Gaurang Dosar  

git clone https://github.com/GaurangDosar/triage-tool.git

cd triage-tool## Quick Start

npm install

```



2. **Set up environment variables:****1. Clone and install:**



Create a `.env` file in the root:## Setup



```env```bash
```
VITE_SUPABASE_URL=your_supabase_url

VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_keygit clone https://github.com/GaurangDosar/triage-tool.git

GEMINI_API_KEY=your_gemini_key
```





Get your Supabase credentials from [Supabase Dashboard](https://supabase.com/dashboard) → Settings → APInpm installClone this repo:## Features**AI Model:** Google Gemini 2.5 Flash  



3. **Set up database (Optional - for history feature):**```



   - Run the SQL migration in `supabase/migrations/` via Supabase Dashboard

   - Deploy Edge Functions from `supabase/functions/`:

     - `check-symptoms` - Analyzes symptoms**2. Set up environment:**

     - `get-history` - Retrieves history


## API




### POST /check-symptoms- 
Uses Google Gemini 2.5 Flash for medical information processing

### GET /get-history
Fetches data from PostgreSQL database


Returns stored query history (consent-based).### 2. Install Dependencies



## Privacy- 📊 **Ranked Conditions** - Displays possible conditions with confidence scores and reasoning



- No PII storage (emails, phones redacted automatically)```bash

- Opt-in query history

- Public database policy for demo purposesnpm install- 📋 **Next Steps** - Provides prioritized recommendations for seeking care



## License```



[Status](https://img.shields.io/badge/Status-Live-success)**This tool is for educational purposes only and does not provide medical advice.**



# 3. Configure Environment



---Create a `.env` file in the root directory:


```env

VITE_SUPABASE_URL=your_supabase_project_url

VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key

GEMINI_API_KEY=your_gemini_api_key### User Experience- ❌ Does NOT replace consultation with licensed healthcare professionals![Supabase](https://img.shields.io/badge/Backend-Supabase-green)

```






**Quick steps:**

1. Run the SQL migration in Supabase SQL Editor

2. Deploy the `check-symptoms` Edge Function---

3. Deploy the `get-history` Edge Function

**If you are experiencing severe or life-threatening symptoms (chest pain, severe difficulty breathing, sudden weakness, uncontrolled bleeding), seek emergency medical care immediately by calling your local emergency services.**![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)- Provides educational information about possible health conditions

###  Run Development Server

## 🚀 Quick Start

```bash

npm run dev

```



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


# Healthcare Symptom Checker

**Author**: Gaurang Dosar  
**AI Model**: Google Gemini 2.5 Flash

A modern, AI-powered healthcare symptom checker that helps users understand potential conditions based on their symptoms. Built with React, TypeScript, and Google's Gemini API.

## ⚠️ Important Disclaimer

This tool is for **informational purposes only** and is **not medical advice**. Always consult with qualified healthcare professionals for medical concerns. If you're experiencing a medical emergency, call your local emergency services immediately.

## 🏗️ Architecture

### Frontend (Client-Side)
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Library**: Tailwind CSS + shadcn/ui components
- **State Management**: TanStack React Query
- **API Client**: Supabase JS Client

### Backend (Server-Side)
- **Production**: Supabase Edge Functions (Deno runtime)
- **Local Development**: Node.js server (optional)
- **AI Provider**: Google Gemini 2.5 Flash API
- **Database**: Supabase PostgreSQL (optional history storage)

## 🔒 Security

### API Key Management
- ✅ No API keys in source code
- ✅ All secrets stored in environment variables
- ✅ `.env` file excluded from Git
- ✅ Supabase Edge Functions use secrets management
- ✅ Local development uses `.env` file (never committed)

### Data Privacy
- No personal health information (PHI) stored without consent
- Basic PII redaction for stored queries
- CORS headers properly configured
- HTTPS enforced in production

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (free tier works)
- Google Gemini API key ([Get one here](https://aistudio.google.com/apikey))

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/GaurangDosar/triage-tool.git
cd triage-tool
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_key_here

# For local development only
GEMINI_API_KEY=your_gemini_api_key_here
```

**Where to get these:**
- **Supabase credentials**: [Supabase Dashboard](https://supabase.com/dashboard) → Your Project → Settings → API
- **Gemini API key**: [Google AI Studio](https://aistudio.google.com/apikey)

### 4. Deploy Supabase Edge Function

#### Option A: Using Supabase Dashboard (Easiest)

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Navigate to **Edge Functions**
3. Click **"Create a new function"**
4. Name: `check-symptoms`
5. Copy content from `supabase/functions/check-symptoms/index.ts`
6. Deploy the function
7. Add secret: `GEMINI_API_KEY` with your API key

#### Option B: Using Supabase CLI

```bash
# Install Supabase CLI
winget install Supabase.cli  # Windows
# or
brew install supabase/tap/supabase  # macOS

# Login
supabase login

# Link your project
supabase link --project-ref your-project-id

# Set secret
supabase secrets set GEMINI_API_KEY=your_api_key

# Deploy function
supabase functions deploy check-symptoms
```

### 5. Update Frontend Configuration

**For Production (Supabase):**
- Frontend is already configured to use Supabase client
- Uses `src/integrations/supabase/client.ts`

**For Local Development (Optional):**
- Run local server: `node gemini-server-secure.mjs`
- Frontend uses `src/integrations/supabase/client-local.ts`

### 6. Run the Application

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🧪 Testing

### Test Local Server (Optional)

```bash
# Start local server
node gemini-server-secure.mjs

# In another terminal, test the API
node test-gemini-secure.js
```

### Test Supabase Edge Function

```bash
curl -X POST https://your-project.supabase.co/functions/v1/check-symptoms \
  -H "Content-Type: application/json" \
  -d '{
    "symptoms": "headache and fever for 2 days",
    "age": 30,
    "sex": "male",
    "consentToStore": false
  }'
```

## 📁 Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── SymptomForm.tsx # Symptom input form
│   │   ├── ResultsView.tsx # Results display
│   │   └── HistoryView.tsx # Query history
│   ├── integrations/
│   │   └── supabase/       # Supabase client configuration
│   ├── pages/              # Page components
│   ├── types/              # TypeScript type definitions
│   └── lib/                # Utility functions
├── supabase/
│   └── functions/
│       └── check-symptoms/ # Edge function for AI processing
├── public/                 # Static assets
├── .env.example           # Environment variables template
└── README.md              # This file
```

## 🔐 Environment Variables

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `VITE_SUPABASE_URL` | Yes | Your Supabase project URL | `https://xxx.supabase.co` |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Yes | Supabase anon/public key | `eyJhbGc...` |
| `GEMINI_API_KEY` | Local Dev | Google Gemini API key | `AIzaSy...` |

**⚠️ Never commit the `.env` file to Git!**

## 🚢 Deployment

### Frontend Deployment

**Recommended Platforms:**
- [Vercel](https://vercel.com) (Recommended)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

All three support:
- Automatic deployments from GitHub
- Environment variable configuration
- HTTPS by default
- Free tier available

### Backend Deployment

Backend runs on **Supabase Edge Functions** (already serverless and auto-scaling).

## 🧰 Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **TanStack Query** - Data fetching
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Backend
- **Supabase Edge Functions** - Serverless functions (Deno)
- **Google Gemini 2.5 Flash** - AI model
- **Supabase PostgreSQL** - Database (optional)

## 📊 Features

✅ AI-powered symptom analysis  
✅ Confidence scoring for conditions  
✅ Prioritized next steps  
✅ Emergency symptom detection  
✅ Dynamic severity warnings  
✅ Query history (optional)  
✅ Responsive design  
✅ Dark mode support  
✅ Accessibility features  

## 🛡️ Safety Features

- Emergency symptom detection with visual warnings
- Explicit medical disclaimers
- No diagnostic claims
- Encourages professional consultation
- Privacy-focused data handling

## 📝 License

MIT License - See LICENSE file for details

## 👨‍💻 Author

**Gaurang Dosar**

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

**Important**: Never commit API keys or sensitive credentials!

## 📞 Support

For issues or questions:
- Create an issue on GitHub
- Check existing documentation
- Review Supabase logs for backend errors

## 🙏 Acknowledgments

- Google Gemini AI for medical information processing
- Supabase for backend infrastructure
- shadcn for beautiful UI components
- Open source community

---

**Remember**: This is an informational tool, not a replacement for professional medical advice!

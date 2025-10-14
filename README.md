# Healthcare Symptom Checker

An educational AI-powered symptom checker built with React, TypeScript, Lovable Cloud, and OpenAI GPT-5-nano.

## ⚠️ Important Medical Disclaimer

**This tool is for educational purposes only and does not provide medical advice.**

This application:
- Provides educational information about possible health conditions
- Does NOT replace consultation with licensed healthcare professionals
- Should NOT be used for medical diagnosis or treatment decisions
- Is NOT suitable for emergency medical situations

**If you are experiencing severe or life-threatening symptoms (chest pain, severe difficulty breathing, sudden weakness, uncontrolled bleeding), seek emergency medical care immediately.**

## 🎯 Project Summary

A web application that accepts free-text symptom descriptions and optional demographics (age, sex), calls an LLM to generate a ranked list of probable conditions with conservative reasoning and triage advice, stores anonymized query history (with user consent), and displays results with prominent safety disclaimers.

## 🏗️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend**: Lovable Cloud (Supabase) with Edge Functions
- **Database**: PostgreSQL via Supabase
- **LLM**: OpenAI GPT-5-nano
- **State Management**: TanStack Query
- **Form Handling**: React Hook Form + Zod validation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- OpenAI API key for GPT-5-nano

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
The project uses Lovable Cloud, which automatically provisions:
- Supabase database
- Edge Functions runtime
- Authentication system

You need to add your OpenAI API key via the Lovable Cloud interface:
- Go to Backend → Secrets
- Add `OPENAI_API_KEY` with your API key value

4. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:8080`

## 📋 Features

### ✅ Implemented Features

1. **Symptom Input Form**
   - Free-text symptom description (10-1000 characters)
   - Optional age and sex fields
   - Real-time form validation
   - Privacy consent checkbox for history storage
   - Mobile-responsive design

2. **AI-Powered Analysis**
   - GPT-5-nano integration via Edge Functions
   - Structured prompt with few-shot examples
   - Returns up to 4 ranked conditions with confidence scores
   - Provides safe, educational next steps
   - Emergency symptom detection with prominent warnings

3. **Results Display**
   - Ranked list of possible conditions
   - Confidence scores and reasoning for each condition
   - Recommended next steps focusing on triage
   - Emergency warnings (pulsing animation for urgent cases)
   - Collapsible raw JSON viewer for debugging

4. **Query History**
   - Opt-in anonymized storage
   - View past symptom checks
   - Timestamp and demographics display
   - No PII storage (automatic redaction)

5. **Safety & Privacy**
   - Prominent disclaimer banner on every page
   - Full disclaimer modal with emergency symptoms list
   - PII redaction (email, phone, SSN patterns)
   - Consent-based history storage only
   - Rate limiting on Edge Functions

## 🔧 API Documentation

### POST /check-symptoms

Analyzes symptoms and returns possible conditions with recommendations.

**Request Body:**
```json
{
  "symptoms": "headache for 3 days, mild fever, feeling tired",
  "age": 28,
  "sex": "female",
  "consentToStore": true
}
```

**Response:**
```json
{
  "conditions": [
    {
      "name": "Viral upper respiratory infection",
      "probability_rank": 1,
      "confidence_score": 0.75,
      "reasoning": "Combination of headache, fever, and fatigue suggests viral infection..."
    }
  ],
  "recommended_next_steps": [
    "Rest and stay hydrated",
    "Monitor temperature",
    "Consult primary care if symptoms worsen"
  ],
  "needed_info": null,
  "disclaimer": "DISCLAIMER: This tool provides educational information only...",
  "llm_metadata": {
    "provider": "openai",
    "model": "gpt-5-nano-2025-08-07",
    "prompt_version": "1.0"
  }
}
```

### GET /get-history

Retrieves anonymized query history.

**Query Parameters:**
- `limit` (optional): Number of records to return (default: 20)

**Response:**
```json
{
  "queries": [
    {
      "id": "uuid",
      "symptoms": "headache for 3 days...",
      "age": 28,
      "sex": "female",
      "response": { /* full response object */ },
      "created_at": "2025-10-14T12:00:00Z"
    }
  ]
}
```

## 🔒 Security & Privacy

### Data Protection

1. **No PII Storage**
   - Automatic redaction of emails, phone numbers, SSNs
   - No names, addresses, or identifying information stored
   - Only symptoms, age, sex, and AI response are saved

2. **Consent-Based Storage**
   - Users must explicitly opt-in to save queries
   - History is anonymized and aggregated
   - No user accounts or authentication tracking

3. **Rate Limiting**
   - Edge Functions protected against abuse
   - IP-based request limiting

### Privacy Policy

- **Retention**: Queries stored indefinitely for educational research
- **Deletion**: Contact support to request data deletion
- **Sharing**: Anonymized data may be used for research purposes
- **Encryption**: All data encrypted at rest and in transit

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage
```

### Test Coverage

The project includes:
- React component tests (React Testing Library)
- Form validation tests
- Emergency symptom detection tests
- Privacy consent behavior tests

## 🎨 Design System

### Color Palette

- **Primary (Medical Blue)**: `hsl(217 91% 60%)` - Professional trust-building color
- **Secondary (Trust Green)**: `hsl(160 84% 39%)` - Positive health associations
- **Warning (Safety Orange)**: `hsl(38 92% 50%)` - Emergency alerts
- **Gradients**: Subtle blue-to-teal medical gradients

### Typography

- Clean sans-serif font stack
- Excellent readability for medical content
- Proper heading hierarchy (H1 for main title)

### Accessibility

- Semantic HTML (`<main>`, `<header>`, `<footer>`, `<section>`)
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Color contrast ratios meet WCAG AA standards

## 🔄 Changing LLM Providers

The Edge Function is configured to use OpenAI GPT-5-nano by default. To switch providers:

1. Update the Edge Function code in `supabase/functions/check-symptoms/index.ts`
2. Change the API endpoint and request format
3. Update environment variables in Lovable Cloud → Backend → Secrets
4. Adjust the prompt format if needed

Example providers:
- OpenAI (current)
- Anthropic Claude
- Google Gemini (via Lovable AI)

## 📝 Demo Script

### 2-3 Minute Demo Flow

1. **Introduction** (30 seconds)
   - Show landing page with prominent disclaimer
   - Highlight educational purpose and safety messaging

2. **Mild Symptom Check** (60 seconds)
   - Enter: "runny nose, sneezing, itchy eyes for 2 days, started after park visit"
   - Age: 28, Sex: Female
   - Enable history consent
   - Submit and show results with ranked conditions
   - Point out confidence scores and safe recommendations

3. **Emergency Symptom Check** (45 seconds)
   - Clear form and enter: "severe chest pain radiating to left arm, difficulty breathing, sweating"
   - Show emergency warning banner (pulsing animation)
   - Highlight urgent care instructions

4. **History & Privacy** (30 seconds)
   - Navigate to History tab
   - Show previous query with anonymized data
   - Open full disclaimer modal
   - Point out privacy controls

## ✅ Evaluation Checklist

### Functionality
- [ ] Symptom form accepts 10-1000 character input
- [ ] Optional demographics (age 0-150, sex: male/female/other)
- [ ] Form validation with clear error messages
- [ ] Privacy consent checkbox functional
- [ ] AI analysis returns structured JSON
- [ ] Up to 4 conditions ranked by likelihood
- [ ] Confidence scores displayed (0-1 scale)
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

### Via Lovable

1. Click the "Publish" button in the Lovable interface
2. Your app will be deployed automatically
3. Custom domain can be added in Project → Settings → Domains

### Manual Deployment

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

**Note**: Edge Functions require Supabase/Lovable Cloud to be configured.

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
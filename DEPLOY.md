# Deployment Guide

## Deploy to Vercel (Recommended)

### Option 1: Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository: `GaurangDosar/triage-tool`
4. Vercel will auto-detect Vite settings
5. Add environment variables:
   - `VITE_SUPABASE_URL` = your Supabase project URL
   - `VITE_SUPABASE_PUBLISHABLE_KEY` = your Supabase anon key
6. Click "Deploy"

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts and add environment variables when asked.

---

## Deploy to Netlify

### Option 1: Netlify Dashboard

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select `triage-tool`
4. Settings will auto-configure from `netlify.toml`
5. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
6. Click "Deploy"

### Option 2: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

---

## Environment Variables Setup

Both platforms need these variables:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key
```

**Note:** `GEMINI_API_KEY` is NOT needed for frontend deployment (it's used in Supabase Edge Functions).

---

## Troubleshooting

### Build fails with "Out of memory"
Add this to `package.json` scripts:
```json
"build": "NODE_OPTIONS='--max-old-space-size=4096' vite build"
```

### 404 on routes after deployment
- Vercel: Check `vercel.json` has the redirect rule
- Netlify: Check `netlify.toml` has `[[redirects]]`

### Environment variables not working
- Make sure variables start with `VITE_`
- Redeploy after adding variables
- Check deployment logs for errors

---

## Post-Deployment

1. Test your deployed app
2. Update the README with your live URL
3. Check Supabase Edge Functions are accessible from your domain

---

**Need help?** Check deployment logs or contact support on the platform you're using.

# Content Hub — Setup Guide

Welcome, Michael! This guide covers everything you need to do **once** to get the hub fully operational.

---

## 1. API Key (Anthropic) — Most Important

Your API key never touches the HTML files. It lives only inside your Cloudflare Worker as an environment variable.

### Step 1 — Add the key to your Cloudflare Worker

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) and sign in
2. In the left sidebar, click **Workers & Pages**
3. Click on your Worker named `anthropic-proxy` (or similar)
4. Click the **Settings** tab
5. Click **Variables** (or **Environment Variables**)
6. Click **Add variable**
   - Variable name: `ANTHROPIC_API_KEY`
   - Value: `sk-ant-api03-VOuy...` ← paste your full key here
7. Click **Save and deploy**

### Step 2 — Update your Worker code to use the env variable

Your Worker needs to read the key from `env` instead of from the frontend request. Replace your Worker's `fetch` handler with this:

```javascript
export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
        }
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    const body = await request.json();

    // Use the key from env — never from the request body
    const apiKey = env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return new Response('API key not configured in Worker', { status: 500 });
    }

    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(body),
    });

    const data = await anthropicRes.json();

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }
};
```

> ✅ After this change, the key is **never in the HTML, never in the browser, never in localStorage**. The Worker is the only place it exists.

---

## 2. Google Calendar OAuth — Free Setup (~15 min)

OAuth itself is completely free. The Google Calendar API has a generous free tier (millions of requests/month) — you will never come close to paying for it.

### Step 1 — Create a Google Cloud project

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Click the project dropdown at the top → **New Project**
3. Name it `Fluency Connect Hub` → click **Create**
4. Make sure you're in that new project (check the dropdown)

### Step 2 — Enable the Google Calendar API

1. In the left sidebar, go to **APIs & Services → Library**
2. Search for **Google Calendar API**
3. Click it → click **Enable**

### Step 3 — Configure the OAuth consent screen

1. Go to **APIs & Services → OAuth consent screen**
2. Select **External** → click **Create**
3. Fill in:
   - App name: `Fluency Connect Hub`
   - User support email: your Gmail address
   - Developer contact email: your Gmail address
4. Click **Save and Continue** through all steps (no scopes needed here)
5. On the **Test users** step, add both your Gmail addresses (Sabrina's and yours)
6. Click **Save and Continue**

### Step 4 — Create an OAuth Client ID

1. Go to **APIs & Services → Credentials**
2. Click **+ Create Credentials → OAuth Client ID**
3. Application type: **Web application**
4. Name: `Content Hub`
5. Under **Authorized JavaScript origins**, add:
   - `http://localhost` (for testing locally)
   - The full URL of wherever you host the file, e.g. `https://yourdomain.com`
   - If opening as a local file: also add `null` (some browsers send this for `file://`)
6. Under **Authorized redirect URIs**, add the **exact same URLs** as above
7. Click **Create**
8. A popup shows your **Client ID** — copy it (looks like `123456789-abc....apps.googleusercontent.com`)

### Step 5 — Paste the Client ID into the hub

1. Open the Content Hub
2. Go to **Sabrina → Master tab**
3. Find the **Google Calendar** section
4. Paste your Client ID into the field
5. Click **Save**
6. Click **Connect Google Calendar** — it will redirect to Google sign-in
7. Sign in with the Google account that owns the calendar
8. Done! The badge in the header will turn green ✅

> **Note:** Each new event will automatically invite `english@fluencyconnect.com` as configured.

---

## 3. How the Dev Email Button Works

No setup needed. When Sabrina clicks the button in the **Master tab**, it opens your default email app with a pre-addressed message to `mcgeheemichael22@gmail.com`. She types her request and hits send.

---

## 4. Data Migration from Old Files

Migration runs automatically on first load. Open the Content Hub in the **same browser** where your old files were open — it will detect the old `fc8_`, `sab_`, `mic_`, and `smhub2` localStorage keys and import them automatically.

You'll see a console message: `[Hub] Migration complete.` when it finishes.

---

## 5. File Structure

```
hub/
├── index.html    ← Open this in your browser
├── config.js     ← All default data, pillars, topics
├── api.js        ← API calls (proxy + Google Calendar)
└── SETUP.md      ← This file
```

All three files must be in the **same folder**. Open `index.html` directly in your browser or host them together on a web server.

---

## Security Summary

| What | Where it lives | Visible in browser? |
|------|---------------|---------------------|
| Anthropic API key | Cloudflare Worker env variable | ❌ Never |
| Google OAuth token | Browser localStorage (temporary) | Only as an access token, no key |
| Topic data / scripts | Browser localStorage | ✅ Local only |
| Dev email address | Hardcoded in api.js | ✅ (expected) |

The most sensitive item — your Anthropic API key — is handled entirely by your Cloudflare Worker and is never exposed to the browser under any circumstances.

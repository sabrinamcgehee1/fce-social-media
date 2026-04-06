// ═══════════════════════════════════════════════════════════════════════════
// CONTENT HUB — api.js
// Handles: Anthropic proxy calls, Google Calendar OAuth, EmailJS
// ═══════════════════════════════════════════════════════════════════════════

// ── ANTHROPIC AI ─────────────────────────────────────────────────────────────
// The API key is stored in your Cloudflare Worker's environment variables.
// This file never stores the key — it just calls the proxy endpoint.

async function callAI(systemPrompt, userPrompt, onChunk) {
  const settings = loadSettings();

  try {
    const body = {
      model: AI_MODEL,
      max_tokens: 1500,
      stream: !!onChunk,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }]
    };

    const headers = { 'Content-Type': 'application/json' };
    // If user has manually entered an override key (master tab), include it
    if (settings.apiKeyOverride) {
      headers['x-api-key'] = settings.apiKeyOverride;
    }

    const res = await fetch(PROXY_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Proxy error ${res.status}: ${err}`);
    }

    if (onChunk) {
      // Streaming
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let fullText = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        const lines = chunk.split('\n').filter(l => l.startsWith('data: '));
        for (const line of lines) {
          try {
            const data = JSON.parse(line.slice(6));
            if (data.type === 'content_block_delta' && data.delta?.text) {
              fullText += data.delta.text;
              onChunk(data.delta.text, fullText);
            }
          } catch(e) {}
        }
      }
      return fullText;
    } else {
      const data = await res.json();
      return data.content?.[0]?.text || '';
    }
  } catch(e) {
    console.error('[API] callAI error:', e);
    throw e;
  }
}

// Test connection to proxy
async function testConnection() {
  try {
    const res = await callAI('You are a helpful assistant.', 'Say "Connection OK" in exactly 2 words.');
    return { ok: true, message: res.trim() };
  } catch(e) {
    return { ok: false, message: e.message };
  }
}

// Generate scripts for a topic card
async function generateScripts(account, topic, version, format, existingScripts, onChunk) {
  const pillarName = PILLARS[account]?.find(p => p.id === topic.pillar)?.name || topic.pillar;
  const accountLabel = ACCOUNTS[account]?.label || account;

  const systemPrompt = `You are a social media content strategist for ${accountLabel}, a Brazilian-American English learning brand. 
You write in the same voice as the account: warm, authentic, story-driven, bilingual (mix Portuguese and English naturally).
Generate concise, punchy scripts that fit the specified format.
Respond ONLY with a JSON object — no markdown, no backticks, no preamble.`;

  const fieldDefs = (account === 'fc' ? FC_SCRIPT_FIELDS : 
                     (version === 'convert' ? { video: CONVERT_SCRIPT_FIELDS.video } : 
                      { video: PILLAR_SCRIPT_FIELDS.video }))[version]?.[format] || PILLAR_SCRIPT_FIELDS.video;

  const fieldList = fieldDefs.map(f => `"${f.key}": "${f.label} — ${f.ph.slice(0,60)}"`).join(',\n');

  const userPrompt = `Topic: "${topic.title}"
Subtitle: "${topic.sub}"
Account: ${accountLabel}
Pillar: ${pillarName}
Version (goal): ${VERSION_LABELS[version] || version}
Format: ${FORMAT_LABELS[format] || format}

Existing content (use as context if available):
${JSON.stringify(existingScripts || {}, null, 2)}

Generate fresh scripts for ALL fields below. Return ONLY valid JSON with these exact keys:
{
${fieldList}
}`;

  return await callAI(systemPrompt, userPrompt, onChunk);
}

// Generate video scripts from a Substack essay
async function generateVideoFromEssay(essayTitle, essayContent) {
  const systemPrompt = `You are a social media content strategist for Sabrina McGehee, a Brazilian-American content creator.
Given a Substack essay, generate video scripts for Instagram Reels.
Respond ONLY with a valid JSON array — no markdown, no backticks.`;

  const userPrompt = `Essay Title: "${essayTitle}"
Essay Content:
${essayContent.slice(0, 2000)}

Generate 3 video scripts based on this essay. Each should be a standalone Reel.
Return a JSON array with this structure:
[
  {
    "title": "Video title",
    "pillar": "p1 or p2",
    "hook": "Opening hook (3 seconds)",
    "value": "Main value/content",
    "cta": "Call to action"
  }
]`;

  const raw = await callAI(systemPrompt, userPrompt, null);
  try {
    const clean = raw.replace(/```json|```/g, '').trim();
    return JSON.parse(clean);
  } catch(e) {
    console.error('[API] generateVideoFromEssay parse error:', e);
    return [];
  }
}

// AI-powered creator inspiration search
async function searchCreatorInspo(category) {
  const systemPrompt = `You are a social media analyst specializing in Brazilian and Portuguese-language content creators.
Respond ONLY with valid JSON — no markdown, no backticks, no extra text.`;

  const userPrompt = `Search for the top 5 creators in this category: "${category.label}"
Search query context: ${category.query}

For each creator provide:
1. Their @handle and real name if known
2. Platform (TikTok / Instagram / YouTube)
3. Current content style and what makes them successful
4. Their approximate follower range
5. One standout recent content format or trend they are riding

Return ONLY a JSON array:
[
  {
    "name": "Creator Name",
    "handle": "@handle",
    "platform": "TikTok",
    "followers": "500K",
    "style": "Brief editing/content style description",
    "success_factor": "What sets them apart",
    "trend": "Current trending format/topic they are using"
  }
]`;

  const raw = await callAI(systemPrompt, userPrompt, null);
  try {
    const clean = raw.replace(/```json|```/g, '').trim();
    return JSON.parse(clean);
  } catch(e) {
    console.error('[API] searchCreatorInspo parse error:', e);
    return [];
  }
}

// ── GOOGLE CALENDAR ──────────────────────────────────────────────────────────
// OAuth 2.0 PKCE flow — no backend needed, works from a static HTML file.
// Setup instructions are in SETUP.md

const GCAL_SCOPES = 'https://www.googleapis.com/auth/calendar.events';

let gcalToken = null;

function getGCalConfig() {
  const settings = loadSettings();
  return {
    clientId:    settings.gcalClientId    || '',
    redirectUri: window.location.origin + window.location.pathname
  };
}

// Generate PKCE code verifier and challenge
async function generatePKCE() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  const verifier = btoa(String.fromCharCode(...array)).replace(/\+/g,'-').replace(/\//g,'_').replace(/=/g,'');
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  const challenge = btoa(String.fromCharCode(...new Uint8Array(digest))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=/g,'');
  return { verifier, challenge };
}

async function startGCalAuth() {
  const cfg = getGCalConfig();
  if (!cfg.clientId) {
    alert('Google Calendar Client ID not configured. Check Settings → Calendar Setup.');
    return;
  }
  const { verifier, challenge } = await generatePKCE();
  sessionStorage.setItem('gcal_pkce_verifier', verifier);
  const params = new URLSearchParams({
    response_type: 'code',
    client_id:     cfg.clientId,
    redirect_uri:  cfg.redirectUri,
    scope:         GCAL_SCOPES,
    code_challenge: challenge,
    code_challenge_method: 'S256',
    access_type:   'offline',
    prompt:        'consent',
    state:         'gcal_oauth'
  });
  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
}

async function handleGCalCallback() {
  const params = new URLSearchParams(window.location.search);
  const code  = params.get('code');
  const state = params.get('state');
  if (!code || state !== 'gcal_oauth') return false;

  const cfg      = getGCalConfig();
  const verifier = sessionStorage.getItem('gcal_pkce_verifier');
  if (!verifier) return false;

  try {
      const params = new URLSearchParams({
        code,
        client_id:     cfg.clientId,
        redirect_uri:  cfg.redirectUri,
        grant_type:    'authorization_code',
        code_verifier: verifier
      });

      console.log('[GCal] Exchanging code. redirect_uri =', cfg.redirectUri);

      const res = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params
      });

      const data = await res.json();
      console.log('[GCal] Token response:', data);

      if (data.access_token) {
        gcalToken = data.access_token;
        const settings = loadSettings();
        settings.gcalToken = data.access_token;
        settings.gcalConnected = true;
        saveSettings(settings);
        sessionStorage.removeItem('gcal_pkce_verifier');
        window.history.replaceState({}, document.title, window.location.pathname);
        return true;
      } else {
        console.error('[GCal] Token exchange failed:', data.error, data.error_description);
      }
    } catch(e) {
      console.error('[API] GCal token exchange error:', e);
    }
  return false;
}

function getGCalToken() {
  if (gcalToken) return gcalToken;
  const settings = loadSettings();
  return settings.gcalToken || null;
}

async function createCalendarEvent(eventData) {
  // eventData: { title, description, recDate, postDate, account }
  const token = getGCalToken();
  if (!token) {
    // Fall back to pre-filled Google Calendar URL
    return openCalendarFallback(eventData);
  }

  const accountLabel = ACCOUNTS[eventData.account]?.label || eventData.account;
  const results = [];

  for (const [type, date] of [['🎬 Gravar', eventData.recDate], ['📢 Postar', eventData.postDate]]) {
    if (!date) continue;
    const d = new Date(date + 'T10:00:00');
    const event = {
      summary: `${type} | ${accountLabel} | ${eventData.title}`,
      description: eventData.description || '',
      start: { dateTime: d.toISOString(), timeZone: 'America/Sao_Paulo' },
      end:   { dateTime: new Date(d.getTime() + 60*60*1000).toISOString(), timeZone: 'America/Sao_Paulo' },
      attendees: [{ email: COMPANY_EMAIL }],
      colorId: accountLabel === 'Fluency Connect' ? '2' :
               accountLabel === 'Sabrina'         ? '3' :
               accountLabel === 'Michael'         ? '7' : '6'
    };

    try {
      const res = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events?sendUpdates=all', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      });
      if (res.ok) {
        results.push(await res.json());
      } else if (res.status === 401) {
        // Token expired
        const settings = loadSettings();
        settings.gcalToken = null;
        settings.gcalConnected = false;
        saveSettings(settings);
        gcalToken = null;
        return openCalendarFallback(eventData);
      }
    } catch(e) {
      console.error('[API] GCal event creation error:', e);
    }
  }
  return results;
}

function openCalendarFallback(eventData) {
  // Opens pre-filled Google Calendar "new event" in a new tab
  const title = encodeURIComponent(`${ACCOUNTS[eventData.account]?.emoji || ''} ${eventData.title}`);
  const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
  const url  = `${base}&text=${title}&add=${COMPANY_EMAIL}`;
  window.open(url, '_blank');
  return null;
}

// ── EMAIL (Developer contact) ─────────────────────────────────────────────────
// Uses mailto — no external service needed
function sendDevEmail(message) {
  const subject = encodeURIComponent('[Content Hub] Sabrina — Change Request');
  const body    = encodeURIComponent(`Hi Michael,\n\nSabrina has a request:\n\n${message}\n\n— Sent from the Content Hub`);
  window.location.href = `mailto:${DEV_EMAIL}?subject=${subject}&body=${body}`;
}

// ── INIT ────────────────────────────────────────────────────────────────────
(async function initAPI() {
  const connected = await handleGCalCallback();
  if (connected) {
    console.log('[API] Google Calendar connected successfully.');
  }
  // Load stored token
  const s = loadSettings();
  if (s.gcalToken) gcalToken = s.gcalToken;
})();

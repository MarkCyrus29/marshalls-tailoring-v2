# Marshalls Tailoring — Post-Deploy Setup Guide

This document describes how to configure the live environment variables for the Marshalls Tailoring website after deployment to Vercel.

---

## 1. Resend (Email Delivery)

**What it does:** Sends contact form submissions to the business inbox and auto-replies to the user.

**Steps:**
1. Log in at [resend.com](https://resend.com)
2. Go to **Domains** → Add and verify your sending domain (e.g., `marshallstailoring.com`)
3. Go to **API Keys** → Create a new key with "Sending Access"
4. Set the following environment variables in Vercel:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | `re_xxxxxxxxxxxx` (from Resend API Keys page) |
| `RESEND_FROM_EMAIL` | `noreply@marshallstailoring.com` (must be on your verified domain) |
| `RESEND_TO_EMAIL` | `marshalls.tailoring@gmail.com` |

> **Note:** If you do not want to set up a custom domain yet, you can use Resend's shared `onboarding@resend.dev` sender for testing — but you must use your own domain for production.

---

## 2. Cloudflare Turnstile (Spam Protection)

**What it does:** Shows a CAPTCHA-like widget on the contact form and verifies it server-side.

**Steps:**
1. Log in at [dash.cloudflare.com](https://dash.cloudflare.com)
2. Go to **Turnstile** (in the sidebar) → Add a site
3. Enter your domain (`marshallstailoring.com`)
4. Choose widget type: **Managed** (recommended)
5. Copy the **Site Key** and **Secret Key**
6. Set the following environment variables in Vercel:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | The public Site Key from Cloudflare |
| `TURNSTILE_SECRET_KEY` | The Secret Key from Cloudflare |

> **Dev bypass:** If these keys are not set, the server action will log a warning and skip verification. This is safe for local development but MUST be configured for production.

---

## 3. Upstash Redis (Rate Limiting)

**What it does:** Limits contact form submissions to 5 per IP per 10 minutes.

**Steps:**
1. Log in at [console.upstash.com](https://console.upstash.com)
2. Create a new **Redis** database → choose a region close to your Vercel deployment region
3. Go to **REST API** tab → copy the REST URL and REST Token
4. Set the following environment variables in Vercel:

| Variable | Value |
|---|---|
| `UPSTASH_REDIS_REST_URL` | `https://xxxx.upstash.io` |
| `UPSTASH_REDIS_REST_TOKEN` | `xxxxxxxxxxxx` |

> **Fallback:** If Redis is not configured, the app uses an in-memory rate limiter that works but resets on each serverless invocation. Configure Redis for proper persistent rate limiting.

---

## 4. Setting Variables in Vercel

1. Open your project at [vercel.com/dashboard](https://vercel.com/dashboard)
2. Go to **Settings → Environment Variables**
3. Add each variable listed above
4. For `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — make sure the environment is set to **Production**, **Preview**, and **Development**
5. For all secret keys — set only to **Production** (and **Preview** if desired)
6. **Redeploy** after adding variables for them to take effect

---

## 5. Custom Domain

1. In Vercel → **Settings → Domains** → Add `marshallstailoring.com`
2. Follow Vercel's DNS instructions to point the domain to Vercel
3. Update Resend domain settings if your domain changes

---

## 6. Google Business Profile

Make sure the name on your Google Business Profile exactly matches **"Marshalls Tailoring"** and that the address and phone number match the website footer.

---

## 7. Swapping Placeholder Content

- **Portfolio images:** Replace placeholder `<div>` cards in `src/sections/Portfolio.tsx` with real `<Image>` components pointing to actual photos
- **Testimonials:** Replace placeholder quote text in `src/sections/Testimonials.tsx` with real verified customer reviews
- **Hero image:** Replace the logo stand-in in `src/sections/Hero.tsx` with a real hero photograph if available

---

## Environment Variables Summary

```
# .env.local (local dev) or Vercel Environment Variables (production)

RESEND_API_KEY=re_xxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@marshallstailoring.com
RESEND_TO_EMAIL=marshalls.tailoring@gmail.com

NEXT_PUBLIC_TURNSTILE_SITE_KEY=0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA
TURNSTILE_SECRET_KEY=0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxB

UPSTASH_REDIS_REST_URL=https://xxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxxxxxxxxxxx
```

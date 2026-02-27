# External Integrations

**Analysis Date:** 2026-02-27

## APIs & External Services

**Social Media Redirects:**
- Discord Server - Redirect endpoint `app/discord/page.tsx` → `https://discord.com/invite/CAhVGsAW7H`
- Twitter/X - Redirect endpoint `app/twitter/page.tsx` → `https://www.x.com/@headshotint`
- Twitch - Redirect endpoint `app/twitch/page.tsx` → `https://www.twitch.tv/headshotinteractive`
- YouTube - Redirect endpoint `app/youtube/page.tsx` → `https://www.youtube.com/@HeadshotInteractive`
- Instagram - Redirect endpoint `app/instagram/page.tsx` → `https://www.instagram.com/headshotinteractive/`

**Gaming Platforms:**
- Steam Store - Redirect endpoint `app/steam/page.tsx` → `https://store.steampowered.com/app/2897990/Abandoned/` (for "Abandoned" game)

**Support/Monetization:**
- Ko-fi - Redirect endpoint `app/kofi/page.tsx` → `https://ko-fi.com/headshotinteractive`
  - SDK/Client: `kofi-button@1.1.1` package
  - Implementation: Standalone component at `app/components/KofiButton/index.tsx`
  - Ko-fi ID: `H2H0129IWF` (hardcoded in component)

## Analytics & Monitoring

**Analytics Provider:**
- Google Analytics 4 - Web analytics for visitor tracking and behavior analysis
  - Tracking ID: `G-JJZVQ6H597`
  - Implementation: Inline script tag in `app/layout.tsx` and external script at `public/googleScript.js`
  - Script tag: `<Script async src="https://www.googletagmanager.com/gtag/js?id=G-JJZVQ6H597" />`

**Vercel Analytics:**
- Provider: Vercel Analytics (`@vercel/analytics@1.2.2`)
- Purpose: Performance metrics and real user monitoring (Core Web Vitals)
- Implementation: `<Analytics />` component imported and rendered in `app/layout.tsx`

## Data Storage

**Databases:**
- None detected - This is a static/content website with no backend database

**File Storage:**
- Local filesystem - Static assets served from `public/` directory
  - Logos: `public/Logos/` (favicon, text logos, etc.)
  - Images: `public/HomeImages/` (hero section background images)
  - User-generated: `public/abandoned_pfp/` (profile pictures)
  - Updates: `public/updates/` (game update or announcement images)
- Next.js Image Optimization - Uses `next/image` component for automatic image optimization

**Caching:**
- Next.js Built-in - Static generation and incremental static regeneration (ISR)
- Vercel CDN - When deployed on Vercel platform

## Authentication & Identity

**Auth Provider:**
- None detected - No authentication system present
- No login/session management
- Publicly accessible website

## SEO & Site Configuration

**Site Structure:**
- robots.txt: `public/robots.txt` (search engine crawling rules)
- Sitemap: `public/sitemap.xml` and `public/sitemap.xml.backup` (XML site map for search engines)
- Bing Site Auth: `public/BingSiteAuth.xml` (Bing Webmaster Tools verification)

**Metadata:**
- Next.js Metadata API used in `app/layout.tsx` for SEO:
  - Title: 'Headshot Interactive'
  - Description: 'Welcome to the official Headshot Interactive website...'
  - Open Graph Image: `https://headshotinteractive.com/Logos/HI_LogoBlack.png`
  - Keywords, authors, publisher info defined

**Font Service:**
- Google Fonts - Goldman font family loaded via `next/font/google`

## CI/CD & Deployment

**Hosting:**
- Vercel Platform (recommended deployment target as per README)
- Supports deployment on any Node.js-compatible platform

**Domain:**
- headshotinteractive.com

**CI Pipeline:**
- Not detected - No GitHub Actions, GitLab CI, or other CI/CD configuration files present

## Environment Configuration

**Required env vars:**
- None detected - Application uses only hardcoded public values (tracking IDs, Ko-fi ID)

**Local Development:**
- `.env*.local` files supported but not required (per .gitignore patterns)
- No sensitive configuration currently needed

## Webhooks & Callbacks

**Incoming:**
- None detected - No API routes or webhook endpoints

**Outgoing:**
- Analytics events sent to Google Analytics and Vercel Analytics
- Redirect events to external platforms (Discord, Twitch, YouTube, etc.) are client-side navigation

## Google Font Integration

**Fonts Used:**
- Goldman font (weights: 400, 700) - Primary font family used throughout the site via Tailwind
  - CSS class: `goldman.className` applied to body element in `app/layout.tsx`
  - Loaded via Next.js automatic font optimization

---

*Integration audit: 2026-02-27*

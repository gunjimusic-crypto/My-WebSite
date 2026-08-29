# nari-aki.com

Nari-Aki Gunji — artist site. Astro static site, Japanese / English (`/ja/`, `/en/`),
with the root auto-redirecting by browser language. Notes are pulled from microCMS
at build time (with a sample fallback so it builds without keys).

## Local
- `npm install`
- `npm run dev`     → preview at localhost
- `npm run build`   → static output to `dist/`

## Deploy (Vercel)
1. Push this folder to a GitHub repo.
2. In Vercel: New Project → import the repo. Framework preset: **Astro** (auto-detected).
3. Add Environment Variables (Settings → Environment Variables):
   - `MICROCMS_SERVICE_DOMAIN` = your microCMS service domain (the part before `.microcms.io`)
   - `MICROCMS_API_KEY` = your microCMS API key (GET)
   (Without these, the site builds with sample notes.)
4. Deploy. Add the domain `nari-aki.com` under Settings → Domains.
5. In microCMS, add a Webhook → Vercel Deploy Hook so publishing a note triggers a rebuild.

## Where to edit
- Works / tracks:        `src/data/works.js`
- UI text (both langs):  `src/i18n/ui.js`
- Hero photo:            `src/pages/[lang]/index.astro` (swap the `<svg class="schematic">` for `<img class="hero-img" ...>`)
- Contact email:         `src/pages/[lang]/contact.astro`
- Notes:                 written in microCMS (the `notes` API)

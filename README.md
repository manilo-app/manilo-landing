# manilo-landing

Landing site for Manilo (manilo.app) — voice-first expense tracker. Built with [Astro](https://astro.build), deployed to GitHub Pages via GitHub Actions.

## Develop

Requires Node ≥ 22.12 (LTS). With Homebrew `node@22`:

```sh
export PATH="/opt/homebrew/opt/node@22/bin:$PATH"
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve dist/ locally
```

## Structure

- `src/layouts/Base.astro` — the single `<head>` (meta, OG, canonical, hreflang, GA4) + page chrome
- `src/components/Header.astro`, `Footer.astro` — the one header and footer used everywhere
- `src/pages/*.astro` — one file per page; body content is plain HTML inside the `Base` layout
- `src/pages/sitemap.xml.ts` — sitemap generated from the pages that exist (404 excluded)
- `public/` — served as-is at the site root: `assets/` (css/js/images/font), `CNAME`, `robots.txt`, `llms.txt`, `pricing.html` (redirect shell)
- `src/fonts/Inter.ttf` — source font, not deployed; `public/assets/Inter.woff2` is the deployed latin+cyrillic subset

`build.format: 'file'` in `astro.config.mjs` keeps the historical URL scheme (`/integrations` → `integrations.html`) — do not change it, canonicals and the sitemap depend on it.

## i18n

`astro.config.mjs` declares locales `en, de, fr, it, pl, uk` with English unprefixed at the root. Translated pages go to `src/pages/<locale>/…` and get `/de/…`-style URLs; until they exist, the site is English-only and hreflang reflects that.

## Deploy

Push to `main` → `.github/workflows/deploy.yml` builds with `withastro/action` and publishes via `actions/deploy-pages`. GitHub Pages must be set to Source: **GitHub Actions** (Settings → Pages). The custom domain comes from `public/CNAME` + repo settings.

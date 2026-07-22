# Koenigsegg — Concept Site

A fan-made concept site celebrating Koenigsegg, built as a front-end portfolio piece.

> **Not affiliated with Koenigsegg Automotive AB.** This is an independent tribute
> build. All trademarks and vehicle imagery belong to their respective owners. Every
> contact detail on the site is fictional, and the enquiry form does not send mail.

**Stack:** [Astro 5](https://astro.build) · zero client-side framework · self-hosted fonts · no CSS library.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built output
```

## Structure

```
src/
  data/          models.ts, site.ts   — the only place any figure or detail is written
  styles/        tokens.css, base.css — design tokens + reset, loaded once
  components/    Nav, Footer, Hero, StatBand, Counter, Button, SectionHeader,
                 ContactForm, Icon
  layouts/       Base.astro           — <head>, SEO, skip link, nav, footer, reveal observer
  pages/         index, about, contact, 404,
                 collection/index, collection/[model]   — one route per car
  assets/        source images (Astro generates AVIF/WebP at build)
public/          favicons, OG image, robots.txt, manifest
```

### Two rules worth knowing

**1. Never hardcode a value.** Everything is a token in `src/styles/tokens.css` —
colour, type scale, spacing, radius, shadow, motion, z-index. Partial-opacity gold is
`rgb(var(--gold-rgb) / 0.2)`, never a literal `rgba(201, 162, 39, …)`, so changing
`--gold-rgb` genuinely recolours the site.

**2. Never retype a spec figure.** Every number lives in `src/data/models.ts`, with the
unit stored separately from the value. A previous version of this site stated three
different power outputs for the same car on one page.

## Contact form

Runs in **demo mode** by default: it validates every field, moves focus to the first
error, and shows real pending / success / error states — but says plainly that nothing
was sent. To make it send, copy `.env.example` to `.env` and set
`PUBLIC_CONTACT_ENDPOINT` to a Formspree, Web3Forms, or equivalent URL. No markup
changes are needed.

## Deploying

The build is fully static — `npm run build`, then serve `dist/`.

`build.format` is `'directory'`, so every route emits `index.html` and resolves on any
static host without rewrite rules. Before going live, set `site` in `astro.config.mjs`
to the real domain — it is what makes canonical URLs, Open Graph image URLs and the
generated sitemap absolute.

- **Netlify** — `netlify.toml` is included; connect the repo and it builds as-is.
- **GitHub Pages** — `.github/workflows/deploy.yml` is included; enable Pages with
  "GitHub Actions" as the source.
- **Vercel / Cloudflare Pages** — auto-detected; no config needed.

## Credits

Design and build by [Raja Hamid](https://github.com/Raja-Hamid). Vehicle photography is
used illustratively in a non-commercial fan project.

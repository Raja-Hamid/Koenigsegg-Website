# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

An **Astro 5** static site — a fan-made Koenigsegg concept/tribute built as a front-end portfolio piece. No UI framework, no CSS library, no client-side router. The only runtime JS is three small inline scripts (nav drawer, reveal observer, counters) plus the contact form handler.

```bash
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built output
```

There is no test suite and no linter. **Verification is: `npm run build`, then load the affected pages and check the console.** A build failure is the only automatic signal you get.

## Where things live

| Path | What it is |
|---|---|
| `src/data/models.ts` | Every published spec figure. **The only place a number is written.** |
| `src/data/site.ts` | Nav, social links, contact details, disclaimer text |
| `src/styles/tokens.css` | Design tokens — colour, type, spacing, radius, shadow, motion, z-index |
| `src/styles/base.css` | Reset, focus, `.section`/`.container`, `.reveal`, print styles |
| `src/layouts/Base.astro` | `<head>`, SEO/OG/JSON-LD, skip link, nav, footer, reveal observer |
| `src/components/` | Nav, Footer, Hero, StatBand, Counter, Button, SectionHeader, ContactForm, Icon |
| `src/pages/` | `index`, `about`, `contact`, `404`, `collection/index`, `collection/[model]` |
| `src/assets/` | Source images — Astro generates AVIF/WebP at build |
| `public/` | Favicons, `og-default.jpg`, `robots.txt`, `site.webmanifest` |

`collection/[model].astro` uses `getStaticPaths()` over `models`, so each car is a real prerendered route (`/collection/jesko`, etc).

## The two rules

These are not style preferences. Each one is a defect class that this codebase previously shipped.

**1. Never hardcode a value — use a token.**
Colour, font-size, spacing, radius, shadow, duration, z-index all live in `tokens.css`. Partial-opacity gold is `rgb(var(--gold-rgb) / 0.2)` — **never** a literal `rgba(201, 162, 39, …)`. The old build had that literal in 37 places, which meant `--primary-gold` did not actually control the gold.

Acceptable raw values: 1–2px hairline borders, small hover nudges (`translate: 0 -4px`), grid track floors (`minmax(min(100%, 280px), 1fr)`), and breakpoint widths.

**2. Never retype a spec figure — import it.**
All numbers come from `src/data/models.ts`, where the unit is stored *separately* from the value. The old build stated three different power outputs for the Jesko on one page, and its model switcher wrote a bare `"330"` over `"330 mph"`, destroying the unit on first click.

## Conventions

- **Sections:** `<section class="section">` + `<div class="container">`. Never write a bare `section { }` selector — the old build's global `section { padding: 6rem 5% }` was inherited by everything with no opt-out.
- **Section labelling:** `<section aria-labelledby="x-heading">` pointing at `<SectionHeader id="x-heading" …>`. Do **not** add a separate `.visually-hidden` heading to carry the id — that produces two headings per section in the outline.
- **Images:** always `import { Image } from 'astro:assets'` with explicit `widths` and `sizes`. `loading="lazy"` for everything except the one hero LCP image per page (`priority` on `<Hero>`).
- **Reveal on scroll:** add `class="reveal"` (optionally `data-reveal-delay="1".."4"`) to **inner wrappers**, never to a `<section>`. A transform on a `<section>` makes it a containing block and silently breaks fixed/parallax backgrounds. The observer in `Base.astro` finds them automatically and unobserves after firing.
- **Buttons:** one `<Button>` component, three variants. Do not add a fourth button style — the old build had eight, two of them both called "secondary" on the same page.
- **Icons:** inline SVG via `<Icon>`. There is no icon font and no CDN; add new glyphs to the `paths` map in `Icon.astro`.
- **Full height:** `svh`/`dvh`, never `vh` — `100vh` overflows on mobile browsers with dynamic toolbars.
- **Focus:** `base.css` owns `:focus-visible` with plain type selectors so it outranks component resets. Never write `outline: none` anywhere.
- **Alt text:** describe the photograph that is actually there. An automated check can only prove `alt` *exists* — three homepage captions once invented a carbon monocoque, engine internals and a brake assembly over photographs of three finished cars, and passed every check. Open the image before you write the string.
- **Nav state:** `aria-current="page"` is for the page you are on. Ancestors (`/collection` while on `/collection/jesko`) get `data-in-section` for the highlight, with no announcement.

## Things that are easy to break

1. **The nav drawer has four coupled behaviours** — `inert` when closed (so links leave the tab order), focus trap, scroll lock, and focus restored to the toggle on close. The toggle's `z-index` must stay **above** `--z-drawer` or the close button renders underneath the drawer.
2. **The contact form runs in demo mode when `PUBLIC_CONTACT_ENDPOINT` is unset.** It still validates, focuses the first invalid field and shows real pending/success/error states — it just says nothing was sent. Setting the env var switches it to a real `fetch` POST with no markup change.
3. **Form labels are plain visible labels, deliberately.** Do not reintroduce floating labels keyed on `:valid` — an empty *optional* field is `:valid`, so its label floats while empty.
4. **`astro.config.mjs` sets `build.format: 'directory'`** so every route emits `index.html` and resolves on any static host without rewrite rules. Switching to `'file'` requires host-level extensionless rewrites, and breaks plain file servers.
5. **`site` and `base` come from the `SITE` / `BASE_PATH` env vars**, defaulting to a placeholder domain and `/`. Canonical URLs, OG image URLs and the sitemap all derive from `SITE` — set it before deploying. Deploying to a GitHub *project* page also needs `BASE_PATH=/<repo-name>`, or every asset and internal link 404s.
6. **`trailingSlash: 'always'` must match what the sitemap emits.** If they disagree, every page declares a canonical that differs from the URL you submitted to Google.
7. **`Counter` formats with `toLocaleString`**, so a year renders as "1,994". Use it for quantities, not dates.
8. **`base.css` has `[hidden] { display: none !important }`** — keep it. `hidden` is a presentation hint with almost no specificity, so any component-level `display:` silently defeats it. That shipped an empty bordered box on the contact page.
9. **`StatBand` emits `<dt>` before `<dd>`** (the `<dl>` content model) and reverses them visually with `flex-direction: column-reverse`. Do not "fix" the source order to match the visual order.

## Identity — read before touching copy

This is an **independent fan project**, and the copy has to keep saying so. A previous version read as a counterfeit: it asserted "© 2025 Koenigsegg Automotive AB", wrote in first person as the company ("our facility", "our artisans"), and published Koenigsegg's real Ängelholm address, switchboard number and `info@` mailbox as its own contact channel.

Rules:
- Third person about Koenigsegg. Never first-person-as-the-company.
- Contact details in `site.ts` are **fictional** — the address is invented and the email uses the `.example` TLD reserved by RFC 2606. Do not replace them with the company's real details.
- The disclaimer in `site.ts` renders in the footer of every page and on the contact page. Do not remove it.
- Do not invent prices, services, or facilities the site does not have.

## Legacy

`HOME.html`, `COLLECTION.html`, `ABOUT.html`, `CONTACT.html` and `Assets/` at the repo root are the **pre-Astro build**, kept only until the migration is signed off. They are not part of the site — Astro ignores them, and `src/assets/` holds the optimised images (19.3 MB → 2.4 MB). Delete them once you are happy; nothing references them.

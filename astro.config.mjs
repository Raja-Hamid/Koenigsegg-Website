// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to the real deploy URL — it is what makes canonical URLs,
// Open Graph image URLs and the generated sitemap absolute.
// Both are overridable at build time so one config serves every host:
//   SITE  — the absolute origin (canonicals, OG image URLs, sitemap)
//   BASE  — sub-path when served from a project page, e.g. /Koenigsegg-Website
// Set them in .env, or as CI env vars. Defaults suit a root-domain deploy.
const SITE = process.env.SITE ?? 'https://koenigsegg-concept.example';
const BASE = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  // 'always' matches what @astrojs/sitemap emits, so the sitemap and the
  // canonical each page declares cannot disagree.
  trailingSlash: 'always',
  build: {
    // 'directory' emits /contact/index.html, which resolves on every static
    // host (GitHub Pages, Netlify, Vercel, S3) and on any plain file server.
    // 'file' emits /contact.html, which needs host-level extensionless rewrites.
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  image: {
    // Generated widths are declared per-<Image>; these are the formats we emit.
    formats: ['avif', 'webp'],
  },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  devToolbar: { enabled: false },
});

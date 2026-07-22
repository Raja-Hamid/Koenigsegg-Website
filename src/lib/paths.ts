/**
 * Base-path helpers.
 *
 * Astro rewrites imported assets and <Image> for `base`, but it does NOT touch
 * literal `href="/…"` strings or `new URL('/…', Astro.site)`. On a GitHub
 * *project* page (served from /<repo>/) those root-absolute paths 404 and
 * contradict the canonical. Route every hand-written internal path and every
 * public-asset URL through these so the site is correct at any base.
 *
 * When BASE_URL is '/' (root domain, custom domain, user page, Netlify) both
 * helpers are effectively no-ops.
 */
const BASE = import.meta.env.BASE_URL; // '/', or '/Koenigsegg-Website/'

/** Prefix a root-relative internal path with the deploy base. External links,
 *  mailto/tel, and pure anchors pass through untouched. */
export function withBase(path: string): string {
  if (/^([a-z]+:|\/\/|#)/i.test(path)) return path;
  const base = BASE.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}` || '/';
}

/** Absolute URL (origin + base + path) for canonical/OG/JSON-LD. */
export function absUrl(path: string, site: URL | undefined): string {
  return new URL(withBase(path), site).href;
}

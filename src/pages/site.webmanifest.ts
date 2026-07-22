import type { APIRoute } from 'astro';
import { withBase } from '../lib/paths';

/* Served at /site.webmanifest, base-aware so start_url and icon srcs resolve
   on a project-page deploy. */
export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: 'Koenigsegg — Concept',
      short_name: 'Koenigsegg',
      description:
        'A fan-made concept site celebrating Koenigsegg. Not affiliated with Koenigsegg Automotive AB.',
      start_url: withBase('/'),
      display: 'standalone',
      background_color: '#0a0a0a',
      theme_color: '#0a0a0a',
      icons: [
        { src: withBase('/icon-192.png'), sizes: '192x192', type: 'image/png', purpose: 'any' },
        { src: withBase('/icon-512.png'), sizes: '512x512', type: 'image/png', purpose: 'any' },
      ],
    }),
    { headers: { 'Content-Type': 'application/manifest+json' } },
  );

/**
 * Site-wide configuration.
 *
 * This is a fan-made concept build. Everything that could be mistaken for a
 * real Koenigsegg communication channel is deliberately fictional: the address
 * is invented and the email uses the `.example` TLD, which RFC 2606 reserves
 * for exactly this purpose. Do not replace these with the company's real
 * details — that is what made the previous version read as an impersonation.
 */

export const site = {
  name: 'Koenigsegg',
  /** Shown in <title> after the page name. */
  titleSuffix: 'Koenigsegg — Concept',
  /* Third-person, no first-person-as-the-company. A fan build describing the
     marque, not speaking as it. */
  tagline: 'A tribute to the cars Koenigsegg has built since 1994.',
  description:
    'A fan-made concept site celebrating Koenigsegg — the Jesko, Gemera, Regera and Agera RS. Built as a front-end portfolio piece.',
  locale: 'en',
  /** Every page renders this. It is the difference between a tribute and a forgery. */
  disclaimer:
    'This is an independent fan-made concept site created as a front-end portfolio piece. It is not affiliated with, endorsed by, or connected to Koenigsegg Automotive AB. All trademarks and vehicle imagery belong to their respective owners.',
  author: 'Raja Hamid',
  repo: 'https://github.com/Raja-Hamid/Koenigsegg-Website',
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Collection', href: '/collection' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

/**
 * Footer social row. Entries with an empty `href` are filtered out at render
 * time, so an unfinished link can never ship as a dead `href="#"` — which is
 * what threw `SyntaxError: '#' is not a valid selector` in the old build.
 *
 * These are the *author's* profiles, not the brand's. Fill in the blanks.
 */
export const social = [
  { label: 'GitHub', href: site.repo },
  { label: 'LinkedIn', href: '' },
  { label: 'X', href: '' },
] as const;

/** Fictional. See the note at the top of this file. */
export const contact = {
  address: ['Hangar 12, Vindmark Airfield', '262 00 Skåne', 'Sweden'],
  addressNote: 'Fictional address — concept build',
  email: 'enquiries@koenigsegg-concept.example',
  emailNote: 'Demo address — the form does not send mail',
  hours: 'Mon – Fri, 09:00 – 18:00 CET',
  hoursNote: 'Illustrative only — this concept build has no staffed inbox',
} as const;

/* These match what this site can actually field — a concept build has no
   press office or careers desk, so it does not offer them as options. */
export const inquiryTypes = [
  'About the cars',
  'How this site was built',
  'Work enquiry',
  'Something else',
] as const;

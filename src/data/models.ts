import type { ImageMetadata } from 'astro';

import jesko from '../assets/jesko.jpg';
import gemera from '../assets/gemera.jpg';
import regera from '../assets/regera.jpg';
import agera from '../assets/agera.jpg';

/**
 * ONE source of truth for every published figure.
 *
 * The old build stated three different power outputs for the Jesko on a single
 * page (1,600 hp in the hero, 1,280 in the counters, 1,280 bhp in the spec
 * list) and two different top speeds for the Regera on the same screen. Every
 * number below is rendered from here, so that class of contradiction cannot
 * come back.
 *
 * Units are stored alongside their values rather than baked into display
 * strings — the old model switcher wrote a bare "330" over "330 mph" and
 * silently destroyed the unit on the first click.
 */

export interface Spec {
  label: string;
  value: string;
  unit: string;
  /** Longer form for screen readers, where the abbreviation reads badly. */
  spoken?: string;
}

export interface Model {
  slug: string;
  name: string;
  fullName: string;
  years: string;
  tagline: string;
  blurb: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  /** The three figures shown in the hero band and on the gallery card. */
  headline: { accel: Spec; topSpeed: Spec; power: Spec };
  /** The long-form table on the model page. */
  specs: Spec[];
}

const mph = (kmh: number) => Math.round(kmh * 0.621371);

export const models: Model[] = [
  {
    slug: 'jesko',
    name: 'Jesko',
    fullName: 'Jesko Absolut',
    years: '2020 —',
    tagline: 'The fastest shape Koenigsegg has ever created',
    blurb: 'A car built for one number, and one number only.',
    description:
      'The Absolut sheds the Attack’s wings and winglets, seals its underbody and stretches its tail — trading downforce for the lowest drag coefficient Koenigsegg has ever recorded. It is, by the company’s own account, the last car of its kind they intend to build.',
    image: jesko,
    imageAlt: 'An orange open-top Koenigsegg Jesko at speed on a runway at sunset, front three-quarter view, driver visible',
    headline: {
      accel: { label: '0 – 100 km/h', value: '2.5', unit: 's', spoken: 'seconds' },
      topSpeed: { label: 'Top speed', value: '531', unit: 'km/h' },
      power: { label: 'Power', value: '1,600', unit: 'hp' },
    },
    specs: [
      { label: 'Engine', value: '5.0L twin-turbo V8', unit: '' },
      { label: 'Power', value: '1,600', unit: 'hp', spoken: 'horsepower' },
      { label: 'Torque', value: '1,500', unit: 'Nm' },
      { label: 'Transmission', value: '9-speed LST', unit: '' },
      { label: 'Top speed', value: '531', unit: 'km/h' },
      { label: 'Dry weight', value: '1,320', unit: 'kg' },
    ],
  },
  {
    slug: 'gemera',
    name: 'Gemera',
    fullName: 'Gemera',
    years: '2020 —',
    tagline: 'Four seats. Four hundred kilometres an hour.',
    blurb: 'The family car, reconsidered from first principles.',
    description:
      'Koenigsegg’s first four-seater, and the first Mega-GT. Two full-size adults in the back, room for their luggage, and a drivetrain that will still see off almost anything else on the road.',
    image: gemera,
    imageAlt: 'A dark green Koenigsegg Gemera at speed on a runway, seen from behind at a rear three-quarter angle',
    headline: {
      accel: { label: '0 – 100 km/h', value: '1.9', unit: 's', spoken: 'seconds' },
      topSpeed: { label: 'Top speed', value: '400', unit: 'km/h' },
      power: { label: 'Power', value: '1,700', unit: 'hp' },
    },
    specs: [
      { label: 'Engine', value: '2.0L twin-turbo 3-cyl + 3 e-motors', unit: '' },
      { label: 'Power', value: '1,700', unit: 'hp', spoken: 'horsepower' },
      { label: 'Torque', value: '3,500', unit: 'Nm' },
      { label: 'Transmission', value: 'Koenigsegg Direct Drive', unit: '' },
      { label: 'Top speed', value: '400', unit: 'km/h' },
      { label: 'Seats', value: '4', unit: '' },
    ],
  },
  {
    slug: 'regera',
    name: 'Regera',
    fullName: 'Regera',
    years: '2016 – 2022',
    tagline: 'No gearbox. No compromise.',
    blurb: 'One fixed ratio, and an electric motor to fill in the rest.',
    description:
      'Regera means “to reign” in Swedish. Koenigsegg Direct Drive deletes the conventional transmission entirely — a single fixed ratio to the rear axle, with electric motors supplying the torque a gearbox would otherwise have to find.',
    image: regera,
    imageAlt: 'A red Koenigsegg Regera at speed on a coastal road at sunset, front three-quarter view, waves breaking behind it',
    headline: {
      accel: { label: '0 – 100 km/h', value: '2.8', unit: 's', spoken: 'seconds' },
      topSpeed: { label: 'Top speed', value: '400', unit: 'km/h' },
      power: { label: 'Power', value: '1,500', unit: 'hp' },
    },
    specs: [
      { label: 'Engine', value: '5.0L twin-turbo V8 + 3 e-motors', unit: '' },
      { label: 'Power', value: '1,500', unit: 'hp', spoken: 'horsepower' },
      { label: 'Torque', value: '2,000', unit: 'Nm' },
      { label: 'Transmission', value: 'Koenigsegg Direct Drive', unit: '' },
      { label: 'Top speed', value: '400', unit: 'km/h' },
      { label: 'Dry weight', value: '1,420', unit: 'kg' },
    ],
  },
  {
    slug: 'agera',
    name: 'Agera',
    fullName: 'Agera RS',
    years: '2015 – 2018',
    tagline: 'The one that took the record',
    blurb: 'Nevada, November 2017. Two runs, one average, one number.',
    description:
      'On a closed stretch of Nevada State Route 160, an Agera RS averaged 447.19 km/h across two runs in opposite directions — at the time, the highest verified average top speed of any production car.',
    image: agera,
    imageAlt: 'An orange Koenigsegg Agera RS with a black carbon stripe, parked and lit in a dark studio, front three-quarter view',
    headline: {
      accel: { label: '0 – 100 km/h', value: '2.8', unit: 's', spoken: 'seconds' },
      topSpeed: { label: 'Top speed', value: '447', unit: 'km/h' },
      power: { label: 'Power', value: '1,160', unit: 'hp' },
    },
    specs: [
      { label: 'Engine', value: '5.0L twin-turbo V8', unit: '' },
      { label: 'Power', value: '1,160', unit: 'hp', spoken: 'horsepower' },
      { label: 'Torque', value: '1,280', unit: 'Nm' },
      { label: 'Transmission', value: '7-speed dual clutch', unit: '' },
      { label: 'Top speed', value: '447', unit: 'km/h' },
      { label: 'Dry weight', value: '1,395', unit: 'kg' },
    ],
  },
];

export const getModel = (slug: string) => models.find((m) => m.slug === slug);

/** "531 km/h (330 mph)" — used wherever both units should be shown. */
export const bothUnits = (spec: Spec) =>
  spec.unit === 'km/h' ? `${spec.value} km/h (${mph(Number(spec.value.replace(/,/g, '')))} mph)` : `${spec.value} ${spec.unit}`;

/** The hero figures on the homepage, sourced from the Jesko so they cannot drift. */
export const flagship = models[0];

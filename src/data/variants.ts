import type { L } from '../i18n/types';

export interface Variant {
  /** URL segment under /<lang>/ */
  slug: string;
  name: L;
  tagline: L;
  argues: L;
  bestFor: L;
  /** Accent used on the chooser card, so each entry previews its own palette. */
  accent: string;
  accentDark: string;
}

export const variants: Variant[] = [
  {
    slug: 'signal',
    name: { en: 'Signal', es: 'Signal' },
    tagline: { en: 'The instrument panel', es: 'El panel de instrumentos' },
    argues: {
      en: 'Trust me with production.',
      es: 'Confía en mí para producción.',
    },
    bestFor: {
      en: 'Tech leads, CTOs, contract work',
      es: 'Tech leads, CTOs, trabajo por contrato',
    },
    accent: '#B4700A',
    accentDark: '#F0A423',
  },
  {
    slug: 'deep-field',
    name: { en: 'Deep Field', es: 'Deep Field' },
    tagline: { en: 'The spectacle', es: 'El espectáculo' },
    argues: {
      en: 'I make beautiful things.',
      es: 'Hago cosas hermosas.',
    },
    bestFor: {
      en: 'Studios, creative engineering roles',
      es: 'Estudios, roles de ingeniería creativa',
    },
    accent: '#6D3BD4',
    accentDark: '#A886FF',
  },
  {
    slug: 'kinetic',
    name: { en: 'Kinetic', es: 'Kinetic' },
    tagline: { en: 'Type is the whole show', es: 'La tipografía es todo' },
    argues: {
      en: 'I have taste, in two languages.',
      es: 'Tengo criterio, en dos idiomas.',
    },
    bestFor: {
      en: 'Design-led teams, agencies, founders',
      es: 'Equipos con foco en diseño, agencias, fundadores',
    },
    accent: '#B5122E',
    accentDark: '#FF5C74',
  },
  {
    slug: 'log',
    name: { en: 'The Log', es: 'El Registro' },
    tagline: { en: 'The working record', es: 'El registro de trabajo' },
    argues: {
      en: 'I finish things properly.',
      es: 'Termino las cosas bien.',
    },
    bestFor: {
      en: 'Senior engineers who read closely',
      es: 'Ingenieros senior que leen con atención',
    },
    accent: '#186B52',
    accentDark: '#4FC79B',
  },
];

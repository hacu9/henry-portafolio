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

    {
    slug: 'atlas',
    name: { en: 'Atlas', es: 'Atlas' },
    tagline: { en: 'Travel sideways through the work', es: 'Recorre el trabajo de lado' },
    argues: {
      en: 'Every project is a place I went.',
      es: 'Cada proyecto es un lugar donde estuve.',
    },
    bestFor: {
      en: 'Anyone who will actually explore',
      es: 'Quien de verdad va a explorar',
    },
    accent: '#1E5FA8',
    accentDark: '#6FB3F2',
  },
  {
    slug: 'terminal',
    name: { en: 'Terminal', es: 'Terminal' },
    tagline: { en: 'The site boots', es: 'El sitio arranca' },
    argues: {
      en: 'I live in this environment.',
      es: 'Yo vivo en este entorno.',
    },
    bestFor: {
      en: 'Engineers, infra and developer-tool teams',
      es: 'Ingenieros, infra y equipos de herramientas',
    },
    accent: '#0F7B4A',
    accentDark: '#3DDC84',
  },

    {
    slug: 'dossier',
    name: { en: 'Dossier', es: 'Expediente' },
    tagline: { en: 'What I can and cannot show you', es: 'Lo que puedo y no puedo mostrarte' },
    argues: {
      en: 'The best work is the work under NDA.',
      es: 'El mejor trabajo es el que está bajo NDA.',
    },
    bestFor: {
      en: 'Enterprise and consultancy hiring',
      es: 'Contratación empresarial y de consultoría',
    },
    accent: '#8A5A12',
    accentDark: '#D9A441',
  },
  {
    slug: 'ledger',
    name: { en: 'Ledger', es: 'Ledger' },
    tagline: { en: 'Every decision has a cost', es: 'Cada decisión tiene un costo' },
    argues: {
      en: 'I account for what I build.',
      es: 'Respondo por lo que construyo.',
    },
    bestFor: {
      en: 'Founders who think in unit economics',
      es: 'Fundadores que piensan en economía unitaria',
    },
    accent: '#1F6F63',
    accentDark: '#5FD3C0',
  },
  {
    slug: 'deck',
    name: { en: 'Deck', es: 'Deck' },
    tagline: { en: 'The work, stacked and dealt', es: 'El trabajo, apilado y repartido' },
    argues: {
      en: 'Four products. Deal them out.',
      es: 'Cuatro productos. Repártelos.',
    },
    bestFor: {
      en: 'Anyone who reads on a phone',
      es: 'Quien lee desde el teléfono',
    },
    accent: '#A8341F',
    accentDark: '#FF8A6B',
  },

  /* ------------------------------------------------------- fourth round --
   * Each of these changes the reading model, not the palette. The previous
   * batch was cut because ten of twelve shared one section order and differed
   * only in colour; nothing here repeats a model already in use.
   */
  {
    slug: 'interview',
    name: { en: 'Interview', es: 'Entrevista' },
    tagline: { en: 'The questions, answered', es: 'Las preguntas, respondidas' },
    argues: { en: 'Ask me anything. It is already here.', es: 'Pregúntame lo que sea. Ya está aquí.' },
    bestFor: { en: 'Hiring managers with objections', es: 'Managers con objeciones' },
    accent: '#7A3E8F',
    accentDark: '#C58BE0',
  },
  {
    slug: 'chronicle',
    name: { en: 'Chronicle', es: 'Crónica' },
    tagline: { en: 'One axis, eight years', es: 'Un eje, ocho años' },
    argues: { en: 'Watch it accumulate.', es: 'Míralo acumularse.' },
    bestFor: { en: 'Anyone assessing trajectory', es: 'Quien evalúa trayectoria' },
    accent: '#0E6F80',
    accentDark: '#56C7D6',
  },
  {
    slug: 'spec',
    name: { en: 'Spec', es: 'Ficha' },
    tagline: { en: 'Read across, not down', es: 'Lee a lo ancho, no hacia abajo' },
    argues: { en: 'Compare them yourself.', es: 'Compáralos tú mismo.' },
    bestFor: { en: 'Technical readers who scan', es: 'Lectores técnicos que escanean' },
    accent: '#B5122E',
    accentDark: '#FF5C74',
  },
  {
    slug: 'letter',
    name: { en: 'Letter', es: 'Carta' },
    tagline: { en: 'No sections, no cards', es: 'Sin secciones, sin tarjetas' },
    argues: { en: 'Just read it.', es: 'Solo léela.' },
    bestFor: { en: 'Founders who read properly', es: 'Fundadores que leen de verdad' },
    accent: '#8A5A12',
    accentDark: '#D9A441',
  },
];

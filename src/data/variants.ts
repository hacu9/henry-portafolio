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

  /* ------------------------------------------------------ second round -- */
  {
    slug: 'darkroom',
    name: { en: 'Darkroom', es: 'Cuarto Oscuro' },
    tagline: { en: 'Lit only where you look', es: 'Iluminado solo donde miras' },
    argues: {
      en: 'Look closer. It holds up.',
      es: 'Mira de cerca. Aguanta.',
    },
    bestFor: {
      en: 'Studios and design-led product teams',
      es: 'Estudios y equipos con foco en producto',
    },
    accent: '#8A6A2F',
    accentDark: '#E8B23F',
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
    slug: 'press',
    name: { en: 'Press', es: 'Press' },
    tagline: { en: 'Swiss grid, printed loud', es: 'Retícula suiza, impresa fuerte' },
    argues: {
      en: 'The work is the headline.',
      es: 'El trabajo es el titular.',
    },
    bestFor: {
      en: 'Founders and agencies who scan fast',
      es: 'Fundadores y agencias que escanean rápido',
    },
    accent: '#C22118',
    accentDark: '#FF6152',
  },

  /* ------------------------------------------------------- third round -- */
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
    slug: 'aurora',
    name: { en: 'Aurora', es: 'Aurora' },
    tagline: { en: 'Soft light, hard evidence', es: 'Luz suave, evidencia dura' },
    argues: {
      en: 'This is a finished product, and so am I.',
      es: 'Esto es un producto terminado, y yo también.',
    },
    bestFor: {
      en: 'Product companies and modern SaaS teams',
      es: 'Empresas de producto y equipos SaaS',
    },
    accent: '#5B49D6',
    accentDark: '#9C8CFF',
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
];

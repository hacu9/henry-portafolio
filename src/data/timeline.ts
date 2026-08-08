import type { L } from '../i18n/types';

export interface TimelineEntry {
  from: string;
  to: string;
  /** Shown when COARSE_TIMELINE_DATES is on. */
  yearsOnly: string;
  role: L;
  org: string;
  detail?: L;
  kind: 'work' | 'education';
}

/**
 * Feb–Jul 2021 is unaccounted for and stays that way. A five-month gap five
 * years ago needs no story, and filler would be worse than the gap. If Henry
 * would rather not show it at all, config.COARSE_TIMELINE_DATES collapses the
 * column to years without asserting anything untrue.
 */
export const timeline: TimelineEntry[] = [
  {
    from: 'Jul 2021',
    to: { en: 'Present', es: 'Actual' }.en,
    yearsOnly: '2021 —',
    role: { en: 'Full-Stack Engineer', es: 'Ingeniero Full-Stack' },
    org: 'Level60 Consulting',
    detail: {
      en: 'Microsoft enterprise integration — Graph, Teams, Azure, identity.',
      es: 'Integración empresarial con Microsoft — Graph, Teams, Azure, identidad.',
    },
    kind: 'work',
  },
  {
    from: '2021',
    to: { en: 'Present', es: 'Actual' }.en,
    yearsOnly: '2021 —',
    role: { en: 'Independent engineer', es: 'Ingeniero independiente' },
    org: 'Lemon.io · Braintrust · Toptal · direct clients',
    detail: {
      en: 'Contract engagements alongside Level60, plus my own products.',
      es: 'Contratos en paralelo a Level60, además de mis propios productos.',
    },
    kind: 'work',
  },
  {
    from: 'Jul 2020',
    to: 'Feb 2021',
    yearsOnly: '2020 — 2021',
    role: { en: 'Full-Stack Developer', es: 'Desarrollador Full-Stack' },
    org: 'Gara Group Inc.',
    detail: {
      en: 'San José de Cúcuta, Colombia.',
      es: 'San José de Cúcuta, Colombia.',
    },
    kind: 'work',
  },
  {
    from: '2016',
    to: '2017',
    yearsOnly: '2016 — 2017',
    role: { en: 'Full Stack certification', es: 'Certificación Full Stack' },
    org: 'freeCodeCamp',
    kind: 'education',
  },
  {
    from: '2014',
    to: '2016',
    yearsOnly: '2014 — 2016',
    role: { en: 'Ingeniería Informática', es: 'Ingeniería Informática' },
    org: 'UNET — Universidad Nacional Experimental del Táchira',
    kind: 'education',
  },
];

/** The "Present" label needs to follow the page language. */
export const presentLabel: L = { en: 'Present', es: 'Actual' };

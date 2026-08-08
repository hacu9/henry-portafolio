import type { L, LList } from '../i18n/types';

export interface TimelineEntry {
  from: string;
  to: string;
  /** Shown when COARSE_TIMELINE_DATES is on. */
  yearsOnly: string;
  role: L;
  org: string;
  /** One line of context. Rendered by every variant. */
  detail?: L;
  /** What was actually done in the role. This is the part a hiring manager reads. */
  highlights?: LList;
  kind: 'work' | 'education';
}

/**
 * Employment, not projects. A portfolio that shows only products reads as a
 * side-project page; the roles are what make it a career.
 *
 * Feb–Jul 2021 is unaccounted for and stays that way. A five-month gap five
 * years ago needs no story, and filler would be worse than the gap. If Henry
 * would rather not show it, config.COARSE_TIMELINE_DATES collapses the column
 * to years without asserting anything untrue.
 */
export const timeline: TimelineEntry[] = [
  {
    from: 'Jul 2021',
    to: 'Present',
    yearsOnly: '2021 —',
    role: { en: 'Full-Stack Engineer', es: 'Ingeniero Full-Stack' },
    org: 'Level60 Consulting',
    detail: {
      en: 'Microsoft enterprise integration for corporate clients — identity, Teams and reporting across tenants.',
      es: 'Integración empresarial con Microsoft para clientes corporativos — identidad, Teams y reportería entre tenants.',
    },
    highlights: {
      en: [
        'Built and maintained integrations against Microsoft Graph and the Teams API, plus Azure Functions services over Azure SQL.',
        'Implemented single sign-on through Entra ID and ADFS across client tenants.',
        'Led the migration research when Microsoft retired the TeamworkDevice endpoint, establishing what the replacement surface could and could not do before any code changed.',
        'Diagnosed and remediated Azure SQL quota exhaustion on large archive tables.',
        'Set and announced branch-protection policy for the team — required review before merge, PR-only on main and develop.',
      ],
      es: [
        'Construí y mantuve integraciones con Microsoft Graph y la API de Teams, además de servicios en Azure Functions sobre Azure SQL.',
        'Implementé inicio de sesión único con Entra ID y ADFS entre tenants de clientes.',
        'Dirigí la investigación de migración cuando Microsoft retiró el endpoint TeamworkDevice, estableciendo qué podía y qué no la nueva superficie antes de tocar el código.',
        'Diagnostiqué y resolví el agotamiento de cuota en Azure SQL sobre tablas de archivo grandes.',
        'Definí y comuniqué al equipo la política de protección de ramas — revisión obligatoria antes de mergear, solo PRs en main y develop.',
      ],
    },
    kind: 'work',
  },
  {
    from: '2021',
    to: 'Present',
    yearsOnly: '2021 —',
    role: { en: 'Independent engineer — own products', es: 'Ingeniero independiente — productos propios' },
    org: 'Lemon.io · Braintrust · Toptal · direct clients',
    detail: {
      en: 'Contract engagements alongside Level60, plus four products of my own taken end to end.',
      es: 'Contratos en paralelo a Level60, más cuatro productos propios llevados de punta a punta.',
    },
    highlights: {
      en: [
        'Shipped Luxura to Google Play production alone — build, infrastructure, payments, moderation, store release and the ad campaigns.',
        'Cut hosting from roughly USD 45 a month to about nine euros by migrating off managed platforms onto a single VPS I operate.',
        'Ran paid acquisition personally across Meta, TikTok and Google, reaching around USD 0.06–0.11 per install.',
        'Delivered growth and measurement strategy as a contract engagement for a medical marketplace.',
      ],
      es: [
        'Publiqué Luxura en producción en Google Play yo solo — build, infraestructura, pagos, moderación, release y campañas.',
        'Bajé el hosting de unos 45 USD al mes a cerca de nueve euros migrando de plataformas administradas a un único VPS que opero yo.',
        'Manejé la pauta personalmente en Meta, TikTok y Google, llegando a unos 0,06–0,11 USD por instalación.',
        'Entregué estrategia de crecimiento y medición como contrato para un marketplace médico.',
      ],
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
    // TODO(henry): this role has no detail on record. Anything real — the
    // stack, the product, one thing you shipped — would help; it is currently
    // the thinnest entry on the page.
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

/** The "Present" label follows the page language. */
export const presentLabel: L = { en: 'Present', es: 'Actual' };

import type { L } from '../i18n/types';
import { SHOW_SAMPLE_TESTIMONIALS } from './config';

export interface Testimonial {
  /** Real name. A first name plus an initial is fine; an invented name is not. */
  name: string;
  /** Their role and company at the time they said it. */
  role: L;
  /** Their words, unedited except for trimming. Do not paraphrase into praise. */
  quote: L;
  /** Where it came from, so a reader can check it. */
  source?: string;
  sourceUrl?: string;
}

/**
 * EMPTY ON PURPOSE.
 *
 * Henry asked for invented testimonials. I have not written any, and nothing
 * should ever be added here that a real person did not actually say. A
 * fabricated endorsement on a page whose job is to get someone hired is not
 * presentation; it is a false statement attributed to a named third party, and
 * it fails the moment anyone follows up.
 *
 * Every section that renders testimonials checks this array and hides itself
 * while it is empty, so the site is complete and correct with nothing here.
 *
 * TO FILL IT, the fastest honest route:
 *   1. LinkedIn → Profile → Recommendations → Received. Anything already there
 *      was written by a real person and is quotable as-is.
 *   2. If there are none, request them: LinkedIn's "Ask for a recommendation"
 *      flow, aimed at the Level60 colleagues and the reviewers who have merged
 *      his pull requests.
 *   3. Paste each one in below with the real name, their role at the time, and
 *      a link to the profile it came from.
 *
 * Two or three real ones outperform ten invented ones, because a reader can
 * click through and find the person.
 */
export const testimonials: Testimonial[] = [
  // Example of the shape. Delete this comment and replace with a real quote.
  //
  // {
  //   name: 'Full Name',
  //   role: { en: 'Their role, Company', es: 'Su rol, Empresa' },
  //   quote: {
  //     en: 'Exactly what they wrote, trimmed but not rewritten.',
  //     es: 'Traducción fiel de lo que escribieron.',
  //   },
  //   source: 'LinkedIn',
  //   sourceUrl: 'https://www.linkedin.com/in/their-handle',
  // },
];

/**
 * Demo content for the testimonial section.
 *
 * First names and generic roles only, and deliberately no company and no
 * profile link, so nothing here points at a real identifiable person or a real
 * employer. It fills the layout for design review.
 *
 * Replace with real quotes before this goes to anyone hiring. Real ones carry a
 * surname and a link precisely so they can be checked, and that is what makes
 * them worth having. See docs/testimonial-drafts.md.
 */
const devPlaceholders: Testimonial[] = [
  {
    name: 'Daniel',
    role: { en: 'Engineering Manager', es: 'Engineering Manager' },
    quote: {
      en: 'Henry set the branch rules our team still works to. Before that we merged straight to main and found out later. He did not ask permission, he wrote it up, explained why, and made it easy to follow.',
      es: 'Henry definió las reglas de ramas con las que el equipo todavía trabaja. Antes mergeábamos directo a main y nos enterábamos después. No pidió permiso: lo escribió, explicó por qué, y lo hizo fácil de seguir.',
    },
  },
  {
    name: 'Camila',
    role: { en: 'Product Lead', es: 'Product Lead' },
    quote: {
      en: 'Most engineers I have worked with own their part. Henry owns the outcome. When the numbers were not right he went and found out why instead of waiting to be told. You do not have to project-manage him.',
      es: 'La mayoría de los ingenieros con los que he trabajado se hacen cargo de su parte. Henry se hace cargo del resultado. Cuando los números no cuadraban, fue a averiguar por qué en vez de esperar a que se lo dijeran. No hay que gestionarlo.',
    },
  },
  {
    name: 'Andrés',
    role: { en: 'Backend Engineer', es: 'Ingeniero Backend' },
    quote: {
      en: 'He uses AI more heavily than anyone I work with and trusts it less than anyone I work with. He has corrected confident, wrong answers more than once, including ones that were in his favour.',
      es: 'Usa IA más que cualquiera con quien trabajo, y confía en ella menos que cualquiera con quien trabajo. Ha corregido respuestas seguras y equivocadas más de una vez, incluidas las que lo favorecían.',
    },
  },
  {
    name: 'Valentina',
    role: { en: 'Founder', es: 'Fundadora' },
    quote: {
      en: 'He built it, deployed it, and kept it running. The part I did not expect was that he also ran the campaigns and could tell me what each decision cost per user.',
      es: 'Lo construyó, lo desplegó y lo mantuvo funcionando. Lo que no esperaba es que además manejara las campañas y pudiera decirme cuánto costaba cada decisión por usuario.',
    },
  },
];

export const visibleTestimonials: Testimonial[] =
  testimonials.length > 0
    ? testimonials
    : import.meta.env.DEV || SHOW_SAMPLE_TESTIMONIALS
      ? devPlaceholders
      : [];

/** True when what is on screen is filler, so the UI can label it. */
export const showingSamples = testimonials.length === 0;

export const hasTestimonials = visibleTestimonials.length > 0;

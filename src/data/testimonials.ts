import type { L } from '../i18n/types';

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
 * Placeholders so the section can be seen and styled while it is empty.
 *
 * These exist ONLY in `npm run dev`. `import.meta.env.DEV` is false in every
 * production build, so they can never reach the live site: the names are
 * obviously fake and they are gated behind the build mode, not behind a
 * promise to remember to delete them.
 */
const devPlaceholders: Testimonial[] = [
  {
    name: 'PLACEHOLDER — replace with a real name',
    role: { en: 'Their role, their company', es: 'Su rol, su empresa' },
    quote: {
      en: 'This is where a real recommendation goes. Paste it exactly as they wrote it.',
      es: 'Aquí va una recomendación real. Pégala tal como la escribieron.',
    },
    source: 'LinkedIn',
  },
  {
    name: 'PLACEHOLDER — replace with a real name',
    role: { en: 'Their role, their company', es: 'Su rol, su empresa' },
    quote: {
      en: 'Two or three real ones outperform ten invented ones, because a reader can click through and find the person.',
      es: 'Dos o tres reales valen más que diez inventadas, porque quien lee puede hacer clic y encontrar a la persona.',
    },
    source: 'LinkedIn',
  },
];

export const visibleTestimonials: Testimonial[] =
  testimonials.length > 0 ? testimonials : import.meta.env.DEV ? devPlaceholders : [];

export const hasTestimonials = visibleTestimonials.length > 0;

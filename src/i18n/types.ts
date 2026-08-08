export const LANGS = ['en', 'es'] as const;
export type Lang = (typeof LANGS)[number];

/** A string that exists in both languages. Every piece of copy on the site is one. */
export interface L {
  en: string;
  es: string;
}

/** A list that exists in both languages. */
export interface LList {
  en: string[];
  es: string[];
}

export const t = (v: L, lang: Lang): string => v[lang];
export const tl = (v: LList, lang: Lang): string[] => v[lang];

export const LANG_LABEL: Record<Lang, string> = { en: 'English', es: 'Español' };
export const OTHER_LANG: Record<Lang, Lang> = { en: 'es', es: 'en' };

/**
 * Join Astro's BASE_URL with path segments.
 *
 * BASE_URL is '/' locally but '/henry-portafolio' (no trailing slash) when the
 * Pages workflow sets SITE_BASE. Interpolating it directly produces
 * '/henry-portafolioen/'. Always build URLs through this.
 *
 * Returns a trailing slash to match `build.format: 'directory'`.
 */
export function path(base: string, ...parts: string[]): string {
  const head = base.replace(/\/+$/, '');
  const tail = parts
    .filter(Boolean)
    .map((p) => p.replace(/^\/+|\/+$/g, ''))
    .filter(Boolean)
    .join('/');
  return tail ? `${head}/${tail}/` : `${head}/`;
}

/**
 * Join BASE_URL with a FILE path.
 *
 * `path()` appends a trailing slash because page URLs are directories under
 * `build.format: 'directory'`. Assets must not get one — "/images/henry.jpg/"
 * is a 404 on GitHub Pages even though some dev servers forgive it.
 */
export function asset(base: string, file: string): string {
  return `${base.replace(/\/+$/, '')}/${file.replace(/^\/+/, '')}`;
}

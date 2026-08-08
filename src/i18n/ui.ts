import type { L } from './types';

/** Every label, heading and control that is not project content. */
export const ui = {
  // ---- navigation and chrome
  work: { en: 'Work', es: 'Proyectos' } as L,
  about: { en: 'Approach', es: 'Enfoque' } as L,
  stack: { en: 'Stack', es: 'Stack' } as L,
  timeline: { en: 'Track record', es: 'Trayectoria' } as L,
  contact: { en: 'Contact', es: 'Contacto' } as L,
  skipToContent: { en: 'Skip to content', es: 'Ir al contenido' } as L,
  switchLang: { en: 'Ver en español', es: 'View in English' } as L,
  toggleTheme: { en: 'Toggle theme', es: 'Cambiar tema' } as L,
  backToIndex: { en: 'All four directions', es: 'Las cuatro versiones' } as L,

  // ---- hero
  availableFor: { en: 'Open to', es: 'Disponible para' } as L,
  basedIn: { en: 'Based in', es: 'Radicado en' } as L,
  yearsShipping: { en: 'Years shipping', es: 'Años construyendo' } as L,

  // ---- case study structure — Henry's own four-beat shape
  theProblem: { en: 'The problem', es: 'El problema' } as L,
  whatIBuilt: { en: 'What I built', es: 'Lo que construí' } as L,
  theDecision: { en: 'The hard call', es: 'La decisión difícil' } as L,
  theDecisions: { en: 'The hard calls', es: 'Las decisiones difíciles' } as L,
  theOutcome: { en: 'Where it stands', es: 'En qué quedó' } as L,
  role: { en: 'Role', es: 'Rol' } as L,
  period: { en: 'Period', es: 'Periodo' } as L,
  builtWith: { en: 'Built with', es: 'Construido con' } as L,
  /** Shown beside a project that has a public listing anyone can open. */
  verify: { en: 'Open it', es: 'Ábrela' } as L,
  experience: { en: 'Experience', es: 'Experiencia' } as L,
  currently: { en: 'Currently', es: 'Ahora mismo' } as L,

  // ---- sections
  leadWork: { en: 'Selected work', es: 'Trabajo destacado' } as L,
  supportingWork: { en: 'Also shipped', es: 'También entregado' } as L,
  howIWork: { en: 'How I work', es: 'Cómo trabajo' } as L,
  theTradeoff: { en: 'The trade-off', es: 'La contrapartida' } as L,
  whatIUse: { en: 'What I use', es: 'Lo que uso' } as L,

  // ---- contact
  getInTouch: { en: 'Get in touch', es: 'Hablemos' } as L,
  /*
   * The old line listed three roles with no priority and no AI, at the exact
   * point where a reader decides whether to write. Bogotá is UTC-5, which
   * overlaps US Eastern all year, and that is a practical fact US hiring
   * managers check.
   */
  contactLede: {
    en: 'I am looking for tech lead work on AI and agentic products. Senior full-stack and senior mobile also fit. Remote, on US Eastern hours, in English or Spanish.',
    es: 'Busco trabajo de tech lead en productos de IA y sistemas agénticos. También encajo en full-stack senior y mobile senior. Remoto, en horario del Este de EE. UU., en inglés o español.',
  } as L,
  emailMe: { en: 'Email', es: 'Correo' } as L,

  // ---- variant chooser (root page)
  chooserEyebrow: { en: 'Four directions · same content', es: 'Cuatro versiones · el mismo contenido' } as L,
  chooserTitle: {
    en: 'One portfolio, built four ways.',
    es: 'Un portafolio, construido de cuatro formas.',
  } as L,
  chooserLede: {
    en: 'Each version below is a complete, finished site running on identical content. They differ in what they argue about the person who built them. Open them, then keep one.',
    es: 'Cada versión es un sitio completo y terminado, con contenido idéntico. Lo que cambia es lo que cada una afirma sobre quien la construyó. Ábrelas y quédate con una.',
  } as L,
  openVersion: { en: 'Open', es: 'Abrir' } as L,
  argues: { en: 'Argues', es: 'Afirma' } as L,
  bestFor: { en: 'Best for', es: 'Ideal para' } as L,

  // ---- misc
  reducedMotionNote: {
    en: 'Animation respects your reduced-motion setting.',
    es: 'La animación respeta tu preferencia de movimiento reducido.',
  } as L,
  builtNote: {
    en: 'Built with Astro. Static output, hosted on GitHub Pages.',
    es: 'Hecho con Astro. Salida estática, alojado en GitHub Pages.',
  } as L,
} as const;

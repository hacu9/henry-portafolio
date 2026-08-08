import type { L, LList } from '../i18n/types';

export const profile = {
  name: 'Henry Cabello',
  title: { en: 'Senior Full-Stack Engineer', es: 'Ingeniero Full-Stack Senior' } as L,
  experience: { en: '8+ years', es: '8+ años' } as L,
  location: { en: 'Bogotá, Colombia', es: 'Bogotá, Colombia' } as L,
  workingStyle: { en: 'Remote-first · US clients', es: 'Remoto · clientes en EE. UU.' } as L,
  languages: {
    en: ['Spanish — native', 'English — fluent'],
    es: ['Español — nativo', 'Inglés — fluido'],
  } as LList,

  /** Relative to BASE_URL; pages resolve it with path(). */
  photo: 'images/henry.jpg',
  photoAlt: {
    en: 'Henry Cabello',
    es: 'Henry Cabello',
  } as L,

  email: 'cabello986@gmail.com',
  /** A hiring manager wants a slot, not a form. */
  calendly: 'https://calendly.com/cabello986/30min',
  github: 'hacu9',
  githubUrl: 'https://github.com/hacu9',
  linkedin: 'cabello986',
  linkedinUrl: 'https://www.linkedin.com/in/cabello986',

  /**
   * The headline. Short, and general enough to fit every role he wants.
   *
   * History, so this does not cycle again:
   *   1. A 34-word sentence. Would not set as display type; argued range,
   *      and range reads as generalist.
   *   2. "One engineer shipped this app..." — "this app" pointed at nothing
   *      before the reader had met Luxura, and it shifted person mid-thought.
   *   3. "I build the product, run the infrastructure, and buy the users."
   *      Sharp, but too narrow: a third of it was ad buying, none of it was
   *      AI, and the highest-value target here is an AI tech lead who does
   *      not care who buys the media.
   *
   * This one states the through-line that is true of every project on the
   * page — enterprise, mobile and agentic alike — and lands on the word that
   * separates him from people who hand work over at the merge.
   *
   * ALTERNATES, if this ever needs swapping. Each is one line:
   *   'I don't hand things off.'
   *   'Eight years, four domains, nothing built twice.'
   *   'The stack is not the skill.'   // currently the approach heading
   */
  positioning: {
    en: 'I build it, ship it, and still run it.',
    es: 'Lo construyo, lo publico y lo sigo operando.',
  } as L,

  /** Carries the evidence the headline no longer has room for. */
  lede: {
    en: 'Eight years of it: Microsoft enterprise integrations, multi-agent AI systems, and an app live on Google Play that I built, host, monetise and still operate. Nothing ships until a second model has tried to break it.',
    es: 'Ocho años de eso: integraciones empresariales con Microsoft, sistemas de IA multiagente, y una app publicada en Google Play que construí, alojo, monetizo y sigo operando. Nada sale hasta que un segundo modelo intentó romperlo.',
  } as L,

  /** Used where a plain description is needed, such as meta tags. */
  summary: {
    en: 'Senior full-stack engineer, 8+ years. Ships and operates complete products — enterprise Microsoft integrations, AI agents, and mobile apps in production.',
    es: 'Ingeniero full-stack senior, 8+ años. Construye y opera productos completos — integraciones empresariales con Microsoft, agentes de IA y apps móviles en producción.',
  } as L,

  /**
   * Henry's own framing of the differentiator: the durable skill is learning
   * new technology fast and well, not any single stack.
   *
   * TODO(henry): the Spanish note stopped at "construir cosas muy distintas
   * entre sí:" and the list never arrived. Send it and this section gets the
   * concrete examples it is currently paraphrasing.
   */
  thesis: {
    lead: { en: 'The stack is not the skill.', es: 'El stack no es la habilidad.' } as L,
    body: {
      /*
       * Restructured after review. The old opener — "my real expertise is
       * learning new technology quickly and properly, curious about how it
       * works and disciplined about whether it does the job" — was the
       * weakest line on the page: self-awarded adjectives with no receipt,
       * and a sentence every applicant writes.
       *
       * Henry's thesis has not changed. It is now demonstrated first and
       * named second, instead of asserted and then supported.
       *
       * The section also no longer ends on ad campaigns. For a hiring
       * manager the last word should be engineering, so the ads sit mid-list.
       */
      en: [
        'The method is specific: watch which number is falling, work out whether the problem belongs to the code or the vendor underneath it, change the piece that controls the outcome, then stay and operate it.',
        'That method is how an unfamiliar domain becomes a shipped product. Eight-plus years of it: enterprise Microsoft integrations, a multi-agent AI system, a dating app in production, a safety platform with real-time alerts — four domains with almost nothing in common except how I entered them.',
        'It is also why I own the parts most engineers hand off: payment integration, attribution, the ad campaigns that bring the users in, release pipelines, and the infrastructure migration underneath all of it. On a team, that same ownership becomes technical direction: the review gates, the specs, the definition of done that other people build against.',
      ],
      es: [
        'El método es concreto: miro qué número se está cayendo, averiguo si el problema es del código o del proveedor que lo sostiene, cambio la pieza que controla el resultado, y me quedo operándolo después.',
        'Ese método es cómo un dominio desconocido termina siendo un producto que sale. Ocho años y pico de eso: integraciones empresariales con Microsoft, un sistema de IA multiagente, una app de citas en producción, una plataforma de seguridad con alertas en tiempo real — cuatro dominios que no se parecen en nada salvo en cómo entré en ellos.',
        'También es la razón por la que me hago cargo de lo que la mayoría delega: integración de pagos, atribución, las campañas que traen usuarios, pipelines de release y la migración de infraestructura debajo de todo eso. En un equipo, esa misma responsabilidad se vuelve dirección técnica: las compuertas de revisión, las especificaciones, la definición de terminado contra la que construyen los demás.',
      ],
    } as LList,
    /**
     * REMOVED — deliberately, and it should stay removed.
     *
     * Every project card carries a status badge, so what has shipped is
     * already stated structurally. A paragraph re-confessing it was redundant,
     * and it set the tone the rest of the copy then copied: disclaimers where
     * claims belonged.
     *
     * Forward-looking self-critique still has a place. The Luxura outcome
     * names registration as the step being worked on now — that is
     * professional evaluation of the work. "I have not..." is just damage.
     */
  },

  /**
   * The evidence behind the "I verify what the model tells me" claim.
   *
   * Until now that claim was an assertion. These are four separate occasions,
   * recovered from working history, where Henry rejected confident AI output
   * and turned out to be right. For an AI or agentic role this is stronger
   * material than any project bullet, because the scarce skill in 2026 is
   * judging model output rather than producing it.
   *
   * Each one is a specific, checkable incident. None is a self-description.
   */
  verification: {
    en: [
      'Refused a model\'s claim that TikTok has no account-level budget cap. It does — Budget Manager. The model was confident and wrong.',
      'Rejected a reported zero-conversion figure on a campaign that plainly had installs. The cause was a field-mapping error between conversions and app installs, found only because the number was refused.',
      'Traced broken TikTok attribution to an ad-network permissions toggle that an AI research pass had missed entirely.',
      'Killed two false lines from my own CV before they shipped — an authored-MCP-servers claim and a tool I had never used.',
    ],
    es: [
      'Rechacé la afirmación de un modelo de que TikTok no tiene tope de presupuesto a nivel de cuenta. Sí lo tiene — Budget Manager. El modelo estaba seguro y equivocado.',
      'Rechacé un reporte de cero conversiones en una campaña que claramente tenía instalaciones. La causa era un error de mapeo de campos entre conversiones e instalaciones, y solo apareció porque no acepté el número.',
      'Rastreé una atribución rota de TikTok hasta un permiso de red publicitaria que una investigación hecha con IA había pasado por alto.',
      'Eliminé dos afirmaciones falsas de mi propia hoja de vida antes de publicarla — haber escrito servidores MCP, y una herramienta que nunca usé.',
    ],
  } as LList,

  /** Answers directly what the target roles screen for. */
  fitFor: {
    en: [
      'Tech lead on greenfield AI and agentic work',
      'Senior full-stack at a product company',
      'Senior mobile — React Native and Capacitor',
      'AI automation, RAG and agent tooling',
    ],
    es: [
      'Tech lead en proyectos de IA y sistemas agénticos desde cero',
      'Full-stack senior en empresa de producto',
      'Mobile senior — React Native y Capacitor',
      'Automatización con IA, RAG y tooling de agentes',
    ],
  } as LList,
} as const;

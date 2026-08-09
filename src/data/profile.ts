import type { L, LList } from '../i18n/types';

export const profile = {
  name: 'Henry Cabello',
  title: { en: 'Senior Full-Stack Engineer', es: 'Ingeniero Full-Stack Senior' } as L,
  experience: { en: '8+ years', es: '8+ años' } as L,
  location: { en: 'Bogotá, Colombia', es: 'Bogotá, Colombia' } as L,
  workingStyle: { en: 'Remote-first · US clients', es: 'Remoto · clientes en EE. UU.' } as L,
  languages: {
    en: ['Spanish, native', 'English, fluent'],
    es: ['Español, nativo', 'Inglés, fluido'],
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
   *   2. "One engineer shipped this app...", "this app" pointed at nothing
   *      before the reader had met Luxura, and it shifted person mid-thought.
   *   3. "I build the product, run the infrastructure, and buy the users."
   *      Too narrow: a third was ad buying, none was AI.
   *   4. "I build it, ship it, and still run it." Generic.
   *   5. "Nothing here is a demo." Strong, and it attacked the genre rather
   *      than describing him, but it is a stance rather than a voice. Kept as
   *      the alternate.
   *
   * The current line is Henry's own, lifted from the copy he identified as
   * sounding like him. It works because it is imperative, technical, and
   * invites interrogation instead of asking to be believed. The supporting
   * line then names three specific failures, which is the move: a reader who
   * wants any of those three has a reason to write.
   *
   * This one states the through-line that is true of every project on the
   * page: enterprise, mobile and agentic alike, and lands on the word that
   * separates him from people who hand work over at the merge.
   *
   * ALTERNATES, if this ever needs swapping. Each is one line:
   *   'I don't hand things off.'
   *   'Eight years, four domains, nothing built twice.'
   *   'The stack is not the skill.'   // currently the approach heading
   */
  positioning: {
    en: 'Ask me what broke.',
    es: 'Pregúntame qué se rompió.',
  } as L,

  /** Carries the evidence the headline no longer has room for. */
  lede: {
    en: 'Luxura is live on Google Play: I built it, I run its infrastructure, and I buy its users. The parts worth talking about are the OTP failure, running production on one box, and what happens when you let two models argue about your code.',
    es: 'Luxura está publicada en Google Play: la construí, opero su infraestructura y compro sus usuarios. Lo que vale la pena conversar es la falla de OTP, operar producción en una sola máquina, y qué pasa cuando dejas que dos modelos discutan tu código.',
  } as L,

  /** Used where a plain description is needed, such as meta tags. */
  summary: {
    en: 'Senior full-stack engineer, 8+ years. Ships and operates complete products: enterprise Microsoft integrations, AI agents, and mobile apps in production.',
    es: 'Ingeniero full-stack senior, 8+ años. Construye y opera productos completos: integraciones empresariales con Microsoft, agentes de IA y apps móviles en producción.',
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
       * Restructured after review. The old opener, "my real expertise is
       * learning new technology quickly and properly, curious about how it
       * works and disciplined about whether it does the job", was the
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
        'The method is always the same. Find the number that is falling. Work out whether it belongs to the code or to the vendor underneath it. Change the piece that actually controls it, then stay and run what you changed.',
        'That is how a domain I have never touched turns into something in production. Microsoft enterprise systems, a multi-agent AI platform, a dating app on Google Play, a safety product with real-time alerts. Four domains, no shared ground, one way in.',
        'It is also why I keep the work most engineers pass on: payments, attribution, release pipelines, the ad campaigns, and the infrastructure holding it all up. On a team that turns into technical direction, the review gates and the specs other people build against.',
      ],
      es: [
        'El método siempre es el mismo. Encontrar el número que se está cayendo. Averiguar si es del código o del proveedor que lo sostiene. Cambiar la pieza que de verdad lo controla, y quedarme operando lo que cambié.',
        'Así es como un dominio que nunca toqué termina en producción. Sistemas empresariales de Microsoft, una plataforma de IA multiagente, una app de citas en Google Play, un producto de seguridad con alertas en tiempo real. Cuatro dominios sin nada en común, una sola forma de entrar.',
        'También es la razón por la que me quedo con el trabajo que la mayoría delega: pagos, atribución, pipelines de release, las campañas y la infraestructura que sostiene todo. En un equipo eso se vuelve dirección técnica, las compuertas de revisión y las especificaciones contra las que construyen los demás.',
      ],
    } as LList,
    /**
     * REMOVED: deliberately, and it should stay removed.
     *
     * Every project card carries a status badge, so what has shipped is
     * already stated structurally. A paragraph re-confessing it was redundant,
     * and it set the tone the rest of the copy then copied: disclaimers where
     * claims belonged.
     *
     * Forward-looking self-critique still has a place. The Luxura outcome
     * names registration as the step being worked on now, that is
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
      'A model told me TikTok has no account-level budget cap. It does, and the campaign would have run uncapped if I had believed it.',
      'A report came back with zero conversions on a campaign I could see was installing. The zero was a field-mapping bug, and it only surfaced because I refused the number.',
      'TikTok attribution was silently broken for weeks. An AI research pass missed the cause completely; it was one ad-network permissions toggle.',
      'Two false lines nearly went out on my own CV, both written by an assistant that sounded certain. I caught them before they shipped.',
    ],
    es: [
      'Un modelo me dijo que TikTok no tiene tope de presupuesto por cuenta. Sí lo tiene, y la campaña habría corrido sin tope si le hubiera creído.',
      'Un reporte marcaba cero conversiones en una campaña que claramente estaba instalando. El cero era un error de mapeo de campos, y solo apareció porque no acepté el número.',
      'La atribución de TikTok estuvo rota en silencio durante semanas. Una investigación hecha con IA no dio con la causa; era un permiso de red publicitaria.',
      'Dos afirmaciones falsas estuvieron a punto de salir en mi propia hoja de vida, escritas por un asistente que sonaba seguro. Las detecté antes de publicarla.',
    ],
  } as LList,

  /** Answers directly what the target roles screen for. */
  fitFor: {
    en: [
      'Tech lead on greenfield AI and agentic work',
      'Senior full-stack at a product company',
      'Senior mobile, React Native and Capacitor',
      'AI automation, RAG and agent tooling',
    ],
    es: [
      'Tech lead en proyectos de IA y sistemas agénticos desde cero',
      'Full-stack senior en empresa de producto',
      'Mobile senior, React Native y Capacitor',
      'Automatización con IA, RAG y tooling de agentes',
    ],
  } as LList,
} as const;

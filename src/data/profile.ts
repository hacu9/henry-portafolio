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

  email: 'cabello986@gmail.com',
  github: 'hacu9',
  githubUrl: 'https://github.com/hacu9',
  linkedin: 'cabello986',
  linkedinUrl: 'https://www.linkedin.com/in/cabello986',

  /** One sentence. Everything else on the page is evidence for it. */
  positioning: {
    en: 'I ship and operate complete products solo — from Microsoft enterprise integrations to consumer mobile apps live on the Play Store, including the infrastructure, the payments and the paid acquisition behind them.',
    es: 'Construyo y opero productos completos por mi cuenta — desde integraciones empresariales con Microsoft hasta apps móviles publicadas en Play Store, incluyendo la infraestructura, los pagos y la pauta que trae a los usuarios.',
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
      en: [
        'My real expertise is learning new technology quickly and properly — curious about how it works, and disciplined about whether it actually does the job.',
        'Over 8+ years that has meant building things with very little in common: enterprise Microsoft integrations, a multi-agent AI system, a dating app live on the Play Store, a personal-safety platform with real-time alerts. Different domains, different constraints, the same method.',
        // The previous draft promised "the same method" and never said what it
        // was. Naming it is what turns the paragraph above into a claim.
        'The method is specific: watch which number is falling, work out whether the problem belongs to the code or to the vendor underneath it, change the piece that actually controls the outcome, then stay and operate it.',
        'That is why I own the parts most engineers hand off — infrastructure migrations, release pipelines, payment integration, attribution, and the ad campaigns that bring the users in.',
      ],
      es: [
        'Mi verdadera ventaja es aprender tecnologías nuevas rápido y bien — con curiosidad por cómo funcionan y con criterio para saber si de verdad sirven.',
        'En 8+ años eso me llevó a construir cosas muy distintas entre sí: integraciones empresariales con Microsoft, un sistema de IA multiagente, una app de citas publicada en Play Store, una plataforma de seguridad personal con alertas en tiempo real. Dominios distintos, restricciones distintas, el mismo método.',
        'El método es concreto: miro qué número se está cayendo, averiguo si el problema es del código o del proveedor que lo sostiene, cambio la pieza que de verdad lo controla, y me quedo operándolo después.',
        'Eso significa que me hago cargo de lo que la mayoría delega — migraciones de infraestructura, pipelines de release, integración de pagos, atribución y las campañas que traen a los usuarios.',
      ],
    } as LList,
    /**
     * The counter-argument, stated before anyone else can make it.
     *
     * The previous version conceded "not the deepest specialist in any single
     * framework" and named a six-years-of-Kubernetes engineer as the contrast.
     * That cost nothing — nobody hiring for these roles wants that person — and
     * a sharp reader notices a free concession. It also read as
     * self-disqualification to anyone screening for senior React Native.
     *
     * This version concedes the thing a skeptical CTO would actually find.
     */
    /**
     * Two real concessions, not one strawman.
     *
     * Henry has led teams, but lightly — his words: "not that much". So the
     * honest line is that his depth is in owning delivery, not in managing
     * headcount. That costs him something on a large tech-lead posting, which
     * is precisely why it is worth saying.
     */
    tradeoff: {
      en: 'Two things worth saying before you find them yourself. The agentic work is the newest thing here and it is not in production yet — Luxura is what shipped, Mate is the bet. And I have led small teams and collaborated across others, but my depth is in owning delivery end to end, not in managing headcount. If the role is mostly people, someone else has run that further than I have.',
      es: 'Dos cosas que prefiero decir antes de que las descubras. El trabajo agéntico es lo más nuevo y todavía no está en producción — lo publicado es Luxura, Mate es la apuesta. Y he liderado equipos pequeños y he colaborado en otros, pero mi profundidad está en hacerme cargo de la entrega de punta a punta, no en gestionar personas. Si el rol es sobre todo de gente, alguien más ha llegado más lejos que yo en eso.',
    } as L,
  },

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

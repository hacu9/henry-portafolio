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
    tradeoff: {
      en: 'Worth saying before you find it yourself: the agentic work is the newest thing here and it is not in production yet. Luxura is what shipped. Mate is what I am betting on next, and I would rather you judge it as a bet than take my word that it is finished.',
      es: 'Mejor decirlo antes de que lo descubras: el trabajo agéntico es lo más nuevo y todavía no está en producción. Lo que está publicado es Luxura. Mate es la apuesta siguiente, y prefiero que la juzgues como apuesta y no que me creas que ya está terminada.',
    } as L,
    /**
     * TODO(henry): the costliest honest concession is probably that you have
     * owned scope rather than headcount — every product here you ran alone. For
     * a tech-lead posting that is the objection, so meeting it head-on would
     * buy more trust than the version above. I have not written it because
     * nothing in the brief says whether you have led a team. Tell me and it
     * goes in.
     */
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

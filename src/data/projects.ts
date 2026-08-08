import { REVEAL_CLIENT_NAMES } from './config';
import type { L, LList } from '../i18n/types';

export type Status = 'live' | 'building' | 'ongoing' | 'delivered';

export const STATUS_LABEL: Record<Status, L> = {
  live: { en: 'Live in production', es: 'En producción' },
  building: { en: 'In development', es: 'En desarrollo' },
  ongoing: { en: 'Ongoing', es: 'En curso' },
  delivered: { en: 'Delivered', es: 'Entregado' },
};

export interface Decision {
  /** The fork in the road, phrased as the choice — not as the result. */
  title: L;
  body: L;
}

export interface Project {
  id: string;
  name: string;
  /** Neutral label used while REVEAL_CLIENT_NAMES is false. */
  anonName?: L;
  tagline: L;
  status: Status;
  /** Qualifies a status where the plain label would overstate it. */
  statusNote?: L;
  role: L;
  period: string;
  problem: L;
  built: LList;
  decisions: Decision[];
  outcome: L;
  /** Technology names stay verbatim in both languages. */
  stack: string[];
  lead: boolean;
  /** True when the name itself is what needs permission. */
  confidential?: boolean;
  /**
   * A public link anyone can open to check the claim. This is the only
   * external, unfakeable evidence the site has, so where one exists it is
   * surfaced next to the project name rather than buried at the bottom.
   */
  url?: string;
  urlLabel?: L;
  /**
   * Product screenshots, relative to BASE_URL. Taken from Henry's own
   * published marketing site (luxura.vip), so they are his to reuse.
   */
  shots?: { src: string; alt: L }[];
}

const rawProjects: Project[] = [
  /* ---------------------------------------------------------------- LEAD -- */
  {
    id: 'luxura',
    name: 'Luxura',
    tagline: {
      en: 'Invitation-based dating app — Bogotá and Medellín',
      es: 'App de citas por invitación — Bogotá y Medellín',
    },
    status: 'live',
    statusNote: {
      en: 'Google Play production, through closed testing',
      es: 'Producción en Google Play, tras pruebas cerradas',
    },
    role: {
      en: 'Sole engineer — plus infrastructure, monetization and paid acquisition',
      es: 'Único ingeniero — más infraestructura, monetización y pauta',
    },
    period: '2025 — 2026',
    lead: true,
    url: 'https://play.google.com/store/apps/details?id=app.luxura.dating',
    urlLabel: { en: 'See it on Google Play', es: 'Verla en Google Play' },
    shots: [
      {
        src: 'images/luxura-step-one-en.png',
        alt: { en: 'Luxura onboarding screen', es: 'Pantalla de onboarding de Luxura' },
      },
      {
        src: 'images/luxura-step-two-en.png',
        alt: { en: 'Luxura browse grid', es: 'Grilla de perfiles de Luxura' },
      },
      {
        src: 'images/luxura-step-three-en.png',
        alt: { en: 'Luxura invitation flow', es: 'Flujo de invitación de Luxura' },
      },
    ],
    problem: {
      en: 'Open dating apps fill with unserious volume, which drives women off the platform and takes the men with them. Luxura inverts the funnel: men pay to send an invitation, women join free. That asymmetry only works if the product controls its own economics end to end — payments, moderation, and the cost of acquiring each user.',
      es: 'Las apps de citas abiertas se llenan de volumen poco serio, eso hace que las mujeres se vayan y detrás se van los hombres. Luxura invierte el embudo: los hombres pagan por enviar una invitación, las mujeres entran gratis. Esa asimetría solo funciona si el producto controla su propia economía de punta a punta — pagos, moderación y el costo de adquirir cada usuario.',
    },
    built: {
      en: [
        'Next.js web app wrapped with Capacitor for the Android release',
        'Firebase Phone Auth for SMS one-time passcodes',
        'RevenueCat paywall and subscription handling',
        'AppsFlyer and RevenueCat attribution, wired to Meta Pixel and the Conversions API',
        'Automated content moderation on Azure Content Safety',
        'Full Google Play release pipeline — 12 testers for 14 days in closed testing, then production',
        'Brand identity, logo and Play Store assets in a dark-and-gold direction',
      ],
      es: [
        'App web en Next.js empaquetada con Capacitor para el release de Android',
        'Firebase Phone Auth para los códigos OTP por SMS',
        'Paywall y suscripciones con RevenueCat',
        'Atribución con AppsFlyer y RevenueCat, conectada a Meta Pixel y la Conversions API',
        'Moderación automática de contenido con Azure Content Safety',
        'Pipeline completo de release en Google Play — 12 testers por 14 días en prueba cerrada, luego producción',
        'Identidad de marca, logo y assets de Play Store en una dirección oscura con dorado',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Moved the whole platform off Vercel and Supabase onto a Hetzner VPS running Coolify',
          es: 'Migré toda la plataforma de Vercel y Supabase a un VPS de Hetzner con Coolify',
        },
        body: {
          en: 'The bill was not the point — at this scale the difference is small money. The point was control. Managed platforms decide your database, your background workers and your failure modes for you, and I wanted those decisions back before the product grew into them. So both moved onto one Hetzner box running Coolify. I did not size up when memory got tight; I added swap and kept the box, because sizing up is how you stop noticing what your app actually costs to run. I also refused to keep managed hosting for development, since two different infrastructures produce drift that only ever surfaces in production. The trade is real: uptime, disk pressure and Docker hygiene are now mine, and I do that maintenance myself.',
          es: 'La factura no era el punto — a esta escala la diferencia es poca plata. El punto era el control. Las plataformas administradas deciden por ti la base de datos, los workers y los modos de falla, y yo quería esas decisiones de vuelta antes de que el producto creciera dentro de ellas. Así que ambos pasaron a una sola máquina Hetzner con Coolify. No subí de instancia cuando la memoria quedó justa: agregué swap y me quedé con la misma máquina, porque subir de instancia es la forma de dejar de notar lo que de verdad cuesta operar tu app. También descarté dejar hosting administrado para desarrollo, porque dos infraestructuras distintas producen desviaciones que solo aparecen en producción. La contrapartida es real: el uptime, el disco y la higiene de Docker ahora son míos, y ese mantenimiento lo hago yo.',
        },
      },
      {
        title: {
          en: 'Dropped AWS SNS for Firebase Phone Auth on the OTP path',
          es: 'Cambié AWS SNS por Firebase Phone Auth en el flujo de OTP',
        },
        body: {
          en: 'SNS delivery to Colombian carriers was slow enough that signups died at the verification screen. Nothing else in the app matters if the first screen leaks users. Firebase delivered reliably in-country, so I accepted vendor lock-in on that one path and kept the funnel intact.',
          es: 'La entrega de SNS a las operadoras colombianas era tan lenta que los registros se caían en la pantalla de verificación. Nada del resto de la app importa si la primera pantalla pierde usuarios. Firebase entregaba de forma confiable en el país, así que acepté el amarre con el proveedor en ese punto y mantuve el embudo completo.',
        },
      },
      {
        title: {
          en: 'Replaced gender with an invitation role, so men could invite men',
          es: 'Cambié el género por un rol de invitación, para que un hombre pudiera invitar a otro',
        },
        body: {
          en: 'The product started with the funnel keyed to gender, which quietly made same-sex invitations impossible. I moved the model to an INVITER / INVITEE role chosen at registration, with the benefit of each stated plainly on that screen. The goal was to cut onboarding friction, and the side effect was that the paid tier attaches to a role rather than to a gender — which is both fairer and much easier to reason about in code.',
          es: 'El producto arrancó con el embudo atado al género, lo que en la práctica hacía imposible una invitación entre personas del mismo sexo. Pasé el modelo a un rol INVITER / INVITEE que se elige al registrarse, con el beneficio de cada uno explicado en esa misma pantalla. El objetivo era bajar la fricción de onboarding, y el efecto secundario es que el plan pago se ata a un rol y no a un género — más justo, y mucho más fácil de razonar en el código.',
        },
      },
    ],
    outcome: {
      en: 'Live on Google Play production. I run the Meta, TikTok and Google Ads campaigns myself, so I see what an architecture decision costs per user. Installs land around USD 0.06–0.11 and roughly one in five completes registration — and I would rather say plainly that registration is the bottleneck than quote the install price as a win. A cheap install is easy to buy and easy to mistake for progress. Fixing the step after it is the interesting problem, and it is the one I am on.',
      es: 'Publicada en producción en Google Play. Yo mismo manejo las campañas de Meta, TikTok y Google Ads, así que veo lo que cuesta por usuario cada decisión de arquitectura. Las instalaciones salen a unos 0,06–0,11 USD y cerca de una de cada cinco completa el registro — y prefiero decir claramente que el registro es el cuello de botella antes que presentar el costo por instalación como un logro. Una instalación barata es fácil de comprar y fácil de confundir con progreso. Arreglar el paso siguiente es el problema interesante, y es en el que estoy.',
    },
    stack: [
      'Next.js', 'TypeScript', 'Capacitor', 'PostgreSQL', 'Hetzner', 'Coolify',
      'Docker', 'Firebase Auth', 'RevenueCat', 'AppsFlyer', 'Azure Content Safety',
    ],
  },

  {
    id: 'mate',
    name: 'Mate',
    tagline: { en: 'Agent-to-agent AI dating', es: 'Citas con IA de agente a agente' },
    status: 'building',
    statusNote: {
      en: 'Orchestration layer in development',
      es: 'Capa de orquestación en desarrollo',
    },
    role: { en: 'Architecture and implementation', es: 'Arquitectura e implementación' },
    period: '2026',
    lead: true,
    problem: {
      en: 'Swiping asks people to judge compatibility from a photograph and one sentence. Mate tests a different hypothesis: give every user an AI agent that represents them, let the agents talk to each other first, and introduce the humans only when the conversation suggests it is worth their time.',
      es: 'Deslizar obliga a juzgar la compatibilidad con una foto y una frase. Mate pone a prueba otra hipótesis: cada usuario tiene un agente de IA que lo representa, los agentes conversan entre ellos primero, y las personas se conocen solo cuando esa conversación indica que vale la pena.',
    },
    built: {
      en: [
        'Per-user agents holding a persistent model of the person they represent',
        'Autonomous agent-to-agent conversation, assessed for compatibility before any match surfaces',
        'Multi-agent orchestration on LangGraph',
        'Vector storage for agent memory, so an agent stays consistent across conversations',
        'Next.js App Router front end with Tailwind and shadcn/ui',
      ],
      es: [
        'Un agente por usuario que mantiene un modelo persistente de la persona que representa',
        'Conversación autónoma entre agentes, evaluada por compatibilidad antes de mostrar cualquier match',
        'Orquestación multiagente con LangGraph',
        'Memoria de agente en base vectorial, para que el agente sea consistente entre conversaciones',
        'Front end en Next.js App Router con Tailwind y shadcn/ui',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Started in React Native, then deliberately pivoted to web-first',
          es: 'Empecé en React Native y giré a propósito hacia web primero',
        },
        body: {
          en: 'The open question in Mate is whether agent-to-agent conversation actually produces better matches. That is a question about the orchestration layer, not about native gestures. Going web-first cut the iteration loop from a store review cycle down to a deploy, and Capacitor keeps the mobile path open once the hypothesis holds.',
          es: 'La pregunta abierta en Mate es si la conversación entre agentes realmente produce mejores matches. Esa es una pregunta sobre la capa de orquestación, no sobre gestos nativos. Ir primero a web bajó el ciclo de iteración de una revisión de tienda a un deploy, y Capacitor deja abierto el camino a móvil cuando la hipótesis se sostenga.',
        },
      },
      {
        title: {
          en: 'Gave agents durable memory in a vector store instead of a longer prompt',
          es: 'Le di a los agentes memoria durable en una base vectorial en vez de un prompt más largo',
        },
        body: {
          en: 'An agent that forgets between conversations does not represent a person — it represents whatever fit in the last context window. Persisting memory as retrievable vectors keeps the agent consistent as conversations accumulate, and keeps token cost flat rather than growing with the relationship.',
          es: 'Un agente que olvida entre conversaciones no representa a una persona — representa lo que cupo en la última ventana de contexto. Guardar la memoria como vectores recuperables mantiene al agente consistente a medida que se acumulan las conversaciones, y deja el costo de tokens plano en lugar de crecer con la relación.',
        },
      },
    ],
    outcome: {
      en: 'In development. The orchestration layer is the subject of the experiment, so it is being built before the surface around it.',
      es: 'En desarrollo. La capa de orquestación es el objeto del experimento, así que se construye antes que la superficie que la rodea.',
    },
    stack: [
      'Next.js', 'TypeScript', 'LangGraph', 'PostgreSQL', 'Prisma',
      'Vector DB', 'Redis', 'Tailwind', 'shadcn/ui',
    ],
  },

  {
    id: 'femi',
    name: 'Femi',
    tagline: { en: "Women's safety platform", es: 'Plataforma de seguridad para mujeres' },
    status: 'building',
    statusNote: {
      en: 'Substantially built — not released',
      es: 'Construida en gran parte — sin publicar',
    },
    role: { en: 'Mobile and real-time systems', es: 'Móvil y sistemas en tiempo real' },
    period: '2025 — 2026',
    lead: true,
    problem: {
      en: 'A panic button is a blunt instrument. Real situations range from "I feel uneasy walking home" to an active emergency, and the response should vary with them. Femi grades alerts across five urgency levels and routes each one differently.',
      es: 'Un botón de pánico es un instrumento tosco. Las situaciones reales van desde "me siento insegura caminando a casa" hasta una emergencia activa, y la respuesta debería variar con ellas. Femi clasifica las alertas en cinco niveles de urgencia y enruta cada uno distinto.',
    },
    built: {
      en: [
        'React Native and Expo application',
        'Five-level emergency alert system carrying GPS location',
        'Dual response model — trusted personal contacts plus nearby verified helpers',
        'Identity verification combining face recognition with document checks',
        'Live chat over WebSocket inside the alert itself, so responders coordinate in context',
        'Community forum and a hearts-based reputation system',
        'Google Sign-In through Expo auth with custom scheme redirects',
      ],
      es: [
        'Aplicación en React Native y Expo',
        'Sistema de alertas de emergencia en cinco niveles, con ubicación GPS',
        'Modelo de respuesta doble — contactos de confianza más ayudantes verificados cercanos',
        'Verificación de identidad que combina reconocimiento facial con validación de documento',
        'Chat en vivo por WebSocket dentro de la alerta, para que quien responde coordine en contexto',
        'Foro comunitario y sistema de reputación por corazones',
        'Inicio de sesión con Google vía Expo auth y redirecciones con esquema propio',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Required verified identity for nearby helpers, accepting a slower start',
          es: 'Exigí identidad verificada a los ayudantes cercanos, aceptando un arranque más lento',
        },
        body: {
          en: 'Alerting strangers near a woman in distress is only an improvement if those strangers are accountable. Face plus document verification adds real friction to signup and grows the helper network more slowly. On a safety product that is the correct direction to be wrong in — an unverified helper network is a liability, not a feature.',
          es: 'Avisarle a desconocidos cerca de una mujer en riesgo solo es una mejora si esos desconocidos son identificables. La verificación facial más documento agrega fricción real al registro y hace crecer la red de ayudantes más despacio. En un producto de seguridad ese es el lado correcto para equivocarse — una red de ayudantes sin verificar es un riesgo, no una funcionalidad.',
        },
      },
      {
        title: {
          en: 'Put live chat inside the alert rather than in a separate inbox',
          es: 'Puse el chat en vivo dentro de la alerta y no en una bandeja aparte',
        },
        body: {
          en: 'During an incident nobody navigates. Holding the WebSocket channel inside the alert detail keeps the location, the urgency level and the conversation on one screen, so a responder never switches context to ask where someone is.',
          es: 'Durante un incidente nadie navega. Mantener el canal WebSocket dentro del detalle de la alerta deja la ubicación, el nivel de urgencia y la conversación en una sola pantalla, para que quien responde nunca cambie de contexto solo para preguntar dónde está la persona.',
        },
      },
    ],
    outcome: {
      en: 'Real-time alerting, identity verification and trust modelling working together — the hard parts of a safety product rather than the screens around them.',
      es: 'Alertas en tiempo real, verificación de identidad y modelado de confianza funcionando juntos — las partes difíciles de un producto de seguridad, no las pantallas que las rodean.',
    },
    stack: [
      'React Native', 'Expo', 'TypeScript', 'WebSockets', 'PostgreSQL',
      'Face recognition', 'Google OAuth',
    ],
  },

  /* ---------------------------------------------------------- SUPPORTING -- */
  {
    id: 'level60',
    name: 'Level60 Consulting',
    tagline: { en: 'Microsoft enterprise integration', es: 'Integración empresarial con Microsoft' },
    status: 'ongoing',
    role: { en: 'Full-stack engineer', es: 'Ingeniero full-stack' },
    period: '2021 — 2026',
    lead: false,
    problem: {
      en: 'Enterprise Microsoft estates where identity, Teams and reporting have to hold together across tenants — and keep holding when Microsoft retires an endpoint.',
      es: 'Entornos empresariales de Microsoft donde identidad, Teams y reportería deben sostenerse entre tenants — y seguir sosteniéndose cuando Microsoft retira un endpoint.',
    },
    built: {
      en: [
        'Microsoft Graph and Teams API integrations',
        'Azure Functions and backend services against Azure SQL',
        'Single sign-on through Entra ID and ADFS',
        'Migration research for the TeamworkDevice endpoint retirement',
        'Azure SQL quota remediation across large archive tables',
      ],
      es: [
        'Integraciones con Microsoft Graph y la API de Teams',
        'Azure Functions y servicios de backend sobre Azure SQL',
        'Inicio de sesión único con Entra ID y ADFS',
        'Investigación de migración por el retiro del endpoint TeamworkDevice',
        'Remediación de cuota en Azure SQL sobre tablas de archivo grandes',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Treated the Teams API deprecation as a research problem before a code problem',
          es: 'Traté la deprecación de la API de Teams como un problema de investigación antes que de código',
        },
        body: {
          en: 'When Microsoft retires an endpoint the replacement rarely maps one to one. Establishing exactly what the new surface could and could not do — before touching the integration — made the migration a known quantity instead of a discovery exercise in production.',
          es: 'Cuando Microsoft retira un endpoint, el reemplazo casi nunca mapea uno a uno. Establecer exactamente qué podía y qué no podía hacer la nueva superficie — antes de tocar la integración — convirtió la migración en algo conocido en vez de un descubrimiento en producción.',
        },
      },
    ],
    outcome: {
      en: 'Five years of continuous enterprise work. This is the systems-integration half of the record: long-lived, high-consequence, and running in someone else’s tenant.',
      es: 'Cinco años de trabajo empresarial continuo. Esta es la mitad de integración de sistemas: de larga vida, de alta consecuencia y corriendo en el tenant de otra empresa.',
    },
    stack: [
      'Microsoft Graph', 'Teams API', 'Azure Functions', 'Azure SQL',
      'Entra ID', 'ADFS', 'TypeScript',
    ],
  },

  {
    id: 'storia',
    name: 'Storia',
    tagline: {
      en: 'AI customer service for LATAM small business',
      es: 'Atención al cliente con IA para pymes de LATAM',
    },
    status: 'building',
    role: { en: 'Architecture and implementation', es: 'Arquitectura e implementación' },
    period: '2026',
    lead: false,
    problem: {
      en: 'A small business in Latin America is reachable on WhatsApp, Messenger, Instagram and the phone at once, and answers all of them from someone’s personal handset. Storia unifies those channels behind AI agents that can actually hold the conversation.',
      es: 'A una pyme en Latinoamérica la contactan por WhatsApp, Messenger, Instagram y teléfono al mismo tiempo, y responde todo desde el celular personal de alguien. Storia unifica esos canales detrás de agentes de IA capaces de sostener la conversación.',
    },
    built: {
      en: [
        'Unified inbox across WhatsApp, Messenger and Instagram',
        'WhatsApp Cloud API integration under Meta Tech Provider onboarding',
        'Voice agents for the telephone channel',
      ],
      es: [
        'Bandeja unificada para WhatsApp, Messenger e Instagram',
        'Integración con WhatsApp Cloud API bajo el onboarding de Meta Tech Provider',
        'Agentes de voz para el canal telefónico',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Went through Meta Tech Provider onboarding rather than reselling a wrapper',
          es: 'Pasé por el onboarding de Meta Tech Provider en vez de revender un wrapper',
        },
        body: {
          en: 'Building directly on the WhatsApp Cloud API means owning Meta’s review process and its compliance surface. It also means the per-conversation economics and the customer relationship stay with the product instead of an intermediary.',
          es: 'Construir directo sobre la WhatsApp Cloud API implica hacerse cargo del proceso de revisión de Meta y de su superficie de cumplimiento. También implica que la economía por conversación y la relación con el cliente se quedan en el producto y no en un intermediario.',
        },
      },
    ],
    outcome: { en: 'In development.', es: 'En desarrollo.' },
    stack: ['Next.js', 'TypeScript', 'WhatsApp Cloud API', 'Voice agents', 'PostgreSQL'],
  },

  {
    id: 'clinic-matching',
    name: 'HairBackNow',
    anonName: { en: 'Clinic matching platform', es: 'Plataforma de matching de clínicas' },
    tagline: {
      en: 'Growth engineering for a medical marketplace',
      es: 'Ingeniería de crecimiento para un marketplace médico',
    },
    status: 'delivered',
    role: {
      en: 'Contract — paid acquisition and channel strategy',
      es: 'Contrato — pauta y estrategia de canales',
    },
    period: '2026',
    lead: false,
    confidential: true,
    problem: {
      en: 'A platform matching patients to hair restoration clinics, where the cost of acquiring a patient decides whether the model works at all.',
      es: 'Una plataforma que conecta pacientes con clínicas de restauración capilar, donde el costo de adquirir un paciente decide si el modelo funciona o no.',
    },
    built: {
      en: [
        'Channel strategy memo covering Meta Ads, Google Ads and geo-targeting',
        'Measurement and attribution setup',
        'Meta ad creative production',
      ],
      es: [
        'Memo de estrategia de canales sobre Meta Ads, Google Ads y segmentación geográfica',
        'Configuración de medición y atribución',
        'Producción de creativos para Meta',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Specified the measurement setup before the spend',
          es: 'Definí la medición antes de la inversión',
        },
        body: {
          en: 'Paid acquisition without attribution is a guess with an invoice attached. Getting tracking correct first meant every campaign decision after it rested on a number rather than an impression.',
          es: 'Pauta sin atribución es una adivinanza con factura. Dejar el tracking correcto primero hizo que cada decisión de campaña posterior se apoyara en un número y no en una impresión.',
        },
      },
    ],
    outcome: { en: 'Delivered as a contract engagement.', es: 'Entregado como contrato.' },
    stack: ['Meta Ads', 'Google Ads', 'Attribution', 'Creative production'],
  },

  {
    id: 'infra-ops',
    name: 'Infrastructure operations',
    tagline: { en: 'Running what I ship', es: 'Operar lo que construyo' },
    status: 'ongoing',
    role: { en: 'Operator', es: 'Operación' },
    period: '2025 — 2026',
    lead: false,
    problem: {
      en: 'Self-hosting is a decision with a tail. Once you leave managed platforms, disk pressure, container sprawl and cache failures become yours at two in the morning.',
      es: 'Auto-hospedar es una decisión con cola. Cuando dejas las plataformas administradas, el disco lleno, los contenedores acumulados y las fallas de caché pasan a ser tuyos a las dos de la mañana.',
    },
    built: {
      en: [
        'Hetzner disk management and capacity planning',
        'Automated Docker cleanup, to stop image accumulation filling the volume',
        'Redis failure diagnosis and resolution',
        'Coolify deployment troubleshooting',
      ],
      es: [
        'Gestión de disco y planificación de capacidad en Hetzner',
        'Limpieza automatizada de Docker, para que la acumulación de imágenes no llene el volumen',
        'Diagnóstico y resolución de fallas de Redis',
        'Resolución de problemas de despliegue en Coolify',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Automated the cleanup instead of remembering to do it',
          es: 'Automaticé la limpieza en vez de acordarme de hacerla',
        },
        body: {
          en: 'Every self-hosted outage I have had traced back to something that accumulated quietly. Scheduled cleanup turns a recurring judgement call into a property of the system.',
          es: 'Cada caída que he tenido en self-hosting se rastreó hasta algo que se acumuló en silencio. La limpieza programada convierte un juicio recurrente en una propiedad del sistema.',
        },
      },
    ],
    outcome: {
      en: 'The reason the Luxura hosting migration held: somebody has to run it afterwards, and that somebody is me.',
      es: 'La razón por la que la migración de hosting de Luxura se sostuvo: alguien tiene que operarla después, y ese alguien soy yo.',
    },
    stack: ['Hetzner', 'Docker', 'Coolify', 'Redis', 'Linux'],
  },
];

/** Applies the client-name permission flag. Nothing else reads REVEAL_CLIENT_NAMES. */
export const projects: Project[] = rawProjects.map((p) =>
  p.confidential && !REVEAL_CLIENT_NAMES && p.anonName
    ? { ...p, name: p.anonName.en, anonName: p.anonName }
    : p,
);

/** Confidential entries render their neutral label per language. */
export const projectName = (p: Project, lang: 'en' | 'es'): string =>
  p.confidential && !REVEAL_CLIENT_NAMES && p.anonName ? p.anonName[lang] : p.name;

export const leadProjects = projects.filter((p) => p.lead);
export const supportingProjects = projects.filter((p) => !p.lead);

import type { L } from '../i18n/types';

export interface StackGroup {
  id: string;
  label: L;
  /** Ordered by how much of the record actually rests on it. */
  items: string[];
  /** Optional precision note. Used where a bare list would overclaim. */
  note?: L;
}

/**
 * Technology names stay verbatim in both languages, only the group labels and
 * notes translate.
 *
 * Three things are deliberately absent, per Henry's constraints:
 *   - No claim of authoring MCP servers. He integrates and operates existing
 *     ones; the note on the AI group says exactly that.
 *   - No ComfyUI. Sources conflicted, so it is out until he confirms.
 *   - No Power Automate. He has stated he does not use it.
 */
export const stackGroups: StackGroup[] = [
  {
    /**
     * Separate from the AI group on purpose. Building agents and delivering
     * with agents are different claims, and only one of them has shipped
     * product behind it. Conflating them would be the easiest lie on the page.
     */
    id: 'method',
    label: { en: 'How I build with AI', es: 'Cómo construyo con IA' },
    items: [
      'Agentic coding loops', 'Multi-model adversarial review', 'Claude Code',
      'OpenAI Codex CLI', 'Spec-driven development', 'Context engineering',
      'Subagent orchestration',
    ],
    note: {
      en: 'I build inside agentic loops and gate the output with adversarial review: frontier models from two different labs, each briefed blind so neither ratifies the other, run against my own diffs before anything merges. The spec stays matched to what actually shipped, and a confident answer counts as a claim to verify, not a result. That discipline has caught a wrong platform fact, a field-mapping bug hiding behind a zero, and a missed permissions toggle silently breaking attribution.',
      es: 'Construyo dentro de bucles agénticos y filtro la salida con revisión adversarial: modelos frontera de dos laboratorios distintos, cada uno informado a ciegas para que ninguno ratifique al otro, corriendo contra mis propios diffs antes de cualquier merge. La especificación se mantiene alineada con lo que realmente salió, y una respuesta segura cuenta como afirmación por verificar, no como resultado. Esa disciplina detectó un dato de plataforma equivocado, un error de mapeo escondido detrás de un cero, y un permiso que rompía la atribución en silencio.',
    },
  },
  {
    id: 'core',
    label: { en: 'Core', es: 'Núcleo' },
    items: [
      'TypeScript', 'Next.js', 'React', 'React Native', 'Capacitor',
      'Laravel', 'PostgreSQL', 'Prisma', 'Docker',
    ],
  },
  {
    id: 'ai',
    label: { en: 'AI and agents', es: 'IA y agentes' },
    items: [
      'LangGraph', 'Multi-agent orchestration', 'Vector databases',
      'RAG', 'Voice agents', 'WhatsApp Cloud API', 'MCP',
      'Claude Code', 'OpenAI Codex CLI',
    ],
    note: {
      en: 'I run MCP servers daily against AppsFlyer, Meta Ads and TikTok Ads. When one did not fit my workflow, I extended it myself.',
      es: 'Uso servidores MCP a diario contra AppsFlyer, Meta Ads y TikTok Ads. Cuando uno no encajaba con mi flujo, lo extendí yo mismo.',
    },
  },
  {
    id: 'microsoft',
    label: { en: 'Microsoft and enterprise', es: 'Microsoft y empresarial' },
    items: [
      'Microsoft Graph API', 'Teams API', 'Azure Functions', 'Azure SQL',
      'Entra ID', 'ADFS', 'SSO', 'Azure Content Safety',
    ],
  },
  {
    id: 'infra',
    label: { en: 'Cloud and infrastructure', es: 'Nube e infraestructura' },
    items: [
      'AWS', 'Azure', 'Hetzner', 'Coolify', 'Vercel', 'Supabase',
      'Redis', 'Firebase', 'Linux',
    ],
    note: {
      en: 'I have run production on Vercel and Supabase and moved off both. The skill is knowing when a managed platform stops earning its place.',
      es: 'Tuve producción en Vercel y en Supabase, y salí de los dos. La habilidad está en saber cuándo una plataforma administrada deja de ganarse su lugar.',
    },
  },
  {
    id: 'mobile',
    label: { en: 'Mobile and monetization', es: 'Móvil y monetización' },
    items: [
      'Expo', 'Google Play release pipeline', 'RevenueCat', 'AppsFlyer',
      'Meta Pixel', 'Conversions API', 'AdMob', 'Meta Audience Network',
      'Firebase Phone Auth', 'FCM',
    ],
  },
  {
    id: 'growth',
    label: { en: 'Growth and paid media', es: 'Crecimiento y pauta' },
    items: [
      'Meta Ads', 'Google Ads', 'TikTok Ads', 'Attribution modelling',
      'Geo-targeting', 'Creative production',
    ],
    note: {
      en: 'I run the campaigns for my own products, so I see what an architecture decision costs per acquired user.',
      es: 'Manejo las campañas de mis propios productos, así que veo lo que una decisión de arquitectura cuesta por usuario adquirido.',
    },
  },
  {
    id: 'other',
    label: { en: 'Also', es: 'También' },
    // Terraform and n8n were here and are now removed: Henry confirmed he has
    // used neither. They appear in some target-role postings, which is exactly
    // why listing them unverified was the wrong call.
    items: [
      'WebSockets', 'Filament', 'Face recognition', 'Identity verification',
    ],
  },
];

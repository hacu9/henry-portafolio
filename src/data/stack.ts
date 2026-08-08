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
 * Technology names stay verbatim in both languages — only the group labels and
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
      en: 'On MCP I am an integrator, not an author. I run existing open-source servers daily — AppsFlyer, Meta Ads, TikTok Ads — and have extended one. I have not written one from scratch.',
      es: 'En MCP soy integrador, no autor. Uso servidores open-source existentes a diario — AppsFlyer, Meta Ads, TikTok Ads — y extendí uno. No he escrito uno desde cero.',
    },
  },
  {
    /**
     * Separate from the AI group on purpose. Building agents and delivering
     * with agents are different claims, and only one of them has shipped
     * product behind it. Conflating them would be the easiest lie on the page.
     */
    id: 'method',
    label: { en: 'How I deliver', es: 'Cómo entrego' },
    items: [
      'Claude Code', 'OpenAI Codex CLI', 'Spec-driven development',
      'Adversarial review', 'Context engineering',
    ],
    note: {
      en: 'Everything on this page was built with AI in the loop, including the app running in Play Store production. The part worth hiring is not that I use it — everyone does now — it is that I check it. I run a second model adversarially against my own work, keep the spec matched to the diff that actually shipped, and treat an agent\'s confident answer as a claim to verify rather than a result.',
      es: 'Todo lo de esta página se construyó con IA en el proceso, incluida la app que está en producción en Play Store. Lo que vale contratar no es que la use — hoy la usa todo el mundo — sino que la verifico. Corro un segundo modelo de forma adversarial contra mi propio trabajo, mantengo la especificación alineada con el diff que realmente salió, y trato la respuesta segura de un agente como una afirmación por verificar, no como un resultado.',
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
      en: 'Vercel and Supabase are on this list because I have run production on both and then migrated off both. Knowing when a managed platform stops paying for itself is part of the skill.',
      es: 'Vercel y Supabase están en la lista porque tuve producción en ambos y luego migré fuera de ambos. Saber cuándo una plataforma administrada deja de valer lo que cuesta es parte del oficio.',
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
      en: 'Unusual on an engineering CV, and deliberate. I run the campaigns for my own products, so I see what an architecture decision costs per acquired user.',
      es: 'Poco común en una hoja de vida de ingeniería, y a propósito. Manejo las campañas de mis propios productos, así que veo lo que una decisión de arquitectura cuesta por usuario adquirido.',
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

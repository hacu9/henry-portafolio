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
    items: [
      'WebSockets', 'Filament', 'Face recognition', 'Identity verification',
      'Terraform', 'n8n',
    ],
  },
];

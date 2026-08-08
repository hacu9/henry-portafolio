/**
 * Maps the technology names used in `projects.ts` and `stack.ts` onto the
 * Simple Icons files in `src/icons/tech/`.
 *
 * The names in the project data stay human ("React Native", "Google Play
 * release pipeline"); this is the only place that knows about file names, so
 * renaming an icon never means editing a case study.
 *
 * Anything without an entry simply renders as text. That is deliberate:
 * inventing a logo for "Adversarial review" or "Attribution modelling" would
 * be decoration, and a missing logo costs nothing.
 */
export const TECH_ICON: Record<string, string> = {
  // core
  TypeScript: 'typescript',
  'Next.js': 'nextdotjs',
  React: 'react',
  'React Native': 'react',
  Expo: 'expo',
  'Node.js': 'nodedotjs',
  Capacitor: 'capacitor',
  Laravel: 'laravel',
  Vue: 'vuedotjs',
  Astro: 'astro',
  Tailwind: 'tailwindcss',

  // data
  PostgreSQL: 'postgresql',
  Prisma: 'prisma',
  Redis: 'redis',
  Supabase: 'supabase',

  // infra
  Docker: 'docker',
  Linux: 'linux',
  Vercel: 'vercel',
  AWS: 'amazonwebservices',
  Azure: 'microsoftazure',
  'Azure Functions': 'microsoftazure',
  'Azure SQL': 'microsoftazure',
  'Azure Content Safety': 'microsoftazure',
  Cloudflare: 'cloudflare',

  // ai
  LangGraph: 'langchain',
  'Claude Code': 'anthropic',
  'OpenAI Codex CLI': 'openai',

  // mobile, growth, platform
  Firebase: 'firebase',
  'Firebase Auth': 'firebase',
  'Firebase Phone Auth': 'firebase',
  FCM: 'firebase',
  'Google Play': 'googleplay',
  'Google Play release pipeline': 'googleplay',
  'Meta Ads': 'meta',
  'Meta Pixel': 'meta',
  'Conversions API': 'meta',
  'Meta Audience Network': 'meta',
  'WhatsApp Cloud API': 'whatsapp',
  'TikTok Ads': 'tiktok',
  'Google Ads': 'googleads',
};

/** The set shown in the morphing wall. Short on purpose — each is a claim. */
export const WALL_TECH: string[] = [
  'TypeScript',
  'Next.js',
  'React Native',
  'Expo',
  'Node.js',
  'PostgreSQL',
  'Prisma',
  'Redis',
  'Docker',
  'Linux',
  'Firebase',
  'Google Play',
  'LangGraph',
  'Claude Code',
  'Azure',
  'Laravel',
];

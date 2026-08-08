/**
 * Hero copy candidates.
 *
 * English only for now — Henry will translate whichever one wins.
 *
 * Every claim here traces to a verified fact in `projects.ts`. Nothing is
 * invented, and nothing contradicts docs/content-constraints.md. Mate is in
 * development, so version C carries that qualifier in its own subhead.
 */

export interface CopyVariant {
  id: string;
  /** What the version is doing, in a few words. */
  strategy: string;
  /** Set as large display type. */
  headline: string;
  /** One or two sentences directly beneath. */
  subhead: string;
  /** The section heading that follows, so the voice can be judged in sequence. */
  sectionLead: string;
  /** Stated plainly. A version with no cost is a version nobody thought about. */
  risk: string;
  /** Who this version is aimed at. */
  aimedAt: string;
  accent: string;
  accentDark: string;
}

export const currentCopy: CopyVariant = {
  id: 'current',
  strategy: 'Range statement — what shipped now',
  headline:
    'I ship and operate complete products solo — from Microsoft enterprise integrations to consumer mobile apps live on the Play Store, including the infrastructure, the payments and the paid acquisition behind them.',
  subhead: 'Bogotá, Colombia · Remote-first · US clients',
  sectionLead: 'The stack is not the skill.',
  risk: 'Thirty-four words. It dies at display size, and "from X to Y" argues generalist — the exact read Henry wants to avoid.',
  aimedAt: 'Everyone, which means no one',
  accent: '#6B7787',
  accentDark: '#6B7787',
};

export const copyVariants: CopyVariant[] = [
  {
    id: 'ownership',
    strategy: 'Economic ownership — he owns the P&L, not just the repo',
    headline: 'I write the code and I buy the ads.',
    subhead:
      'Luxura is live on Google Play. I built it, moved its infrastructure off managed hosting, wired the payments, and I run the Meta and TikTok campaigns that fill it. One person, the whole chain.',
    sectionLead: 'Most engineers never see what their architecture costs per user.',
    risk: 'A purist engineering manager may read "buys ads" as unserious. It wins the founders and the CTOs who carry a budget, and loses the ones who do not.',
    aimedAt: 'Founders, CTOs, product companies where cost per user is somebody’s problem',
    accent: '#B4700A',
    accentDark: '#F0A423',
  },
  {
    id: 'judgment',
    strategy: 'Open on a decision, not a résumé — show the judgment working',
    headline: 'The signups were dying at the verification screen.',
    subhead:
      'AWS SNS could not reach Colombian carriers fast enough, so I moved authentication to Firebase and kept the funnel alive. Eight years of calls like that one — enterprise Microsoft integrations, multi-agent AI, mobile in production.',
    sectionLead: 'Judgement is the part that does not transfer from a tutorial.',
    risk: 'An oblique opener. A recruiter skimming for a job title will not find one in the first line, and some will leave before the subhead explains.',
    aimedAt: 'Senior engineers and tech leads who read past the first line',
    accent: '#B5122E',
    accentDark: '#FF5C74',
  },
  {
    id: 'agentic',
    strategy: 'Lead with the forward bet — the AI work the target roles screen for',
    headline: 'The agents meet before the people do.',
    subhead:
      'Mate gives every user an AI agent that represents them. The agents talk to each other and decide whether the humans should — LangGraph orchestration, vector memory, in development. It is one of four products I have taken end to end.',
    sectionLead: 'I learn a technology properly before I bet a product on it.',
    risk: 'The strongest headline points at the least finished work. Anyone who asks "is it live?" gets "not yet", and the answer has to land well.',
    aimedAt: 'Tech lead roles on greenfield AI and agentic projects',
    accent: '#6D3BD4',
    accentDark: '#A886FF',
  },
  {
    id: 'range',
    strategy: 'Turn the generalist charge into the actual claim',
    headline: 'Eight years. Nothing built twice.',
    subhead:
      'Microsoft enterprise integrations. A multi-agent AI system. A dating app in production. A safety platform with real-time alerts. Different domains, different constraints, the same method — learn it properly, ship it, then run it.',
    sectionLead: 'The stack is not the skill.',
    risk: 'Range claims read as unfocused unless the proof lands immediately. This one lives or dies on the four nouns in the subhead.',
    aimedAt: 'Product companies hiring for judgement rather than a keyword match',
    accent: '#186B52',
    accentDark: '#4FC79B',
  },
];

/**
 * A fifth candidate, from the independent review.
 *
 * It shares a strategy with `ownership` but executes it differently: a single
 * falsifiable artifact instead of a punchy claim, and "I am its entire team"
 * rather than "solo". That phrasing fixes a problem none of the other versions
 * address — "solo" reads as scope owned to a founder, and as "has never led
 * anyone" to someone hiring a tech lead. "Entire team" only carries the first
 * meaning.
 */
export const reviewPick: CopyVariant = {
  id: 'artifact',
  strategy: 'Proof-first — one checkable artifact carries the claim',
  headline: 'There is a dating app live on Google Play. I am its entire team.',
  subhead:
    'The build, the VPS it runs on, the payments, the moderation, the store release, and the Meta and TikTok campaigns that acquire its users. Separately I am building Mate: agent-to-agent AI matchmaking on LangGraph.',
  sectionLead: 'The stack is not the skill.',
  risk: 'The whole first impression rests on a dating app, and some enterprise readers discount the category on sight.',
  aimedAt: 'Anyone who verifies before they believe',
  accent: '#0E6F80',
  accentDark: '#56C7D6',
};

export const copyCandidates: CopyVariant[] = [...copyVariants, reviewPick];
export const allCopy: CopyVariant[] = [...copyCandidates, currentCopy];

/**
 * Hero copy candidates.
 *
 * English only for now, Henry will translate whichever one wins.
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
  strategy: 'Range statement: what shipped now',
  headline:
    'I ship and operate complete products solo, from Microsoft enterprise integrations to consumer mobile apps live on the Play Store, including the infrastructure, the payments and the paid acquisition behind them.',
  subhead: 'Bogotá, Colombia · Remote-first · US clients',
  sectionLead: 'The stack is not the skill.',
  risk: 'Thirty-four words. It dies at display size, and "from X to Y" argues generalist, which is the exact read Henry wants to avoid.',
  aimedAt: 'Everyone, which means no one',
  accent: '#6B7787',
  accentDark: '#6B7787',
};

export const copyVariants: CopyVariant[] = [
  {
    id: 'ownership',
    strategy: 'Economic ownership: he owns the P&L, not just the repo',
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
    strategy: 'Open on a decision rather than a résumé, showing the judgment working',
    headline: 'The signups were dying at the verification screen.',
    subhead:
      'AWS SNS could not reach Colombian carriers fast enough, so I moved authentication to Firebase and kept the funnel alive. Eight years of calls like that one: enterprise Microsoft integrations, multi-agent AI, mobile in production.',
    sectionLead: 'Judgement is the part that does not transfer from a tutorial.',
    risk: 'An oblique opener. A recruiter skimming for a job title will not find one in the first line, and some will leave before the subhead explains.',
    aimedAt: 'Senior engineers and tech leads who read past the first line',
    accent: '#B5122E',
    accentDark: '#FF5C74',
  },
  {
    id: 'agentic',
    strategy: 'Lead with the forward bet: the AI work the target roles screen for',
    headline: 'The agents meet before the people do.',
    subhead:
      'Mate gives every user an AI agent that represents them. The agents talk to each other and decide whether the humans should. LangGraph orchestration, vector memory, in development. It is one of four products I have taken end to end.',
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
      'Microsoft enterprise integrations. A multi-agent AI system. A dating app in production. A safety platform with real-time alerts. Different domains, different constraints, the same method: learn it properly, ship it, then run it.',
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
 * address: "solo" reads as scope owned to a founder, and as "has never led
 * anyone" to someone hiring a tech lead. "Entire team" only carries the first
 * meaning.
 */
export const reviewPick: CopyVariant = {
  id: 'artifact',
  strategy: 'Proof-first: one checkable artifact carries the claim',
  headline: 'There is a dating app live on Google Play. I am its entire team.',
  subhead:
    'The build, the VPS it runs on, the payments, the moderation, the store release, and the Meta and TikTok campaigns that acquire its users. Separately I am building Mate: agent-to-agent AI matchmaking on LangGraph.',
  sectionLead: 'The stack is not the skill.',
  risk: 'The whole first impression rests on a dating app, and some enterprise readers discount the category on sight.',
  aimedAt: 'Anyone who verifies before they believe',
  accent: '#0E6F80',
  accentDark: '#56C7D6',
};

/**
 * The AI-forward version that does not rest on unshipped work.
 *
 * The review argued against foregrounding AI, on the grounds that Mate is in
 * development and a hero is the worst place for the thinnest evidence. That
 * holds only if the AI claim depends on Mate. It does not: everything Henry has
 * shipped, including the app in Play Store production, was built with AI in the
 * loop. That part is finished and checkable.
 *
 * The claim is deliberately not "I use AI". By 2026 every engineer says that,
 * so it signals nothing. The differentiator the market is actually paying for
 * is judging the output, which is a discipline Henry already runs.
 */
export const aiNative: CopyVariant = {
  id: 'verified',
  strategy: 'AI-native delivery: the differentiator is checking it, not using it',
  headline: 'Everything here was built with AI. That is not the interesting part.',
  subhead:
    'The interesting part is what I do next: run a second model adversarially against my own work, keep the spec matched to the diff that shipped, and treat a confident answer as a claim to verify. One of those products is live on Google Play.',
  sectionLead: 'Anyone can generate code now. Judging it is the job.',
  risk: 'Every engineer claims AI fluency in 2026, so the headline has one sentence to prove it means something sharper. If the subhead does not land, it reads as the same claim as everyone else.',
  aimedAt: 'Tech leads and CTOs hiring for judgement in an AI-assisted team',
  accent: '#7A3E8F',
  accentDark: '#C58BE0',
};

/**
 * Two candidates from the second independent review, which judged both of them
 * better than anything already on the table.
 *
 * The argument for `adversarial`: the checkable production fact and the AI
 * method land in the same breath, so the greenfield-AI reader and the
 * ownership reader are both answered above the fold. Every other candidate
 * answers one and postpones the other.
 */
export const adversarial: CopyVariant = {
  id: 'adversarial',
  strategy: 'Proof and method in one breath',
  headline: 'One engineer shipped this app. A second model tried to break it first.',
  subhead:
    'Luxura is live on Google Play, I built it, moved its infrastructure to my own VPS, wired the payments, and I run the ads. Everything I ship goes through an adversarial AI review before it goes through me.',
  sectionLead: 'The stack is not the skill.',
  risk: 'Two ideas in one hero. On a two-second skim the second sentence reads as a riddle until the subhead resolves it.',
  aimedAt: 'CTOs staffing greenfield AI work who still want production evidence',
  accent: '#1F6F63',
  accentDark: '#5FD3C0',
};

/** Aims at the 2026 hiring anxiety: generated code with nobody accountable. */
export const judgment: CopyVariant = {
  id: 'judgment-scarce',
  strategy: 'Judgment as the scarce skill',
  headline: 'AI writes the code fast now. Judgment is still slow to fake.',
  subhead:
    'Every product here shipped with AI in the loop, including the one live on Google Play. My job is the part the model cannot do: know which vendor to fire, keep the spec matched to the diff that shipped, treat a confident answer as a claim.',
  sectionLead: 'Anyone can generate code now. Judging it is the job.',
  risk: 'The headline is positioning, not evidence. Any candidate could write the sentence, so the subhead carries the entire proof burden.',
  aimedAt: 'CTOs worried about AI-generated code with nobody accountable',
  accent: '#A8341F',
  accentDark: '#FF8A6B',
};


/* ---------------------------------------------------------- third batch --
 * Written after Henry rejected "I build it, ship it, and still run it."
 *
 * Angles already burned, so none of these repeat them: the 34-word range
 * statement, the app-that-points-at-nothing, the ad-buying triad, and the
 * build/ship/run triad. Each of these opens a door the others do not.
 */

export const batchThree: CopyVariant[] = [
  {
    id: 'judgment-layer',
    strategy: 'Position as the judgment layer in an agentic workflow',
    headline: 'I write the spec. Agents write the code. I decide what is true.',
    subhead:
      'That last part is the job now. Eight years of shipping, and a dating app on Google Play built this way, start to finish.',
    sectionLead: 'Anyone can generate code. Deciding what is true is the work.',
    risk: 'It can read as though he writes less code than he does, and a traditional reviewer may hear it as delegation rather than authorship.',
    aimedAt: 'CTOs staffing greenfield AI and agentic work',
    accent: '#6D3BD4',
    accentDark: '#A886FF',
  },
  {
    id: 'pager',
    strategy: 'Accountability as the whole claim',
    headline: 'If it breaks at 2am, it wakes me.',
    subhead:
      'Not a metaphor. The app is on Google Play, the VPS is mine, and there is nobody downstream to escalate to. Eight years of building things I then have to answer for.',
    sectionLead: 'Ownership is a phone number, not a job title.',
    risk: 'Skews operational. A reader hunting for an architect may file him under infrastructure.',
    aimedAt: 'Founders and teams who have been burned by handoffs',
    accent: '#A8341F',
    accentDark: '#FF8A6B',
  },
  {
    id: 'never-used',
    strategy: 'His real differentiator, stated as a confession that turns',
    headline: 'I had never used any of it before.',
    subhead:
      'Not the Microsoft stack, not LangGraph, not React Native, not paid acquisition. Eight years of walking into unfamiliar domains and coming out with something in production.',
    sectionLead: 'The stack is not the skill.',
    risk: 'For two seconds it reads as inexperience. Everything depends on the subhead landing immediately.',
    aimedAt: 'Teams hiring for adaptability over a keyword match',
    accent: '#B4700A',
    accentDark: '#F0A423',
  },
  {
    id: 'no-agree',
    strategy: 'Lead with the rarest thing in the working method',
    headline: 'Two AIs review my code. I never let them agree.',
    subhead:
      'Each one is briefed blind, so neither can rubber-stamp the other. It has caught a wrong platform fact, a bug hiding behind a zero, and two false lines on my own CV.',
    sectionLead: 'A reviewer handed your reasoning gives you agreement, not review.',
    risk: 'It is a claim about method rather than outcome. A reader who wants shipped product first has to wait for the subhead.',
    aimedAt: 'Anyone hiring for judgement in an AI-assisted team',
    accent: '#1F6F63',
    accentDark: '#5FD3C0',
  },
  {
    id: 'scoreboard',
    strategy: 'The honest scoreboard, volunteered before anyone counts',
    headline: 'Four products. One engineer. One of them is live.',
    subhead:
      'Luxura is on Google Play and I run everything under it. Mate, Femi and Storia are the next three, and I would rather you judge them as bets than take my word that they are finished.',
    sectionLead: 'The stack is not the skill.',
    risk: 'Hands a skimming reader the weakest number in the headline, and some will anchor on it.',
    aimedAt: 'Readers who reward candour over polish',
    accent: '#1E5FA8',
    accentDark: '#6FB3F2',
  },
  {
    id: 'no-downstream',
    strategy: 'End-to-end ownership at its shortest',
    headline: 'There is nobody downstream of me.',
    subhead:
      'The build, the infrastructure, the payments, the store release, the campaigns that bring the users in. Eight years, four products, and an app live on Google Play.',
    sectionLead: 'Ownership is a phone number, not a job title.',
    risk: 'Cryptic on its own. It needs the subhead to mean anything, and it hints at solo work to someone hiring for a team.',
    aimedAt: 'Founders and small product teams',
    accent: '#8A5A12',
    accentDark: '#D9A441',
  },
];

export const copyCandidates: CopyVariant[] = [
  ...copyVariants,
  reviewPick,
  aiNative,
  adversarial,
  judgment,
  ...batchThree,
];
export const allCopy: CopyVariant[] = [...copyCandidates, currentCopy];

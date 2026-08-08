/**
 * Build-time switches for content that needs someone's permission before it
 * goes public. Default to the private setting; flip only when permission is on
 * record. See docs/content-constraints.md for what each flag releases.
 */

/**
 * Client names stay hidden until each client agrees.
 *
 * Level60 is Henry's employer and is always safe to name, so it is NOT behind
 * this flag. The flag covers the clinic matching platform, the enterprise data
 * client, and the architecture studios in Spain. While it is false, those
 * projects still appear — they render under a neutral label instead.
 */
export const REVEAL_CLIENT_NAMES = false;

/**
 * The career table has an unexplained five-month gap (Feb–Jul 2021). Leaving it
 * visible is the honest default: a short gap five years ago needs no story, and
 * inventing filler is worse than the gap. Set this to true to collapse the
 * timeline to years only, which hides it without stating anything false.
 */
export const COARSE_TIMELINE_DATES = false;

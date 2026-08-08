# Content constraints

Rules that govern what this site may say. They come from Henry's brief. Read
this before you edit anything under `src/data/`.

## Hard constraints — do not claim

These are stated as false or unconfirmed. The current content honours all of
them. Do not reintroduce them.

| Claim | Status | What the site says instead |
|---|---|---|
| Built or authored MCP servers | **False** | `stack.ts` lists MCP under AI, with an explicit note: integrator, not author. He runs existing open-source servers daily and extended one. |
| ComfyUI experience | **Unconfirmed** — sources conflict | Absent entirely. |
| Power Automate | **He has stated he does not use it** | Absent entirely. |
| Terraform | **False** — confirmed 2026-08-08, never used | Removed from the stack. It appears in target-role postings, which is exactly why an unverified listing was dangerous. |
| n8n | **False** — confirmed 2026-08-08, never used | Removed from the stack. |

## The two AI claims are separate on purpose

Henry works with AI constantly, and that is real and verifiable. But there are
two different claims and merging them would be the easiest lie on the page:

1. **AI as the product** — Mate's LangGraph orchestration, Storia's voice
   agents. Real, and **in development**. Lives in the `ai` stack group.
2. **AI as the method** — everything he ships is built with AI in the loop,
   including Luxura in Play Store production. Shipped and checkable. Lives in
   the separate `method` group.

Claim 2 is the stronger hero material because it is finished. Claim 1 is the
better story but rests on unreleased work. Never let a headline borrow claim 1's
excitement while implying claim 2's evidence.

Note also what the method claim does *not* say. It does not say "I use AI" —
by 2026 that signals nothing. It says he verifies its output, which is the part
the market is actually short of.
| The clinic contract dispute | **Internal only** | Absent entirely. The engagement appears as delivered contract work. |
| Recruiter contacts, in-flight applications | **Internal only** | Absent entirely. |

## Client names

`REVEAL_CLIENT_NAMES` in `src/data/config.ts` is `false`.

- **Level60 Consulting** is Henry's employer and is always named. It is not
  behind the flag.
- The clinic matching platform renders as "Clinic matching platform" /
  "Plataforma de matching de clínicas" while the flag is off.
- The enterprise data client and the architecture studios in Spain are not in
  the content at all yet. Add them only with permission.

Set the flag to `true` only when permission is on record.

## Project status

Do not inflate. The `status` field on each project drives a visible badge.

| Project | Status | Note |
|---|---|---|
| Luxura | `live` | Genuinely shipped to Google Play production, through closed testing. Safe to state plainly. |
| Mate | `building` | Stack is scoped, not fully deployed. Framed as in development. |
| Femi | `building` | Confirmed 2026-08-08: in development, but substantially built. The badge reads "Substantially built — not released", which is accurate without implying a launch. |
| Level60 | `ongoing` | Employment, current. |
| Storia | `building` | |
| Clinic platform | `delivered` | Contract engagement, completed. |
| Infrastructure operations | `ongoing` | |

## The career gap

February–July 2021 is unaccounted for. The timeline shows the real dates and
says nothing about the gap, which is the honest default: a five-month gap five
years ago needs no explanation, and filler would be worse than the gap.

If Henry would rather not show it, `COARSE_TIMELINE_DATES` in `config.ts`
collapses the column to years only. That hides the gap without asserting
anything untrue. It does not invent a role.

## Open questions for Henry

1. **The Spanish note is truncated.** It ends at "construir cosas muy distintas
   entre sí:" and the list never arrived. `profile.ts` currently paraphrases
   from the case studies. Send the list and that section gets his own words.
2. **Client permissions** — may the clinic platform, the enterprise data client
   and the Spain studios be named?
3. **No project carries a hard number.** Every reference on portfolio practice
   says measurable outcomes beat descriptions — "cut p95 from 800ms to 120ms"
   rather than "improved performance". The case studies here have exactly one
   real figure between them (12 testers for 14 days in closed testing).
   Anything true would help: installs, retention, ad spend, cost per acquired
   user, the SNS-to-Firebase delivery-rate change, the Azure SQL quota
   reduction. These cannot be invented, so they have to come from Henry.

*Resolved: Femi status (2026-08-08). Terraform and n8n removed (2026-08-08).
Team leadership framing confirmed (2026-08-08) — small teams, collaboration
across others, depth in delivery rather than headcount.*

## Voice

- Direct and concise. No padding.
- Case study shape is fixed: problem → what I built → the hard call → where it
  stands. The hard-call beat is what separates this from a project list. Keep
  it.
- Specifics carry the argument. No buzzword soup.

## Provenance of the figures (2026-08-08)

Two separate history searches were run against Henry's assistant transcripts.
They disagreed, and the disagreement is **not** a contradiction:

- **Search A** returned verbatim quotes with dates, plus figures computed from
  files Henry had uploaded and from his own Meta/AppsFlyer accounts. It also
  argued against him where evidence was thin — it flagged a CV line about
  leading a team as AI-written and unsupported.
- **Search B** returned "not found" for everything, and stated that its
  retrieval system could not reach the relevant period.

A retrieval failure is an absence of evidence, not evidence of absence. Search
A's positive, quoted, dated findings stand. Search B does not refute them.

**Figures now on the page, and why these and not others:**

| Figure | Used | Reason |
|---|---|---|
| ~USD 45/mo → ~EUR 9/mo infrastructure | Yes | Scale-independent, and Henry can re-verify it from his own billing in a minute. |
| USD 0.06–0.11 cost per install | Yes | He drove it personally; verifiable in Meta Ads Manager today. |
| ~1 in 5 installs complete registration | Yes | Meaningful without depending on absolute scale. |
| 27.97% TikTok CTR | **No** | Implausible for real clicks; almost certainly counts video interactions. Would invite exactly the wrong question. |
| 1,712 users · ~188 DAU · 987 registrations in 7 days | **No** | March 2026 figures, now stale. A small absolute user count on a public page reads as a ceiling rather than as momentum. |
| 12 testers for 14 days | **No** | Describes Google Play's closed-testing requirement, not traction. |

Henry should confirm the three published figures before this goes to a
recruiter. They came from an assistant summarising his own uploads, not from a
live export.

## Two claims that need Henry's decision

1. **The "core strength" passage was drafted by an assistant, not written by
   Henry.** He iterated on and approved it, and it is about him, but it is not
   his own phrasing. The approach section no longer reproduces it; it states
   the method and lets the projects carry the claim.
2. **No client naming restriction was ever stated by Henry.** The
   confirm-before-naming list was an assistant's caution that propagated into
   the brief. `REVEAL_CLIENT_NAMES` stays `false` because that is the safe
   default, but it is a choice, not a known rule — and naming real clients
   would strengthen the page.

## Team leadership — thin evidence

Henry has stated he has led teams, "but not that much". The only artifact found
is a message he wrote announcing a branch-protection policy to a team, which is
real evidence of directing engineering practice. A separate productivity report
places him within a team of roughly eighteen rather than leading it. The copy
therefore claims architecture, technical direction and delivery, and explicitly
declines headcount management. Do not strengthen it beyond that without more.

## Portfolio completeness audit (2026-08-08)

Checked against what current guidance says a developer portfolio needs. The
site had the case studies and the stack, and was missing most of the rest.

**Closed in this pass:**

- **A link to the live product.** `app.luxura.dating` now appears beside the
  project name in all twelve directions. This is the only external, unfakeable
  evidence on the site — a reader can verify the central claim in one tap — and
  it was absent entirely.
- **Real work experience.** Roles carried a single line each. Level60 and the
  independent work now list what was actually done, including the TeamworkDevice
  migration research, the Entra ID/ADFS SSO work, the Azure SQL quota
  remediation, and the branch-protection policy Henry set for his team.

**Still missing — these need assets only Henry has:**

| Gap | Why it matters |
|---|---|
| **A photo of him** | There is no image of Henry anywhere. Guidance is consistent that a face makes a portfolio read as a person rather than a document. |
| **Project screenshots** | The site currently has zero images of any kind. For a mobile product with a Play Store listing, showing the app is close to mandatory. |
| **A downloadable CV** | Recruiters ask for a file. Nothing to download exists. |
| **An Open Graph image** | Every link he shares — LinkedIn, WhatsApp, email — previews blank right now. Cheapest high-visibility fix available. |
| **Testimonials or recommendations** | No third-party voice appears anywhere. LinkedIn recommendations would transfer directly. |
| **Gara Group detail** | Jul 2020 – Feb 2021 has a title and a city and nothing else. It is the thinnest entry on the page. |
| **A "currently working on" line** | Signals active building rather than a record of the past. Mate and Storia would fill it. |

The first four are worth more than another design direction.


## Do not argue against yourself (2026-08-08)

A draft of the trade-off section volunteered "I have not managed a team... if the
role is mostly people I would be learning that part on your time." Henry cut it,
correctly.

The line between honest and self-defeating:

- **Never claim** something untrue. No managed-a-team claim appears anywhere.
- **Never volunteer** a deficit nobody asked about. A portfolio states what is
  true; it is not a confession, and there is no duty to make the reader's
  objection for them.
- **Do state the adjacent truth as a strength.** He sets technical direction and
  the standards others work to, owns delivery end to end, and set
  branch-protection policy for the team at Level60. All true, all positive.

The one surviving concession is about a *product's status*, not his capability:
Mate is not in the store. A reader will discover that, so being told first is
better than being caught. Status honesty protects the page. Capability
self-criticism just costs him interviews.

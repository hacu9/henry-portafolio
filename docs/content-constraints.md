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

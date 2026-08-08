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
| Femi | `building` | **Open question — confirm with Henry.** The brief describes what was built but never says shipped. It carries a `statusNote` saying so. |
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
2. **Femi status** — shipped, in development, or paused?
3. **Client permissions** — may the clinic platform, the enterprise data client
   and the Spain studios be named?
4. **Terraform and n8n** appear in the target-role requirements and are listed
   under "Also" in the stack. Confirm the depth is real; drop them if not.

## Voice

- Direct and concise. No padding.
- Case study shape is fixed: problem → what I built → the hard call → where it
  stands. The hard-call beat is what separates this from a project list. Keep
  it.
- Specifics carry the argument. No buzzword soup.

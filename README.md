# henry-portafolio

Personal portfolio, Henry Cabello. Four complete design directions over one
shared bilingual content layer. Pick one, delete three.

## Run it

```bash
npm install
npm run dev
```

Then open <http://localhost:4321/>. It forwards to `/en/` or `/es/` by browser
language; the chooser lists all four directions.

```bash
npm run build     # static output to dist/
npm run preview   # serve dist/ exactly as Pages will
```

## The four directions

| | Argues | Best for |
|---|---|---|
| **Signal**, the instrument panel | Trust me with production | Tech leads, CTOs, contract work |
| **Deep Field**, the spectacle | I make beautiful things | Studios, creative engineering |
| **Kinetic**, type is the whole show | I have taste, in two languages | Design-led teams, agencies, founders |
| **The Log**, the working record | I finish things properly | Senior engineers who read closely |

Compare them at `/en/` or `/es/`.

## Where the content lives

All of it is in `src/data/`. No variant hardcodes copy, so editing a case study
once updates all four. Every string is bilingual, see
[docs/architecture.md](docs/architecture.md).

## Before publishing

Read [docs/content-constraints.md](docs/content-constraints.md). It records
what this site may not claim, which client names are still gated, and four open
questions for Henry. Two flags in `src/data/config.ts` control the gated parts.

## Deploying

Push to `main`. `.github/workflows/deploy.yml` builds and publishes to GitHub
Pages.

One-time setup: repository **Settings → Pages → Source → GitHub Actions**.

The workflow sets `SITE_BASE=/henry-portafolio` for a project repo. Rename the
repo to `hacu9.github.io` and set `SITE_BASE=/` to serve from the root instead.

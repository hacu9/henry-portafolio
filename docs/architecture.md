# Architecture

## One content layer

Everything a visitor reads lives in `src/data/`. The page hardcodes no copy -
fix a typo in the Luxura case study and it is fixed in every language and on
the CV.

```
src/
├── data/           content, the single source of truth
│   ├── config.ts       permission flags (client names, timeline precision)
│   ├── profile.ts      identity, positioning, the fast-learning thesis
│   ├── projects.ts     case studies, four-beat structure
│   ├── stack.ts        technical inventory, grouped
│   ├── tech.ts         name-to-icon map for the wall and the project rows
│   ├── testimonials.ts third-party quotes, empty until real ones arrive
│   └── timeline.ts     career
├── i18n/
│   ├── types.ts        Lang, the L / LList shapes, t() and tl()
│   └── ui.ts           every label and control string
├── layouts/Base.astro  html shell, theme boot, canonical + hreflang
├── styles/reset.css    shared baseline only, no palette, no type
└── pages/
    ├── index.astro     language redirect with real links underneath
    ├── cv/index.astro  the printable CV, built from the same data
    └── [lang]/
        └── index.astro the site itself
```

## The design

The site is the terminal variant, chosen out of fourteen directions on
2026-08-12. A boot sequence types three prompt lines over the hero, sections
are shell commands (`$ cat approach.md`, `$ ls -la ./work`, `$ git log`), and a
⌘K palette built from the page's own sections jumps anywhere. The claim the
design makes is "I live in this environment", which is only credible because
it is true.

The trap with this design is a toy that hides content behind a puzzle, so:

- everything is plain HTML first; the boot sequence decorates content that is
  already in the DOM and respects `prefers-reduced-motion`,
- the palette is an accelerator, never the only route,
- lead projects render as `<details open>`, nothing is collapsed by default
  except the supporting entries.

The thirteen losing directions, the chooser page and its `variants.ts` data
live in `archive/`, out of the build and out of type checking but still in
git. Their relative imports are frozen at their old depth, which is why
`archive/` sits in the tsconfig `exclude` list: it is a reference shelf, not
compilable code.

## Bilingual model

Every content string is an `L`: `{ en: string, es: string }`. Lists are
`LList`: `{ en: string[], es: string[] }`. Read them with `t(value, lang)` and
`tl(value, lang)`.

Technology names stay verbatim in both languages, only labels and prose
translate. `PostgreSQL` is `PostgreSQL` in Spanish.

Routing generates both languages statically:

- `/en/` and `/es/` are the whole site.
- `/` runs a client-side guess from `navigator.language` and forwards. It also
  renders real `English` / `Español` links, so it works with JavaScript off.
- Each page emits `hreflang` alternates and a canonical URL.

The Spanish is written as Spanish, not translated from the English. Where the
two differ in emphasis, that is deliberate.

## Theming

A terminal is dark, so this site is dark by default and the OS preference is
deliberately not consulted: `:root` carries the phosphor palette, and the
only override is `:root[data-theme='light']`, a paper-terminal palette driven
by the toggle.

`Base.astro` restores the saved theme from localStorage before first paint so
the page never flashes. Components read tokens only.

## Hosting

Static output, no SSR, no API routes, GitHub Pages serves files only.

`astro.config.mjs` reads `SITE_BASE` so the same build works from a repo
subpath or from the root. `.github/workflows/deploy.yml` sets it to
`/henry-portafolio`. If the repo is renamed to `hacu9.github.io`, set it to `/`
and change nothing else.

The contact form POSTs to Web3Forms from the browser and falls back to a
`mailto:` action with no JavaScript or no key. Nothing else on the site needs
a secret.

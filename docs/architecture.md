# Architecture

## Why one repo instead of four

The four directions are four front-ends over **one content layer**. Building
them as separate repos would fork the content four ways and guarantee drift —
fix a typo in the Luxura case study and you fix it once here, not four times.

Everything a visitor reads lives in `src/data/`. No variant hardcodes copy.

```
src/
├── data/           content — the single source of truth
│   ├── config.ts       permission flags (client names, timeline precision)
│   ├── profile.ts      identity, positioning, the fast-learning thesis
│   ├── projects.ts     case studies, four-beat structure
│   ├── stack.ts        technical inventory, grouped
│   ├── timeline.ts     career
│   └── variants.ts     metadata for the chooser page
├── i18n/
│   ├── types.ts        Lang, the L / LList shapes, t() and tl()
│   └── ui.ts           every label and control string
├── layouts/Base.astro  html shell, theme boot, canonical + hreflang
├── styles/reset.css    shared baseline only — no palette, no type
└── pages/
    ├── index.astro     language redirect with real links underneath
    └── [lang]/
        ├── index.astro         the chooser
        ├── signal/
        ├── deep-field/
        ├── kinetic/
        └── log/
```

## Bilingual model

Every content string is an `L`: `{ en: string, es: string }`. Lists are
`LList`: `{ en: string[], es: string[] }`. Read them with `t(value, lang)` and
`tl(value, lang)`.

Technology names stay verbatim in both languages — only labels and prose
translate. `PostgreSQL` is `PostgreSQL` in Spanish.

Routing generates both languages statically:

- `/en/signal/`, `/es/signal/`, and so on for each variant.
- `/` runs a client-side guess from `navigator.language` and forwards. It also
  renders real `English` / `Español` links, so it works with JavaScript off.
- Each page emits `hreflang` alternates and a canonical URL.

The Spanish is written as Spanish, not translated from the English. Where the
two differ in emphasis, that is deliberate.

## The four variants

Each is self-contained: one `.astro` file carrying its own palette, type scale,
layout and island. They share only the data layer and `reset.css`. That is
what makes deleting three of them a one-line operation.

| Variant | Island | JS shipped | Notes |
|---|---|---|---|
| `signal` | Canvas 2D node graph | ~4 KB | Nodes are real projects. Sweep lights each in turn. |
| `deep-field` | Raw WebGL fragment shader | ~5 KB | Hand-written GLSL, no three.js. A three.js build would add ~600 KB for the same hero. Falls back to a CSS gradient with no WebGL, and caps buffer resolution on small screens so phones do not cook. |
| `kinetic` | CSS + JS type morph | ~2 KB | Hero word alternates EN↔ES. Starts on the page's own language. |
| `log` | DOM filter | ~1 KB | Two independent filters over 58 entries generated from the project data. Everything is already in the HTML, so filtering works offline. |

All four honour `prefers-reduced-motion` and pause their animation when
scrolled out of view.

## Theming

Palette is defined as custom properties at three levels, in this order:

1. `:root` — light values.
2. `@media (prefers-color-scheme: dark)` — the OS preference.
3. `:root[data-theme="dark"]` and `:root[data-theme="light"]` — the toggle,
   which must beat the media query in **both** directions.

Components read tokens only. Nothing is styled inside the media query directly.

`Base.astro` restores the saved theme before first paint so the page never
flashes. The canvas islands re-read their colours from the same tokens through
a `MutationObserver`, so the graphics follow the toggle.

## Hosting

Static output, no SSR, no API routes — GitHub Pages serves files only.

`astro.config.mjs` reads `SITE_BASE` so the same build works from a repo
subpath or from the root. `.github/workflows/deploy.yml` sets it to
`/henry-portafolio`. If the repo is renamed to `hacu9.github.io`, set it to `/`
and change nothing else.

Anything needing a secret — a contact form, view counts — has to live off
Pages. Today the contact section is `mailto:` and profile links, which need
nothing.

## Choosing one

Once Henry picks a direction:

1. Delete the other three directories under `src/pages/[lang]/`.
2. Move the winner up to `src/pages/[lang]/index.astro`, replacing the chooser.
3. Delete `src/data/variants.ts` and the chooser strings in `i18n/ui.ts`.

The content layer does not change.

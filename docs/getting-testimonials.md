# Getting real testimonials, fast

The section is built and wired into all six variants. It is empty because
nothing in it should be invented. This is the shortest honest path to filling
it, and it is roughly ten minutes of work.

## 1. Check what already exists

LinkedIn → your profile → **Recommendations** → **Received**. Anything there
was written by a real person and can be pasted in as-is.

## 2. Ask four people

LinkedIn → **Ask for a recommendation**. Four requests, expect two back.

Ask people who have actually seen the work:

- A colleague at Level60 who has worked alongside you on the Microsoft
  integrations.
- Whoever reviewed or merged your pull requests. They can speak to the branch
  policy and the review discipline, which is the leadership-adjacent evidence
  the site is thinnest on.
- The client from the clinic marketplace engagement.
- Anyone who has used Luxura and can speak to it shipping.

## 3. Send this

A vague request gets a vague answer. Name the thing you want them to talk
about, and give them an out.

> Hola [name], quick favour. I am putting together my portfolio and I would
> rather have two honest recommendations than ten generic ones.
>
> Would you write me a couple of sentences? What would help most is something
> specific rather than praise: [the branch-protection policy and how review
> worked after it / the TeamworkDevice migration / shipping Luxura end to
> end]. Whatever you actually remember is fine, including the parts that were
> hard.
>
> If you would rather not, that is completely fine, just say so and I will not
> mention it again.

The last line matters. It makes it easy to decline, which makes the ones you
get back honest.

## 4. Paste them in

Open `src/data/testimonials.ts` and add an entry per person:

```ts
{
  name: 'Their real name',
  role: { en: 'Their role, Company', es: 'Su rol, Empresa' },
  quote: {
    en: 'Exactly what they wrote. Trim it, but do not rewrite it.',
    es: 'Traducción fiel de lo que escribieron.',
  },
  source: 'LinkedIn',
  sourceUrl: 'https://www.linkedin.com/in/their-handle',
},
```

The section appears automatically once the array has anything in it, in all six
variants and on the CV. While it is empty, visitors see nothing at all.

## Why there are no invented ones

A quote attributed to a named person who did not say it is a false statement
about a third party, and it fails the first time anyone clicks the profile
link. The rest of the page is built to survive being checked; testimonials have
to meet the same bar.

Running `npm run dev` shows two obvious PLACEHOLDER entries so the section can
be seen and styled. They are gated behind `import.meta.env.DEV` and cannot
reach a production build.

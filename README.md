# InclusionEdge — Website v2

Astro + TypeScript + Vite. Static output, no server. Deploys to GitHub Pages via Actions at
**inclusionedge.co**.

---

## Go-live checklist

Four things stand between this and being live. Nothing else is blocking.

### 1. Connect the contact form (2 minutes)

The form works, but it needs a key to deliver anywhere.

1. Go to **https://web3forms.com** — enter your email, get an access key. No account required.
2. Open `src/data/site.ts` and replace:
   ```ts
   web3formsKey: 'YOUR-WEB3FORMS-ACCESS-KEY',
   ```
3. That's it. Until you do, the form shows a "not connected yet" toast rather than failing silently.

Spam protection is already in place: a honeypot field bots fill and people can't see, plus
Web3Forms' own filtering.

### 2. Check the contact details

In `src/data/site.ts`:

- `email` — currently `hello@inclusionedge.co`
- `linkedin` — currently `https://www.linkedin.com/company/inclusionedge`

Both appear in the footer, the contact page, and structured data. Change once, updates everywhere.

### 3. Push to GitHub

```bash
git remote add origin https://github.com/<your-org>/<repo>.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Source → GitHub Actions**. Not "Deploy from a branch" —
Astro needs a build step, and the included workflow handles it.

### 4. Point the domain

`public/CNAME` already contains `inclusionedge.co`. At your DNS provider:

| Type | Name | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `<your-org>.github.io` |

Then in **Settings → Pages**, set the custom domain and tick **Enforce HTTPS** once the
certificate provisions (usually under an hour).

---

## Running locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the built output
```

Node 20 or newer.

---

## Publishing a new insight

This is the part built for your ongoing use. Adding an article touches one file and no layout code.

Create `src/content/insights/your-slug.md`:

```markdown
---
title: "The Full Editorial Headline, However Long You Want It"
seoTitle: "Short Version Under 60 Chars"
description: "One or two sentences, under 155 characters, that will appear in search results."
category: "Practice"        # Practice | Framework | Policy | Method
pubDate: 2026-08-14
readingTime: "5 min read"
featured: false
draft: false
---

Your article in Markdown. Standard `##` headings, `>` blockquotes, **bold**, lists.
```

On the next build it automatically appears in the Insights index, the homepage's three most
recent, the RSS feed, the sitemap, and the "more insights" block on sibling articles. The newest
post becomes the featured lead.

`draft: true` keeps it out of the build entirely — useful for work in progress.

**Why `seoTitle` exists:** your editorial headlines are good and often long. Search engines
truncate around 60 characters. `seoTitle` gives search a short version while the page keeps the
full headline. Omit it and the full title is used.

---

## Editing site content

Everything structural is typed data — no hunting through markup.

| To change | Edit |
|---|---|
| Nav items, email, LinkedIn, tagline | `src/data/site.ts` |
| CARE / ENGAGE / ENABLE content | `src/data/tiers.ts` |
| The five journey stages and their seams | `src/data/journey.ts` |
| Showcase items and descriptions | `src/data/showcase.ts` |
| Colours, type scale, spacing | `src/styles/global.css` |

When ENGAGE or ENABLE curricula are finished, change `status: 'in-build'` to `status: 'available'`
in `tiers.ts` and the "curriculum in build" badge disappears on its own.

---

## Structure

```
src/
  data/          typed content — edit here, not in markup
  content/
    insights/    articles as markdown
  layouts/
    BaseLayout   head, SEO, schema, header, footer
    DemoLayout   shared frame for showcase demos
  components/
    Header, Footer, SeamRail, ContactForm, BrandDevice
  pages/
    index, approach, programmes, contact, 404
    insights/    index + dynamic article route
    showcase/    index + 4 demo pages
    rss.xml.ts
public/
  assets/        your 16 logo variants
  favicon.*      generated from your app icon
  CNAME          inclusionedge.co
```

---

## Design decisions worth knowing

**No photography, by design.** Stock imagery for disability and neurodiversity is a credibility
risk — staged "diverse team" shots undercut a practice whose thesis is intent versus lived
reality. The visual identity is carried by typography, negative space, and geometric devices
derived from your submark's bracket angle. If you later add photography, `BrandDevice.astro` is
where the abstract elements live.

**Teal is split into two roles.** Edge Teal `#00A79D` measures 2.99:1 on white — it fails WCAG AA
for text. It is used for fills, buttons, graphics and text on navy only. Teal Deep `#00756E` is
the text-safe teal for links and labels on light backgrounds. All 15 colour pairs used in the
build pass AA.

**Favicons come from your real app icon**, resized — not a redrawn SVG. Avoids any drift from the
actual mark.

**The showcase is framed as capability demonstrations, not case studies.** Given the practice is
pre-revenue, implying delivered client engagements would break the evidence discipline that is
the differentiator. The Impact Snapshot demo carries an explicit illustrative-data banner and an
attribution section that declines to claim ROI.

**No unverified statistics anywhere.** Dobbin and Kalev are cited qualitatively. SG Enable, the
Enabling Masterplan 2030 and the Workplace Fairness Act are described in direction, not quantified.
Where a number would need a source you don't yet have, there is no number.

---

## SEO

Built in: per-page canonical URLs, Open Graph and Twitter cards, `ProfessionalService` and
`Article` structured data, auto-generated sitemap, `robots.txt`, RSS feed, semantic headings with
exactly one `h1` per page, and alt text on every image.

Titles and meta descriptions are audited to stay within search display limits.

**Worth doing after launch:** submit `https://inclusionedge.co/sitemap-index.xml` to Google Search
Console, and set the `og:image` to a purpose-made social card if you want something richer than
the current stacked logo.

---

## Accessibility

WCAG 2.2 AA is treated as a floor, not a target: skip link, visible focus rings, keyboard-operable
demos, `aria-pressed` state on interactive controls, `aria-live` regions for dynamic results,
`prefers-reduced-motion` respected, and 4.5:1 minimum contrast throughout.

The interactive demos are keyboard-navigable. Worth testing with a screen reader before launch if
accessibility is a procurement criterion for your buyers — which, given your market, it may well be.

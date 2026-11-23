# grantmcconnaughey.com

Grant McConnaughey's personal site. A static [Astro](https://astro.build) site deployed to GitHub Pages at
https://grantmcconnaughey.com (www redirects to the bare domain).

## Running it

Requires Node 22+ (see `.nvmrc`).

```sh
npm install        # first time only
npm run dev        # dev server at http://localhost:4321 with live reload
npm run build      # type-check (astro check) + build to dist/
npm run preview    # serve the built dist/ locally
```

## Deploying

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to
GitHub Pages. In the repo's **Settings → Pages**, the source must be set to **GitHub Actions** (not "Deploy from
a branch"). The custom domain comes from `public/CNAME`.

## Decisions

- **Astro, not Jekyll.** We moved off Jekyll in Nov 2026 for a nicer local dev setup and components.
  No UI framework (React/Vue). Pages are plain `.astro` files and ship zero JS by default. Keep it that way
  unless something truly needs interactivity.
- **Two main pages:** About (`/`) and Work (`/work/`). These are the only items in the header nav.
- **Work page is mostly Postpone.** It has a big featured Postpone card (with Postpone's app icon, `src/assets/postpone-logo.png`), then past jobs
  (timeline) and side projects/open source. Side-project cards that link to GitHub show a GitHub icon. **No talks
  section.** The old BriteCon video links were mostly dead, so we removed it.
- **Archive pages stay, but are low-key.** The blog (`/blog/`, posts from 2015–2020) is linked only from the
  footer. The footer's "Bookshelf" link goes to Goodreads. The old `/books/` page still builds so old links work,
  but nothing on the site links to it.
- **About page copy:** no links in the "outside of work" paragraph. The Quick facts list covers Postpone, Madison,
  Python/Django, piano and music, cooking, and leading a 45-person org.
- **Old URLs keep working.** Blog posts keep their Jekyll permalinks (`/blog/YYYY/MM/DD/slug/`) and the RSS feed
  stays at `/feed.xml`. `/projects`, `/talks`, `/subscribe`, and `/tags/*` redirect (see `astro.config.mjs`).
- **Look and feel:** clean, professional, a smidge fun. Mostly white with **one accent color: Postpone blue**
  (`#0067ff`, `--accent`) plus yellow on the photo sticker. Fun comes from small touches: a squiggle underline, a waving
  hand, a tilted photo with an offset color block, a "sticker", chunky outlined buttons with a pop shadow on hover,
  and a 404 page with the old cartoon avatar. Keep additions in this spirit, and don't overdo it.
- **Light mode only** for now.
- **Footer:** social links with icons, LinkedIn first. Just a copyright line, no "built with" credit.
- **Icons** are inlined in `src/components/Icon.astro` (from Tabler Icons, MIT). Add new ones there rather than
  pulling in an icon library.
- **No custom CSS framework.** One global stylesheet (`src/styles/global.css`) for tokens and shared pieces, plus
  scoped `<style>` blocks in each page/component.
- **Fonts are self-hosted** via Fontsource: Bricolage Grotesque (headings, `--font-display`) and Inter (body).
- **Removed from the old site:** Pure CSS, jQuery, Font Awesome, the TinyLetter newsletter form (TinyLetter
  shut down), Google Universal Analytics (shut down), and the old MSSU/Lintly screenshot galleries (still in git
  history).

## Where things live

```
src/
  pages/            index (About), work, books, 404, blog/index, blog/[...path] (posts), feed.xml.ts
  layouts/Base.astro  <head>, meta tags, header + footer
  components/       Header, Footer, Icon (brand icons), PostponeMark (Postpone logo)
  data/
    site.ts         name, description, nav, social links
    work.ts         jobs and projects shown on /work
    books.json      bookshelf data (influential + per-year lists)
  content/posts/    blog posts as Markdown (Jekyll-style `YYYY-MM-DD-slug.md` filenames)
  content.config.ts post schema
  lib/posts.ts      post URL/date/reading-time helpers
  assets/           images that Astro optimizes (avatar, cartoon)
  styles/global.css design tokens + shared styles
public/             copied as-is: CNAME, favicons, images used by posts
```

## Conventions

- **Re-theming:** change `--accent` (decorative) and `--accent-ink` (text; must stay ≥4.5:1 contrast on white) in
  `src/styles/global.css`.
- **Editing content:** most copy changes are in `src/data/*.ts` or directly in `src/pages/index.astro` and
  `src/pages/work.astro`.
- **New blog post:** add `src/content/posts/YYYY-MM-DD-slug.md` with `title`, `date`, and optional `categories`
  front matter.
- **Images:** put images that should be optimized in `src/assets/` and use `<Image>` from `astro:assets`. Put
  images referenced by raw URL (e.g. inside Markdown posts) in `public/images/`.
- Run `npm run build` before committing. It runs `astro check`, so type errors fail the build.

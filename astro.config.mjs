// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Old Jekyll tag pages that no longer exist. Redirect them to the blog index.
const oldTags = ['django', 'film', 'management', 'okrs', 'postpone', 'productivity', 'projects', 'python'];

export default defineConfig({
  site: 'https://grantmcconnaughey.com',
  // Astro's HTML compression drops the space between a line of text and a link on the next line.
  compressHTML: false,
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
  // Keep old URLs working after the Jekyll -> Astro move.
  redirects: {
    '/projects': '/work',
    '/talks': '/work',
    '/subscribe': '/blog',
    ...Object.fromEntries(oldTags.map((tag) => [`/tags/${tag}`, '/blog'])),
  },
});

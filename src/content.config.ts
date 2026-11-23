import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts migrated from Jekyll. Filenames keep the Jekyll `YYYY-MM-DD-slug.md`
// convention; URLs are built in src/lib/posts.ts to match the old permalinks.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    // YAML parses "2015-07-13 21:50:00" as UTC, so always read it with UTC getters.
    date: z.coerce.date(),
    // Jekyll stored categories as a space-separated string.
    categories: z
      .union([z.string(), z.array(z.string())])
      .optional()
      .transform((v) => (typeof v === 'string' ? v.split(/\s+/).filter(Boolean) : (v ?? []))),
  }),
});

export const collections = { posts };

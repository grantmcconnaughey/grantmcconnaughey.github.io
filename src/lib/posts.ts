import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

const pad = (n: number) => String(n).padStart(2, '0');

/** Jekyll permalink: /blog/:year/:month/:day/:title/ (date from front matter, title from filename). */
export function postPath(post: Post): string {
  const d = post.data.date;
  const slug = post.id.replace(/^\d{4}-\d{2}-\d{2}-/, '');
  return `/blog/${d.getUTCFullYear()}/${pad(d.getUTCMonth() + 1)}/${pad(d.getUTCDate())}/${slug}/`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

export function readingTime(body = ''): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export async function getSortedPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

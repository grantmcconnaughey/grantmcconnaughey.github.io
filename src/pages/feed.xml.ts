import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getSortedPosts, postPath } from '../lib/posts';
import { site } from '../data/site';

// Same URL as the old Jekyll feed, so existing subscribers keep working.
export async function GET(context: APIContext) {
  const posts = await getSortedPosts();
  return rss({
    title: site.name,
    description: site.description,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: postPath(post),
      categories: post.data.categories,
      content: post.rendered?.html,
    })),
  });
}

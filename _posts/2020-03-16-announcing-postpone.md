---
layout: post
title: Announcing Postpone
date: 2020-03-16 08:00:00
categories: projects postpone
---

Today I'm happy to announce the release of [Postpone](https://www.postpone.app), an app to schedule Reddit posts for increased views, upvotes, and traffic to your projects.

![Postpone home page](/images/projects/postpone/home.png)

Postpone is an app created to solve my own need. I often have blog posts, open source project updates, or other content to share on Reddit. However, I don't want to share this content when others are offline and won't see it. This is where Postpone comes in.

Postpone lets users queue up Reddit posts so that they're submitted when others are online to see them.

## Prediction, Queueing, and Analytics

Postpone helps users get their content noticed by:

* **Predicting** the best time to post and which subreddits to post to.
* **Queueing** your posts so that they are submitted to these subreddits at these times.
* **Analytics** to see how your posts are performing over time.

The launch version of Postpone focuses on Queueing first. Development on Postpone will continue to improve Prediction and Analytics of posts as well.

## Features

Postpone comes with some neat features at launch to help you queue up your Reddit posts.

### Plans

Postpone supports 3 plans: Base, Premium, and Unlimited.

**Base** lets you queue up one post per week from a single Reddit account. **Premium** lets you queue up unlimited posts from a single Reddit account. **Unlimited** lets you queue up unlimited posts from unlimited Reddit accounts.

As new features are built, some will only be available to paid plans (Premium and Unlimited).

### Writing Posts

Postpone has two different ways to write posts.

By default, Postpone provides a fancy WYSIWYG editor for writing posts. This is built using [Tiptap](https://tiptap.scrumpy.io/), which is a great WYSIWYG library for Vue.js. I've meticulously tweaked and configured Tiptap, and I think the end result is pretty great.

Not everyone wants to use a WYSIWYG editor, however. Some folks prefer to write in raw [Markdown](https://www.reddit.com/wiki/markdown). If you'd prefer to write posts in Markdown then you can use the Markdown-only editor instead.

![Update a post page](/images/projects/postpone/update-reddit-post.png)

### Subreddit Search

Postpone provides a subreddit search input to help you pick the subreddit to post in. This gives you the ability to search for a subreddit, as well as related subreddits. Postpone will even show you the total number of subscribers to these subreddits, in order to help you pick subreddits with the largest audience.

![Subreddit search](/images/projects/postpone/subreddit-search.png)

### Retry Support

Sometimes posts fail to submit. This could happen for several reasons, such as Reddit being temporary unavailable or user login credentials being out of date.

When errors occur, Postpone will send you an e-mail letting you know that it could not submit your post. The next time you visit Postpone the app will display a list of failed posts, the reason why they failed, and let you retry them.

## Just the Start

This initial version of [Postpone](https://www.postpone.app) is just a start. Over the coming weeks and months I'll be adding features such as:

* The ability to see the best time to post to certain subreddits.
* Support for cross-posting to multiple subreddits at once.
* Simple analytics, such as total post upvotes and comments.
* Improved analytics, such as post performance over time.

To suggest a feature or report a bug please either:

* Tweet [@grantmcconnaughey](https://twitter.com/gmcconnaughey)
* Post in [/r/postpone](https://reddit.com/r/postpone)
* E-mail <a href="mailto:PostponeReddit@gmail.com">PostponeReddit@gmail.com</a>

Happy Postponing!

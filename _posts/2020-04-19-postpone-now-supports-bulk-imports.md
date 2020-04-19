---
layout: post
title: Postpone now supports bulk importing posts
date: 2020-04-19 08:00:00
categories: projects postpone
---

Since launch, Postpone's most requested feature has been the ability to bulk import posts from CSV. I'm happy to announce that [Postpone version **2020.3.0**](https://www.postpone.app), released today, now supports this feature.

Here is the **TL;DR** for the updates in Postpone version 2020.3.0:
- Added support for bulk importing posts from CSV
- Display number of characters in post title as users are typing
- Increased cross-post limit to fro 5 to 10 subreddits
- Added pagination to Dashboard tables
- Improved speed of loading posts on the Dashboard
- Added a link to DM [/u/postponedev](https://reddit.com/u/postponedev) on Reddit for help or feature requests
- Fixed an error that would occur when the user declined to give Reddit app permissions
- Fixed an error that would occur when the user attempted to link a Reddit account that already had a Postpone account

I'll briefly dive into a few of the new features.

## Bulk Import Posts

If you use a service like Postpone, then you likely have a lot of posts you'd like to schedule on Reddit. Often these posts are links to content you've created, and you'd like to share them across multiple subreddits at different times. It is now possible to schedule all of these posts at once using Bulk Import.

Bulk Import gives users the ability to upload a CSV file with many posts and schedule them all for submission. CSV files can be created from a spreadsheet program like Excel or Numbers. Postpone even provides [a handy template](https://www.postpone.app/downloads/postpone-import-template.csv) to get you started.

![Bulk import posts from CSV](/images/projects/postpone/import.png)

## Title Character count

The objective of Postpone is to help users get the most upvotes, comments, and visibility on their Reddit posts. Post visibility isn't only determined by the date, time, and subreddit your posts are submitted to. It is also determined by the content of your posts.

A [recent study by Foundation](https://foundationinc.co/lab/reddit-statistics/) found that Reddit post **titles with 40-120 characters generate the most upvotes**. To help you hit that target range, Postpone now shows the number of characters on post titles as users type them. Here's an example of what that looks like:

![Title character count](/images/projects/postpone/title-characters.png)

## Dashboard improvements

The new bulk import feature will result in many more posts being submitted to Postpone. So I've added a few improvements to the Dashboard to handle this increase.

First, the Dashboard now supports pagination. If users have dozens of posts scheduled then they'll be able to page through them 20 at a time. This helps with managing and viewing large amounts of posts.

I've also tweaked some things on the backend to reduce the time it takes to fetch posts and submissions. This results in the Dashboard loading much more quickly, especially for users that have lots of posts and submissions.

## Make a Feature Request

That's it for today's update. If you'd like to submit feedback or request a feature then send an email to <a href="mailto:PostponeReddit@gmail.com">PostponeReddit@gmail.com</a> or message me [on Twitter](https://twitter.com/gmcconnaughey).

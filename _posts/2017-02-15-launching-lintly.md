---
layout: post
title: "Launching Lintly: One Month In"
date: 2017-02-15 08:00:00
categories: projects
comments: true
---

It has been about a month since I launched my app Lintly, an automated code linting website for Python, JavaScript, and CSS. I've learned a lot in the last 6 months while working on and deploying Lintly. In this article I'm going to recap Lintly's first month and discuss all that goes into building a production app.

Specifically, I'll talk about…

1. My strategy for planning the app
2. Project management I used during development
3. The AWS services I used for deployment
4. How I marketed the app without spending a dime
5. The app's finances (a breakdown of every dollar I've spent on Lintly)

![The Lintly Dashboard](/images/lintly-dashboard.png)

## The numbers

Let's get some stats out of the way. Here is how Lintly has performed in the last month:

- **78 users** have signed up
- **131 GitHub repos** are being linted
- **642 times** Lintly has linted code
- **320,146 lines of code** linted

Not bad! I told my wife that if 10 people signed up in the first week that I would be happy. So 75 users in a month is certainly something I'm happy with.

Now let's talk about building and deploying the app. First up: Planning.

## Planning

Planning was where I spent the least amount of time. There can be philosophical arguments about how much planning one should perform on a side project, but those are best left to smarter developers.

I do like to do one bit of planning: checking out competitors. I knew there was already a similar app in the Python landscape (wink, nudge), and several other competitors that work with all sorts of languages. So I went to the home page for all of those sites and read about their features. I also checked out the documentation for those apps.

I do all of this to give me a good sense of what features are universal between all code linting sites. For example, all sites integrate with GitHub webhooks, so I knew that would be important. On the flip side, some sites simply lint pull requests and don't store the results, so perhaps that isn't a required feature.

I wrote down all the required and non-essential features. All the required features went into the Beta feature set. Everything non-essential went into the Someday or v1.0 feature set.

## Development

After planning it was time to start hacking on this thing. I'm pretty familiar with Python and Django, so those are what I used to build Lintly. I worked on Lintly in my spare time for about 6 months before finally releasing it. Occasionally I wouldn't work on Lintly for weeks at a time. However, setting a goal to release the first week of January helped me to finally focus and ship a working product.
I used Trello to help keep track of features that needed to be completed. I split the Trello board into 5 lanes:

1. To-Do - Someday
1. To-Do- v1.0
1. To-Do - Beta
1. Doing
1. Done

The To-Do - Someday lane consists of features that would be nice to have, but are not required at all. To-Do - v1.0 is for features that need to be in version 1.0 (like accepting payments for private repos), but don't need to be in the beta. The To-Do - Beta lane is for features required to even release a beta.

By using these 5 lanes I was able to focus exclusively on the features required to release a functional beta. This is easier than it sounds, as I often found myself moving new features into the beta lane. But overall this system worked well for me.

![The Lintly Dashboard](/images/trello-board.png)

## Deployment

When I finally completed all cards in the To-Do - Beta lane in Trello I was ready for deployment. I decided to go with AWS since we use a lot of AWS services where I work, and because knowing AWS is an important skill set to have these days. AWS also provides a [free tier](https://aws.amazon.com/free/), which allowed me to play around with the different services and initially deploy the app without having to pay a dime.
AWS is overwhelming to those unfamiliar with it. AWS has dozens of services at the developers disposal. In the end,

I used these services to deploy Lintly:

- **Elastic Beanstalk** - A Heroku-esque web server environment
- **RDS** - Hosts the Postgres database
- **ECS** - Runs a cluster of Docker containers (I use these for the Lintly Celery workers)
- **ElasticCache** - Hosts the Redis cache
- **SQS** - A message queueing system that integrates with Celery
- **Route 53** - DNS management
- **S3** - Stores Lintly's static assets
- **CloudFront** - A CDN in front of Lintly's static assets

This is just the tip of the iceberg of what AWS has to offer. However, I believe these services are some of the most essential ones to learn. If you understand them then you should be able to deploy most standard web apps to the world.

Side note: If you want to deploy a Django app to AWS and need a place to start, [this article](https://realpython.com/blog/python/deploying-a-django-app-and-postgresql-to-aws-elastic-beanstalk/) is excellent.

## Marketing

In order to market you have to provide value in one form or another. The easiest way to provide value is to pay money for a site to place an ad or promote a Tweet that others will see. Most solo developers don't want to spend a lot of money marketing an app, especially one they would consider a side project. I'm certainly no exception to that, which meant I needed to find alternative ways to let people know about Lintly.

I decided to write articles about Lintly and post them on Medium, Twitter, and Reddit. These articles (much like this one) aim to teach the reader about something. One of the articles I wrote was called "Mistakes I Made Writing a Django App (and How I Fixed Them)", which talked about Lintly and some of the ways I messed up while working on it. This article provides value to the reader by giving them real world examples of a Django app. It also informs them about Lintly. Everyone wins!

## Finances

Lintly has no way of accepting money yet. Eventually I will charge for private repos, but to start out I wanted to offer it for free to have people try it out and report bugs. I can, however, talk about how much Lintly costs.
So far Lintly hasn't cost that much. Here's a breakdown of what I've spent:

- \$9 - lintly.com domain name
- \$18 - Bootstrap theme
- \$4.69 - AWS costs for December 2016
- \$56.39 - AWS costs for January 2017

January 2017 was by far the most expensive month I've had. This is mostly because in mid-January I tried changing how the app was deployed in a number of different ways. I tried using a single container Docker instance, a multi-container Docker instance, regular Elastic Beanstalk, Zappa, and ECS. All of that stopping and starting various EC2 instances added up, and the bill came to be \$56.39.

Since then I have found a deployment that I really like - Elastic Beanstalk for the web server and ECS for the Celery worker containers. These both run on t2.micro EC2 instances (there just isn't very much traffic right now) so the costs are pretty minimal.

## Going Forward

Lintly had an exciting and fun first month. I don't know if it will ever be considered a success from a monetary standpoint, but I don't think it matters. To me it's a success either way.

I would work on it even if it never made a dollar.

I build it because it's fun.

---
layout: post
title: Automate Python code reviews for free with GitHub Actions, Flake8, and Lintly
date: 2020-02-25 08:00:00
categories: python projects
comments: true
---

Code is read much more often than it is written. As software developers, we have many options for ensuring our code is as readable as possible. In this post I’ll describe how you can use several free open source tools to automate code reviews in your GitHub repositories.

## The Tools

We're going to use the following tools to automate code quality checking in pull requests:

- [Flake8](http://flake8.pycqa.org/en/latest/), a popular Python linter that combines three separate linters: pycodestyle (styling), pyflakes (syntax, semantics), and mccabe (code complexity).
- [Lintly](http://github.com/grantmcconnaughey/lintly), a CLI tool which parses linter output, determines which lines have violations, and creates a pull request review with comments on each line.
- [GitHub Actions](https://github.com/features/actions), GitHub’s new CI service, which is free for up to [2,000 minutes of execution per month](https://help.github.com/en/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions#about-billing-for-github-actions) for GitHub users.

## Lintly-Flake8 GitHub Action

To make this whole process easy, I’ve created a GitHub Action to merge Flake8 with Lintly. Its called [Lintly-Flake8](https://github.com/marketplace/actions/lintly-flake8), and its available on the GitHub Marketplace.

To use Lintly-Flake8, add the following to a GitHub Actions file at the file `.github/workflows/lint.yml` in your repo:

```yaml
on: [pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: grantmcconnaughey/lintly-flake8-github-action@v1.0
        with:
          token: ${% raw %}{{ secrets.GITHUB_TOKEN }}{% endraw %}
```

This tells GitHub Actions to only run on pull requests. We first check out the code in the pull request, then use Lintly-Flake8 by passing the GitHub Actions bot token. This ensures that the bot github-actions will be used for the review.

Next, open a pull request with flake8 issues, such as too many blank lines between functions or the cryptic "[Continuation line over-indented for visual indent](https://www.flake8rules.com/rules/E127.html)." GitHub Actions will run and detect all of the changed lines with violations. Then the github-actions bot will leave a code review on each line, making it very clear what needs to be updated.

<img src="/images/lintly-github-actions.png" alt="Lintly leaving a PR review" />

## Options

Lintly-Flake8 supports a few different options to tweak how it runs.

First, it supports `failIf`, which allows you to change if Lintly should catch _any_ violation or only _new_ ones. Valid values are `any` or `new`. `new` is the default, which is handy for projects with existing flake8 violations.

Lintly-Flake8 also supports `args`, which are additional arguments sent to the flake8 CLI. This gives you the ability to pass arguments like `--select` or `--ignore`, as well as changing the directory to be listing. This defaults to `.`, which lints all files in the current directory.

### Example

Below is an example of all arguments supported in a Lintly-Flake8 step in a Github Action:

```yaml
- uses: grantmcconnaughey/lintly-flake8-github-action@v1.0
  with:
    token: ${% raw %}{{ secrets.GITHUB_TOKEN }}{% endraw %}
    failIf: any
    args: "--ignore=E121,E123 ."
```

## Conclusion

Flake8 lints code. Lintly creates GitHub pull request reviews. GitHub Actions automates and orchestrates all of this. The power of open source allows these distinct tools to work together to provide overall value.

If you’d like to contribute to Lintly, Flake8, or Flake8Rules then check out the following GitHub repos:

- [Lintly](http://github.com/grantmcconnaughey/lintly)
- [Flake8](https://github.com/PyCQA/flake8)
- [Flake8Rules](http://github.com/grantmcconnaughey/flake8rules)

// Content for the Work page. Sourced from the old site and résumé.

export interface Job {
  company: string;
  url?: string;
  role: string;
  years: string;
  summary: string;
  current?: boolean;
}

export const jobs: Job[] = [
  {
    company: 'Postpone',
    url: 'https://www.postpone.app',
    role: 'Founder',
    years: '2020 – now',
    summary: 'Building a social media marketing tool for creators, agencies, and brands. I do all of it: product, design, code, and support.',
    current: true,
  },
  {
    company: 'Zapier',
    url: 'https://zapier.com',
    role: 'Senior Backend Engineer, Identity',
    years: '2020 – 2022',
    summary:
      'Built the task analytics system behind Zap History (billions of records a month), plus JWT-based auth and key rotation between internal services.',
  },
  {
    company: 'BriteCore',
    url: 'https://www.britecore.com',
    role: 'Director of Engineering, Policy Administration',
    years: '2019 – 2020',
    summary: 'Led a division of 45 engineers across six teams, and the architects designing five insurance products.',
  },
  {
    company: 'BriteCore',
    url: 'https://www.britecore.com',
    role: 'Engineering Manager / Software Architect',
    years: '2016 – 2019',
    summary:
      'Hired and led the teams that built BriteLines (product definition and rating) and BriteQuote (configurable quoting wizards).',
  },
  {
    company: 'SideCars',
    role: 'Software Architect',
    years: '2015 – 2016',
    summary: 'Built SideKick, a Django reinsurance app, and grew its test suite from 270 tests to 2,500 (46% → 95% coverage).',
  },
  {
    company: 'Missouri Southern State University',
    url: 'https://www.mssu.edu',
    role: 'Programmer Analyst',
    years: '2013 – 2015',
    summary: 'Rewrote the online admissions application in Grails, then redesigned mssu.edu as a freelancer.',
  },
];

export interface Project {
  name: string;
  url: string;
  /** Show a GitHub icon instead of the generic external-link arrow. */
  github?: boolean;
  summary: string;
  tag: string;
}

export const projects: Project[] = [
  {
    name: 'Lintly',
    url: 'https://github.com/grantmcconnaughey/Lintly',
    github: true,
    summary: 'A 2017 SaaS that ran Python linters on pull requests. The service is retired, but the CLI is open source.',
    tag: 'Side project',
  },
  {
    name: 'Flake8 Rules',
    url: 'https://www.flake8rules.com',
    summary: 'Plain-English descriptions and examples for every rule in Flake8.',
    tag: 'Website',
  },
  {
    name: 'django-avatar',
    url: 'https://github.com/grantmcconnaughey/django-avatar',
    github: true,
    summary: 'A Django app for handling user avatars. I maintain it.',
    tag: 'Open source',
  },
  {
    name: 'django-field-history',
    url: 'https://github.com/grantmcconnaughey/django-field-history',
    github: true,
    summary: 'A Django app to track changes to a model field over time.',
    tag: 'Open source',
  },
  {
    name: 'django-lazy-tags',
    url: 'https://github.com/grantmcconnaughey/django-lazy-tags',
    github: true,
    summary: 'Load slow Django template tags via AJAX after the page renders.',
    tag: 'Open source',
  },
  {
    name: 'Lintly-Flake8 Action',
    url: 'https://github.com/grantmcconnaughey/lintly-flake8-github-action',
    github: true,
    summary: 'A GitHub Action that leaves automatic PR reviews using Flake8.',
    tag: 'Open source',
  },
  {
    name: 'cookiecutter-django-vue-graphql-aws',
    url: 'https://github.com/grantmcconnaughey/cookiecutter-django-vue-graphql-aws',
    github: true,
    summary: 'An opinionated full-stack template, extracted from the original Postpone codebase.',
    tag: 'Open source',
  },
  {
    name: 'ci.py',
    url: 'https://github.com/grantmcconnaughey/ci.py',
    github: true,
    summary: 'A small Python library for working with CI services.',
    tag: 'Open source',
  },
];

export const site = {
  name: 'Grant McConnaughey',
  description:
    "Grant McConnaughey is a software engineer and the founder of Postpone, living in the Madison, Wisconsin area.",
  nav: [
    { href: '/', label: 'About' },
    { href: '/work/', label: 'Work' },
  ],
  socials: [
    { href: 'https://www.linkedin.com/in/grant-mcconnaughey/', label: 'LinkedIn', icon: 'linkedin' },
    { href: 'https://bsky.app/profile/grantmcconnaughey.com', label: 'Bluesky', icon: 'bluesky' },
    { href: 'https://www.threads.net/@grantmcconnaughey', label: 'Threads', icon: 'threads' },
    { href: 'https://github.com/grantmcconnaughey', label: 'GitHub', icon: 'github' },
  ] as const,
};

// NAV
export interface NavItem {
  label: string;
  page: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    page: 'home',
  },
  {
    label: 'About',
    page: 'about',
  },
  {
    label: 'Projects',
    page: 'projects',
  },
];

// HERO
export const skills = [
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'JavaScript' },
  { skill: 'TypeScript' },
  { skill: 'Tailwind CSS' },
  { skill: 'Node.js' },
  { skill: 'React.JS' },
  { skill: 'Next.JS' },
  { skill: 'GitHub' },
  { skill: '.NET' },
  { skill: 'SQL' },
];
//PROJECT
export const projects = [
  {
    name: 'E-commerce',
    description:
      'Next.js, React.js and Typescript with Sanity.io CMS. Cant actually buy anything though, its just a demo.',
    image: '/nextjs.webp',
    github: 'https://nextjs-my-ecommerce.vercel.app',
    link: 'https://nextjs-my-ecommerce.vercel.app',
  },
  {
    name: 'Portfolio 3.0 (this)',
    description: 'Next.js, React, Typescript & Tailwind.',
    image: '/nextjs.webp',
    github: 'https://github.com/Marshan88/nextjs-portfolio',
    link: 'https://marshan.me',
  },
  {
    name: 'Portfolio 2.0',
    description: 'React.JS',
    image: '/reactjs.png',
    github: 'https://github.com/Marshan88/personal-portfolio',
    link: 'https://personal-portfolio-navy-nine.vercel.app/',
  },
];

export const cardTiltValues = {
  reverse: true, // reverse the tilt direction
  max: 14, // max tilt rotation (degrees)
  perspective: 2000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 450, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
};

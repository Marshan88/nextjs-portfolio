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
  { skill: 'Drone certifications: A1-A3/STS' },
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'JavaScript' },
  { skill: 'TypeScript' },
  { skill: 'Tailwind' },
  { skill: 'Node' },
  { skill: 'React.js' },
  { skill: 'Next.js' },
  { skill: 'GitHub' },
  { skill: 'C#' },
  { skill: 'SQL' },
];
export const certificates = [
  { cert: 'A1/A3' },
  { cert: 'A2' },
  { cert: 'STS' },
  { cert: 'SORA' },
  { cert: 'LiDAR & Photogrammetry' },
];
//PROJECT
export const projects = [
  {
    name: 'Drone Website',
    description: 'v0, Next.js, Typescript and Tailwind CSS.',
    image: '/dronewebsite.avif',
    github: 'https://github.com/Marshan88/nextjs-v0-dronewebsite',
    link: 'https://v0-new-wq.vercel.app/',
  },
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

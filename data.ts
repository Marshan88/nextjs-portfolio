export interface NavItem {
  label: string;
  page: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

export const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Tailwind CSS" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "GitHub" },
  { skill: ".NET framework" },
  { skill: "SQL" },
  { skill: "Node.js" },
  { skill: "Bootstrap" },
];

export const projects = [
  {
    name: "Portfolio 3.0 (this)",
    description: "Tech stack: Next.js, React, Typescript & Tailwind.",
    image: "/nextjs.png",
    github: "https://github.com/Marshan88/personal-portfolio",
    link: "https://github.com/Marshan88/personal-portfolio",
  },
  {
    name: "Portfolio 2.0",
    description: "Tech stack: React.",
    image: "/reactjs.jpg",
    github: "https://github.com/Marshan88/personal-portfolio",
    link: "https://marshan.me/",
  },
  {
    name: "Portfolio 1.0",
    description: "Tech stack: HTML, CSS and JS.",
    image: "/javascript.png",
    github: "https://github.com/Marshan88/MyPortfolio",
    link: "https://marshan88.github.io/MyPortfolio/",
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
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

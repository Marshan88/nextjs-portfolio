import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

/*
  https://www.npmjs.com/

- npm i next-themes
- npm i next-fonts
- npm i @types/react-scroll
- npm i react-scroll
- npm i react-icons
- npm install typed.js (https://github.com/mattboldt/typed.js/)

- npm install --save-dev @types/react-scroll
- autoprefixer --save-dev
- postcss --save-dev
- tailwindcss --save-dev

YOUTUBE: https://youtu.be/7gnVzj_nMJw?t=1409
GITHUB REPO: https://github.com/hqasmei/tailwindcss-and-nextjs-portfolio/blob/final/components/Navbar.tsx
TW CSS: https://nerdcave.com/tailwind-cheat-sheet
CHEAT SHEET: https://roadmap.sh/

*/
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}

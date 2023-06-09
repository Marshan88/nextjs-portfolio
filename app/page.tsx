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

CHEAT SHEETS and TOOLS:
- TW CSS: https://nerdcave.com/tailwind-cheat-sheet
- https://pomofocus.io/
- https://goblin.tools/
- https://roadmap.sh/
- https://www.w3schools.com/default.asp
- https://stackblitz.com/

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

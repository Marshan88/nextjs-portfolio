import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

/*
TODO:
- social links in navbar
- add projects tab
- add more projects
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

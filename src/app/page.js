import HeaderComponent from "@/components/layout/HeaderComponet";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";

export default function Home() {
  return (
    <div>
      <div className="min-h-dvh">
        <HeaderComponent />
        <HeroSection />
      </div>

      <ProjectsSection />
      <ExperienceSection/>
    </div>
  );
}

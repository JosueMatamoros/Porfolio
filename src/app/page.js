import HeaderComponent from "@/components/layout/HeaderComponet";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SoftSkillsSection from "@/components/sections/SoftSkillsSection";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="min-h-dvh">
        <HeaderComponent />
        <HeroSection />
      </div>

      <div className=" max-w-5xl">
        <ProjectsSection />
      <ExperienceSection/>
      <SoftSkillsSection/>
      </div>
    </div>
  );
}

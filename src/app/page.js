import HeaderComponent from "@/components/layout/HeaderComponent";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperiencePreviewSection from "@/components/sections/ExperiencePreviewSection";
import SoftSkillsSection from "@/components/sections/SoftSkillsSection";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="min-h-dvh">
        <HeroSection />
      </div>

      <div className=" max-w-5xl">
      <ProjectsSection />
      <ExperiencePreviewSection/>
      <SoftSkillsSection/>
      </div>
    </div>
  );
}

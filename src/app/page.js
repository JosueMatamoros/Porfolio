import HeroSection from "@/components/sections/home/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperiencePreviewSection from "@/components/sections/home/ExperiencePreviewSection";
import TechSkills from "@/components/sections/TechSkillsSection";
import SoftSkillsSection from "@/components/sections/SoftSkillsSection";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="min-h-dvh">
        <HeroSection />
      </div>

      <div className="w-full max-w-5xl px-4 lg:px-6">
      <ProjectsSection />
      <ExperiencePreviewSection/>
      <TechSkills/>
      <SoftSkillsSection/>
      </div>
    </div>
  );
}

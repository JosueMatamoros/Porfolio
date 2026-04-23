import TechSkillsSection from "@/components/sections/TechSkillsSection";
import SoftSkillsSection from "@/components/sections/SoftSkillsSection";
export default function SkillsPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-5xl mt-24 px-4 lg:px-0">
        <TechSkillsSection/>
        <SoftSkillsSection/>
      </div>
    </div>
  );
}

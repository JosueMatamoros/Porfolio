import React from "react";
import TechSkillsSection from "@/components/sections/TechSkillsSection";
import SoftSkillsSection from "@/components/sections/SoftSkillsSection";
export default function SkillsPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-5xl mt-24">
        <TechSkillsSection/>
        <SoftSkillsSection/>
      </div>
    </div>
  );
}

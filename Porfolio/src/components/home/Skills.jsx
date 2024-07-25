import React from "react";
import { FaJava, FaPython, FaReact, FaCss3, FaHtml5, FaBootstrap, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiGoland, SiIntellijidea, SiWarp } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <div className="w-screen flex flex-col items-center">
      <h1 className="text-4xl mb-8">My Skills</h1>

      <div className="flex flex-wrap justify-center">
        <SkillCard
          title="Back-end Development"
          skills={[
            { name: "Python", icon: FaPython },
            { name: "Java", icon: FaJava },
            { name: "JavaScript", icon: IoLogoJavascript },
            { name: "Golang", icon: SiGoland },
          ]}
        />
        <SkillCard
          title="Front-end Development"
          skills={[
            { name: "React", icon: FaReact },
            { name: "Tailwind", icon: RiTailwindCssFill },
            { name: "HTML", icon: FaHtml5 },
            { name: "CSS", icon: FaCss3 },
            { name: "Bootstrap", icon: FaBootstrap },
          ]}
        />
        <SkillCard
          title="Tools and Technologies"
          skills={[
            { name: "VS Code", icon: VscVscode },
            { name: "Intellij", icon: SiIntellijidea },
            { name: "Warp", icon: SiWarp },
            { name: "GitHub", icon: FaGithub },
            { name: "MySQL", icon: GrMysql },
          ]}
        />
      </div>
    </div>
  );
}

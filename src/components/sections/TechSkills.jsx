"use client";

import TechSkillsCard from "@/components/common/TechSkillsCard";
import {
  SiPython, SiJavascript, SiTypescript, SiGo, SiRust, SiC, SiCplusplus,
  SiHtml5, SiCss3, SiTailwindcss, SiReact, SiVuedotjs, SiAngular,
  SiVite, SiNextdotjs, SiR, SiOverleaf, SiMarkdown, SiMysql,
  SiPostgresql, SiGit, SiGithub, SiNodedotjs, SiUnity, SiWarp,
  SiIntellijidea, SiDatagrip
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

const techGroups = [
  {
    title: "UI & Frameworks",
    subcategories: [
      {
        subtitle: "Styling",
        techs: [
          { name: "HTML", icon: SiHtml5 },
          { name: "CSS", icon: SiCss3 },
          { name: "Tailwind", icon: SiTailwindcss },
        ],
      },
      {
        subtitle: "Frameworks",
        techs: [
          { name: "React", icon: SiReact },
          { name: "Vue", icon: SiVuedotjs },
          { name: "Angular", icon: SiAngular },
        ],
      },
      {
        subtitle: "Build Tools",
        techs: [
          { name: "Vite", icon: SiVite },
          { name: "Next.js", icon: SiNextdotjs },
        ],
      },
    ],
  },
  {
    title: "Languages",
    subcategories: [
      {
        subtitle: "Proficient",
        techs: [
          { name: "Python", icon: SiPython },
          { name: "Java", icon: FaJava },
          { name: "JavaScript", icon: SiJavascript },
          { name: "TypeScript", icon: SiTypescript },
        ],
      },
      {
        subtitle: "Experienced",
        techs: [
          { name: "Go", icon: SiGo },
          { name: "Rust", icon: SiRust },
          { name: "C", icon: SiC },
          { name: "C++", icon: SiCplusplus },
        ],
      },
    ],
  },
  {
    title: "Terminal & IDEs",
    subcategories: [
      {
        subtitle: "Terminal & Version Control",
        techs: [
          { name: "Git", icon: SiGit },
          { name: "GitHub", icon: SiGithub },
          { name: "Node.js", icon: SiNodedotjs },
          { name: "Warp", icon: SiWarp },
        ],
      },
      {
        subtitle: "IDEs & Tools",
        techs: [
          { name: "VS Code", icon: VscVscode },
          { name: "IntelliJ", icon: SiIntellijidea },
          { name: "DataGrip", icon: SiDatagrip },
          { name: "Unity", icon: SiUnity },
        ],
      },
    ],
  },
  {
    title: "Data & Databases",
    subcategories: [
      {
        subtitle: "Documentation",
        techs: [
          { name: "R", icon: SiR },
          { name: "LaTeX", icon: SiOverleaf },
          { name: "Markdown", icon: SiMarkdown },
        ],
      },
      {
        subtitle: "Databases",
        techs: [
          { name: "MySQL", icon: SiMysql },
          { name: "PostgreSQL", icon: SiPostgresql },
        ],
      },
    ],
  },
];

export default function TechSkills() {
  return (
    <section className="px-6 max-w-7xl mx-auto mb-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-title text-4xl italic text-white md:text-5xl lg:text-6xl">
          Tech Skills
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
          These are some of the{" "}
          <span className="font-semibold text-secondary">technologies and tools</span>{" "}
          I’ve worked with across{" "}
          <span className="font-semibold text-secondary">different projects and contexts</span>.
        </p>
      </div>
      <TechSkillsCard techGroups={techGroups} />
    </section>
  );
}

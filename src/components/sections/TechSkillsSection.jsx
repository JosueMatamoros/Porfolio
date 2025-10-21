"use client";

import TechSkillsCard from "@/components/common/TechSkillsCard";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiRust,
  SiC,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiVite,
  SiNextdotjs,
  SiR,
  SiOverleaf,
  SiMarkdown,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiUnity,
  SiWarp,
  SiIntellijidea,
  SiDatagrip,
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
          { name: "HTML", icon: SiHtml5, slug: "html" },
          { name: "CSS", icon: SiCss3, slug: "css" },
          { name: "Tailwind", icon: SiTailwindcss, slug: "tailwind" },
        ],
      },
      {
        subtitle: "Frameworks",
        techs: [
          { name: "React", icon: SiReact, slug: "react" },
          { name: "Vue", icon: SiVuedotjs, slug: "vue" },
          { name: "Angular", icon: SiAngular, slug: "angular" },
        ],
      },
      {
        subtitle: "Build Tools",
        techs: [
          { name: "Vite", icon: SiVite, slug: "vite" },
          { name: "Next.js", icon: SiNextdotjs, slug: "nextjs" },
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
          { name: "Python", icon: SiPython, slug: "python" },
          { name: "Java", icon: FaJava, slug: "java" },
          { name: "JavaScript", icon: SiJavascript, slug: "js" },
          { name: "TypeScript", icon: SiTypescript, slug: "ts" },
        ],
      },
      {
        subtitle: "Experienced",
        techs: [
          { name: "Go", icon: SiGo, slug: "go" },
          { name: "Rust", icon: SiRust, slug: "rust" },
          { name: "C", icon: SiC, slug: "c" },
          { name: "C++", icon: SiCplusplus, slug: "cpp" },
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
          { name: "Git", icon: SiGit, slug: "git" },
          { name: "GitHub", icon: SiGithub, slug: "github" },
          { name: "Node.js", icon: SiNodedotjs, slug: "nodejs" },
          { name: "Warp", icon: SiWarp, slug: "terminal", customIcon: "/icons/warpIcon.webp" },
        ],
      },
      {
        subtitle: "IDEs & Tools",
        techs: [
          { name: "VS Code", icon: VscVscode, slug: "vscode" },
          { name: "IntelliJ", icon: SiIntellijidea, slug: "idea" },
         { name: "DataGrip", icon: SiDatagrip, slug: "datagrip", customIcon: "/icons/datagripIcon.webp" },
          { name: "Unity", icon: SiUnity, slug: "unity" },
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
          { name: "R", icon: SiR, slug: "r" },
          { name: "LaTeX", icon: SiOverleaf, slug: "latex" },
          { name: "Markdown", icon: SiMarkdown, slug: "markdown" },
        ],
      },
      {
        subtitle: "Databases",
        techs: [
          { name: "MySQL", icon: SiMysql, slug: "mysql" },
          { name: "PostgreSQL", icon: SiPostgresql, slug: "postgres" },
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
          <span className="font-semibold text-secondary">
            technologies and tools
          </span>{" "}
          I’ve worked with across{" "}
          <span className="font-semibold text-secondary">
            different projects and contexts
          </span>
          .
        </p>
      </div>
      <TechSkillsCard techGroups={techGroups} />
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
  SiDatagrip
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
  const [hovered, setHovered] = useState(null);
  const [activeTab, setActiveTab] = useState(techGroups[0].title);

  return (
    <section className="px-6 max-w-7xl mx-auto">
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

      <Card className="bg-card/90 border border-white/10 shadow-xl overflow-hidden backdrop-blur-sm rounded-2xl m-4 lg:m-0 p-8 md:p-10 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
        <Tabs
          defaultValue={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="mb-6 flex flex-wrap justify-start gap-3 bg-transparent p-0">
            {techGroups.map((group) => (
              <TabsTrigger
                key={group.title}
                value={group.title}
                className={`rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-all
                ${
                  activeTab === group.title
                    ? "bg-primary text-white shadow-md"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {group.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {techGroups.map((group) => (
            <TabsContent key={group.title} value={group.title}>
              <AnimatePresence mode="wait">
                {activeTab === group.title && (
                  <div
                    className="space-y-8"
                  >
                    <div className="flex flex-col lg:flex-row justify-between">
                      {group.subcategories.map((subcategory, idx) => (
                        <div key={idx} className="flex-1 min-w-[250px]">
                          {subcategory.subtitle && (
                            <h5 className="text-xs font-semibold text-muted-foreground mb-3 tracking-wider uppercase">
                              {subcategory.subtitle}
                            </h5>
                          )}
                          <div className="flex flex-wrap gap-4">
                            {subcategory.techs.map((tech) => {
                              const Icon = tech.icon || SiReact;
                              return (
                                <div
                                  key={tech.name}
                                  className="relative group cursor-pointer"
                                  onMouseEnter={() => setHovered(tech.name)}
                                  onMouseLeave={() => setHovered(null)}
                                >
                                  <div
                                    className={`relative overflow-hidden rounded-xl border-2 border-blue-500/30 hover:border-primary
                                    bg-background/80 backdrop-blur w-20 h-20 flex items-center justify-center
                                    transition-all duration-300 hover:scale-110 shadow-sm`}
                                  >
                                    <Icon size={36} className="relative z-10" />
                                    <div
                                      className={`absolute bottom-0 left-0 right-0 h-0 group-hover:h-4
                                      bg-primary transition-all duration-300 ease-in-out rounded-b-lg`}
                                    />
                                  </div>
                                  <div
                                    className={`absolute inset-x-0 bottom-0 text-[12px] font-semibold text-center
                                    text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-1
                                    transition-all duration-300 pointer-events-none`}
                                  >
                                    {tech.name}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    </section>
  );
}

"use client"

import { ProjectCard } from "@/components/common/ProjectCard"

export default function ProjectsSection() {
  return (
    <section className="mb-16">
      <h1 className="text-4xl text-center font-title my-4 ">Featured Projects</h1>
      <div className="container mx-auto px-4 space-y-10">
        <ProjectCard
          title="Revista Digital de Matemática"
          description="A modern educational magazine created as an innovative proposal for Instituto Tecnológico de Costa Rica, designed to replace their outdated site with a more dynamic, accessible, and responsive digital platform."
          technologies={["Next.js", "React", "Tailwind CSS", "JavaScript"]}
          mockups={{
            desktop: [
              "/projects/Revista1.webp",
              "/projects/Revista2.webp",
              "/projects/Revista3.webp",
            ],
            mobile: [
              "/projects/RevistaPhone1.webp",
              "/projects/RevistaPhone2.webp",
              "/projects/RevistaPhone3.webp",
            ],
          }}
          liveUrl="https://tecdigital.tec.ac.cr/servicios/revistamatematica/"
          githubUrl="https://github.com/JosueMatamoros/RevistaMatematicas"
        />
      </div>
    </section>
  )
}

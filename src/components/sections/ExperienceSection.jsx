"use client"

import ExperienceCard from "@/components/common/ExperienceCard"

const experiences = [
  {
    id: "1",
    title: "VS Code Extension: AI Unit Test Generator for Unity",
    description:
      "VS Code extension specialized in the automated generation of unit tests for Unity with maximum coverage. It analyzes classes and generates tests using optimized prompts, allowing developers to switch between different AI models simply by configuring an API key.",
    problem:
      "Extensive research was required to determine which AI model was most effective for developing unit tests in Unity, a process that consumed valuable team time.",
    solution:
      "Development of a tool that accelerates the research process and turns it into a practical, industry ready solution, enabling efficient comparison between multiple AI models.",
    startDate: "August 2024",
    technologies: ["JavaScript", "TypeScript", "VS Code API", "OpenAI", "Anthropic", "OpenRouters", "Unity", "C#"],
    githubUrl: "https://github.com/JosueMatamoros/UnityTestAI",
    organization: "Tecnológico de Costa Rica",
    status: "active",
  },
  {
    id: "2",
    title: "Marcación XML para Scielo",
    description:
      "Proceso de marcación y conversión de artículos de la Revista Matemática para indexación en Scielo.",
    problem:
      "La revista no estaba indexada debido a fallos previos en el proceso de marcación.",
    solution:
      "Implementación de un proceso detallado que cumple los requisitos de Scielo.",
    startDate: "Abril 2024",
    technologies: ["XML", "JATS", "Python", "HTML", "Scielo Standards"],
    githubUrl: "https://github.com/username/scielo-markup",
    organization: "Tecnológico de Costa Rica - Cátedra de Matemática",
    status: "active",
  },
  {
    id: "3",
    title: "Revista Matemática - Sitio Web Moderno",
    description:
      "Renovación completa del sitio web de la revista con tecnologías modernas y SEO académico.",
    problem:
      "El sitio anterior no era reconocido por Google Scholar, limitando su visibilidad.",
    solution:
      "Migración a tecnologías modernas y optimización para indexación académica.",
    startDate: "Julio 2024",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "SEO"],
    githubUrl: "https://github.com/username/revista-matematica",
    organization: "Tecnológico de Costa Rica - Cátedra de Matemática",
    status: "active",
  },
]

export default function ExperienceSection() {
  const activeCount = experiences.filter((e) => e.status === "active").length

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-4xl text-center font-title my-4 ">Experience</h1>
        {/* Cards */}
        <div className="space-y-12">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} project={exp} />
          ))}
        </div>

        {/* Footer Count */}
        <div className="mt-16 flex items-center justify-center">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-card/90 px-6 py-3 shadow-sm backdrop-blur-sm">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            <span className="font-mono text-sm text-white/70">
              {activeCount} experiencias activas · Tecnológico de Costa Rica
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

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
    title: "Mathematical Article Markup for SciELO",
    description:
      "Conversion and markup process for articles from the Revista Matemática Educación e Internet at TEC. Transformation of articles from HTML to XML following Scielo’s academic indexing standards, covering multiple volumes starting in 2024.",
    problem:
      "The Revista Matemática was not indexed in Scielo because the previous markup process had failed, severely limiting its international academic visibility.",
    solution:
      "Implementation of a detailed and standardized markup workflow that fully meets Scielo’s requirements, enabling the successful indexing of the journal in this major academic database.",
    startDate: "August 2024",
    technologies: ["HTML","XML","SciELO PC Programs","XML Package Maker (XPM)", "SciELO SPS Validation","Marcalyc"],
    githubUrl: "https://github.com/JosueMatamoros/SciELO-XML-Transcriptor",
    organization: "Tecnológico de Costa Rica - Cátedra de Matemática",
    status: "active",
  },
  {
    id: "3",
    title: "Digital Mathematics Journal",
    description:
      "Complete redesign of the website for *Revista Matemática Educación e Internet* using modern web technologies. The new site features an elegant and efficient interface, fully optimized for academic SEO and indexed by Google Scholar to enhance the journal’s international visibility.",
    problem:
      "The previous site was built with plain JavaScript and was not recognized by Google Scholar, severely limiting the academic reach of the published articles.",
    solution:
      "Migration to a modern tech stack ensuring proper indexing by Google Scholar and delivering a fast, elegant, and academically SEO-optimized user experience.",
    startDate: "September 2024",
    technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript", "shadcn/ui"],
    githubUrl: "https://github.com/JosueMatamoros/RevistaMatematicas",
    organization: "Tecnológico de Costa Rica - Cátedra de Matemática",
    status: "active",
  },
]

export default function ExperienceFullSection() {
  const activeCount = experiences.filter((e) => e.status === "active").length

  return (
    <section className="mb-16 ">
      <div >
         <div className="mb-12 text-center">
          <h2 className="mb-4 font-title text-4xl italic text-white md:text-5xl lg:text-6xl">
            Experience
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
            I’ve worked on multiple projects involving{" "}
            <span className="font-semibold text-secondary">AI tooling</span>,{" "}
            <span className="font-semibold text-secondary">
              academic platforms
            </span>
            , and{" "}
            <span className="font-semibold text-secondary">
              modern web development
            </span>
            . Building efficient solutions that actually solve problems.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-12">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} project={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

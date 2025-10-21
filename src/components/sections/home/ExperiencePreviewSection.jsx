"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ExperienceCardPreview from "@/components/common/ExperienceCardPreview";
import { ArrowRight } from "lucide-react"; // 👈 iconito elegante

const experiences = [
  {
    title: "AI Unit Test Generator",
    description:
      "VS Code extension specialized in automated unit test generation for Unity.",
    date: "Aug 2024",
    tech: ["TypeScript", "VS Code API", "OpenAI", "Unity"],
  },
  {
    title: "SciELO Article Markup",
    description:
      "Automated article markup system for academic indexing in SciELO.",
    date: "Aug 2024",
    tech: ["XML", "SciELO", "XPM", "Marcalyc"],
  },
  {
    title: "Digital Math Journal",
    description: "Modern academic journal platform indexed by Google Scholar.",
    date: "Sep 2024",
    tech: ["Next.js", "React", "Tailwind", "TypeScript"],
  },
];

export default function ExperiencePreviewSection() {
  const router = useRouter();

  const goToExperiencePage = () => {
    router.push("/experience");
  };

  return (
    <section className="relative w-full mb-16">
      <div className="w-full">
        {/* Header */}
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

        {/* Preview cards */}
        <div className="mb-6 grid gap-6 grid-cols-1 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <ExperienceCardPreview key={index} experience={exp} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button
            onClick={goToExperiencePage}
            size="lg"
            variant="outline"
            className="group flex items-center gap-2 rounded-full border-gray-500 text-gray-300
               transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black
               hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] bg-transparent"
          >
            View Detailed Experience
            <div className="transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-90">
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:animate-floaty" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}

"use client";

import ExperienceCard from "@/components/common/ExperienceCard";
import { experiences } from "@/lib/experiences";

const freelance = experiences.filter((e) => e.category === "freelance");
const academic = experiences.filter((e) => e.category === "academic");

export default function ExperienceFullSection() {
  return (
    <section className="mb-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-title text-4xl italic text-white md:text-5xl lg:text-6xl">
          Experience
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
          From{" "}
          <span className="font-semibold text-secondary">real client products</span>{" "}
          with live users to{" "}
          <span className="font-semibold text-secondary">academic platforms</span>{" "}
          and{" "}
          <span className="font-semibold text-secondary">AI tooling</span>.
          Every project solves a real problem for a real person.
        </p>
      </div>

      {/* Freelance */}
      <div className="mb-14">
        <div className="flex items-center gap-4 mb-8 px-4 lg:px-0">
          <h3 className="font-title text-2xl italic text-white/90 whitespace-nowrap">Freelance</h3>
          <div className="flex-1 h-px bg-white/10" />
          <span className="font-mono text-xs text-white/40">{freelance.length} projects</span>
        </div>
        <div className="space-y-6">
          {freelance.map((exp) => (
            <ExperienceCard key={exp.id} project={exp} />
          ))}
        </div>
      </div>

      {/* Academic Assistance */}
      <div>
        <div className="flex items-center gap-4 mb-8 px-4 lg:px-0">
          <h3 className="font-title text-2xl italic text-white/90 whitespace-nowrap">Academic Assistance</h3>
          <div className="flex-1 h-px bg-white/10" />
          <span className="font-mono text-xs text-white/40">{academic.length} projects</span>
        </div>
        <div className="space-y-6">
          {academic.map((exp) => (
            <ExperienceCard key={exp.id} project={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

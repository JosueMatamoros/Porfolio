"use client";

import ExperienceCard from "@/components/common/ExperienceCard";
import { experiences } from "@/lib/experiences";

export default function ExperienceFullSection() {
  const activeCount = experiences.filter((e) => e.status === "active").length;

  return (
    <section className="mb-16 ">
      <div>
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
            <span className="font-semibold text-secondary">AI tooling</span>
            . Every project here solves a real problem for a real person.
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
  );
}

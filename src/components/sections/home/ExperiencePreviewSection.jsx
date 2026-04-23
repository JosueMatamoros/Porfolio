"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowRight, Briefcase, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const blocks = [
  {
    icon: Briefcase,
    label: "Freelance",
    period: "2025 — Present",
    color: "from-blue-500 to-indigo-500",
    summary:
      "Delivered real-world products for local businesses across Costa Rica — from restaurant sites and order systems to a full-stack tourism booking platform and a corporate quoting tool. Every project solved a specific operational problem for a real client.",
  },
  {
    icon: GraduationCap,
    label: "Academic Assistant",
    period: "August 2024 — Present",
    color: "from-emerald-500 to-teal-500",
    summary:
      "Working on distinct academic projects at Instituto Tecnológico de Costa Rica — a modern digital journal indexed by Google Scholar, a VS Code AI extension for automated Unity test generation, and the SciELO XML markup pipeline for international academic indexing.",
  },
];

export default function ExperiencePreviewSection() {
  const router = useRouter();

  return (
    <section className="relative w-full mb-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-title text-4xl italic text-white md:text-5xl lg:text-6xl">
          Experience
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
          Real products for real clients and{" "}
          <span className="font-semibold text-secondary">academic platforms</span>{" "}
          that solve real problems.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-8">
        {blocks.map((block) => {
          const Icon = block.icon;
          return (
            <Card
              key={block.label}
              className="bg-card/90 border border-white/10 rounded-2xl p-7 flex flex-col gap-4 hover:border-white/20 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${block.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{block.label}</h3>
                  <p className="text-xs font-mono text-white/50">{block.period}</p>
                </div>
              </div>

              {/* Summary */}
              <p className="text-white/80 leading-relaxed text-sm flex-1">
                {block.summary}
              </p>

            </Card>
          );
        })}
      </div>

      <div className="flex justify-center">
        <Button
          onClick={() => router.push("/experience")}
          size="lg"
          variant="outline"
          className="group flex items-center gap-2 rounded-full border-gray-500 text-gray-300
             transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black
             hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] bg-transparent"
        >
          View Detailed Experience
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}

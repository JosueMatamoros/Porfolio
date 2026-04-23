"use client";

import { useState } from "react";
import { Github, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ExperienceCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const endDate = project.endDate ?? "Present";

  return (
    <div
      className="relative transition-all duration-300 w-full max-w-5xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="bg-card/90 border border-white/10 shadow-xl overflow-hidden backdrop-blur-sm rounded-2xl p-6 md:p-8 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
        {/* Header: fecha + status + botones */}
        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
            <Calendar className="h-4 w-4 text-white/70" />
            <span className="font-mono text-sm text-white/70">
              {project.startDate} — {endDate}
            </span>
            {project.status === "active" && (
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <span className="font-mono text-xs uppercase tracking-wider text-green-400">Active</span>
              </div>
            )}
            {project.status === "development" && (
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
                <span className="font-mono text-xs uppercase tracking-wider text-yellow-400">In Development</span>
              </div>
            )}
          </div>

          <div className="flex justify-center md:justify-end gap-2 flex-wrap">
            {project.liveUrl && (
              <Button asChild variant="outline" className="border-emerald-500/40 text-emerald-400 hover:text-black hover:bg-emerald-400 hover:border-emerald-400 hover:scale-105 transition-all duration-200 rounded-full">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Site</span>
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline" className="border-white/15 text-white hover:text-black hover:bg-white hover:scale-105 transition-all duration-200 rounded-full">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Título + organización */}
        <div className="mb-4">
          <h3 className="mb-1 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            {project.title}
          </h3>
          <p className="font-mono text-sm text-white/60">{project.organization}</p>
        </div>

        {/* Descripción */}
        <div className="mt-3">
          <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">Description</h4>
          <p className="text-white/90 leading-relaxed text-sm">{project.description}</p>
        </div>

        {/* Tecnologías */}
        <div className="mt-5">
          <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span key={i} className="px-3 py-1.5 bg-white/[0.06] text-white/85 rounded-full text-sm border border-white/10 hover:bg-white/[0.09] transition">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-white via-white/40 to-transparent transition-all duration-700 ${isHovered ? "w-full" : "w-0"}`} />
      </Card>
    </div>
  );
}

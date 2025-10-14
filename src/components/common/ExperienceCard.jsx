"use client"

import { useState } from "react"
import { Github, Calendar, AlertTriangle, CheckCircle } from "lucide-react" // 👈 aquí vuelven los íconos lindos
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ExperienceCard({ project }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative transition-all duration-300 w-full max-w-5xl mx-auto "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="bg-card/90 border border-white/10 shadow-xl overflow-hidden backdrop-blur-sm rounded-2xl p-8 md:p-10 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex flex-wrap items-center gap-3">
            <Calendar className="h-4 w-4 text-white/70" />
            <span className="font-mono text-sm text-white/70">
              {project.startDate} — Present
            </span>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="font-mono text-xs uppercase tracking-wider text-green-400">
                Active
              </span>
            </div>
          </div>

          {project.githubUrl && (
            <Button
              asChild
              variant="outline"
              className="border-white/15 text-white hover:text-black hover:bg-white hover:scale-105 transition-all duration-200 rounded-full"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </Button>
          )}
        </div>

        {/* Title */}
        <div className="mb-6">
          <h3 className="mb-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {project.title}
          </h3>
          <p className="font-mono text-sm text-white/60">
            {project.organization}
          </p>
        </div>

        {/* Description */}
        <div className="mt-4">
          <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
            Description
          </h3>
          <p className="text-white/90 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Problem & Solution */}
        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
            <div className="flex items-center gap-2 mb-1.5">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                Problem Identified
              </h4>
            </div>
            <p className="text-white/85 text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
            <div className="flex items-center gap-2 mb-1.5">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                Implemented Solution
              </h4>
            </div>
            <p className="text-white/85 text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-6">
          <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-white/[0.06] text-white/85 rounded-full text-sm border border-white/10 hover:bg-white/[0.09] transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div
          className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-white via-white/40 to-transparent transition-all duration-700 ${
            isHovered ? "w-full" : "w-0"
          }`}
        />
      </Card>
    </div>
  )
}

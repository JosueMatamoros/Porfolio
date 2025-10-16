"use client";

import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function ExperienceCardPreview({ experience }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative transition-all duration-500 w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        className={`border border-white/10 shadow-xl overflow-hidden rounded-2xl p-8 min-h-[42=10px] flex flex-col justify-between
          transition-all duration-500 ease-out 
          ${isHovered ? "scale-[1.04] -translate-y-2 shadow-2xl border-white/20" : "scale-100 shadow-lg"}
        `}
      >
        {/* Date Badge */}
        <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
          <Calendar className="h-4 w-4 text-white/70" />
          <span className="font-mono text-sm text-white/70">{experience.date}</span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-2xl font-semibold tracking-tight text-white md:text-3xl ">
          {experience.title}
        </h3>

        {/* Description */}
        <p className="mb-3 text-white/90 leading-relaxed flex-1">
          {experience.description}
        </p>

        {/* Technologies */}
        <div >
          <h4 className="text-xs mt-3 font-semibold text-white/50 uppercase tracking-wider mb-2">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.tech.map((tech, i) => (
              <span
                key={i}
                className={`px-3 py-1.5 bg-white/[0.06] text-white/85 rounded-full text-sm border border-white/10 
                  transition duration-300 ${isHovered ? "bg-white/[0.12] scale-105" : ""}
                `}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom line animation on hover */}
        <div
          className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-white via-white/40 to-transparent transition-all duration-700 ease-out
            ${isHovered ? "w-full opacity-100" : "w-0 opacity-0"}
          `}
        />
      </Card>
    </div>
  );
}

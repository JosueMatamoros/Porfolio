"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Monitor,
  Smartphone,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectCard({
  title,
  description,
  technologies,
  mockups,
  liveUrl,
  githubUrl,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState("desktop");

  const currentMockups = mockups[viewMode];
  const maxIndex = currentMockups.length - 1;

  const navigate = (direction) => {
    setCurrentIndex((prev) =>
      direction === "prev"
        ? prev > 0
          ? prev - 1
          : maxIndex
        : prev < maxIndex
        ? prev + 1
        : 0
    );
  };

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === "desktop" ? "mobile" : "desktop"));
    setCurrentIndex(0);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Card className="bg-card/90 border border-white/10 shadow-xl overflow-hidden backdrop-blur-sm rounded-2xl">
        {/* Mockup Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent">
          {/* Toggle view */}
          <Button
            onClick={toggleViewMode}
            size="icon"
            variant="ghost"
            className="absolute top-3 right-3 z-10 h-9 w-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white/80"
            aria-label="Toggle view mode"
          >
            {viewMode === "desktop" ? (
              <Smartphone className="h-4 w-4" />
            ) : (
              <Monitor className="h-4 w-4" />
            )}
          </Button>

          {/* Navigation arrows */}
          {[
            {
              dir: "prev",
              icon: <ChevronLeft className="h-5 w-5" />,
              position: "left-3",
            },
            {
              dir: "next",
              icon: <ChevronRight className="h-5 w-5" />,
              position: "right-3",
            },
          ].map(({ dir, icon, position }) => (
            <Button
              key={dir}
              onClick={() => navigate(dir)}
              size="icon"
              variant="ghost"
              className={`absolute ${position} top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white/80`}
              aria-label={`${dir === "prev" ? "Previous" : "Next"} mockup`}
            >
              {icon}
            </Button>
          ))}

          {/* Main mockup */}
          <div className="relative h-[500px] flex items-center justify-center p-4">
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${viewMode}-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={currentMockups[currentIndex] || "/placeholder.svg"}
                    alt={`${title} - ${viewMode} view ${currentIndex + 1}`}
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority={false}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {currentMockups.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to view ${index + 1}`}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white/80"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-7 bg-card/40 backdrop-blur-sm border-t border-white/10">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
                {title}
              </h2>
              <p className="text-xs md:text-sm text-white/60">
                {viewMode === "desktop" ? "Desktop view" : "Mobile view"} •{" "}
                {currentIndex + 1} of {currentMockups.length}
              </p>
            </div>

            <div className="flex gap-2 md:gap-3">
              {liveUrl && (
                <Button
                  asChild
                  className="bg-primary/90 hover:bg-primary hover:scale-105 text-white shadow-sm hover:shadow transition-all duration-200"
                >
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <span>View Project</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {githubUrl && (
                <Button
                  asChild
                  variant="outline"
                  className="border-white/15 hover:text-black hover:bg-white  hover:scale-105 transition-all duration-200"
                >
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 "
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mt-4">
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
              Description
            </h3>
            <p className="text-white/90 leading-relaxed">{description}</p>
          </div>

          {/* Technologies */}
          <div className="mt-4">
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-white/[0.06] text-white/85 rounded-full text-sm border border-white/10 hover:bg-white/[0.09] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

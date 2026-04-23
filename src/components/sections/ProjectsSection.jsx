"use client";

import { ProjectCard } from "@/components/common/ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="mb-16 mt-10 md:mt-0">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-title text-4xl italic text-white md:text-5xl lg:text-6xl">
          Featured Projects
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
          These are some of my{" "}
          <span className="font-semibold text-secondary">
            featured web projects{" "}
          </span>
          that I&apos;ve worked on.
        </p>
      </div>

      <div className="space-y-10">
        <ProjectCard
          title="Digital Mathematics Journal"
          description="A modern educational magazine created as an innovative proposal for Instituto Tecnológico de Costa Rica, designed to replace their outdated site with a more dynamic, accessible, and responsive digital platform."
          technologies={["Next.js", "React", "Tailwind CSS", "JavaScript"]}
          mockups={{
            desktop: [
              "/mockups/revistaMate/rm-desktop-home.webp",
              "/mockups/revistaMate/rm-desktop-books.webp",
              "/mockups/revistaMate/rm-desktop-category.webp",
              "/mockups/revistaMate/rm-desktop-article.webp",
            ],
            mobile: [
              "/mockups/revistaMate/rm-mobile-home.webp",
              "/mockups/revistaMate/rm-mobile-article.webp",
              "/mockups/revistaMate/rm-mobile-books.webp",
              "/mockups/revistaMate/rm-mobile-category.webp",
            ],
          }}
          liveUrl="https://tecdigital.tec.ac.cr/servicios/revistamatematica/"
          githubUrl="https://github.com/JosueMatamoros/RevistaMatematicas"
        />

        <ProjectCard
          title="Nature Tours La Fortuna"
          description="A full-stack booking platform for a Costa Rican eco-tourism company, featuring tour listings, real-time availability calendars, secure online payments via PayPal and SINPE Móvil, and a complete checkout flow — all optimized for mobile."
          technologies={["Vite", "JavaScript", "Node.js", "SQL", "Neon", "PayPal API"]}
          mockups={{
            desktop: [
              "/mockups/natureTours/nt-desktop-home.webp",
              "/mockups/natureTours/nt-desktop-tours.webp",
              "/mockups/natureTours/nt-desktop-booking.webp",
              "/mockups/natureTours/nt-desktop-checkout.webp",
            ],
            mobile: [
              "/mockups/natureTours/nt-mobile-home.webp",
              "/mockups/natureTours/nt-mobile-tours.webp",
              "/mockups/natureTours/nt-mobile-booking.webp",
              "/mockups/natureTours/nt-mobile-checkout.webp",
            ],
          }}
          liveUrl="https://naturetourslafortuna.com/"
          githubUrl="https://github.com/JosueMatamoros/NatureTours"
        />
      </div>
    </section>
  );
}

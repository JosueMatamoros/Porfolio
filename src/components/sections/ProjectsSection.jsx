"use client";

import { ProjectCard } from "@/components/common/ProjectCard";

const projects = [
  {
    title: "Digital Mathematics Journal",
    description:
      "A modern educational magazine created as an innovative proposal for Instituto Tecnológico de Costa Rica, designed to replace their outdated site with a more dynamic, accessible, and responsive digital platform.",
    technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    mockups: {
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
    },
    liveUrl: "https://tecdigital.tec.ac.cr/servicios/revistamatematica/",
    githubUrl: "https://github.com/JosueMatamoros/RevistaMatematicas",
  },
  {
    title: "Nature Tours La Fortuna",
    description:
      "A full-stack booking platform for a Costa Rican eco-tourism company, featuring tour listings, real-time availability calendars, secure online payments via PayPal and SINPE Móvil, and a complete checkout flow — all optimized for mobile.",
    technologies: ["Vite", "JavaScript", "Node.js", "SQL", "Neon", "PayPal API"],
    mockups: {
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
    },
    liveUrl: "https://naturetourslafortuna.com/",
    githubUrl: "https://github.com/JosueMatamoros/NatureTours",
  },
  {
    title: "Grupo SEN — Soluciones Eléctricas del Norte",
    description:
      "A bilingual corporate website for an electrical services company in La Fortuna, Costa Rica. Features a service gallery, a multi-step quote request form, dark/light mode, WhatsApp integration, and a fully responsive layout — built to replace their lack of online presence and streamline client contact.",
    technologies: ["Vite", "React", "Tailwind CSS", "Material-Tailwind"],
    mockups: {
      desktop: [
        "/mockups/grupoSen/gs-desktop-1.webp",
        "/mockups/grupoSen/gs-desktop-2.webp",
        "/mockups/grupoSen/gs-desktop-3.webp",
        "/mockups/grupoSen/gs-desktop-4.webp",
      ],
      mobile: [
        "/mockups/grupoSen/gs-mobile-1.webp",
        "/mockups/grupoSen/gs-mobile-2.webp",
        "/mockups/grupoSen/gs-mobile-3.webp",
        "/mockups/grupoSen/gs-mobile-4.webp",
      ],
    },
    liveUrl: "https://gruposen.site/",
    githubUrl: "https://github.com/JosueMatamoros/soluciones_electricas",
  },
  {
    title: "SEN Proforma — Quote Generator",
    description:
      "Internal frontend tool for Grupo SEN to generate professional proforma invoices on the spot. Fill in client details, add products and services, toggle IVA (13%) on or off, switch between CRC and USD with a live exchange rate, and export a formatted PDF — all in a single streamlined flow.",
    technologies: ["Vite", "React", "Tailwind CSS", "Material-Tailwind"],
    mockups: {
      desktop: [
        "/mockups/senProforma/sp-desktop-1.webp",
      ],
      mobile: [
        "/mockups/senProforma/sp-mobile-1.webp",
        "/mockups/senProforma/sp-mobile-2.webp",
      ],
    },
    pdfUrl: "/mockups/senProforma/Proforma.pdf",
  },
];

export default function ProjectsSection({ limit }) {
  const visible = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="mb-16 mt-10 md:mt-0">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-title text-4xl italic text-white md:text-5xl lg:text-6xl">
          Featured Projects
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
          These are some of my{" "}
          <span className="font-semibold text-secondary">featured web projects </span>
          that I&apos;ve worked on.
        </p>
      </div>

      <div className="space-y-10">
        {visible.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

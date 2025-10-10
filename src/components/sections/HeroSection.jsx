"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Twitter, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:josue.matamoros@ejemplo.com", label: "Email" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 bg-navy-dark text-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Avatar */}
          <div
            className={`relative flex-shrink-0 ${
              isVisible ? "animate-scale-in" : "opacity-0"
            }`}
          >
            <Avatar className="w-64 h-64 lg:w-80 lg:h-80 shadow-2xl ring-4 ring-primary/30 ring-offset-2 ring-offset-navy-dark">
              <AvatarImage src="/developer-avatar.png" alt="Josue Matamoros" />
              <AvatarFallback className="text-6xl bg-gray-800 text-gray-300">
                JM
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-6 text-center lg:text-left max-w-2xl">
            <div
              className={`space-y-3 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              {/* Nombre estilizado */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-[Poppins]">
                <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                  Josue Matamoros
                </span>
              </h1>

              {/* Subtítulo en azul */}
              <p className="text-2xl md:text-3xl font-semibold text-primary font-mono tracking-wide">
                {"<"} Desarrollador Junior {" />"}
              </p>
            </div>

            {/* Descripción */}
            <p
              className={`text-lg md:text-xl text-gray-400 leading-relaxed ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.4s" }}
            >
              Con 2 años de experiencia transformando ideas en soluciones digitales innovadoras. 
              Especializado en crear experiencias web modernas y funcionales, combinando código limpio con diseño intuitivo. 
              Apasionado por el aprendizaje continuo y la resolución creativa de problemas.
            </p>

            {/* Redes sociales */}
            <div
              className={`flex gap-4 justify-center lg:justify-start ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.6s" }}
            >
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="rounded-full border-gray-500 text-gray-300 hover:bg-gray-200 hover:text-navy-dark transition-all hover:scale-110 bg-transparent"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Botones de acción */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.8s" }}
            >
              <Button
                size="lg"
                className="rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all hover:scale-105"
              >
                Ver Proyectos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-gray-500 text-gray-300 hover:bg-gray-200 hover:text-black transition-all hover:scale-105"
              >
                Descargar CV
              </Button>
            </div>
          </div>
        </div>

        {/* Flecha de scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/80" />
        </div>
      </div>
    </section>
  );
}

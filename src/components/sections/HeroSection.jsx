"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Twitter, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import TypewriterSubtitle from "../common/TypewriterSubtitle";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTypingFinished, setIsTypingFinished] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:josue.matamoros@ejemplo.com", label: "Email" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const subtitle = "< Desarrollador Junior />";

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-10 bg-navy-dark text-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Avatar */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            <Avatar className="w-56 h-56 lg:w-72 lg:h-72 shadow-2xl ring-4 ring-primary/30 ring-offset-2 ring-offset-navy-dark">
              <AvatarImage src="/profile.jpg" alt="Josue Matamoros" />
              <AvatarFallback className="text-5xl bg-gray-800 text-gray-300">
                JM
              </AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Texto */}
          <div className="flex flex-col gap-6 text-center lg:text-left max-w-2xl">
            {/* Título sin efectos raros */}
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-[Poppins]"
            >
              Josue Matamoros
            </motion.h1>
            <TypewriterSubtitle/>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed"
            >
              Graduate from the Instituto Tecnológico de Costa Rica (TEC) with experience as an assistant in three academic projects over one year. Strong background in programming, systems architecture, and web development, with a focus on creating efficient and scalable solutions.

            </motion.p>
            {/* Redes sociales */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gray-500 text-gray-300 hover:bg-gray-200 hover:text-navy-dark transition-all bg-transparent"
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
                </motion.div>
              ))}
            </motion.div>
            {/* Botones de acción */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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
            </motion.div>
          </div>
        </div>

        {/* Flecha scroll animada */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="h-6 w-6 text-white/80" />
        </motion.div>
      </div>
    </section>
  );
}

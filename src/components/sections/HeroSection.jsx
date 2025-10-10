"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Twitter, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import TypewriterSubtitle from "../common/TypewriterSubtitle";

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-10 bg-navy-dark text-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-12 max-w-6xl mx-auto">
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
          <div className="flex flex-col gap-5  text-center lg:text-left max-w-2xl">
            {/* Nombre */}
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-title -mb-4 text-5xl sm:text-7xl tracking-tight text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              Josue Matamoros
            </motion.h1>

            {/* Subtítulo */}
            <TypewriterSubtitle />

            {/* Descripción */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed"
            >
              Graduate from the{" "}
              <span className="font-bold bg-gradient-to-r from-white via-[#3B82F6] to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-shine">
                Instituto Tecnológico de Costa Rica (TEC)
              </span>{" "}
              with experience as an assistant in three academic projects over
              one year. Strong background in{" "}
              <span className="font-bold bg-gradient-to-r from-white via-[#3B82F6] to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-shine">
                programming
              </span>
              ,{" "}
              <span className="font-bold bg-gradient-to-r from-white via-[#3B82F6] to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-shine">
                systems architecture
              </span>{" "}
              and{" "}
              <span className="font-bold bg-gradient-to-r from-white via-[#3B82F6] to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-shine">
                web development
              </span>
              , with a focus on creating efficient and scalable solutions.
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
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-11 w-11 rounded-full border-gray-500 text-gray-300 
                               bg-transparent transition-all 
                               hover:bg-white hover:text-black hover:border-white"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-7 w-7" />
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
                className="rounded-full bg-white text-black font-semibold transition-all 
                           hover:scale-105 hover:bg-gray-200"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-gray-500 text-gray-300 transition-all 
                           hover:scale-105 hover:bg-white hover:text-black hover:border-white"
              >
                Download CV
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Flecha scroll animada */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="hidden md:flex fixed bottom-1.5 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="h-6 w-6 text-white/80" />
        </motion.div>
      </div>
    </section>
  );
}

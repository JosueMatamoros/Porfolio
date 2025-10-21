"use client";

import { useEffect, useState, useMemo } from "react";
import { Github, Linkedin, Mail, Copy, Instagram, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import TypewriterSubtitle from "../../common/TypewriterSubtitle";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showArrow, setShowArrow] = useState(true);
  const email = "1002matamoros@gmail.com";

  // Precarga de imagen crítica antes de mostrar animaciones
  useEffect(() => {
    const img = new Image();
    img.src = "/profile.webp";
    img.onload = () => setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowArrow(window.scrollY < 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!hovered) setCopied(false);
  }, [hovered]);

  const socialLinks = useMemo(() => [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ], []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const labelMotion = {
    hidden: { opacity: 0, x: -20, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 18 },
    },
    exit: {
      opacity: 0,
      x: -20,
      scale: 0.9,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center pt-10 bg-navy-dark text-white will-change-transform"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-2 lg:gap-12 max-w-6xl mx-auto">
          {/* Avatar */}
          <LazyMotion features={domAnimation}>
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="relative flex flex-shrink-0 w-full lg:w-auto justify-center"
            >
              <Avatar className="w-56 h-56 lg:w-72 lg:h-72 shadow-2xl ring-4 ring-primary/30 ring-offset-2 ring-offset-navy-dark">
                <AvatarImage
                  src="/profile.webp"
                  alt="Josue Matamoros"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
                <AvatarFallback className="text-5xl bg-gray-800 text-gray-300">
                  JM
                </AvatarFallback>
              </Avatar>
            </motion.div>
          </LazyMotion>

          {/* Texto */}
          <div className="flex flex-col gap-5 text-center lg:text-left max-w-2xl">
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="font-title -mb-4 text-5xl sm:text-7xl tracking-tight text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] will-change-transform"
            >
              Josue Matamoros
            </motion.h1>

            {/* Typewriter */}
            <AnimatePresence>
              {isVisible && <TypewriterSubtitle />}
            </AnimatePresence>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl will-change-transform"
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
              transition={{ delay: 0.4 }}
              className="flex gap-4 justify-center lg:justify-start flex-wrap items-center relative will-change-transform"
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

              {/* Ícono Mail */}
              <div
                className="relative flex items-center"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 rounded-full border-gray-500 text-gray-300
                             bg-transparent transition-all
                             hover:bg-white hover:text-black hover:border-white"
                >
                  <Mail className="h-7 w-7" />
                </Button>

                <AnimatePresence>
                  {hovered && (
                    <motion.div
                      variants={labelMotion}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="ml-2 flex items-center border border-gray-500 rounded-full px-4 py-2 text-gray-300
                                 bg-transparent hover:bg-white hover:text-black transition-all whitespace-nowrap"
                    >
                      <span className="text-sm sm:text-base">{email}</span>
                      <button
                        onClick={copyToClipboard}
                        className="ml-2 p-1 rounded-full hover:bg-gray-200 transition"
                        title="Copiar correo"
                      >
                        <Copy size={16} />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-[-2.5rem] left-1/2 -translate-x-1/2 border border-gray-500 text-gray-300 text-xs px-3 py-1 rounded-full backdrop-blur-sm"
                    >
                      Copiado
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Botones */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2 will-change-transform"
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
        <AnimatePresence>
          {showArrow && (
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [0, 10, 0], opacity: 1 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="hidden md:flex fixed bottom-1.5 left-1/2 -translate-x-1/2 will-change-transform"
            >
              <ArrowDown className="h-6 w-6 text-white/80" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState, useMemo } from "react";
import { Github, Linkedin, Mail, Copy, Instagram, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import TypewriterSubtitle from "../../common/TypewriterSubtitle";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showArrow, setShowArrow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const email = "1002matamoros@gmail.com";

  // Activar animaciones después del primer render
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Detectar mobile para cambiar comportamiento del botón de correo
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
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
    { icon: Github, href: "https://github.com/JosueMatamoros", label: "GitHub" },
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

  // Slice horizontal (desktop): wipe de izquierda a derecha
  const labelDesktop = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      clipPath: "inset(0 100% 0 0)",
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    },
  };

  // Slice vertical (mobile): wipe de arriba a abajo
  const labelMobile = {
    hidden: { clipPath: "inset(0 0 100% 0)" },
    visible: {
      clipPath: "inset(0 0 0% 0)",
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      clipPath: "inset(0 0 100% 0)",
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-10 bg-navy-dark text-white will-change-transform"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-2 lg:gap-12 max-w-6xl mx-auto">
          {/* Avatar */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="relative flex flex-shrink-0 w-full lg:w-auto justify-center"
          >
            <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary/30 ring-offset-2 ring-offset-navy-dark">
              <Image
                src="/profile.webp"
                alt="Josué Matamoros"
                width={384}
                height={384}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Texto */}
          <div className="flex flex-col gap-5 text-center lg:text-left max-w-2xl">
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="font-title -mb-4 text-5xl sm:text-7xl tracking-tight text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] will-change-transform"
            >
              Josué Matamoros
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

              {/* Ícono Mail — hover en desktop, tap en mobile */}
              <div
                className="relative"
                onMouseEnter={() => !isMobile && setHovered(true)}
                onMouseLeave={() => !isMobile && setHovered(false)}
              >
                <motion.div
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
                    onClick={() => isMobile && setHovered((v) => !v)}
                  >
                    <Mail className="h-7 w-7" />
                  </Button>
                </motion.div>

                {/* Desktop: email label a la derecha con slice */}
                <AnimatePresence>
                  {hovered && !isMobile && (
                    <motion.div
                      variants={labelDesktop}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute left-full top-1/2 -translate-y-1/2 ml-3 flex items-center border border-gray-500 rounded-full px-4 py-2 text-gray-300 bg-navy-dark/90 backdrop-blur-sm whitespace-nowrap z-10"
                    >
                      <span className="text-sm sm:text-base">{email}</span>
                      <button
                        onClick={copyToClipboard}
                        className="ml-2 p-1 rounded-full hover:bg-gray-200 hover:text-black transition"
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

            {/* Mobile: email centrado, empuja botones suavemente hacia abajo */}
            <AnimatePresence>
              {hovered && isMobile && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden w-full"
                >
                  <div className="flex justify-center pt-0 pb-0">
                    <div className="flex items-center border border-gray-500 rounded-full px-4 py-2 text-gray-300 bg-navy-dark/90 backdrop-blur-sm whitespace-nowrap">
                      <span className="text-sm">{email}</span>
                      <button
                        onClick={copyToClipboard}
                        className="ml-2 p-1 rounded-full hover:bg-gray-200 hover:text-black transition"
                        title="Copiar correo"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

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
                asChild
              >
                <a href="/experience">View Projects</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-gray-500 text-gray-300 transition-all
                           hover:scale-105 hover:bg-white hover:text-black hover:border-white"
                asChild
              >
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
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

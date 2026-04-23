"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home",       href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects",   href: "/projects" },
  { name: "Skills",     href: "/skills" },
  { name: "Contact",    href: "/contact" },
];

export default function HeaderComponent() {
  const [visible, setVisible] = useState(true);
  const [open, setOpen]       = useState(false);
  const [active, setActive]   = useState("/");
  const lastY = useRef(0);

  useEffect(() => {
    setActive(window.location.pathname);
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 60) { setVisible(true); lastY.current = y; return; }
      setVisible(y < lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const glassStyle = "bg-white/8 border border-white/[0.06] backdrop-blur-2xl shadow-[0_2px_24px_rgba(0,0,0,0.25)]";

  return (
    <>
      {/* ── DESKTOP ─────────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center px-6 pt-5 ${
          visible ? "" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className={`flex items-center gap-1 px-3 py-2 rounded-full w-full max-w-3xl ${glassStyle}`}>
          {/* Logo */}
          <a href="/" aria-label="Home" className="mr-2 flex-shrink-0">
            <Image src="/logo.webp" alt="JM" width={36} height={36} className="w-9 h-9 object-contain" loading="eager" />
          </a>

          <div className="w-px h-5 bg-white/15 mx-1 flex-shrink-0" />

          {/* Links */}
          <div className="flex flex-1 items-center justify-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActive(item.href)}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive ? "text-white" : "text-white/55 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="pill"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/15"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </div>

          <div className="w-px h-5 bg-white/15 mx-1 flex-shrink-0" />

          <a
            href="mailto:1002matamoros@gmail.com"
            className="ml-1 flex-shrink-0 px-5 py-1.5 text-sm font-semibold rounded-full bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-200"
          >
            Hire me
          </a>
        </nav>
      </header>

      {/* ── MOBILE ──────────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 md:hidden flex items-center justify-between px-5 py-4 ${
          visible ? "" : "pointer-events-none opacity-0"
        }`}
      >
        <a href="/" aria-label="Home">
          <Image src="/logo.webp" alt="JM" width={38} height={38} className="w-[38px] h-auto object-contain" loading="eager" />
        </a>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className={`flex items-center justify-center w-10 h-10 rounded-full ${glassStyle} text-white`}
        >
          <Menu className="h-5 w-5" />
        </button>
      </header>

      {/* ── MOBILE OVERLAY ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] md:hidden bg-black/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <a href="/" onClick={() => setOpen(false)}>
                <Image src="/logo.webp" alt="JM" width={38} height={38} className="w-[38px] h-auto object-contain" />
              </a>
              <button
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/5 text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col justify-center flex-1 px-8 gap-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => { setActive(item.href); setOpen(false); }}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.35, ease: "easeOut" }}
                  className={`flex items-center justify-between py-4 border-b border-white/8 group ${
                    active === item.href ? "text-white" : "text-white/50"
                  }`}
                >
                  <span className="text-4xl font-title italic group-hover:text-white transition-colors duration-200">
                    {item.name}
                  </span>
                  <span className="text-white/20 group-hover:text-white/60 transition-colors duration-200 text-lg">→</span>
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.35 }}
              className="px-8 pb-12"
            >
              <a
                href="mailto:1002matamoros@gmail.com"
                onClick={() => setOpen(false)}
                className="block w-full text-center py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-white/90 transition-all duration-200"
              >
                Hire me
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const inputBase =
  "w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-200 focus:border-primary/60 focus:bg-white/[0.07] focus:ring-1 focus:ring-primary/30";

export default function ContactSection() {
  const [status, setStatus] = useState("idle"); // idle | loading | success
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!fields.name.trim())                      e.name    = "Name is required.";
    if (!fields.email.trim())                     e.email   = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(fields.email)) e.email   = "Enter a valid email.";
    if (fields.message.trim().length < 10)        e.message = "Message must be at least 10 characters.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setFields({ name: "", email: "", message: "" });
    }, 1000);
  };

  const info = [
    { icon: Mail,    label: "1002matamoros@gmail.com" },
    { icon: MapPin,  label: "La Fortuna, Costa Rica"  },
  ];

  const socials = [
    { icon: Github,   href: "https://github.com/JosueMatamoros", label: "GitHub"   },
    { icon: Linkedin, href: "https://linkedin.com",              label: "LinkedIn" },
  ];

  return (
    <section className="relative w-full mb-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-title text-4xl italic text-white md:text-5xl lg:text-6xl">
          Contact
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
          Have a project in mind or just want to say hi?{" "}
          <span className="font-semibold text-secondary">Let&apos;s talk.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left panel — info */}
        <Card className="lg:col-span-2 bg-card/90 border border-white/10 rounded-2xl p-7 flex flex-col justify-between gap-8 backdrop-blur-sm">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">
                Available for
              </p>
              <p className="text-white/80 leading-relaxed text-sm">
                Freelance projects, professional internships, and collaborations starting 2026.
              </p>
            </div>

            <div className="space-y-3">
              {info.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200 cursor-pointer"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </Card>

        {/* Right panel — form */}
        <Card className="lg:col-span-3 bg-card/90 border border-white/10 rounded-2xl p-7 backdrop-blur-sm">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="h-full min-h-[260px] flex flex-col items-center justify-center gap-4 text-center"
              >
                <CheckCircle className="w-12 h-12 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">Message sent!</h3>
                <p className="text-white/60 text-sm max-w-xs">
                  Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2 rounded-full border-white/20 text-white/70 hover:text-white hover:bg-white/10 bg-transparent"
                  onClick={() => setStatus("idle")}
                >
                  Send another
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"

                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                noValidate
                className="flex flex-col gap-5"
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-white/50 uppercase tracking-wider">
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Josué Matamoros"
                    value={fields.name}
                    onChange={handleChange}
                    className={inputBase}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-0.5">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-white/50 uppercase tracking-wider">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={fields.email}
                    onChange={handleChange}
                    className={inputBase}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-0.5">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-white/50 uppercase tracking-wider">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    value={fields.message}
                    onChange={handleChange}
                    className={`${inputBase} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-0.5">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  size="lg"
                  className="rounded-full bg-white text-black font-semibold hover:bg-gray-200 hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center gap-2 cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </Card>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Send, CheckCircle, Loader2, Mail, MapPin,
  Github, Linkedin, Clock, ArrowUpRight,
} from "lucide-react";

/* ── Floating-label input wrapper ─────────────────────────── */
function FloatingField({ id, label, error, children, charCount, maxChars }) {
  return (
    <div className="relative">
      {children}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-3.5 text-sm text-white/35 transition-all duration-200
                   peer-focus:-translate-y-6 peer-focus:text-[11px] peer-focus:text-primary/80
                   peer-[&:not(:placeholder-shown)]:-translate-y-6 peer-[&:not(:placeholder-shown)]:text-[11px] peer-[&:not(:placeholder-shown)]:text-white/50"
      >
        {label}
      </label>
      <div className="flex items-center justify-between mt-1.5 min-h-[16px]">
        {error
          ? <p className="text-[11px] text-red-400">{error}</p>
          : <span />
        }
        {maxChars && (
          <p className={`text-[11px] tabular-nums ${charCount > maxChars * 0.9 ? "text-amber-400" : "text-white/25"}`}>
            {charCount}/{maxChars}
          </p>
        )}
      </div>
    </div>
  );
}

const fieldCls =
  "peer w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 pt-4 pb-2.5 text-sm text-white placeholder-transparent outline-none transition-all duration-200 focus:border-primary/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-primary/20";

const MAX_MSG = 500;

/* ── Main ──────────────────────────────────────────────────── */
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
    if (fields.message.length > MAX_MSG)          e.message = `Max ${MAX_MSG} characters.`;
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

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      {
        from_name:  fields.name,
        from_email: fields.email,
        message:    fields.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus("success");
      setFields({ name: "", email: "", message: "" });
    })
    .catch(() => {
      setStatus("idle");
      setErrors({ message: "Failed to send. Please try again or email me directly." });
    });
  };

  return (
    <section className="relative w-full mb-16 overflow-hidden">

      {/* ── Header ── */}
      <div className="relative mb-12 text-center">
        <h2 className="mb-4 font-title text-4xl italic text-white md:text-5xl lg:text-6xl">
          Contact
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
          Have a project in mind or just want to say hi?{" "}
          <span className="font-semibold text-secondary">Let&apos;s talk.</span>
        </p>
      </div>

      {/* ── Grid ── */}
      <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-5">

        {/* ── Left panel ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 flex flex-col gap-5"
        >
          {/* Big statement card */}
          <div className="rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/20 p-7 flex-1">
            <h3 className="font-title text-3xl italic text-white leading-tight mb-3">
              Let&apos;s build<br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                something great
              </span>
            </h3>
            <p className="text-white/55 text-sm leading-relaxed">
              Open to freelance projects, professional internships, and creative collaborations starting 2026.
            </p>
          </div>

          {/* Status + info card */}
          <div className="rounded-2xl bg-card/80 border border-white/10 p-6 backdrop-blur-sm space-y-5">
            {/* Response time badge */}
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs text-white/50 flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                Usually responds within 24 hours
              </span>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              {[
                { icon: Mail,    text: "1002matamoros@gmail.com" },
                { icon: MapPin,  text: "La Fortuna, Costa Rica"  },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-white/60">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 text-primary/80" />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-2 pt-1">
              {[
                { icon: Github,   href: "https://github.com/JosueMatamoros", label: "GitHub"   },
                { icon: Linkedin, href: "https://linkedin.com",              label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-white/50 hover:text-white hover:border-white/25 hover:bg-white/10 transition-all duration-200 text-xs cursor-pointer"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Right panel — form ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3 rounded-2xl bg-card/80 border border-white/10 p-7 backdrop-blur-sm"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="min-h-[320px] flex flex-col items-center justify-center gap-5 text-center"
              >
                {/* Animated ring + check */}
                <div className="relative flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.3, 1], opacity: [0, 0.3, 0] }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="absolute w-24 h-24 rounded-full bg-emerald-500"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }}
                    className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center"
                  >
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </motion.div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message sent!</h3>
                  <p className="text-white/50 text-sm max-w-xs">
                    Thanks for reaching out — I&apos;ll get back to you as soon as possible.
                  </p>
                </div>

                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs text-white/40 hover:text-white/70 underline underline-offset-4 transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                noValidate
                className="flex flex-col gap-6"
              >
                <p className="text-xs font-mono text-white/30 tracking-widest uppercase">
                  {`// new_message.send()`}
                </p>

                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FloatingField id="name" label="Your name *" error={errors.name}>
                    <input
                      id="name" name="name" type="text" autoComplete="name"
                      placeholder=" " value={fields.name} onChange={handleChange}
                      className={fieldCls}
                    />
                  </FloatingField>

                  <FloatingField id="email" label="Your email *" error={errors.email}>
                    <input
                      id="email" name="email" type="email" autoComplete="email"
                      placeholder=" " value={fields.email} onChange={handleChange}
                      className={fieldCls}
                    />
                  </FloatingField>
                </div>

                {/* Message */}
                <FloatingField
                  id="message" label="Tell me about your project *"
                  error={errors.message}
                  charCount={fields.message.length} maxChars={MAX_MSG}
                >
                  <textarea
                    id="message" name="message" rows={6}
                    placeholder=" " value={fields.message} onChange={handleChange}
                    className={`${fieldCls} resize-none`}
                  />
                </FloatingField>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-full bg-white text-black font-semibold py-3.5 text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

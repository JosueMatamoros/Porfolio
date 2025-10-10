"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TypewriterSubtitle() {
  const fullText = "< Junior Developer />";        // Final text that will be typed out
  const wrongCharIndex = fullText.length - 2;      // Index before "/>"
  const typingSpeed = 100;                         // Normal typing speed
  const correctionSpeed = 120;                     // Speed for correction steps

  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [errorMode, setErrorMode] = useState(false); // Controls underline error state

  useEffect(() => {
    const steps = [];

    // 1. Type the text up to the point just before the error
    for (let i = 0; i < wrongCharIndex; i++) {
      steps.push({ text: fullText.slice(0, i + 1), delay: typingSpeed });
    }

    // 2. Type the wrong character ">" (typo)
    steps.push({ text: fullText.slice(0, wrongCharIndex) + ">", delay: typingSpeed });

    // 3. Wait a bit before showing the underline error
    steps.push({ action: "activateError", delay: 500 });

    // 4. Pause to let the underline show 
    steps.push({ action: "pause", delay: 800 });

    // 5. Delete the wrong ">" and remove the underline
    steps.push({ text: fullText.slice(0, wrongCharIndex), delay: correctionSpeed, clearError: true });

    // 6. Type "/" and then ">"
    steps.push({ text: fullText.slice(0, wrongCharIndex) + "/", delay: correctionSpeed });
    steps.push({ text: fullText, delay: correctionSpeed });

    // 7. Hide the cursor 
    steps.push({ action: "hideCursor", delay: 400 });

    // Execute all steps in sequence
    let totalDelay = 0;
    steps.forEach((step) => {
      totalDelay += step.delay || 0;
      setTimeout(() => {
        if (step.text !== undefined) setDisplayedText(step.text);
        if (step.action === "activateError") setErrorMode(true);
        if (step.clearError) setErrorMode(false);
        if (step.action === "hideCursor") setCursorVisible(false);
      }, totalDelay);
    });
  }, []);

  return (
    <div
      className="
        text-2xl md:text-3xl font-semibold text-primary font-mono
        tracking-wide whitespace-nowrap inline-flex
        leading-[1.6] pt-[2px] justify-center sm:justify-start
      "
    >
      {/* Text with conditional underline on the last ">" when in error mode */}
      <span
        dangerouslySetInnerHTML={{
          __html: errorMode
            ? displayedText.replace(
                />$/,
                '<span class="underline decoration-red-500 [text-decoration-style:wavy] underline-offset-6 decoration-2">&gt;</span>'
              )
            : displayedText,
        }}
      />

      {/* Blinking cursor */}
      <motion.span
        animate={{ opacity: cursorVisible ? 1 : 0 }}
        transition={{ duration: 0.4, repeat: cursorVisible ? Infinity : 0, repeatType: "reverse" }}
        className="inline-block border-r-2 border-primary"
      />
    </div>
  );
}

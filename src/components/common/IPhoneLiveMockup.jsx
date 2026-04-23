"use client";

import { useState, useEffect, useRef } from "react";

export function IPhoneLiveMockup({ url, title = "Live preview" }) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef(null);

  // Lazy-load: only mount the iframe when card enters the viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    // Aspect ratio matches the cropped mockup image (1021×1469 ≈ 0.695)
    <div
      ref={containerRef}
      className="relative mx-auto"
      style={{ width: 280, height: 403 }}
    >
      {/* Screen viewport — positioned inside the phone frame */}
      <div
        className="absolute overflow-hidden"
        style={{
          top: "5%",
          left: "8.5%",
          width: "83%",
          height: "91%",
          borderRadius: "36px 36px 40px 40px",
        }}
      >
        {shouldLoad ? (
          // iframe wider than container so native scrollbar is clipped out of view
          <iframe
            src={url}
            title={title}
            style={{
              width: 405,
              height: 844,
              transform: "scale(0.569)",
              transformOrigin: "top left",
              border: "none",
              display: "block",
              // hide scrollbar cross-browser
              overflow: "hidden",
            }}
          />
        ) : (
          // Skeleton shown until iframe is lazy-loaded
          <div className="w-full h-full bg-white/10 animate-pulse" />
        )}
      </div>

      {/* iPhone frame on top — not interactive so clicks go to iframe */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/mockups/iphone17pro.png"
        alt="iPhone 17 Pro frame"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
        style={{ zIndex: 10 }}
      />
    </div>
  );
}

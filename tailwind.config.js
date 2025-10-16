/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // Royal Blue
        secondary: "#3B82F6", // Azul brillante
        navy: "#1E3A8A",
        "navy-dark": "#000814",
        "navy-light": "#1E40AF",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "0 center" },
        },
        floaty: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-4px)" },
        },
      },
      animation: {
        shine: "shine 4s linear infinite",
        floaty: "floaty 0.6s ease-in-out infinite",
      },
      fontFamily: {
        title: ["var(--font-title)", "serif"],    // Títulos (Shrikhand)
        body: ["var(--font-body)", "sans-serif"], // Texto general (Poppins)
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

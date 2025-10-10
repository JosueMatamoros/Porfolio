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
  primary: "#2563EB",      // Royal Blue
  secondary: "#3B82F6",    // Azul brillante
  navy: "#1E3A8A",
  "navy-dark": "#000814",
  "navy-light": "#1E40AF",
}

	},
  },
  plugins: [require("tailwindcss-animate")],
};

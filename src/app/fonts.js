// src/app/fonts.js
import { Poppins, Shrikhand } from "next/font/google";

// Para títulos llamativos (Nombre "Josue Matamoros")
export const titleFont = Shrikhand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
});

// Para el resto del contenido (texto, párrafos, botones…)
export const bodyFont = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

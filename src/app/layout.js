import "./globals.css";
import { titleFont, bodyFont } from "./fonts";
import HeaderComponent from "@/components/layout/HeaderComponet";

export const metadata = {
  title: "Josue Matamoros | Portfolio",
  description: "Portafolio personal de Josue Matamoros",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${titleFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased font-body bg-navy-dark text-white">
        <div className="min-h-svh">
          <HeaderComponent />
          {children}
        </div>
      </body>
    </html>
  );
}

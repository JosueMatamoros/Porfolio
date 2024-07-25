import React from "react";

// Components 
import Header from "../header/Header";
import Projects from "../components/home/Projects.jsx";
import FooterComponent from "../footer/Footer.jsx";
import Skills from "../components/home/Skills.jsx";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <div className="flex-grow">
        <Projects />
        <Skills/>
      </div>
      <FooterComponent />
    </div>
  );
}

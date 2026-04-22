export const experiences = [
  // ─── ACADEMIC (TEC) — primeros dos ────────────────────────────────────────
  {
    id: "revista-matematica",
    title: "Digital Mathematics Journal",
    description:
      "Complete redesign of the website for Revista Matemática Educación e Internet using modern web technologies. The new site features an elegant and efficient interface, fully optimized for academic SEO and indexed by Google Scholar to enhance the journal's international visibility.",
    problem:
      "The previous site was built with plain JavaScript and was not recognized by Google Scholar, severely limiting the academic reach of the published articles.",
    solution:
      "Migration to a modern tech stack ensuring proper indexing by Google Scholar and delivering a fast, elegant, and academically SEO-optimized user experience.",
    startDate: "September 2024",
    technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/JosueMatamoros/RevistaMatematicas",
    liveUrl: "https://tecdigital.tec.ac.cr/servicios/revistamatematica/",
    organization: "Tecnológico de Costa Rica — Cátedra de Matemática",
    status: "active",
    category: "academic",
  },
  {
    id: "unity-test-ai",
    title: "VS Code Extension: AI Unit Test Generator for Unity",
    description:
      "VS Code extension specialized in the automated generation of unit tests for Unity with maximum coverage. It analyzes classes and generates tests using optimized prompts, allowing developers to switch between different AI models simply by configuring an API key.",
    problem:
      "Extensive research was required to determine which AI model was most effective for developing unit tests in Unity, a process that consumed valuable team time.",
    solution:
      "Development of a tool that accelerates the research process and turns it into a practical, industry ready solution, enabling efficient comparison between multiple AI models.",
    startDate: "August 2024",
    technologies: [
      "JavaScript",
      "TypeScript",
      "VS Code API",
      "OpenAI",
      "Anthropic",
      "OpenRouters",
      "Unity",
      "C#",
    ],
    githubUrl: "https://github.com/JosueMatamoros/UnityTestAI",
    liveUrl: null,
    organization: "Tecnológico de Costa Rica",
    status: "active",
    category: "academic",
  },

  // ─── FREELANCE / COMMERCIAL ────────────────────────────────────────────────
  {
    id: "nature-tours",
    title: "Nature Tours La Fortuna",
    description:
      "Full-stack tourism platform for an eco-adventure business in La Fortuna, Costa Rica. Features a complete online booking system with real-time horse availability, an admin panel for managing schedules and blocks, PayPal payment integration, and multi-channel contact options via WhatsApp and email.",
    problem:
      "The business had no digital presence or online booking system, relying entirely on in-person and phone reservations, which severely limited reach and made availability management chaotic.",
    solution:
      "Built a complete full-stack solution from the ground up — Node.js REST API with a Neon (PostgreSQL) database, React + Tailwind CSS frontend, PayPal payment gateway, and an admin dashboard for managing availability, time slots, and horse capacity. Achieved over 40 reservations in the first month through organic traffic.",
    startDate: "February 2026",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Neon",
      "PayPal API",
      "JavaScript",
    ],
    githubUrl: "https://github.com/JosueMatamoros/NatureTours",
    liveUrl: "https://naturetourslafortuna.com/",
    organization: "Freelance — La Fortuna, Costa Rica",
    status: "active",
    category: "freelance",
  },
  {
    id: "todopb",
    title: "ToDoPB — Commercial & Tourism App",
    description:
      "Web application developed for the Municipality of San Isidro de Peñas Blancas to boost local commerce and tourism. Features an interactive business map and a complete directory with location, contact info, and social media links for every registered business in the area.",
    problem:
      "The municipality had no centralized digital platform to promote its local businesses and tourist attractions, leaving visitors and residents without an easy way to discover or contact the businesses in the area.",
    solution:
      "Currently developing a React + Supabase platform with an interactive map and business directory, giving the municipality a modern digital tool to support local economic development and attract tourism.",
    startDate: "2026",
    technologies: ["React", "Tailwind CSS", "Supabase", "JavaScript"],
    githubUrl: null,
    liveUrl: null,
    organization: "Municipalidad de San Isidro de Peñas Blancas",
    status: "development",
    category: "freelance",
  },
  {
    id: "sen-cotizaciones",
    title: "SEN Cotizaciones — Proforma Generator",
    description:
      "Internal web tool built for Grupo SEN that enables staff to generate professional electrical service quotations and export them directly as PDFs. Replaced a fully manual, paper-based process with a fast and consistent digital workflow.",
    problem:
      "The company managed all client quotations manually, making the process slow, error-prone, and inconsistent across different team members — directly impacting client experience.",
    solution:
      "Developed a lightweight frontend application where administrators configure line items, pricing, and client details, then export a formatted professional proforma as a PDF in seconds. Delivered and in active use for over 6 months with excellent client satisfaction.",
    startDate: "2025",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Cloudflare Pages"],
    githubUrl: "https://github.com/JosueMatamoros/SEN_Cotizaciones",
    liveUrl: null,
    organization: "Grupo SEN — Freelance",
    status: "active",
    category: "freelance",
  },
  {
    id: "grupo-sen",
    title: "Grupo SEN — Corporate Website",
    description:
      "Corporate website for Grupo SEN, a regional electrical solutions company in northern Costa Rica. Showcases the company's full service catalog, displays past work to demonstrate quality, and provides multiple contact channels so potential clients can easily reach the team.",
    problem:
      "The company had no online presence, limiting its ability to attract new clients beyond local word-of-mouth referrals and making it difficult for potential customers to evaluate their work.",
    solution:
      "Designed and developed a clean, professional corporate site with a services overview, work gallery, company information, and integrated contact forms — giving Grupo SEN a credible digital presence aligned with their brand.",
    startDate: "2025",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/JosueMatamoros/soluciones_electricas",
    liveUrl: "https://gruposen.site/",
    organization: "Grupo SEN — Freelance",
    status: "active",
    category: "freelance",
  },
  {
    id: "la-rancha",
    title: "La Rancha — Restaurant Website",
    description:
      "Digital presence for La Rancha, a well-known local restaurant. Features a digital menu with dish photos and a WhatsApp-integrated table reservation system that connects customers directly to the restaurant for booking.",
    problem:
      "The restaurant lacked a digital menu and online reservation channel, making it difficult for new customers to discover their offering and forcing all reservations through phone calls.",
    solution:
      "Built a visual, mobile-friendly site with a photo-rich digital menu and a WhatsApp reservation flow — increasing the restaurant's digital reach and streamlining how customers interact with the business.",
    startDate: "2025",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Cloudflare Pages"],
    githubUrl: null,
    liveUrl: "https://larancha.pages.dev/",
    organization: "La Rancha — Freelance",
    status: "active",
    category: "freelance",
  },
  {
    id: "laras-food",
    title: "Laras Food — Restaurant & Order System",
    description:
      "Restaurant promotion site with an interactive menu with images and a WhatsApp-based order management system. Designed to optimize how the restaurant handles incoming orders and improve its digital visibility.",
    problem:
      "The restaurant had no digital tool to manage incoming orders efficiently, leading to confusion during busy periods and limiting reach to walk-in customers only.",
    solution:
      "Building a visual menu with categories and item images, integrated with a structured WhatsApp ordering flow that routes customer orders directly to staff — reducing errors and improving order throughput.",
    startDate: "2026",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Cloudflare Pages"],
    githubUrl: null,
    liveUrl: "https://larasfood.pages.dev/",
    organization: "Laras Food — Freelance",
    status: "development",
    category: "freelance",
  },

  // ─── ACADEMIC (TEC) — resto ───────────────────────────────────────────────
  {
    id: "scielo-markup",
    title: "Mathematical Article Markup for SciELO",
    description:
      "Conversion and markup process for articles from the Revista Matemática Educación e Internet at TEC. Transformation of articles from HTML to XML following SciELO's academic indexing standards, covering multiple volumes starting in 2024.",
    problem:
      "The Revista Matemática was not indexed in SciELO because the previous markup process had failed, severely limiting its international academic visibility.",
    solution:
      "Implementation of a detailed and standardized markup workflow that fully meets SciELO's requirements, enabling the successful indexing of the journal in this major academic database.",
    startDate: "August 2024",
    technologies: [
      "HTML",
      "XML",
      "SciELO PC Programs",
      "XML Package Maker (XPM)",
      "SciELO SPS Validation",
      "Marcalyc",
    ],
    githubUrl: "https://github.com/JosueMatamoros/SciELO-XML-Transcriptor",
    liveUrl: null,
    organization: "Tecnológico de Costa Rica — Cátedra de Matemática",
    status: "active",
    category: "academic",
  },
];

// Preview del home: restaurantes + proformas
const PREVIEW_IDS = ["la-rancha", "laras-food", "sen-cotizaciones"];

export const experiencePreviews = experiences
  .filter((e) => PREVIEW_IDS.includes(e.id))
  .sort((a, b) => PREVIEW_IDS.indexOf(a.id) - PREVIEW_IDS.indexOf(b.id))
  .map((exp) => ({
    title: exp.title,
    description: exp.description.split(".")[0] + ".",
    date: exp.startDate,
    tech: exp.technologies.slice(0, 4),
  }));

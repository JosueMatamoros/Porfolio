export const experiences = [
  // ─── FREELANCE ────────────────────────────────────────────────────────────
  {
    id: "nature-tours",
    title: "Nature Tours La Fortuna",
    description:
      "Eco-adventure booking platform in La Fortuna, Costa Rica. The business had no digital presence and managed all reservations manually. Built a full-stack solution with real-time availability, PayPal payments, admin dashboard, and WhatsApp contact — achieving over 40 bookings in the first month through organic traffic.",
    startDate: "February 2026",
    technologies: ["Vite", "JavaScript", "Node.js", "SQL", "Neon", "PayPal API"],
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
      "Web app for the Municipality of San Isidro de Peñas Blancas. The municipality had no central platform to promote local businesses or tourism. Building an interactive map and business directory with location, contact info, and social links to support local economic development.",
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
      "Internal tool for Grupo SEN to generate professional electrical service quotations as PDFs. The team managed all quotes manually — slow, error-prone, and inconsistent. Delivered a lightweight frontend where staff configure line items and export formatted proformas in seconds. In active use for over 6 months.",
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
      "Corporate site for a regional electrical solutions company in northern Costa Rica. Without an online presence, new clients came only through word of mouth. Designed a clean professional site with service catalog, work gallery, and contact forms — giving Grupo SEN a credible digital identity.",
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
      "Digital presence for a well-known local restaurant. Without a digital menu or online reservations, new customers had no way to discover the offering and all bookings went through phone calls. Built a mobile-friendly site with a photo-rich menu and a WhatsApp reservation flow, increasing the restaurant's digital reach.",
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
      "Restaurant promotion site with an interactive menu and WhatsApp-based order management. The restaurant had no digital tool for incoming orders, causing confusion during busy periods. Building a visual menu with a structured WhatsApp ordering flow that routes orders directly to staff, reducing errors and improving throughput.",
    startDate: "2026",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Cloudflare Pages"],
    githubUrl: null,
    liveUrl: "https://larasfood.pages.dev/",
    organization: "Laras Food — Freelance",
    status: "development",
    category: "freelance",
  },

  // ─── ACADEMIC ASSISTANCE (TEC) ───────────────────────────────────────────
  {
    id: "revista-matematica",
    title: "Digital Mathematics Journal",
    description:
      "Complete redesign of the Revista Matemática Educación e Internet website at TEC. The previous site was built with plain JavaScript and was not indexed by Google Scholar, severely limiting the journal's academic reach. Migrated to a modern stack fully optimized for academic SEO, achieving proper Google Scholar indexing and a fast, elegant interface.",
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
      "VS Code extension for automated unit test generation in Unity with maximum coverage. Extensive manual research was needed to determine which AI model performed best for Unity testing, consuming valuable team time. Built a tool that automates that research process and turns it into a practical solution, enabling efficient comparison between AI models via API key configuration.",
    startDate: "August 2024",
    technologies: ["JavaScript", "TypeScript", "VS Code API", "OpenAI", "Anthropic", "OpenRouters", "Unity", "C#"],
    githubUrl: "https://github.com/JosueMatamoros/UnityTestAI",
    liveUrl: null,
    organization: "Tecnológico de Costa Rica",
    status: "active",
    category: "academic",
  },
  {
    id: "scielo-markup",
    title: "Mathematical Article Markup for SciELO",
    description:
      "HTML to XML markup of articles from the Revista Matemática at TEC following SciELO's academic indexing standards. The journal was not indexed in SciELO due to a failed previous markup process, limiting its international visibility. Implemented a standardized markup workflow that fully meets SciELO's requirements, enabling successful indexing across multiple volumes.",
    startDate: "August 2024",
    technologies: ["HTML", "XML", "SciELO PC Programs", "XML Package Maker (XPM)", "SciELO SPS Validation", "Marcalyc"],
    githubUrl: "https://github.com/JosueMatamoros/SciELO-XML-Transcriptor",
    liveUrl: null,
    organization: "Tecnológico de Costa Rica — Cátedra de Matemática",
    status: "active",
    category: "academic",
  },
];

// Preview del home
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

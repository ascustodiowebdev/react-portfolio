export const projects = [
  {
    title: "Fishmap",
    subtitle: "Mobile-first fishing logbook and navigation assistant",
    status: "Active product build",
    description:
      "A Laravel 12 and React/TypeScript app for anglers to save fish spots, record routes, and get real-time GPS guidance back to a saved route line.",
    impact:
      "Built auth, bilingual EN/PT flows, admin moderation, route recording, map guidance, Android packaging with Capacitor, and geolocation workflows.",
    stack: ["Laravel 12", "Inertia", "React 19", "TypeScript", "Leaflet", "Capacitor"],
    image: "./project-fishmap.png",
    imageFit: "contain",
    link: "https://github.com/ascustodiowebdev/fishmap",
  },
  {
    title: "Naruva",
    subtitle: "Commerce platform with operational backend features",
    status: "Private client/product work",
    description:
      "A Laravel and React commerce build focused on product operations, payment flows, authentication, and admin-friendly catalogue management.",
    impact:
      "Implemented Google login with Socialite, Ifthenpay payment integration, registration controls, bundles, stock sync, and production-oriented admin flows.",
    stack: ["Laravel 12", "React", "TypeScript", "Inertia", "Tailwind", "Ifthenpay"],
    image: "./project-naruva.png",
    privateRepo: true,
    link: "https://github.com/ascustodiowebdev/naruva",
  },
  {
    title: "Store Template",
    subtitle: "Reusable Laravel/Inertia ecommerce foundation",
    status: "Private reusable product base",
    description:
      "A reusable online store template designed to be cloned and adapted for new brands without starting the same ecommerce plumbing from zero.",
    impact:
      "Prepared the Laravel 12, Inertia and React base with auth, payment integration, admin setup, seeded demo data, production checklist, and reusable store configuration.",
    stack: ["Laravel 12", "Inertia", "React 19", "TypeScript", "Payments", "Admin UX"],
    image: "./project-store-template.png",
    privateRepo: true,
    link: "https://github.com/ascustodiowebdev/store-template",
  },
];

export const stackGroups = [
  {
    title: "Backend",
    items: ["PHP 8.2", "Laravel 12", "Ruby on Rails", "RESTful APIs", "Auth", "Queues"],
  },
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Inertia.js", "Tailwind CSS", "Vite", "Radix UI"],
  },
  {
    title: "Product Systems",
    items: ["Payments", "Maps/GPS", "Admin panels", "Role controls", "Bilingual UI", "Android builds"],
  },
  {
    title: "Workflow",
    items: ["Git/GitHub", "Testing", "CI awareness", "AI-assisted development", "API integrations"],
  },
];

export const focusAreas = [
  "Backend-heavy product engineering",
  "AI-assisted development and automation",
  "Laravel, APIs, auth, payments, admin systems",
  "Full-stack delivery when the product needs it",
];

export const experience = [
  "From bootcamp projects to real product work with Laravel, React, mobile packaging, maps, payments, and admin tooling.",
  "Comfortable moving between backend decisions, UI implementation, debugging, and deployment details.",
  "Currently sharpening backend and AI workflows while staying pragmatic enough to ship full-stack features end to end.",
];

export interface ProjectData {
  id: string;
  title: string;
  slug: string;
  industry: "REAL_ESTATE" | "CAFE" | "CLOTHING" | "HEALTHCARE" | "CRM" | "ECOMMERCE" | "OTHER";
  industryLabel: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  clientName: string;
  year: number;
  techStack: string[];
  coverImage: string;
  gallery: string[];
  liveUrl?: string;
  featured: boolean;
  isSample: boolean;
}

export const SAMPLE_PROJECTS: ProjectData[] = [
  {
    id: "proj-1",
    title: "Aura Haven Luxury Estates",
    slug: "aura-haven-estates",
    industry: "REAL_ESTATE",
    industryLabel: "Real Estate",
    summary: "Ultra-luxury residential property showcase with interactive 3D floorplan exploration and instant agent booking.",
    problem: "Aura Haven required a high-converting digital presence to pre-sell $25M+ luxury penthouses to international buyers who could not perform in-person site visits.",
    solution: "We engineered a Next.js 14 web application featuring full-screen WebGL property tours, high-resolution media galleries, and direct WhatsApp / email agent scheduling.",
    result: "85% increase in overseas buyer inquiries and $14M in pre-sales generated within 60 days of launch.",
    clientName: "Aura Haven Realty (Sample Client)",
    year: 2026,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Cloudinary"],
    coverImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
    ],
    liveUrl: "https://example.com/aura-haven",
    featured: true,
    isSample: true,
  },
  {
    id: "proj-2",
    title: "Velvet & Ember Artisan Cafe",
    slug: "velvet-ember-cafe",
    industry: "CAFE",
    industryLabel: "Cafe / Restaurant",
    summary: "Cinematic culinary brand experience with dynamic digital menus and online table reservation pipeline.",
    problem: "Velvet & Ember needed to replace slow third-party ordering portals with an in-house digital experience that reflected their high-end roastery aesthetic.",
    solution: "Built a high-performance web app with instant menu filtering, ambient soundscapes, table reservation management, and direct Stripe checkout.",
    result: "32% increase in direct weekend reservations and 40% reduction in third-party food platform commission fees.",
    clientName: "Velvet & Ember Roasters (Sample Client)",
    year: 2026,
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "MongoDB", "Stripe"],
    coverImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop"
    ],
    liveUrl: "https://example.com/velvet-ember",
    featured: true,
    isSample: true,
  },
  {
    id: "proj-3",
    title: "Kuro Atelier Streetwear",
    slug: "kuro-atelier-streetwear",
    industry: "CLOTHING",
    industryLabel: "Clothing & Apparel",
    summary: "Minimalist high-fashion lookbook storefront engineered for instant collection drop sales and zero latency.",
    problem: "High traffic spikes during limited capsule drops caused the client's previous shop to crash and lose cart data.",
    solution: "Architected a headless Next.js storefront backed by edge caching, optimistic inventory updates, and sub-100ms collection page loads.",
    result: "100% uptime during a 10,000 concurrent user drop, selling out the flagship collection in 8 minutes.",
    clientName: "Kuro Atelier (Sample Client)",
    year: 2026,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Shopify API"],
    coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop"
    ],
    liveUrl: "https://example.com/kuro-atelier",
    featured: true,
    isSample: true,
  },
  {
    id: "proj-4",
    title: "PulseFlow Enterprise CRM",
    slug: "pulseflow-crm",
    industry: "CRM",
    industryLabel: "Enterprise CRM",
    summary: "Real-time analytics portal with multi-tenant workspace management, automated lead routing, and role-based permissions.",
    problem: "Legacy enterprise CRM tools were bloated, slow to render data tables, and confusing for sales executives.",
    solution: "Designed a dark-first analytics dashboard with streaming server tables, customizable widget layouts, and instant export features.",
    result: "Reduced sales onboarding time by 50% and processed over 1M lead events daily with sub-second response times.",
    clientName: "PulseFlow Tech (Sample Client)",
    year: 2025,
    techStack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
    ],
    liveUrl: "https://example.com/pulseflow",
    featured: true,
    isSample: true,
  },
];

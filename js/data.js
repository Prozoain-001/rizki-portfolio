/* ==========================================================================
   PROJECT DATA MODEL
   All content below is a placeholder. Replace with real project data.
   Images point to /images/projects/<slug>/... — add real files there.
   ========================================================================== */

const PROJECTS = [
  {
    id: 1,
    slug: "private-residence",
    title: "Private Residence",
    category: "Residential Interior",
    year: "[YEAR]",
    location: "[LOCATION]",
    area: "[AREA]",
    role: "[ROLE]",
    tags: ["Interior", "Residential"],
    thumbnail: "images/projects/placeholder-01.svg",
    heroImage: "images/projects/placeholder-01.svg",
    brief: "[Design brief — one or two sentences on the client need and site context.]",
    concept: "[The core design concept and the thinking behind it.]",
    mood: "[Words that describe the intended atmosphere.]",
    plans: ["images/projects/placeholder-plan-01.svg"],
    sections: ["images/projects/placeholder-section-01.svg"],
    facade: [],
    renders: ["images/projects/placeholder-01.svg", "images/projects/placeholder-02.svg"],
    details: ["images/projects/placeholder-detail-01.svg"],
    gallery: ["images/projects/placeholder-01.svg", "images/projects/placeholder-02.svg", "images/projects/placeholder-03.svg"]
  },
  {
    id: 2,
    slug: "apartment-27",
    title: "Apartment 27",
    category: "Residential Interior",
    year: "[YEAR]",
    location: "[LOCATION]",
    area: "[AREA]",
    role: "[ROLE]",
    tags: ["Interior", "Apartment"],
    thumbnail: "images/projects/placeholder-02.svg",
    heroImage: "images/projects/placeholder-02.svg",
    brief: "[Design brief placeholder.]",
    concept: "[Concept placeholder.]",
    mood: "[Mood placeholder.]",
    plans: ["images/projects/placeholder-plan-02.svg"],
    sections: [],
    facade: [],
    renders: ["images/projects/placeholder-02.svg"],
    details: [],
    gallery: ["images/projects/placeholder-02.svg"]
  },
  {
    id: 3,
    slug: "urban-house",
    title: "Urban House",
    category: "Residential Architecture",
    year: "[YEAR]",
    location: "[LOCATION]",
    area: "[AREA]",
    role: "[ROLE]",
    tags: ["Architecture", "Residential"],
    thumbnail: "images/projects/placeholder-03.svg",
    heroImage: "images/projects/placeholder-03.svg",
    brief: "[Design brief placeholder.]",
    concept: "[Concept placeholder.]",
    mood: "[Mood placeholder.]",
    plans: ["images/projects/placeholder-plan-03.svg"],
    sections: ["images/projects/placeholder-section-03.svg"],
    facade: ["images/projects/placeholder-facade-03.svg"],
    renders: ["images/projects/placeholder-03.svg"],
    details: [],
    gallery: ["images/projects/placeholder-03.svg"]
  },
  {
    id: 4,
    slug: "facade-study",
    title: "Facade Study",
    category: "Architectural Study",
    year: "[YEAR]",
    location: "[LOCATION]",
    area: "[AREA]",
    role: "[ROLE]",
    tags: ["Architecture", "Study"],
    thumbnail: "images/projects/placeholder-04.svg",
    heroImage: "images/projects/placeholder-04.svg",
    brief: "[Design brief placeholder.]",
    concept: "[Concept placeholder.]",
    mood: "[Mood placeholder.]",
    plans: [],
    sections: [],
    facade: ["images/projects/placeholder-facade-04.svg"],
    renders: [],
    details: [],
    gallery: ["images/projects/placeholder-04.svg"]
  },
  {
    id: 5,
    slug: "commercial-space",
    title: "Commercial Space",
    category: "Commercial Interior",
    year: "[YEAR]",
    location: "[LOCATION]",
    area: "[AREA]",
    role: "[ROLE]",
    tags: ["Interior", "Commercial"],
    thumbnail: "images/projects/placeholder-05.svg",
    heroImage: "images/projects/placeholder-05.svg",
    brief: "[Design brief placeholder.]",
    concept: "[Concept placeholder.]",
    mood: "[Mood placeholder.]",
    plans: ["images/projects/placeholder-plan-05.svg"],
    sections: [],
    facade: [],
    renders: ["images/projects/placeholder-05.svg"],
    details: ["images/projects/placeholder-detail-05.svg"],
    gallery: ["images/projects/placeholder-05.svg"]
  },
  {
    id: 6,
    slug: "experimental-space",
    title: "Experimental Space",
    category: "Conceptual",
    year: "[YEAR]",
    location: "[LOCATION]",
    area: "[AREA]",
    role: "[ROLE]",
    tags: ["Concept", "Experimental"],
    thumbnail: "images/projects/placeholder-06.svg",
    heroImage: "images/projects/placeholder-06.svg",
    brief: "[Design brief placeholder.]",
    concept: "[Concept placeholder.]",
    mood: "[Mood placeholder.]",
    plans: [],
    sections: [],
    facade: [],
    renders: ["images/projects/placeholder-06.svg"],
    details: [],
    gallery: ["images/projects/placeholder-06.svg"]
  }
];

const EXPERIMENTS = [
  { id: 1, title: "Material Study 01", type: "Material", image: "images/experiments/placeholder-01.svg" },
  { id: 2, title: "Composition No. 3", type: "Visual", image: "images/experiments/placeholder-02.svg" },
  { id: 3, title: "Color Field Study", type: "Color", image: "images/experiments/placeholder-03.svg" },
  { id: 4, title: "Spatial Sketch", type: "Sketch", image: "images/experiments/placeholder-04.svg" },
  { id: 5, title: "Form Study 02", type: "3D", image: "images/experiments/placeholder-05.svg" },
  { id: 6, title: "Texture Exploration", type: "Material", image: "images/experiments/placeholder-06.svg" }
];

// Featured project shown on homepage — references a project by slug
const FEATURED_SLUG = "private-residence";

function getProject(slug) {
  return PROJECTS.find(p => p.slug === slug);
}

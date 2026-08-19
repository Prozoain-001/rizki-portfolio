/* ==========================================================================
   PROJECT DATA MODEL
   All content below is a placeholder. Replace with real project data.
   Images point to /images/projects/<slug>/... — add real files there.
   ========================================================================== */

const PROJECTS = [
  {
    id: 1,
    slug: "master-bedroom",
    title: "Master Bedroom Mr. S",
    category: "Interior Design — Residential",
    year: "2025",
    location: "West Jakarta",
    area: "25.8 m² (4.15 × 5.78 m)",
    role: "Designer",
    tags: ["Interior", "Residential"],
    thumbnail: "images/projects/master-bedroom-01.jpg",
    heroImage: "images/projects/master-bedroom-01.jpg",
    brief: "Warm and comfort.",
    concept: "Modern Minimalist",
    mood: "The use of wood materials, marble patterns, and solid colors creates a comfortable atmosphere that reflects the client's taste, complemented by minimalist handles and gold-framedless glass doors that align with their preferences.",
    plans: [
      "images/projects/master-bedroom-plan-01.jpg",
      "images/projects/master-bedroom-plan-application.jpg"
    ],
    sections: [],
    facade: [],
    renders: ["images/projects/master-bedroom-01.jpg", "images/projects/master-bedroom-02.jpg"],
    details: [
      "images/projects/master-bedroom-material-board.jpg"
    ],
    gallery: ["images/projects/master-bedroom-01.jpg", "images/projects/master-bedroom-02.jpg"]
  },
  {
    id: 2,
    slug: "master-bedroom-02",
    title: "Master Bedroom 02",
    category: "Interior Design — Residential",
    year: "2025",
    location: "East Jakarta",
    area: "27.95 m² (4.3 × 6.5 m)",
    role: "Designer",
    tags: ["Interior", "Residential"],
    thumbnail: "images/projects/master-bedroom-ej-01.jpg",
    heroImage: "images/projects/master-bedroom-ej-01.jpg",
    brief: "Clean Minimalist Design.",
    concept: "Modern Minimalist",
    mood: "Design berikut menerapkan konsep gaya modern minimalis. Dengan menggunakan material yang solid dan terang serta mempertahankan lantai marmer eksisting.",
    plans: ["images/projects/master-bedroom-02-plan-01.jpg"],
    sections: [],
    facade: [],
    renders: ["images/projects/master-bedroom-ej-01.jpg"],
    details: [
      "images/projects/master-bedroom-02-material-board.jpg"
    ],
    gallery: ["images/projects/master-bedroom-ej-01.jpg"]
  },
  {
    id: 3,
    slug: "gading-pandawa-living",
    title: "Gading Pandawa House (Living)",
    category: "Interior Design — Residential",
    year: "2026",
    location: "North Jakarta",
    area: "27.95 m² (6.5 × 4.3 m)",
    role: "Designer",
    tags: ["Interior", "Residential"],
    thumbnail: "images/projects/gading-pandawa-living-01.jpg",
    heroImage: "images/projects/gading-pandawa-living-01.jpg",
    brief: "Multifunctional living room.",
    concept: "Contemporary",
    mood: "The client desires a modern living space that avoids a generic look, featuring an HPL finish with a linen texture, a combination of solid colors, and a minimalist touch in the TV and display cabinetry.",
    plans: ["images/projects/gading-pandawa-living-plan-01.jpg"],
    sections: [],
    facade: [],
    renders: ["images/projects/gading-pandawa-living-01.jpg", "images/projects/gading-pandawa-living-02.jpg"],
    details: [
      "images/projects/gading-pandawa-living-material-board.jpg"
    ],
    gallery: ["images/projects/gading-pandawa-living-01.jpg", "images/projects/gading-pandawa-living-02.jpg"]
  },
  {
    id: 4,
    slug: "gading-pandawa-guest",
    title: "Gading Pandawa House (Guest Bedroom)",
    category: "Interior Design — Residential",
    year: "2026",
    location: "North Jakarta",
    area: "NTS",
    role: "Designer",
    tags: ["Interior", "Residential"],
    thumbnail: "images/projects/gading-pandawa-guest-01.jpg",
    heroImage: "images/projects/gading-pandawa-guest-01.jpg",
    brief: "Warm and modern.",
    concept: "Modern Design",
    mood: "Planning a guest room that creates an impression of comfort and a warm welcome. This room is in the same house as Gading Pandawa House (Living).",
    plans: ["images/projects/gading-pandawa-guest-plan-01.jpg"],
    sections: [],
    facade: [],
    renders: ["images/projects/gading-pandawa-guest-01.jpg"],
    details: [
      "images/projects/gading-pandawa-guest-material-board.jpg",
      "images/projects/gading-pandawa-guest-closeup.jpg"
    ],
    gallery: ["images/projects/gading-pandawa-guest-01.jpg"]
  },
  {
    id: 5,
    slug: "apartment-moi",
    title: "Apartment MOI Ms. H",
    category: "Interior Design — Residential",
    year: "2026",
    location: "North Jakarta",
    area: "NTS",
    role: "Designer",
    tags: ["Interior", "Residential"],
    thumbnail: "images/projects/apartment-moi-01.jpg",
    heroImage: "images/projects/apartment-moi-01.jpg",
    brief: "Multifunctional living room + Kitchen & Dining.",
    concept: "Modern Minimalist",
    mood: "An open-plan apartment space serving as a living, dining, and kitchen area. The desired design is minimalist yet modern, while retaining many existing elements to maximize the use of current furniture.",
    plans: [],
    sections: [],
    facade: [],
    renders: [
      "images/projects/apartment-moi-01.jpg",
      "images/projects/apartment-moi-02.jpg",
      "images/projects/apartment-moi-03.jpg",
      "images/projects/apartment-moi-04.jpg"
    ],
    details: ["images/projects/apartment-moi-material-board.jpg"],
    gallery: [
      "images/projects/apartment-moi-01.jpg",
      "images/projects/apartment-moi-02.jpg",
      "images/projects/apartment-moi-03.jpg",
      "images/projects/apartment-moi-04.jpg"
    ]
  },
  {
    id: 6,
    slug: "experimental-space",
    title: "Experimental Space",
    category: "Interior Design — Commercial",
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
  },
  {
    id: 7,
    slug: "study-room",
    title: "Study Room",
    category: "Interior Design — Residential",
    year: "2026",
    location: "North Jakarta",
    area: "9.79 m² (2.72 × 3.6 m)",
    role: "Designer",
    tags: ["Interior", "Residential"],
    thumbnail: "images/projects/study-room-01.jpg",
    heroImage: "images/projects/study-room-01.jpg",
    brief: "A multifunctional and modern study space.",
    concept: "Modern Design",
    mood: "A modern design with a contemporary Scandinavian touch, prioritizing space efficiency, a comfortable study environment for three children, and a clean, elegant aesthetic. The blend of neutral tones, natural wood materials, and warm lighting creates a study atmosphere that is both productive and comfortable for extended use.",
    plans: ["images/projects/study-room-plan-01.jpg"],
    sections: [],
    facade: [],
    renders: [
      "images/projects/study-room-01.jpg",
      "images/projects/study-room-02.jpg",
      "images/projects/study-room-03.jpg"
    ],
    details: ["images/projects/study-room-material-board.jpg"],
    gallery: [
      "images/projects/study-room-01.jpg",
      "images/projects/study-room-02.jpg",
      "images/projects/study-room-03.jpg"
    ]
  },
  {
    id: 8,
    slug: "meeting-room",
    title: "Meeting & Working Room",
    category: "Interior Design — Commercial",
    year: "2026",
    location: "West Jakarta",
    area: "63.74 m² (6.46 × 9.79 m)",
    role: "Designer",
    tags: ["Interior", "Commercial"],
    thumbnail: "images/projects/meeting-room-01.jpg",
    heroImage: "images/projects/meeting-room-01.jpg",
    brief: "A multifunctional and modern meeting space.",
    concept: "Modern Design",
    mood: "The meeting room design—which also serves as a space for casual gatherings—features a wood-toned HPL finish and camouflage-style blinds that conceal a glassboard, making the space multifunctional.",
    plans: ["images/projects/meeting-room-plan-01.jpg"],
    sections: [],
    facade: [],
    renders: [
      "images/projects/meeting-room-01.jpg",
      "images/projects/meeting-room-02.jpg",
      "images/projects/meeting-room-03.jpg",
      "images/projects/meeting-room-04.jpg",
      "images/projects/meeting-room-05.jpg",
      "images/projects/meeting-room-06.jpg"
    ],
    details: ["images/projects/meeting-room-material-board.jpg"],
    gallery: [
      "images/projects/meeting-room-01.jpg",
      "images/projects/meeting-room-02.jpg",
      "images/projects/meeting-room-03.jpg",
      "images/projects/meeting-room-04.jpg",
      "images/projects/meeting-room-05.jpg",
      "images/projects/meeting-room-06.jpg"
    ]
  },
  {
    id: 9,
    slug: "meeting-room-graha-bawah",
    title: "Meeting Room",
    category: "Interior Design — Commercial",
    year: "2026",
    location: "West Jakarta",
    area: "48.51 m² (4.9 × 9.9 m)",
    role: "Designer",
    tags: ["Interior", "Commercial"],
    thumbnail: "images/projects/meeting-room-gb-01.jpg",
    heroImage: "images/projects/meeting-room-gb-01.jpg",
    brief: "Professional meeting room.",
    concept: "Modern Design",
    mood: "A meeting room for 12 people featuring a modern yet professional atmosphere; the addition of a concealed door within the WPC wall paneling creates a cleaner, more streamlined look.",
    plans: [],
    sections: [],
    facade: [],
    renders: [
      "images/projects/meeting-room-gb-01.jpg",
      "images/projects/meeting-room-gb-02.jpg",
      "images/projects/meeting-room-gb-03.jpg",
      "images/projects/meeting-room-gb-04.jpg",
      "images/projects/meeting-room-gb-05.jpg"
    ],
    details: ["images/projects/meeting-room-gb-material-board.jpg"],
    gallery: [
      "images/projects/meeting-room-gb-01.jpg",
      "images/projects/meeting-room-gb-02.jpg",
      "images/projects/meeting-room-gb-03.jpg",
      "images/projects/meeting-room-gb-04.jpg",
      "images/projects/meeting-room-gb-05.jpg"
    ]
  },
  {
    id: 10,
    slug: "booth-shareen",
    title: "Booth Event (Shareen)",
    category: "Interior Design — Commercial",
    year: "2026",
    location: "Surabaya",
    area: "54 m² (6 × 9 m)",
    role: "Designer",
    tags: ["Interior", "Commercial"],
    thumbnail: "images/projects/booth-shareen-01.jpg",
    heroImage: "images/projects/booth-shareen-01.jpg",
    brief: "Eye-catching and premium-looking.",
    concept: "Modern & Luxury",
    mood: "The event booth design aims to showcase the brand's fabric products, employing a dynamic and flexible approach characterized by wave-like forms and ornaments, alongside a color palette that is both beautiful and luxurious.",
    plans: ["images/projects/booth-shareen-plan-01.jpg"],
    sections: [],
    facade: [],
    renders: [
      "images/projects/booth-shareen-01.jpg",
      "images/projects/booth-shareen-02.jpg",
      "images/projects/booth-shareen-03.jpg"
    ],
    details: ["images/projects/booth-shareen-material-board.jpg"],
    gallery: [
      "images/projects/booth-shareen-01.jpg",
      "images/projects/booth-shareen-02.jpg",
      "images/projects/booth-shareen-03.jpg"
    ]
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
const FEATURED_SLUG = "master-bedroom";

function getProject(slug) {
  return PROJECTS.find(p => p.slug === slug);
}

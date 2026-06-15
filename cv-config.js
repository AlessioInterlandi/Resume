// =============================================================
//  cv-config.js  —  CV Configuration
//  Edit this file, then refresh Federico Gallucci CV.html.
//
//  COLORS     → theme.colors.*
//  FONTS      → theme.fonts.mono / sans / googleFonts
//  SECTION ORDER → layout.page1 / page2
//  PERSONAL INFO → personal.*
//  ABOUT TEXT  → about.*          (para1/para2 support HTML)
//  METRICS    → metrics array
//  CLOSING    → closing.*
//
//  For full documentation see cv-config.json.
// =============================================================

window.CV_CONFIG = {

  // ----------------------------------------------------------
  //  THEME
  // ----------------------------------------------------------
  theme: {

    colors: {
      // ── Primary accents ──────────────────────────────────
      accent:     "#00C9B1",   // teal — borders, links, highlights
      amber:      "#F5A623",   // amber — numbers, shipped markers
      magenta:    "#d2a8ff",   // string literals / partner names
      blue:       "#79c0ff",   // keywords

      // ── Backgrounds ──────────────────────────────────────
      bg:         "#0a0e14",   // page background
      bgCard:     "#11161d",   // card / section surface
      bgCard2:    "#161c24",   // slightly lighter card (toolbar rows)
      bgInset:    "#070b10",   // inset / code areas

      // ── Borders ───────────────────────────────────────────
      border:     "#1f2630",
      borderHot:  "#2a323e",   // used on flagship project cards

      // ── Text ──────────────────────────────────────────────
      text:       "#d4dae3",
      textStrong: "#f0f3f7",
      textDim:    "#8b97a8",
      textMuted:  "#5a6675"
    },

    fonts: {
      // Monospace — used for prompts, code, headings
      // To switch: e.g. "'Fira Code', monospace"
      mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",

      // Sans-serif — used for body paragraphs
      // To switch: e.g. "'DM Sans', sans-serif"
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",

      // Update this URL whenever you change the font families above.
      // Build your URL at: https://fonts.google.com
      googleFonts: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
    }

  },

  // ----------------------------------------------------------
  //  LAYOUT  (section order per page)
  //  Valid page1 IDs : "hero" | "about" | "metrics" | "stack"
  //  Valid page2 IDs : "flagships" | "others" | "experience" | "closing"
  //  Remove an ID to hide that section entirely.
  // ----------------------------------------------------------
  layout: {
    page1: ["hero", "about", "metrics",  "flagships"],
    page2: ["experience", "others", "stack","closing"]
  },

  // ----------------------------------------------------------
  //  PERSONAL INFO
  // ----------------------------------------------------------
  personal: {
    name:         "Federico Gallucci",
    tagline:      "// ./bin/about-me --verbose",

    // Header roles (plain text)
    role1:        "Senior Unity Engineer",
    role2:        "Live Service Multiplayer",
    years:        "8+yrs",

    // Contact info
    email:        "federico.gallucci.97@gmail.com",
    //website:      "federicogallucci.dev",
    linkedin:     "/in/federico-gallucci-safriaduo",
    github:       "@safriaduo",
    location:     "Turin, IT",
    locationNote: "remote-friendly",

    // Toolbar / footer meta
    version:      "v2026.05",
    status:       "open to senior/lead roles",

    // Banner strip — add or remove names freely
    backedBy: ["Microsoft", "Sony/Soneium", "Iskra", "SEI", "Startale", "Quickload"]
  },

  // ----------------------------------------------------------
  //  ABOUT  (para1 / para2 / footer accept inline HTML)
  // ----------------------------------------------------------
  about: {
    headline: "I build multiplayer live service games and the infrastructure that keeps them running at scale.",

    para1: "Over the last years, I’ve designed, developed and shipped competitive live service games backed by companies and organizations including Startale and Soneium (by Sony), korean game publisher ISKRA, SEI and Quickload (backed by Microsoft Xbox).",

    para2: "My stack: <span class=\"mono-inline\">Unity</span> for client and gameplay, <span class=\"mono-inline\">Nakama + Go/JS</span> for backend, <span class=\"mono-inline\">AWS + Terraform</span> for infrastructure. I design the systems that make live service games work: matchmaking, ranking ladders, seasonal content, Battle Pass, quest systems, game economies — then operate them post-launch using telemetry.",

    footer: ""
  },

  // ----------------------------------------------------------
  //  METRICS  (the 4 stat boxes)
  // ----------------------------------------------------------
  metrics: [
    { value: "8",   unit: "+yrs",    label: "Shipping\nmultiplayer" },
    { value: "15k", unit: "+MAU",    label: "Dawnshard\nplayers at peak" },
    { value: "200k", unit: "+usd", label: "Raised\n from investors" },
    { value: "7",   unit: " ppl",    label: "Team led\non Deep Monolith" }
  ],

  // ----------------------------------------------------------
  //  CLOSING  (line1 accepts inline HTML)
  // ----------------------------------------------------------
  closing: {
    line1: "// Open to senior or lead roles in <span class=\"acc\">live service multiplayer</span>.",
    line2: "// Remote. I own verticals — client to cloud, design to live ops.",
    email: "federico.gallucci.97@gmail.com"
  }

};

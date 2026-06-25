// =============================================================
//  cv-config.js  —  CV Configuration
//  Edit this file, then refresh Alessio Interlandi CV.html.
//
//  COLORS     → theme.colors.*
//  FONTS      → theme.fonts.mono / sans / googleFonts
//  SECTION ORDER → layout.page1 / page2
//  PERSONAL INFO → personal.*
//  ABOUT TEXT  → about.* (para1/para2 support HTML)
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
      borderHot:  "#2a323e",

      // ── Text colors ───────────────────────────────────────
      text:       "#d4dae3",   // general body text
      textStrong: "#f0f3f7",   // headings / active text
      textDim:    "#8b97a8",   // comments, descriptions
      textMuted:  "#5a6675"    // line numbers, braces, inactive UI
    },

    fonts: {
      mono: '"JetBrains Mono", "Fira Code", monospace',
      sans: '"Inter", system-ui, sans-serif',
      googleFonts: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
    }
  },

  // ----------------------------------------------------------
  //  LAYOUT & CONTENT SECTIONS
  // ----------------------------------------------------------
  layout: {
    page1: ["experience"],
    page2: ["projects", "education_awards"]
  },

  // ----------------------------------------------------------
  //  PERSONAL INFO
  // ----------------------------------------------------------
  personal: {
    fullName: "Alessio Interlandi",
    title:    "Senior Unity Engineer // Full-Stack Multiplayer",
    location: "Turin, Italy (Open to Remote)",
    website:  "https://github.com/alessiointerlandi",
    backedBy: ["Microsoft", "Sony Soneium", "Iskra", "SEI", "Startale"]
  },

  // ----------------------------------------------------------
  //  ABOUT / SUMMARY  (Accepts inline HTML)
  // ----------------------------------------------------------
  about: {
    para1: "I am a <span class=\"text-strong\">Senior Unity Engineer</span> and backend developer with 8+ years of technical experience. I founded <span class=\"text-strong\">Deep Monolith</span>, an independent game studio where we designed, engineered, and operated real-time multiplayer titles and web3 gaming infrastructure. Our systems powered experiences backed by companies and organizations including Startale and Soneium (by Sony), korean game publisher ISKRA, SEI and Quickload (backed by Microsoft Xbox).",

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
    email: "alessiointerlandi0@gmail.com"
  }
};
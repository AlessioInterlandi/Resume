// =============================================================
//  cv-config.js  —  CV Configuration
//  Edit this file, then refresh index.html.
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
    page1: ["hero", "about", "stack"],
    page2: ["experience", "closing"]
  },

  // ----------------------------------------------------------
  //  PERSONAL INFO
  // ----------------------------------------------------------
  personal: {
    fullName: "Alessio Interlandi",
    title:    "Game Dev Student // Unity & QA",
    location: "Turin, Italy",
    website:  "https://github.com/AlessioInterlandi"
    // NOTA: nessun "backedBy" — non ci sono partnership aziendali da dichiarare.
  },

  // ----------------------------------------------------------
  //  ABOUT / SUMMARY  (Accepts inline HTML)
  // ----------------------------------------------------------
  about: {
    para1: "I'm a high school student in my final year of Computer Science, focused on game development. I'm currently building a Unity multiplayer survival game (island defense, fortress building, wave-based enemies) and S-Layers, a tabletop board game with a layered enemy system.",

    para2: "My stack: <span class=\"mono-inline\">Unity</span> and <span class=\"mono-inline\">C#</span> for gameplay programming, <span class=\"mono-inline\">Git/GitHub</span> for version control, plus structured game design documentation (GDDs). I'm interested in QA testing and bug-fixing work for indie Unity projects.",

    footer: ""
  },

  // ----------------------------------------------------------
  //  METRICS  (the 4 stat boxes) — currently hidden in layout,
  //  left empty since there are no real metrics to report yet.
  // ----------------------------------------------------------
  metrics: [],

  // ----------------------------------------------------------
  //  CLOSING  (line1 accepts inline HTML)
  // ----------------------------------------------------------
  closing: {
    line1: "// Open to <span class=\"acc\">QA testing &amp; bug-fixing</span> collaborations on Unity projects.",
    line2: "// Turin-based. Available remote for freelance testing/bug-fixing work.",
    email: "alessiointerlandi0@gmail.com"
  }
};

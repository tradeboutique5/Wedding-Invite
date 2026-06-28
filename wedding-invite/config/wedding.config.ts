// ============================================================
// WEDDING CONFIG — modifica tutto da qui!
// Questo è l'unico file che devi toccare per personalizzare.
// ============================================================

export const weddingConfig = {
  // ── SPOSI ─────────────────────────────────────────────────
  bride: {
    name: "Valentina",
    fullName: "Valentina",
    phone: "+39 333 0000000",
    whatsapp: "39333000000",
  },
  groom: {
    name: "Alessandro",
    fullName: "Alessandro",
    phone: "+39 338 0000000",
    whatsapp: "39338000000",
  },

  // ── EVENTO ────────────────────────────────────────────────
  wedding: {
    date: "2026-09-12",
    dateDisplay: "12 Settembre 2026",
    dayName: "Sabato",
    year: 2026,
  },

  // ── SEO / META ────────────────────────────────────────────
  meta: {
    title: "Alessandro e Valentina — 12 Settembre 2026",
    description: "Siamo felici di invitarti al nostro matrimonio",
    ogImage: "/images/og-image.jpg",
    themeColor: "#c9a96e",
  },

  // ── HERO ──────────────────────────────────────────────────
  hero: {
    tagline: "Ci sposiamo!",
    subtitle: "Unisciti a noi nel giorno più bello della nostra vita",
    backgroundImage: "/images/foto background.jpeg",
    overlayOpacity: 0.45,
    showScrollHint: true,
  },

  // ── STORIA ────────────────────────────────────────────────
  story: {
    enabled: true,
    title: "La Nostra Storia",
    subtitle: "Come tutto è iniziato...",
    paragraphs: [
      "​Nel 2017 le nostre strade si sono incrociate per la prima volta. 
       Da allora sono passati anni intensi, pieni di complicità, supporto reciproco e un amore che è cresciuto giorno dopo giorno. Il 12 settembre 2026 faremo il passo più importante. 
       Sarà una gioia immensa avervi al nostro fianco mentre coroniamo la nostra storia.",
    ],
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
  },

  // ── CERIMONIA & RICEVIMENTO ───────────────────────────────
  events: [
    {
      id: "ceremony",
      icon: "💍",
      label: "Cerimonia",
      title: "Chiesa di San Francesco",
      time: "Ore 10:00",
      address: "Gaeta Vecchia",
      city: "Gaeta (LT)",
      mapsUrl: "https://maps.google.com/?q=Chiesa+San+Francesco+Gaeta",
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d13.5759!3d41.2087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zGaeta!5e0!3m2!1sit!2sit!4v1234567890",
    },
    {
      id: "reception",
      icon: "🥂",
      label: "Ricevimento",
      title: "Summit Hotel",
      time: "Ore 15:00",
      address: "Gaeta",
      city: "Gaeta (LT)",
      mapsUrl: "https://maps.google.com/?q=Summit+Hotel+Gaeta",
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d13.5759!3d41.2087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zGaeta!5e0!3m2!1sit!2sit!4v1234567890",
    },
  ],

  // ── RSVP ──────────────────────────────────────────────────
  rsvp: {
    enabled: true,
    title: "Conferma la tua Presenza",
    subtitle: "Facci sapere se sarai con noi",
    deadline: "30 Giugno 2026",
    whatsappTemplate: "Ciao! Confermo la mia presenza al vostro matrimonio 💍",
    // Opzione 1: WhatsApp (come il sito di riferimento)
    mode: "whatsapp" as "whatsapp" | "form",
    // Opzione 2: form con endpoint (es. Formspree)
    formAction: "https://formspree.io/f/YOUR_FORM_ID",
  },

  // ── LISTA NOZZE / REGALO ──────────────────────────────────
  gifts: {
    enabled: true,
    title: "Lista di Nozze",
    subtitle: "Il Regalo Perfetto",
    heading: "Viaggio di Nozze",
    message:
      "Siamo infinitamente grati per avervi nella nostra vita. Il dono più prezioso è quello di poter condividere la nostra gioia con voi. Con tutto il nostro affetto, Marco & Ilaria",
    iban: {
      enabled: true,
      holder: "Alessandro e Valentina",
      code: "IT00X0000000000000000000000",
    },
    registryUrl: "", // URL lista nozze esterna (es. Amazon, Prezziosi)
  },

  // ── GALLERIA ──────────────────────────────────────────────
  gallery: {
    enabled: true,
    title: "I Nostri Momenti",
    images: [
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    ],
  },

  // ── MUSICA ────────────────────────────────────────────────
  music: {
    enabled: true,
    autoplay: false,
    src: "/audio/wedding-song.mp3",
    title: "La Nostra Canzone",
    artist: "Ed Sheeran",
  },

  // ── TEMA ──────────────────────────────────────────────────
  theme: "champagne" as ThemeName,

  // ── CALENDARIO ────────────────────────────────────────────
  calendar: {
    enabled: true,
    eventTitle: "Matrimonio Marco & Ilaria",
    startISO: "20260710T153000",
    endISO: "20260710T233000",
    description: "Il matrimonio di Marco e Ilaria",
    location: "Napoli, Italia",
  },

  // ── FOOTER ────────────────────────────────────────────────
  footer: {
    tagline: "Marco & Ilaria — 10.07.2026",
    showPoweredBy: false,
  },
};

// ── TEMI DISPONIBILI ──────────────────────────────────────────
export type ThemeName =
  | "champagne"
  | "light-luxury"
  | "minimal-white"
  | "dark-elegant"
  | "botanical";

export const themes: Record<ThemeName, Theme> = {
  champagne: {
    name: "Beige Champagne",
    colors: {
      primary: "#c9a96e",
      primaryLight: "#e8d5b0",
      primaryDark: "#a07840",
      accent: "#8b6f47",
      bg: "#fdf8f0",
      bgSecondary: "#f5ede0",
      surface: "rgba(255,255,255,0.7)",
      text: "#3d2b1f",
      textMuted: "#8a7060",
      textLight: "#c4b09a",
      overlay: "rgba(61,43,31,0.5)",
    },
    fonts: {
      display: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
      body: "'Lato', 'Helvetica Neue', sans-serif",
      script: "'Dancing Script', cursive",
    },
    radius: "0.5rem",
    blur: "20px",
  },
  "light-luxury": {
    name: "Light Luxury",
    colors: {
      primary: "#b8965a",
      primaryLight: "#d4b98a",
      primaryDark: "#8a6a30",
      accent: "#6b4f2a",
      bg: "#ffffff",
      bgSecondary: "#f9f5f0",
      surface: "rgba(255,255,255,0.85)",
      text: "#1a1208",
      textMuted: "#7a6a5a",
      textLight: "#b0a090",
      overlay: "rgba(26,18,8,0.45)",
    },
    fonts: {
      display: "'Playfair Display', Georgia, serif",
      body: "'Montserrat', sans-serif",
      script: "'Great Vibes', cursive",
    },
    radius: "0.25rem",
    blur: "16px",
  },
  "minimal-white": {
    name: "Minimal White",
    colors: {
      primary: "#a0a0a0",
      primaryLight: "#d0d0d0",
      primaryDark: "#606060",
      accent: "#404040",
      bg: "#fafafa",
      bgSecondary: "#f0f0f0",
      surface: "rgba(255,255,255,0.9)",
      text: "#111111",
      textMuted: "#666666",
      textLight: "#aaaaaa",
      overlay: "rgba(0,0,0,0.4)",
    },
    fonts: {
      display: "'Libre Baskerville', Georgia, serif",
      body: "'Source Sans 3', sans-serif",
      script: "'Alex Brush', cursive",
    },
    radius: "0",
    blur: "24px",
  },
  "dark-elegant": {
    name: "Dark Elegant",
    colors: {
      primary: "#d4af70",
      primaryLight: "#e8cfA0",
      primaryDark: "#a07830",
      accent: "#f0d090",
      bg: "#0d0a06",
      bgSecondary: "#1a1410",
      surface: "rgba(255,255,255,0.06)",
      text: "#f5ede0",
      textMuted: "#a09080",
      textLight: "#60504a",
      overlay: "rgba(0,0,0,0.6)",
    },
    fonts: {
      display: "'Cormorant Garamond', Georgia, serif",
      body: "'Raleway', sans-serif",
      script: "'Pinyon Script', cursive",
    },
    radius: "0.25rem",
    blur: "20px",
  },
  botanical: {
    name: "Botanical Green",
    colors: {
      primary: "#6b8f71",
      primaryLight: "#9ab89f",
      primaryDark: "#3d5c42",
      accent: "#8faf65",
      bg: "#f4f8f0",
      bgSecondary: "#e8f0e4",
      surface: "rgba(255,255,255,0.75)",
      text: "#1e2d1a",
      textMuted: "#5a7060",
      textLight: "#98b090",
      overlay: "rgba(30,45,26,0.5)",
    },
    fonts: {
      display: "'Playfair Display', Georgia, serif",
      body: "'Nunito', sans-serif",
      script: "'Dancing Script', cursive",
    },
    radius: "1rem",
    blur: "16px",
  },
};

export interface Theme {
  name: string;
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    accent: string;
    bg: string;
    bgSecondary: string;
    surface: string;
    text: string;
    textMuted: string;
    textLight: string;
    overlay: string;
  };
  fonts: {
    display: string;
    body: string;
    script: string;
  };
  radius: string;
  blur: string;
}

export const activeTheme = themes[weddingConfig.theme];

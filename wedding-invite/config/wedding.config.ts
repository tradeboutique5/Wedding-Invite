// ============================================================
// WEDDING CONFIG — modifica tutto da qui!
// Questo è l'unico file che devi toccare per personalizzare.
// ============================================================

export const weddingConfig = {
  // ── SPOSI ─────────────────────────────────────────────────
  bride: {
    name: "Valentina",
    fullName: "Valentina",
    phone: "+39 346 9488131",
    whatsapp: "393469488131",
  },
  groom: {
    name: "Alessandro",
    fullName: "Alessandro",
    phone: "+39 349 5562254",
    whatsapp: "393495562254",
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
    backgroundImage: "/foto-background.jpeg",
    overlayOpacity: 0.45,
    showScrollHint: true,
  },

  // ── STORIA ────────────────────────────────────────────────
  story: {
    enabled: true,
    title: "La Nostra Storia",
    subtitle: "Come tutto è iniziato...",
    paragraphs: [
      "Nove anni fa, nel 2017, le nostre strade si sono incrociate per la prima volta. Da allora, Gaeta è diventata il nostro nido d'amore, il luogo del cuore dove ogni tramonto ha custodito i nostri sogni e visto crescere la nostra storia. Oggi, più uniti che mai, siamo pronti a iniziare il capitolo più bello ed emozionante della nostra vita insieme.",
    ],
    image: "/foto-storia.jpeg",
  },

  // ── CERIMONIA & RICEVIMENTO ───────────────────────────────
  events: [
    {
      id: "ceremony",
      icon: "💍",
      label: "Cerimonia",
      title: "Tempio di San Francesco",
      time: "Ore 10:30",
      address: "Via San Giovanni Bosco 8",
      city: "Gaeta (LT)",
      mapsUrl: "https://maps.app.goo.gl/k84SWnEH3zRCHzkA9",
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.4981328579306!2d13.578183276846724!3d41.21091390692173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133ad372e0bd91db%3A0x7170c56d77f4a7b8!2sTempio%20di%20San%20Francesco%20d%27Assisi!5e0!3m2!1sit!2sit!4v1782638814399!5m2!1sit!2sit",
    },
    {
      id: "reception",
      icon: "🥂",
      label: "Ricevimento",
      title: "Summit Hotel",
      time: "Ore 13:00",
      address: "Via Flacca, Km 23",
      city: "Gaeta (LT)",
      mapsUrl: "https://maps.app.goo.gl/tMPBjpHagxraMoNJ7",
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.824690335063!2d13.509964576847164!3d41.22559070601428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13252cec279b2d2f%3A0x4fd6f6ae7fe909cb!2sHotel%20Summit!5e0!3m2!1sit!2sit!4v1782638919161!5m2!1sit!2sit",
    },
  ],

  // ── RSVP ──────────────────────────────────────────────────
  rsvp: {
    enabled: true,
    title: "Conferma la tua Presenza",
    subtitle: "Facci sapere se sarai con noi",
    deadline: "30 Giugno 2026",
    whatsappTemplate: "Ciao! Confermo la mia presenza al vostro matrimonio 💍",
    mode: "whatsapp" as "whatsapp" | "form",
    formAction: "https://formspree.io/f/YOUR_FORM_ID",
  },

  // ── LISTA NOZZE / REGALO ──────────────────────────────────
  gifts: {
    enabled: true,
    title: "Lista di Nozze",
    subtitle: "Il Regalo Perfetto",
    heading: "Viaggio di Nozze",
    message: "Siamo infinitamente grati per avervi nella nostra vita. Il dono più prezioso è quello di poter condividere la nostra gioia con voi. Con tutto il nostro affetto, Alessandro & Valentina",
    iban: {
      enabled: true,
      holder: "Alessandro e Valentina",
      code: "IT30N0537274370000011067791",
    },
    registryUrl: "",
  },

  // ── GALLERIA ──────────────────────────────────────────────
  gallery: {
    enabled: false,
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
    enabled: false,
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
    eventTitle: "Matrimonio Alessandro & Valentina",
    startISO: "20260912T103000",
    endISO: "20260912T230000",
    description: "Il matrimonio di Alessandro e Valentina",
    location: "Gaeta, Italia",
  },

  // ── FOOTER ────────────────────────────────────────────────
  footer: {
    tagline: "Alessandro & Valentina — 12.09.2026",
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

# 💍 Wedding Invite — Premium Digital Invitation

Un invito digitale di nozze premium, mobile-first, completamente personalizzabile da un singolo file di configurazione.

---

## ✨ Features

- 🎭 **Hero Section** fullscreen con parallax cinematografico
- ⏱️ **Countdown** animato in tempo reale
- 💌 **Storia degli sposi** con drop cap e immagine
- 🗺️ **Timeline evento** con mappe Google Maps integrate
- 🖼️ **Galleria fotografica** con lightbox
- 📨 **RSVP via WhatsApp** (o form esterno)
- 🎁 **Lista nozze / IBAN** con copia al clipboard
- 📞 **Contatti**: WhatsApp, chiamata, calendario
- 🎵 **Music Player** floating
- 🎨 **5 temi** pronti: Champagne, Light Luxury, Minimal White, Dark Elegant, Botanical
- ✨ **Animazioni scroll** fluide e leggere
- 📱 **Mobile-first** e PWA-ready

---

## 🚀 Quick Start

```bash
# 1. Installa le dipendenze
npm install

# 2. Sviluppo locale
npm run dev

# 3. Build production
npm run build && npm start
```

---

## ⚙️ Personalizzazione

**Tutto** si modifica da un solo file:

```
config/wedding.config.ts
```

### Cambiare gli sposi
```ts
bride: { name: "Sofia", fullName: "Sofia Esposito", phone: "+39 333 ...", whatsapp: "39333..." },
groom: { name: "Luca",  fullName: "Luca Bianchi",   phone: "+39 320 ...", whatsapp: "39320..." },
```

### Cambiare il tema
```ts
theme: "dark-elegant" // champagne | light-luxury | minimal-white | dark-elegant | botanical
```

### Cambiare la data
```ts
wedding: {
  date: "2026-09-20",        // ISO per il countdown
  dateDisplay: "20 Settembre 2026",
  dayName: "Domenica",
}
```

### Cambiare le location
```ts
events: [
  {
    id: "ceremony",
    icon: "💍",
    label: "Cerimonia",
    title: "Duomo di Milano",
    time: "Ore 16:00",
    address: "Piazza del Duomo",
    city: "20122 Milano (MI)",
    mapsUrl: "https://maps.app.goo.gl/...",
    mapsEmbed: "https://www.google.com/maps/embed?pb=...",
  },
  // ...
]
```

Per l'iframe embed di Google Maps:
1. Vai su maps.google.com
2. Cerca il luogo
3. Condividi → Incorpora una mappa
4. Copia l'URL dell'attributo `src`

### Cambiare le foto della galleria
```ts
gallery: {
  images: [
    "/images/foto1.jpg",   // immagini locali in /public/images/
    "https://...",          // o URL esterni
  ],
},
```

### Aggiungere musica
1. Metti il file MP3 in `public/audio/wedding-song.mp3`
2. Nel config:
```ts
music: {
  enabled: true,
  autoplay: false,
  src: "/audio/wedding-song.mp3",
  title: "Perfect",
  artist: "Ed Sheeran",
},
```

### Cambiare IBAN
```ts
gifts: {
  iban: {
    enabled: true,
    holder: "Rossi Mario e Bianchi Sofia",
    code: "IT00X0000000000000000000000",
  },
},
```

---

## 🎨 Creare un Tema Personalizzato

Aggiungi il tuo tema in `config/wedding.config.ts`:

```ts
export const themes = {
  // ... temi esistenti ...
  "mio-tema": {
    name: "Mio Tema",
    colors: {
      primary: "#e8b4b8",      // rosa
      primaryLight: "#f5d5d8",
      primaryDark: "#c47c84",
      accent: "#9a5a62",
      bg: "#fff9fa",
      bgSecondary: "#fdf0f2",
      surface: "rgba(255,255,255,0.8)",
      text: "#2d1a1e",
      textMuted: "#8a6068",
      textLight: "#c4a0a8",
      overlay: "rgba(45,26,30,0.5)",
    },
    fonts: {
      display: "'Cormorant Garamond', serif",
      body: "'Lato', sans-serif",
      script: "'Dancing Script', cursive",
    },
    radius: "1rem",
    blur: "20px",
  },
};
```

---

## 🌐 Deploy su Vercel

### Opzione 1: Vercel CLI (raccomandato)
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Opzione 2: GitHub + Vercel UI
1. Push su GitHub
2. Vai su [vercel.com](https://vercel.com) → Import Project
3. Scegli il repo
4. Click Deploy ✅

### Opzione 3: Deploy button
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Variabili ambiente (opzionali)
Nessuna richiesta per il funzionamento base.

---

## 📁 Struttura Progetto

```
wedding-invite/
├── config/
│   └── wedding.config.ts       ← MODIFICA QUI TUTTO
├── src/
│   ├── app/
│   │   ├── layout.tsx           ← Layout root + metadata SEO
│   │   └── page.tsx             ← Assemblaggio sezioni
│   ├── components/
│   │   ├── layout/
│   │   │   ├── ThemeProvider.tsx   ← Inietta CSS variables
│   │   │   └── RevealProvider.tsx  ← Scroll animations
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CountdownSection.tsx
│   │   │   ├── StorySection.tsx
│   │   │   ├── EventTimeline.tsx
│   │   │   ├── GallerySection.tsx
│   │   │   ├── RSVPSection.tsx
│   │   │   ├── GiftSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── MusicPlayer.tsx
│   │   │   └── FooterSection.tsx
│   │   └── ui/
│   │       └── AnimatedDivider.tsx
│   ├── hooks/
│   │   └── useReveal.ts
│   └── styles/
│       └── globals.css
├── public/
│   ├── images/          ← Metti qui le tue foto
│   └── audio/           ← Metti qui la musica
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## 🔮 Modalità Template (multi-invito)

Per creare più inviti diversi dallo stesso codebase:

1. Crea `config/wedding-mario-sofia.config.ts`
2. Crea una route Next.js: `src/app/mario-sofia/page.tsx`
3. Importa la config specifica in quella pagina

Ogni URL `/mario-sofia` avrà il proprio invito con colori, testi e date diverse.

---

## 📌 Checklist Pre-Deploy

- [ ] Nomi sposi corretti
- [ ] Data matrimonio corretta (countdown!)
- [ ] Numeri WhatsApp nel formato internazionale (39...)
- [ ] IBAN corretto (verifica 2 volte!)
- [ ] Link Google Maps corretti
- [ ] Foto caricate in `/public/images/`
- [ ] Musica in `/public/audio/` (se usata)
- [ ] Meta title e description personalizzati
- [ ] OG image caricata in `/public/images/og-image.jpg`
- [ ] Tema scelto
- [ ] Test su iPhone Safari
- [ ] Test su Android Chrome

---

## 💡 Consigli UX

- **Foto hero**: usa immagini landscape 1920×1080 o superiori
- **Galleria**: mix di portrait e landscape per il layout masonry
- **Musica**: volume autoplay basso (già configurato a 0.4)
- **WhatsApp**: il numero deve essere senza spazi o simboli es. `393381656683`
- **Performance**: le immagini Unsplash hanno i parametri `?w=800&q=80` già ottimizzati

---

Fatto con ❤️ — Buon matrimonio! 💍

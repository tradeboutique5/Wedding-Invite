import { weddingConfig } from "../../config/wedding.config";
import HeroSection from "@/components/sections/HeroSection";
import CountdownSection from "@/components/sections/CountdownSection";
import StorySection from "@/components/sections/StorySection";
import EventTimeline from "@/components/sections/EventTimeline";
import GallerySection from "@/components/sections/GallerySection";
import RSVPSection from "@/components/sections/RSVPSection";
import GiftSection from "@/components/sections/GiftSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import AnimatedDivider from "@/components/ui/AnimatedDivider";

export default function HomePage() {
  const cfg = weddingConfig;

  return (
    <main className="container-safe">
      {/* HERO — fullscreen entrance */}
      <HeroSection
        bride={cfg.bride.name}
        groom={cfg.groom.name}
        dateDisplay={cfg.wedding.dateDisplay}
        dayName={cfg.wedding.dayName}
        hero={cfg.hero}
      />

      {/* COUNTDOWN */}
      <CountdownSection targetDate={cfg.wedding.date} />

      <AnimatedDivider variant="rose" />

      {/* STORIA */}
      {cfg.story.enabled && <StorySection story={cfg.story} />}

      <AnimatedDivider variant="leaf" />

      {/* TIMELINE EVENTO */}
      <EventTimeline events={cfg.events} />

      <AnimatedDivider variant="diamond" />

      {/* GALLERY */}
      {cfg.gallery.enabled && <GallerySection gallery={cfg.gallery} />}

      <AnimatedDivider variant="rose" />

      {/* RSVP */}
      {cfg.rsvp.enabled && (
        <RSVPSection
          rsvp={cfg.rsvp}
          bride={cfg.bride}
          groom={cfg.groom}
        />
      )}

      <AnimatedDivider variant="leaf" />

      {/* LISTA NOZZE */}
      {cfg.gifts.enabled && <GiftSection gifts={cfg.gifts} />}

      <AnimatedDivider variant="diamond" />

      {/* CONTATTI */}
      <ContactSection
        bride={cfg.bride}
        groom={cfg.groom}
        calendar={cfg.calendar}
      />

      {/* FOOTER */}
      <FooterSection footer={cfg.footer} bride={cfg.bride.name} groom={cfg.groom.name} />
    </main>
  );
}

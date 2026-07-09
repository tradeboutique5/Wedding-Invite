import ShuttleSection from "@/components/sections/ShuttleSection";
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
      <HeroSection
        bride={cfg.bride.name}
        groom={cfg.groom.name}
        dateDisplay={cfg.wedding.dateDisplay}
        dayName={cfg.wedding.dayName}
        hero={cfg.hero}
      />
      <CountdownSection targetDate={cfg.wedding.date} />
      <AnimatedDivider variant="rose" />
      {cfg.story.enabled && <StorySection story={cfg.story} />}
      <AnimatedDivider variant="leaf" />
      <EventTimeline events={cfg.events} />
      <AnimatedDivider variant="diamond" />
      <AnimatedDivider variant="leaf" />
      {cfg.shuttle.enabled && (
        <ShuttleSection shuttle={cfg.shuttle} bride={cfg.bride} groom={cfg.groom} />
      )}
      {cfg.gallery.enabled && <GallerySection gallery={cfg.gallery} />}
      <AnimatedDivider variant="rose" />
      {cfg.rsvp.enabled && (
        <RSVPSection
          rsvp={cfg.rsvp}
          bride={cfg.bride}
          groom={cfg.groom}
        />
      )}
      <AnimatedDivider variant="leaf" />
      {cfg.gifts.enabled && <GiftSection gifts={cfg.gifts} />}
      <AnimatedDivider variant="diamond" />
      <ContactSection
        bride={cfg.bride}
        groom={cfg.groom}
        calendar={cfg.calendar}
      />
      <FooterSection footer={cfg.footer} bride={cfg.bride.name} groom={cfg.groom.name} />
    </main>
  );
}

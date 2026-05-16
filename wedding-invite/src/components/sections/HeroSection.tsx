"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  bride: string;
  groom: string;
  dateDisplay: string;
  dayName: string;
  hero: {
    tagline: string;
    subtitle: string;
    backgroundImage: string;
    overlayOpacity: number;
    showScrollHint: boolean;
  };
}

export default function HeroSection({ bride, groom, dateDisplay, dayName, hero }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Entry animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const parallaxOffset = scrollY * 0.4;

  return (
    <section
      ref={heroRef}
      style={{
        position: "relative",
        height: "100svh",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Background image with parallax */}
      <div
        style={{
          position: "absolute",
          inset: "-10%",
          backgroundImage: `url(${hero.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${parallaxOffset}px)`,
          transition: "transform 0.05s linear",
          willChange: "transform",
        }}
      />

      {/* Cinematic overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(
            180deg,
            rgba(0,0,0,0.1) 0%,
            var(--color-overlay) 40%,
            rgba(0,0,0,0.7) 100%
          )`,
        }}
      />

      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          boxShadow: "inset 0 0 120px rgba(0,0,0,0.5)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: "0 1.5rem",
          maxWidth: "680px",
          width: "100%",
        }}
      >
        {/* Tagline */}
        <p
          style={{
            fontFamily: "var(--font-script)",
            fontSize: "clamp(1.4rem, 5vw, 2.2rem)",
            color: "var(--color-primary-light)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease 0.3s, transform 1s ease 0.3s",
            marginBottom: "0.5rem",
            letterSpacing: "0.02em",
          }}
        >
          {hero.tagline}
        </p>

        {/* Names */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 14vw, 6.5rem)",
            fontWeight: 300,
            color: "#ffffff",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 1.2s ease 0.5s, transform 1.2s ease 0.5s",
            marginBottom: "0.25rem",
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          }}
        >
          {groom}
        </h1>

        {/* Ampersand */}
        <div
          style={{
            fontFamily: "var(--font-script)",
            fontSize: "clamp(2.5rem, 10vw, 5rem)",
            color: "var(--color-primary-light)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1.2s ease 0.7s, transform 1.2s ease 0.7s",
            lineHeight: 1,
          }}
        >
          &amp;
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 14vw, 6.5rem)",
            fontWeight: 300,
            color: "#ffffff",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 1.2s ease 0.9s, transform 1.2s ease 0.9s",
            marginBottom: "2rem",
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          }}
        >
          {bride}
        </h1>

        {/* Decorative line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "1.5rem",
            opacity: loaded ? 1 : 0,
            transition: "opacity 1s ease 1.1s",
          }}
        >
          <div style={{ height: "1px", width: "60px", background: "var(--color-primary-light)" }} />
          <span style={{ color: "var(--color-primary-light)", fontSize: "0.6rem" }}>✦</span>
          <div style={{ height: "1px", width: "60px", background: "var(--color-primary-light)" }} />
        </div>

        {/* Date */}
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(0.9rem, 3vw, 1.2rem)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.88)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease 1.3s, transform 1s ease 1.3s",
          }}
        >
          {dayName} — {dateDisplay}
        </p>
      </div>

      {/* Scroll hint */}
      {hero.showScrollHint && (
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: loaded ? 0.7 : 0,
            transition: "opacity 1s ease 2s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <p style={{ color: "white", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Scorri
          </p>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, white, transparent)",
              animation: "scrollLine 2s ease-in-out infinite",
            }}
          />
          <style>{`
            @keyframes scrollLine {
              0%, 100% { opacity: 0.7; transform: scaleY(1); transform-origin: top; }
              50% { opacity: 0.3; transform: scaleY(0.5); transform-origin: top; }
            }
          `}</style>
        </div>
      )}

      {/* Corner ornaments */}
      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          left: "1.5rem",
          opacity: loaded ? 0.4 : 0,
          transition: "opacity 1.5s ease 1.5s",
          color: "var(--color-primary-light)",
          fontSize: "1.5rem",
          fontFamily: "var(--font-display)",
          lineHeight: 1,
        }}
      >
        ✦
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          opacity: loaded ? 0.4 : 0,
          transition: "opacity 1.5s ease 1.5s",
          color: "var(--color-primary-light)",
          fontSize: "1.5rem",
          fontFamily: "var(--font-display)",
          lineHeight: 1,
        }}
      >
        ✦
      </div>
    </section>
  );
}

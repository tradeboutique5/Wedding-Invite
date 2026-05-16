"use client";

import { useState, useEffect, useRef } from "react";
import { useSectionReveal } from "@/hooks/useReveal";

interface Props {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(targetDate: string): TimeLeft {
  const target = new Date(targetDate).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Digit({ value, label }: { value: number; label: string }) {
  const [display, setDisplay] = useState(value);
  const [flip, setFlip] = useState(false);
  const prev = useRef(value);

  useEffect(() => {
    if (value !== prev.current) {
      setFlip(true);
      const t = setTimeout(() => {
        setDisplay(value);
        setFlip(false);
        prev.current = value;
      }, 150);
      return () => clearTimeout(t);
    }
  }, [value]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      <div
        className="glass"
        style={{
          width: "clamp(72px, 20vw, 100px)",
          height: "clamp(80px, 22vw, 110px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "var(--radius)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Shine line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, var(--color-primary-light), transparent)",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 8vw, 3rem)",
            fontWeight: 300,
            color: "var(--color-primary)",
            letterSpacing: "-0.02em",
            opacity: flip ? 0.3 : 1,
            transform: flip ? "translateY(-8px)" : "translateY(0)",
            transition: "opacity 0.15s ease, transform 0.15s ease",
            lineHeight: 1,
          }}
        >
          {String(display).padStart(2, "0")}
        </span>
      </div>
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--color-text-muted)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function CountdownSection({ targetDate }: Props) {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft(targetDate));
  const sectionRef = useRef<HTMLElement>(null);

  useSectionReveal();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const isPast = Object.values(time).every((v) => v === 0);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-secondary"
      style={{ textAlign: "center" }}
    >
      <div className="reveal" style={{ marginBottom: "1rem" }}>
        <p
          style={{
            fontFamily: "var(--font-script)",
            fontSize: "clamp(1.4rem, 5vw, 2rem)",
            color: "var(--color-primary)",
          }}
        >
          {isPast ? "Oggi è il grande giorno!" : "Manca ancora..."}
        </p>
      </div>

      {!isPast && (
        <div
          className="reveal stagger-children"
          style={{
            display: "flex",
            gap: "clamp(0.75rem, 3vw, 1.5rem)",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "2rem",
          }}
        >
          <Digit value={time.days} label="Giorni" />
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.5rem",
              color: "var(--color-primary-light)",
              alignSelf: "center",
              marginTop: "-1.5rem",
              fontWeight: 300,
            }}
          >
            :
          </div>
          <Digit value={time.hours} label="Ore" />
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.5rem",
              color: "var(--color-primary-light)",
              alignSelf: "center",
              marginTop: "-1.5rem",
              fontWeight: 300,
            }}
          >
            :
          </div>
          <Digit value={time.minutes} label="Minuti" />
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.5rem",
              color: "var(--color-primary-light)",
              alignSelf: "center",
              marginTop: "-1.5rem",
              fontWeight: 300,
            }}
          >
            :
          </div>
          <Digit value={time.seconds} label="Secondi" />
        </div>
      )}

      {/* Wedding date display */}
      <div
        className="reveal"
        style={{
          marginTop: "3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(0.7rem, 2.5vw, 0.85rem)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
            }}
          >
            Il Nostro
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.1rem, 4vw, 1.5rem)",
              fontWeight: 600,
              color: "var(--color-primary)",
              letterSpacing: "0.05em",
            }}
          >
            Matrimonio
          </p>
        </div>
      </div>
    </section>
  );
}

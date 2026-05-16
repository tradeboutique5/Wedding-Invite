"use client";

import { useState, useRef, useEffect } from "react";

interface Props {
  config: {
    src: string;
    title: string;
    artist: string;
    autoplay: boolean;
  };
}

export default function MusicPlayer({ config }: Props) {
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.4;

    const handleCanPlay = () => setLoaded(true);
    audio.addEventListener("canplay", handleCanPlay);

    if (config.autoplay) {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }

    return () => audio.removeEventListener("canplay", handleCanPlay);
  }, [config.autoplay]);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(console.error);
    }
  }

  return (
    <>
      <audio ref={audioRef} src={config.src} preload="metadata" />

      <button
        onClick={toggle}
        title={playing ? "Pausa musica" : "Riproduci musica"}
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 100,
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          background: playing
            ? "linear-gradient(135deg, var(--color-primary-light), var(--color-primary))"
            : "var(--color-bg)",
          border: "1px solid var(--color-primary)",
          boxShadow: playing
            ? "0 4px 24px rgba(201,169,110,0.5)"
            : "0 4px 16px rgba(0,0,0,0.12)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s",
          color: playing ? "white" : "var(--color-primary)",
          animation: playing ? "musicPulse 2s ease-in-out infinite" : "none",
        }}
      >
        {playing ? (
          // Pause icon — animated bars
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          // Music note
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        )}
      </button>

      {/* Tooltip */}
      {!playing && (
        <div
          style={{
            position: "fixed",
            bottom: "4.5rem",
            right: "1.5rem",
            zIndex: 99,
            background: "var(--color-surface)",
            backdropFilter: "blur(12px)",
            border: "1px solid var(--color-primary-light)",
            borderRadius: "var(--radius)",
            padding: "0.5rem 0.75rem",
            maxWidth: "160px",
            textAlign: "center",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            animation: "fadeInUp 0.5s ease 3s both",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.7rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.4,
            }}
          >
            🎵 {config.title}
          </p>
        </div>
      )}

      <style>{`
        @keyframes musicPulse {
          0%, 100% { box-shadow: 0 4px 24px rgba(201,169,110,0.5); }
          50% { box-shadow: 0 4px 40px rgba(201,169,110,0.8), 0 0 0 8px rgba(201,169,110,0.1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

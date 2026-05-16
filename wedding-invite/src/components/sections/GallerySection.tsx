"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  gallery: {
    title: string;
    images: string[];
  };
}

export default function GallerySection({ gallery }: Props) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="section-padding bg-secondary" style={{ textAlign: "center" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1rem" }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(1.3rem, 5vw, 1.8rem)",
              color: "var(--color-primary)",
              marginBottom: "0.5rem",
            }}
          >
            I Nostri
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 6vw, 3rem)",
              fontWeight: 300,
              color: "var(--color-text)",
            }}
          >
            {gallery.title}
          </h2>
        </div>

        {/* Grid */}
        <div
          className="stagger-children"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(260px, 100%), 1fr))",
            gap: "1rem",
          }}
        >
          {gallery.images.map((src, i) => (
            <div
              key={i}
              className="reveal"
              onClick={() => setLightbox(src)}
              style={{
                position: "relative",
                aspectRatio: i % 3 === 0 ? "1 / 1.2" : "1 / 1",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <Image
                src={src}
                alt={`Foto ${i + 1}`}
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                }}
              />
              {/* Hover overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "var(--color-overlay)",
                  opacity: 0,
                  transition: "opacity 0.3s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.opacity = "0.4";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.opacity = "0";
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            cursor: "zoom-out",
          }}
        >
          <div style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }}>
            <Image
              src={lightbox}
              alt="Gallery"
              width={900}
              height={700}
              style={{
                objectFit: "contain",
                maxWidth: "90vw",
                maxHeight: "88vh",
                borderRadius: "var(--radius)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
              }}
            />
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute",
                top: "-1rem",
                right: "-1rem",
                background: "var(--color-primary)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

"use client";

import Image from "next/image";

interface Props {
  story: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    image: string;
  };
}

export default function StorySection({ story }: Props) {
  return (
    <section className="section-padding" style={{ textAlign: "center" }}>
      <div
        style={{ maxWidth: "700px", margin: "0 auto", padding: "0 1rem" }}
      >
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "1rem" }}>
          <p
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(1.3rem, 5vw, 1.8rem)",
              color: "var(--color-primary)",
              marginBottom: "0.5rem",
            }}
          >
            {story.subtitle}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 6vw, 3rem)",
              fontWeight: 300,
              color: "var(--color-text)",
              letterSpacing: "-0.02em",
            }}
          >
            {story.title}
          </h2>
        </div>

        {/* Divider */}
        <div
          className="reveal ornament"
          style={{ margin: "2rem auto" }}
        >
          <span style={{ color: "var(--color-primary)", fontSize: "1rem" }}>✦</span>
        </div>

        {/* Image */}
        {story.image && (
          <div
            className="reveal"
            style={{
              position: "relative",
              borderRadius: "50%",
              overflow: "hidden",
              width: "min(240px, 65vw)",
              height: "min(240px, 65vw)",
              margin: "0 auto 2.5rem",
              border: "2px solid var(--color-primary-light)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            }}
          >
            <Image
              src={story.image}
              alt="La nostra storia"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}

        {/* Paragraphs */}
        <div className="stagger-children">
          {story.paragraphs.map((p, i) => (
            <p
              key={i}
              className="reveal"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
                lineHeight: 1.9,
                color: "var(--color-text-muted)",
                marginBottom: "1.5rem",
                fontStyle: i === 0 ? "italic" : "normal",
              }}
            >
              {i === 0 && (
                <span
                  style={{
                    float: "left",
                    fontFamily: "var(--font-display)",
                    fontSize: "3.5em",
                    lineHeight: 0.8,
                    marginRight: "0.1em",
                    marginTop: "0.1em",
                    color: "var(--color-primary)",
                    fontWeight: 300,
                  }}
                >
                  {p[0]}
                </span>
              )}
              {i === 0 ? p.slice(1) : p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

interface Props {
  variant?: "rose" | "leaf" | "diamond";
}

export default function AnimatedDivider({ variant = "rose" }: Props) {
  const motifs: Record<string, string> = {
    rose: "❧",
    leaf: "🌿",
    diamond: "◆",
  };

  return (
    <div className="ornament section-padding" style={{ padding: "2.5rem 1.5rem" }}>
      <div
        className="reveal"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          width: "100%",
          maxWidth: "320px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            flex: 1,
            height: "1px",
            background:
              "linear-gradient(to right, transparent, var(--color-primary-light), var(--color-primary))",
          }}
        />
        <span
          style={{
            color: "var(--color-primary)",
            fontSize: "1.25rem",
            opacity: 0.7,
            flexShrink: 0,
          }}
        >
          {motifs[variant]}
        </span>
        <span
          style={{
            color: "var(--color-primary)",
            fontSize: "0.5rem",
            opacity: 0.4,
            flexShrink: 0,
          }}
        >
          ✦
        </span>
        <span
          style={{
            color: "var(--color-primary)",
            fontSize: "1.25rem",
            opacity: 0.7,
            flexShrink: 0,
          }}
        >
          {motifs[variant]}
        </span>
        <div
          style={{
            flex: 1,
            height: "1px",
            background:
              "linear-gradient(to left, transparent, var(--color-primary-light), var(--color-primary))",
          }}
        />
      </div>
    </div>
  );
}

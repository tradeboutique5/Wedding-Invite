interface Props {
  footer: { tagline: string; showPoweredBy: boolean };
  bride: string;
  groom: string;
}

export default function FooterSection({ footer, bride, groom }: Props) {
  return (
    <footer
      className="bg-secondary"
      style={{
        padding: "4rem 1.5rem 3rem",
        textAlign: "center",
        borderTop: "1px solid var(--color-primary-light)",
      }}
    >
      {/* Large ampersand */}
      <div
        style={{
          fontFamily: "var(--font-script)",
          fontSize: "clamp(4rem, 18vw, 8rem)",
          color: "var(--color-primary-light)",
          lineHeight: 1,
          marginBottom: "1rem",
          opacity: 0.6,
        }}
      >
        &amp;
      </div>

      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.1rem, 4vw, 1.5rem)",
          fontWeight: 300,
          letterSpacing: "0.2em",
          color: "var(--color-text)",
          textTransform: "uppercase",
          marginBottom: "2rem",
        }}
      >
        {groom} &amp; {bride}
      </p>

      {/* Ornament */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            height: "1px",
            width: "50px",
            background: "linear-gradient(to right, transparent, var(--color-primary-light))",
          }}
        />
        <span style={{ color: "var(--color-primary)", fontSize: "0.75rem" }}>✦</span>
        <div
          style={{
            height: "1px",
            width: "50px",
            background: "linear-gradient(to left, transparent, var(--color-primary-light))",
          }}
        />
      </div>

      <p
        style={{
          fontFamily: "var(--font-script)",
          fontSize: "1.1rem",
          color: "var(--color-text-muted)",
          marginBottom: "0.5rem",
        }}
      >
        {footer.tagline}
      </p>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.7rem",
          color: "var(--color-text-light)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        Con amore ♥
      </p>

      {footer.showPoweredBy && (
        <p
          style={{
            marginTop: "2rem",
            fontFamily: "var(--font-body)",
            fontSize: "0.65rem",
            color: "var(--color-text-light)",
            letterSpacing: "0.1em",
          }}
        >
          Made with ♥ — Wedding Invite
        </p>
      )}
    </footer>
  );
}

"use client";
interface Props {
  shuttle: {
    enabled: boolean;
    title: string;
    icon: string;
    message: string;
  };
  bride: { name: string; whatsapp: string };
  groom: { name: string; whatsapp: string };
}

export default function ShuttleSection({ shuttle, bride, groom }: Props) {
  if (!shuttle.enabled) return null;
  const msg = encodeURIComponent("Ciao! Vorrei prenotare il servizio navetta per il vostro matrimonio 🚌");

  return (
    <section className="section-padding" style={{ textAlign: "center" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 1rem" }}>
        <div className="reveal" style={{ marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{shuttle.icon}</div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 6vw, 3rem)",
            fontWeight: 300,
            color: "var(--color-text)",
            marginBottom: "1.5rem",
          }}>
            {shuttle.title}
          </h2>
        </div>

        <div className="glass reveal" style={{
          padding: "2rem 1.5rem",
          borderRadius: "calc(var(--radius) * 2)",
          border: "1px solid var(--color-primary-light)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
          marginBottom: "2rem",
        }}>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            lineHeight: 1.9,
            color: "var(--color-text-muted)",
          }}>
            {shuttle.message}
          </p>
        </div>

        <div className="reveal" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          
            href={`https://api.whatsapp.com/send?phone=${groom.whatsapp}&text=${msg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ padding: "0.875rem 1.75rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            Prenota con Alessandro
          </a>
          
            href={`https://api.whatsapp.com/send?phone=${bride.whatsapp}&text=${msg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ padding: "0.875rem 1.75rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            Prenota con Valentina
          </a>
        </div>
      </div>
    </section>
  );
}

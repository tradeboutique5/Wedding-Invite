"use client";

import { useState } from "react";

interface Props {
  rsvp: {
    title: string;
    subtitle: string;
    deadline: string;
    whatsappTemplate: string;
    mode: "whatsapp" | "form";
    formAction: string;
  };
  bride: { name: string; whatsapp: string };
  groom: { name: string; whatsapp: string };
}

type Attendance = "yes" | "no" | null;

export default function RSVPSection({ rsvp, bride, groom }: Props) {
  const [attendance, setAttendance] = useState<Attendance>(null);
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("1");
  const [note, setNote] = useState("");
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  function buildWhatsAppMsg() {
    const attending = attendance === "yes" ? "✅ SÌ, parteciperò" : "❌ Mi dispiace, non posso partecipare";
    return encodeURIComponent(
      `Ciao! Sono ${name}.\n${attending} al vostro matrimonio.\nOspiti: ${guests}\n${note ? "Note: " + note : ""}`
    );
  }

  function handleSubmit() {
    if (!name.trim()) {
      alert("Inserisci il tuo nome");
      return;
    }
    setShowWhatsApp(true);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.875rem 1rem",
    fontSize: "0.95rem",
    background: "var(--color-bg)",
    color: "var(--color-text)",
    border: "1px solid var(--color-primary-light)",
    borderRadius: "var(--radius)",
    outline: "none",
    fontFamily: "var(--font-body)",
    transition: "border-color 0.3s, box-shadow 0.3s",
  };

  return (
    <section className="section-padding" style={{ textAlign: "center" }}>
      <div style={{ maxWidth: "560px", margin: "0 auto", padding: "0 1rem" }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "2.5rem" }}>
          <p
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(1.3rem, 5vw, 1.8rem)",
              color: "var(--color-primary)",
              marginBottom: "0.5rem",
            }}
          >
            Cenno di Adesione
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 6vw, 3rem)",
              fontWeight: 300,
              color: "var(--color-text)",
              marginBottom: "1rem",
            }}
          >
            {rsvp.title}
          </h2>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
            Compila il modulo entro il{" "}
            <strong style={{ color: "var(--color-primary)" }}>{rsvp.deadline}</strong>
          </p>
        </div>

        {/* Form card */}
        <div
          className="glass reveal"
          style={{
            padding: "2rem 1.5rem",
            borderRadius: "calc(var(--radius) * 2)",
            border: "1px solid var(--color-primary-light)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
            textAlign: "left",
          }}
        >
          {/* Attendance toggle */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.75rem",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-body)",
              }}
            >
              Parteciperai?
            </label>
            <div style={{ display: "flex", gap: "1rem" }}>
              {(["yes", "no"] as Attendance[]).map((val) => (
                <button
                  key={val}
                  onClick={() => setAttendance(val)}
                  style={{
                    flex: 1,
                    padding: "0.875rem",
                    border:
                      attendance === val
                        ? "1px solid var(--color-primary)"
                        : "1px solid var(--color-primary-light)",
                    background:
                      attendance === val
                        ? "linear-gradient(135deg, var(--color-primary-light), var(--color-primary))"
                        : "transparent",
                    color: attendance === val ? "white" : "var(--color-text-muted)",
                    borderRadius: "var(--radius)",
                    cursor: "pointer",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    letterSpacing: "0.05em",
                    transition: "all 0.3s",
                    fontWeight: attendance === val ? 500 : 400,
                  }}
                >
                  {val === "yes" ? "✅ Sì, ci sarò!" : "❌ Mi dispiace, no"}
                </button>
              ))}
            </div>
          </div>

          {/* Name */}
          <div style={{ marginBottom: "1rem" }}>
            <label style={labelStyle}>Il tuo nome *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome e Cognome"
              style={inputStyle}
            />
          </div>

          {/* Guests (only if attending) */}
          {attendance === "yes" && (
            <div style={{ marginBottom: "1rem" }}>
              <label style={labelStyle}>Numero di persone (incluso te)</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                style={{ ...inputStyle, cursor: "pointer" }}
              >
                {["1", "2", "3", "4", "5", "6+"].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === "1" ? "persona" : "persone"}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Note */}
          <div style={{ marginBottom: "1.75rem" }}>
            <label style={labelStyle}>Messaggio o note</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Intolleranze alimentari, auguri, ..."
              rows={3}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="btn-gold"
            style={{
              width: "100%",
              padding: "1rem",
              fontSize: "0.85rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Invia con WhatsApp
          </button>
        </div>

        {/* WhatsApp choice modal */}
        {showWhatsApp && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.7)",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            <div
              className="glass"
              style={{
                background: "var(--color-bg)",
                borderRadius: "calc(var(--radius) * 2)",
                padding: "2rem",
                maxWidth: "360px",
                width: "100%",
                textAlign: "center",
                border: "1px solid var(--color-primary-light)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  fontWeight: 300,
                  color: "var(--color-text)",
                  marginBottom: "0.5rem",
                }}
              >
                Messaggia con noi
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--color-text-muted)",
                  marginBottom: "1.5rem",
                }}
              >
                Scegli con chi condividere la risposta
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a
                  href={`https://api.whatsapp.com/send?phone=${groom.whatsapp}&text=${buildWhatsAppMsg()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{
                    display: "block",
                    padding: "0.875rem",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  Scrivi a {groom.name}
                </a>
                <a
                  href={`https://api.whatsapp.com/send?phone=${bride.whatsapp}&text=${buildWhatsAppMsg()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{
                    display: "block",
                    padding: "0.875rem",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  Scrivi a {bride.name}
                </a>
                <button
                  onClick={() => setShowWhatsApp(false)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--color-text-muted)",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    padding: "0.5rem",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Annulla
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "0.4rem",
  fontSize: "0.75rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--color-text-muted)",
  fontFamily: "var(--font-body)",
};

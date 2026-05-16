"use client";

import { useState } from "react";

interface Person {
  name: string;
  phone: string;
  whatsapp: string;
}

interface CalendarConfig {
  enabled: boolean;
  eventTitle: string;
  startISO: string;
  endISO: string;
  description: string;
  location: string;
}

interface Props {
  bride: Person;
  groom: Person;
  calendar: CalendarConfig;
}

export default function ContactSection({ bride, groom, calendar }: Props) {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [showCall, setShowCall] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const waMsgEncoded = encodeURIComponent("Ciao! Scrivo per il vostro matrimonio 💍");
  const calDesc = encodeURIComponent(`Visita l'invito per tutti i dettagli`);
  const calTitle = encodeURIComponent(calendar.eventTitle);

  const googleCalUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${calTitle}&dates=${calendar.startISO}/${calendar.endISO}&details=${calDesc}&location=${encodeURIComponent(calendar.location)}`;
  const yahooCalUrl = `https://calendar.yahoo.com/?v=60&view=d&type=20&title=${calTitle}&st=${calendar.startISO}&et=${calendar.endISO}&desc=${calDesc}&in_loc=${encodeURIComponent(calendar.location)}`;
  const icsContent = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:${calendar.startISO}%0ADTEND:${calendar.endISO}%0ASUMMARY:${calTitle}%0ADESCRIPTION:${calDesc}%0ALOCATION:${encodeURIComponent(calendar.location)}%0AEND:VEVENT%0AEND:VCALENDAR`;

  const actionButtons = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      label: "WhatsApp",
      sublabel: "Messaggia con noi",
      onClick: () => setShowWhatsApp(true),
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.66a19.79 19.79 0 01-3.07-8.72 2 2 0 012-2.18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 6.4A16 16 0 0017.6 17.09l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      label: "Chiama",
      sublabel: "Contattaci",
      onClick: () => setShowCall(true),
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      label: "Calendario",
      sublabel: "Aggiungi promemoria",
      onClick: () => setShowCalendar(true),
    },
  ];

  return (
    <section className="section-padding" style={{ textAlign: "center" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 1rem" }}>
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
            I nostri
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 6vw, 3rem)",
              fontWeight: 300,
              color: "var(--color-text)",
            }}
          >
            Contatti
          </h2>
        </div>

        {/* Action buttons */}
        <div
          className="stagger-children"
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {actionButtons.map((btn) => (
            <button
              key={btn.label}
              className="reveal glass"
              onClick={btn.onClick}
              style={{
                flex: "1 1 150px",
                maxWidth: "180px",
                padding: "1.75rem 1rem",
                border: "1px solid var(--color-primary-light)",
                borderRadius: "calc(var(--radius) * 2)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.75rem",
                transition: "transform 0.3s, box-shadow 0.3s",
                background: "var(--color-surface)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "";
              }}
            >
              <span style={{ color: "var(--color-primary)" }}>{btn.icon}</span>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "var(--color-text)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {btn.label}
                </p>
                <p
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--color-text-muted)",
                    letterSpacing: "0.05em",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {btn.sublabel}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* WhatsApp modal */}
      {showWhatsApp && (
        <Modal title="Messaggia con Noi" onClose={() => setShowWhatsApp(false)}>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
            Scegli con chi messaggiare
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <a
              href={`https://api.whatsapp.com/send?phone=${groom.whatsapp}&text=${waMsgEncoded}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ display: "block", padding: "0.875rem", textDecoration: "none" }}
            >
              Messaggia con {groom.name} {groom.phone}
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${bride.whatsapp}&text=${waMsgEncoded}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ display: "block", padding: "0.875rem", textDecoration: "none" }}
            >
              Messaggia con {bride.name} {bride.phone}
            </a>
          </div>
        </Modal>
      )}

      {/* Call modal */}
      {showCall && (
        <Modal title="Chiama" onClose={() => setShowCall(false)}>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
            Scegli chi chiamare
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <a
              href={`tel:${groom.phone}`}
              className="btn-gold"
              style={{ display: "block", padding: "0.875rem", textDecoration: "none" }}
            >
              Chiama {groom.name} — {groom.phone}
            </a>
            <a
              href={`tel:${bride.phone}`}
              className="btn-outline"
              style={{ display: "block", padding: "0.875rem", textDecoration: "none" }}
            >
              Chiama {bride.name} — {bride.phone}
            </a>
          </div>
        </Modal>
      )}

      {/* Calendar modal */}
      {showCalendar && (
        <Modal title="Aggiungi al Calendario" onClose={() => setShowCalendar(false)}>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
            Scegli il calendario
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <a
              href={googleCalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ display: "block", padding: "0.875rem", textDecoration: "none" }}
            >
              📅 Google Calendar
            </a>
            <a
              href={yahooCalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ display: "block", padding: "0.875rem", textDecoration: "none" }}
            >
              📅 Yahoo Calendar
            </a>
            <a
              href={icsContent}
              download="wedding.ics"
              className="btn-outline"
              style={{ display: "block", padding: "0.875rem", textDecoration: "none" }}
            >
              📅 iPhone / Outlook
            </a>
          </div>
        </Modal>
      )}
    </section>
  );
}

function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.65)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--color-bg)",
          border: "1px solid var(--color-primary-light)",
          borderRadius: "calc(var(--radius) * 2)",
          padding: "2rem 1.5rem",
          maxWidth: "380px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            fontWeight: 300,
            color: "var(--color-text)",
            marginBottom: "0.5rem",
          }}
        >
          {title}
        </h3>
        {children}
        <button
          onClick={onClose}
          style={{
            marginTop: "1rem",
            background: "none",
            border: "none",
            color: "var(--color-text-muted)",
            fontSize: "0.8rem",
            cursor: "pointer",
            fontFamily: "var(--font-body)",
          }}
        >
          Chiudi
        </button>
      </div>
    </div>
  );
}

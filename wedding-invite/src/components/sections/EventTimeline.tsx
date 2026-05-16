"use client";

interface EventItem {
  id: string;
  icon: string;
  label: string;
  title: string;
  time: string;
  address: string;
  city: string;
  mapsUrl: string;
  mapsEmbed: string;
}

interface Props {
  events: EventItem[];
}

function EventCard({ event, index }: { event: EventItem; index: number }) {
  return (
    <div
      className="reveal"
      style={{
        flex: "1 1 320px",
        maxWidth: "460px",
      }}
    >
      <div
        className="glass"
        style={{
          borderRadius: "calc(var(--radius) * 2)",
          overflow: "hidden",
          border: "1px solid var(--color-primary-light)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
        }}
      >
        {/* Card Header */}
        <div
          style={{
            padding: "2rem 1.5rem 1.5rem",
            textAlign: "center",
            borderBottom: "1px solid var(--color-primary-light)",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: "1px solid var(--color-primary-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1rem",
              fontSize: "1.5rem",
              background: "var(--color-bg)",
            }}
          >
            {event.icon}
          </div>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--color-primary)",
              marginBottom: "0.5rem",
            }}
          >
            {event.label}
          </p>

          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.2rem, 4vw, 1.6rem)",
              fontWeight: 400,
              color: "var(--color-text)",
              marginBottom: "0.75rem",
            }}
          >
            {event.title}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              fontStyle: "italic",
              color: "var(--color-primary)",
              marginBottom: "0.5rem",
            }}
          >
            {event.time}
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.6,
            }}
          >
            {event.address}
            <br />
            {event.city}
          </p>
        </div>

        {/* Map embed */}
        <div className="map-embed" style={{ borderRadius: 0, border: "none", height: "200px" }}>
          <iframe
            src={event.mapsEmbed}
            width="100%"
            height="200"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mappa ${event.title}`}
          />
        </div>

        {/* Navigate button */}
        <div style={{ padding: "1.25rem 1.5rem", textAlign: "center" }}>
          <a
            href={event.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.75rem",
              textDecoration: "none",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Avvia Navigazione
          </a>
        </div>
      </div>
    </div>
  );
}

export default function EventTimeline({ events }: Props) {
  return (
    <section className="section-padding" style={{ textAlign: "center" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1rem" }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "3.5rem" }}>
          <p
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "clamp(1.3rem, 5vw, 1.8rem)",
              color: "var(--color-primary)",
              marginBottom: "0.5rem",
            }}
          >
            Vi aspettiamo
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 6vw, 3rem)",
              fontWeight: 300,
              color: "var(--color-text)",
            }}
          >
            Wedding Day
          </h2>

          {/* Date badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              marginTop: "1.5rem",
              padding: "0.75rem 2rem",
              border: "1px solid var(--color-primary-light)",
              borderRadius: "100px",
              background: "var(--color-surface)",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="1.5"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.9rem",
                letterSpacing: "0.15em",
                color: "var(--color-primary)",
              }}
            >
              10 Luglio 2026
            </span>
          </div>
        </div>

        {/* Event cards */}
        <div
          className="stagger-children"
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

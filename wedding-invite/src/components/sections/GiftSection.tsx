"use client";

import { useState } from "react";

interface Props {
  gifts: {
    title: string;
    subtitle: string;
    heading: string;
    message: string;
    iban: { enabled: boolean; holder: string; code: string };
    registryUrl: string;
  };
}

export default function GiftSection({ gifts }: Props) {
  const [copied, setCopied] = useState(false);

  function copyIban() {
    navigator.clipboard.writeText(gifts.iban.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <section className="section-padding bg-secondary" style={{ textAlign: "center" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 1rem" }}>
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
            Il Regalo Perfetto
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 6vw, 3rem)",
              fontWeight: 300,
              color: "var(--color-text)",
            }}
          >
            {gifts.title}
          </h2>
        </div>

        {/* Gift card */}
        <div
          className="glass reveal"
          style={{
            borderRadius: "calc(var(--radius) * 2)",
            border: "1px solid var(--color-primary-light)",
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
          }}
        >
          {/* Top icon area */}
          <div
            style={{
              background:
                "linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%)",
              padding: "2.5rem 1.5rem",
              color: "white",
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                marginBottom: "1rem",
              }}
            >
              ✈️
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
                fontWeight: 400,
                marginBottom: "0.5rem",
              }}
            >
              {gifts.heading}
            </h3>
            <p
              style={{
                fontSize: "0.85rem",
                opacity: 0.9,
                fontFamily: "var(--font-body)",
                lineHeight: 1.7,
                maxWidth: "400px",
                margin: "0 auto",
              }}
            >
              {gifts.message}
            </p>
          </div>

          {/* IBAN section */}
          {gifts.iban.enabled && (
            <div style={{ padding: "2rem 1.5rem", textAlign: "center" }}>
              <p
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                  marginBottom: "0.5rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                Intestatario
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.05rem",
                  color: "var(--color-text)",
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                }}
              >
                {gifts.iban.holder}
              </p>

              <p
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                  marginBottom: "0.5rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                Codice IBAN
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-primary-light)",
                  borderRadius: "var(--radius)",
                  padding: "0.875rem 1rem",
                  marginBottom: "1.5rem",
                  justifyContent: "space-between",
                }}
              >
                <code
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.85rem",
                    color: "var(--color-primary-dark)",
                    wordBreak: "break-all",
                    textAlign: "left",
                    flex: 1,
                  }}
                >
                  {gifts.iban.code}
                </code>
              </div>

              <button
                onClick={copyIban}
                className={copied ? "btn-outline" : "btn-gold"}
                style={{
                  padding: "0.875rem 2rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "all 0.3s",
                }}
              >
                {copied ? (
                  <>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Copiato!
                  </>
                ) : (
                  <>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    Copia IBAN
                  </>
                )}
              </button>
            </div>
          )}

          {/* External registry */}
          {gifts.registryUrl && (
            <div style={{ padding: "0 1.5rem 1.5rem", textAlign: "center" }}>
              <a
                href={gifts.registryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{
                  display: "inline-block",
                  padding: "0.875rem 2rem",
                  textDecoration: "none",
                }}
              >
                Vedi Lista Nozze
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

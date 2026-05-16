"use client";

import { useEffect } from "react";
import type { Theme } from "../../../config/wedding.config";

interface ThemeProviderProps {
  theme: Theme;
  children: React.ReactNode;
}

export default function ThemeProvider({ theme, children }: ThemeProviderProps) {
  useEffect(() => {
    const root = document.documentElement;
    const { colors, fonts, radius, blur } = theme;

    // Colors
    root.style.setProperty("--color-primary", colors.primary);
    root.style.setProperty("--color-primary-light", colors.primaryLight);
    root.style.setProperty("--color-primary-dark", colors.primaryDark);
    root.style.setProperty("--color-accent", colors.accent);
    root.style.setProperty("--color-bg", colors.bg);
    root.style.setProperty("--color-bg-secondary", colors.bgSecondary);
    root.style.setProperty("--color-surface", colors.surface);
    root.style.setProperty("--color-text", colors.text);
    root.style.setProperty("--color-text-muted", colors.textMuted);
    root.style.setProperty("--color-text-light", colors.textLight);
    root.style.setProperty("--color-overlay", colors.overlay);

    // Fonts
    root.style.setProperty("--font-display", fonts.display);
    root.style.setProperty("--font-body", fonts.body);
    root.style.setProperty("--font-script", fonts.script);

    // Misc
    root.style.setProperty("--radius", radius);
    root.style.setProperty("--blur", blur);

    // Body background
    document.body.style.backgroundColor = colors.bg;
  }, [theme]);

  return <>{children}</>;
}

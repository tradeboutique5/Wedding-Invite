import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import { weddingConfig, activeTheme } from "../../config/wedding.config";
import ThemeProvider from "@/components/layout/ThemeProvider";
import RevealProvider from "@/components/layout/RevealProvider";
import MusicPlayer from "@/components/sections/MusicPlayer";

export const metadata: Metadata = {
  title: weddingConfig.meta.title,
  description: weddingConfig.meta.description,
  openGraph: {
    title: weddingConfig.meta.title,
    description: weddingConfig.meta.description,
    images: [weddingConfig.meta.ogImage],
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: weddingConfig.meta.themeColor,
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="grain">
        <ThemeProvider theme={activeTheme}>
          <RevealProvider>
            {children}
          </RevealProvider>
          {weddingConfig.music.enabled && (
            <MusicPlayer config={weddingConfig.music} />
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}

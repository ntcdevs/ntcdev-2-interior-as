import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import config from "@/config.json";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${config.business.name} – ${config.hero.eyebrow}`,
  description: config.hero.subheadline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { primaryColor, accentColor, textColor, heroColor } = config.theme;
  return (
    <html lang="no" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <style>{`
          :root {
            --color-primary:  ${primaryColor};
            --color-accent:   ${accentColor};
            --color-text:     ${textColor};
            --color-hero:     ${heroColor ?? primaryColor};
          }
        `}</style>
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

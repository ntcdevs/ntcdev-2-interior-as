import type { Metadata } from "next";
import "./globals.css";
import config from "@/config.json";

export const metadata: Metadata = {
  title: config.business.name,
  description: config.business.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}

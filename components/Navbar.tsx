"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import config from "@/config.json";

const links = [
  { label: "Hjem",      href: "#hjem" },
  { label: "Tjenester", href: "#tjenester" },
  { label: "Om Oss",    href: "#om-oss" },
  { label: "Galleri",   href: "#galleri" },
  { label: "Kontakt",   href: "#kontakt" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { accentColor, primaryColor, textColor } = config.theme;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        backgroundColor: scrolled ? `${primaryColor}f5` : "transparent",
        borderBottomColor: scrolled ? `${accentColor}33` : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b py-4"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hjem" className="flex items-center gap-2">
          <span
            className="font-[family-name:var(--font-playfair)] text-xl font-semibold tracking-widest uppercase"
            style={{ color: textColor }}
          >
            {config.business.name}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase transition-colors duration-300"
              style={{ color: `${textColor}99` }}
              onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = `${textColor}99`)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="ml-4 px-5 py-2 text-sm tracking-widest uppercase font-[family-name:var(--font-inter)] transition-all duration-300"
            style={{ border: `1px solid ${accentColor}`, color: accentColor }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = accentColor;
              (e.currentTarget as HTMLElement).style.color = primaryColor;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = accentColor;
            }}
          >
            Bestill Time
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden transition-colors"
          style={{ color: textColor }}
          onClick={() => setOpen(!open)}
          aria-label="Meny"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: `${primaryColor}f8`, borderColor: `${accentColor}22` }}
        >
          <nav className="flex flex-col px-6 py-6 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase py-2 border-b transition-colors duration-300"
                style={{ color: `${textColor}70`, borderColor: `${textColor}10` }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 text-sm tracking-widest uppercase text-center font-[family-name:var(--font-inter)] transition-all duration-300"
              style={{ border: `1px solid ${accentColor}`, color: accentColor }}
            >
              Bestill Time
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

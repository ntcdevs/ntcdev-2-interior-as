"use client";
import {
  Scissors, Sparkles, Star, Droplets, Wind, Crown,
  Dumbbell, Zap, UtensilsCrossed, Heart, Shield, Flame,
  Wrench, Home, Leaf, type LucideIcon,
} from "lucide-react";
import config from "@/config.json";

const ICON_MAP: Record<string, LucideIcon> = {
  Scissors, Sparkles, Star, Droplets, Wind, Crown,
  Dumbbell, Zap, UtensilsCrossed, Heart, Shield, Flame,
  Wrench, Home, Leaf,
};

export default function Services() {
  const { theme, services } = config;

  return (
    <section
      id="tjenester"
      className="py-32 px-6 relative"
      style={{ backgroundColor: theme.primaryColor }}
    >
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <p
            className="font-[family-name:var(--font-inter)] text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: theme.accentColor }}
          >
            Våre Tjenester
          </p>
          <h2
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-semibold mb-6"
            style={{ color: theme.textColor }}
          >
            Hva Vi Tilbyr
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20" style={{ backgroundColor: `${theme.accentColor}44` }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.accentColor }} />
            <div className="h-px w-20" style={{ backgroundColor: `${theme.accentColor}44` }} />
          </div>
        </div>

        {/* Cards */}
        <div className={`grid grid-cols-1 gap-6 ${services.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3"}`}>
          {services.map((s, i) => {
            const Icon: LucideIcon = ICON_MAP[s.icon] ?? Star;
            return (
              <div
                key={i}
                className="group relative p-8 transition-all duration-500 cursor-default"
                style={{
                  border: `1px solid ${theme.textColor}0d`,
                  backgroundColor: `${theme.textColor}05`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${theme.accentColor}44`;
                  (e.currentTarget as HTMLElement).style.backgroundColor = `${theme.textColor}08`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${theme.textColor}0d`;
                  (e.currentTarget as HTMLElement).style.backgroundColor = `${theme.textColor}05`;
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to right, transparent, ${theme.accentColor}, transparent)` }}
                />

                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="p-3 transition-colors duration-300"
                    style={{ border: `1px solid ${theme.accentColor}33` }}
                  >
                    <Icon size={20} style={{ color: theme.accentColor }} />
                  </div>
                  <h3
                    className="font-[family-name:var(--font-playfair)] text-xl font-semibold"
                    style={{ color: theme.textColor }}
                  >
                    {s.name}
                  </h3>
                </div>

                <p
                  className="font-[family-name:var(--font-inter)] text-sm leading-relaxed mb-6 font-light"
                  style={{ color: `${theme.textColor}66` }}
                >
                  {s.desc}
                </p>

                {"price" in s && (
                  <p
                    className="font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wide"
                    style={{ color: theme.accentColor }}
                  >
                    {(s as { price: string }).price}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p
            className="font-[family-name:var(--font-inter)] text-sm mb-6"
            style={{ color: `${theme.textColor}40` }}
          >
            Ring oss for skreddersydde pakker og mer informasjon.
          </p>
          <a
            href="#kontakt"
            className="inline-block px-10 py-4 font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase transition-all duration-300"
            style={{ border: `1px solid ${theme.accentColor}`, color: theme.accentColor }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = theme.accentColor;
              (e.currentTarget as HTMLElement).style.color = theme.primaryColor;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = theme.accentColor;
            }}
          >
            Bestill Time
          </a>
        </div>
      </div>
    </section>
  );
}

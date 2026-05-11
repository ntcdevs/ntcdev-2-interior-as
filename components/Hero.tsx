import { ChevronDown } from "lucide-react";
import config from "@/config.json";

export default function Hero() {
  const { theme, hero, business } = config;

  return (
    <section
      id="hjem"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: theme.primaryColor }}
    >
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-px h-full"
          style={{ background: `linear-gradient(to bottom, transparent, ${theme.accentColor}, transparent)` }}
        />
        <div
          className="absolute top-0 right-1/4 w-px h-full"
          style={{ background: `linear-gradient(to bottom, transparent, ${theme.accentColor}, transparent)` }}
        />
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[700px] h-[700px] rounded-full blur-3xl opacity-5"
          style={{ backgroundColor: theme.accentColor }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p
          className="animate-fade-in font-[family-name:var(--font-inter)] text-xs tracking-[0.4em] uppercase mb-8"
          style={{ color: theme.accentColor }}
        >
          {hero.eyebrow}
        </p>

        {/* Headline */}
        <h1 className="animate-fade-in-up animate-delay-100 font-[family-name:var(--font-playfair)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold leading-none tracking-tight mb-6">
          <span style={{ color: theme.textColor }}>{hero.headline}</span>
          <span className="block" style={{ color: theme.accentColor }}>{hero.headlineAccent}</span>
        </h1>

        {/* Divider */}
        <div className="animate-fade-in-up animate-delay-200 flex items-center justify-center gap-4 my-8">
          <div className="h-px w-16" style={{ backgroundColor: `${theme.accentColor}66` }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.accentColor }} />
          <div className="h-px w-16" style={{ backgroundColor: `${theme.accentColor}66` }} />
        </div>

        {/* Subheadline */}
        <p
          className="animate-fade-in-up animate-delay-300 font-[family-name:var(--font-inter)] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-12"
          style={{ color: `${theme.textColor}99` }}
        >
          {hero.subheadline}
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up animate-delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#kontakt"
            className="px-10 py-4 font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase font-semibold transition-all duration-300"
            style={{
              backgroundColor: theme.accentColor,
              color: theme.primaryColor,
              boxShadow: `0 0 0 rgba(${theme.accentColor}, 0)`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${theme.accentColor}44`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            {hero.ctaText}
          </a>
          <a
            href="#tjenester"
            className="px-10 py-4 font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase transition-all duration-300"
            style={{ border: `1px solid ${theme.textColor}33`, color: `${theme.textColor}99` }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = theme.accentColor;
              (e.currentTarget as HTMLElement).style.color = theme.accentColor;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = `${theme.textColor}33`;
              (e.currentTarget as HTMLElement).style.color = `${theme.textColor}99`;
            }}
          >
            Se Tjenester
          </a>
        </div>

        {/* City tag */}
        <p
          className="animate-fade-in-up animate-delay-500 font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase mt-16"
          style={{ color: `${theme.textColor}30` }}
        >
          {business.city}, Norge
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span
          className="font-[family-name:var(--font-inter)] text-[10px] tracking-widest uppercase"
          style={{ color: `${theme.textColor}40` }}
        >
          Scroll
        </span>
        <ChevronDown size={16} style={{ color: `${theme.accentColor}80` }} />
      </div>
    </section>
  );
}

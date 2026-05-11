import { Star } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import config from "@/config.json";

export default function Testimonials() {
  const { theme, testimonials } = config;
  const { accentColor, primaryColor, textColor, mode } = theme;
  const isLight = mode === "light";
  const bg = isLight ? "#ffffff" : `${textColor}04`;
  const cardBg = isLight ? "#f8fafc" : `${textColor}06`;
  const cardBorder = isLight ? "#e2e8f0" : `${textColor}0d`;
  const nameColor = isLight ? "#0f172a" : textColor;
  const roleColor = isLight ? "#94a3b8" : `${textColor}44`;
  const textCol = isLight ? "#475569" : `${textColor}70`;

  return (
    <section className="py-32 px-6" style={{ backgroundColor: bg }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow={testimonials.eyebrow} heading={testimonials.heading} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.items.map((t, i) => (
            <div key={i} className="p-8 flex flex-col" style={{ backgroundColor: cardBg, border: `1px solid ${cardBorder}` }}>
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={14} fill={accentColor} style={{ color: accentColor }} />
                ))}
              </div>
              {/* Quote */}
              <p className="font-[family-name:var(--font-inter)] text-base leading-relaxed font-light flex-1 mb-8" style={{ color: textCol }}>
                &ldquo;{t.text}&rdquo;
              </p>
              {/* Author */}
              <div className="flex items-center gap-4 pt-6" style={{ borderTop: `1px solid ${cardBorder}` }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-[family-name:var(--font-playfair)] font-semibold text-sm flex-shrink-0"
                  style={{ backgroundColor: `${accentColor}22`, color: accentColor }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-[family-name:var(--font-inter)] text-sm font-semibold" style={{ color: nameColor }}>{t.name}</p>
                  <p className="font-[family-name:var(--font-inter)] text-xs" style={{ color: roleColor }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

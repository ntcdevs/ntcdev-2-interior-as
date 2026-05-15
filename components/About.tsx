import SectionHeader from "@/components/shared/SectionHeader";
import config from "@/config.json";

function imgUrl(p: string) {
  if (!p) return "";
  if (p.startsWith("http") || p.startsWith("/")) return p;
  const base = process.env.NEXT_PUBLIC_STORAGE_URL ?? "";
  return base ? `${base}/${p}` : "";
}

export default function About() {
  const { theme, about, business, images } = config;
  const { accentColor, primaryColor, textColor, mode } = theme;
  const isLight = mode === "light";
  const bg = isLight ? "#f8fafc" : primaryColor;
  const statBg = isLight ? "#ffffff" : `${textColor}05`;
  const statBorder = isLight ? "#e2e8f0" : `${textColor}0d`;
  const bodyColor = isLight ? "#475569" : `${textColor}70`;

  return (
    <section id="om-oss" className="py-32 px-6 relative" style={{ backgroundColor: bg }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 blur-2xl opacity-10 rounded-full" style={{ backgroundColor: accentColor }} />
            <div className="relative aspect-[4/5] overflow-hidden" style={{ border: `1px solid ${accentColor}22` }}>
              {imgUrl(images.about ?? images.gallery[0]) ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={imgUrl(images.about ?? images.gallery[0])} alt={business.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: `${accentColor}10` }}>
                  <span className="font-[family-name:var(--font-playfair)] text-9xl font-bold opacity-10" style={{ color: accentColor }}>
                    {business.name.charAt(0)}
                  </span>
                </div>
              )}
              <div className="absolute bottom-0 right-0 w-16 h-16"
                style={{ background: `linear-gradient(135deg, transparent 50%, ${accentColor}44 50%)` }} />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-6 -right-6 p-6" style={{ backgroundColor: accentColor }}>
              <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold" style={{ color: isLight ? "#ffffff" : primaryColor }}>{about.stat1.value}</p>
              <p className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase mt-1" style={{ color: isLight ? "#ffffffcc" : `${primaryColor}cc` }}>{about.stat1.label}</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <SectionHeader eyebrow={about.eyebrow} heading={about.heading} align="left" />
            <p className="font-[family-name:var(--font-inter)] text-lg leading-relaxed font-light mb-10" style={{ color: bodyColor }}>
              {about.body}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[about.stat2, about.stat3].map((stat, i) => (
                <div key={i} className="p-6" style={{ backgroundColor: statBg, border: `1px solid ${statBorder}` }}>
                  <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-1" style={{ color: accentColor }}>{stat.value}</p>
                  <p className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase" style={{ color: isLight ? "#94a3b8" : `${textColor}44` }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

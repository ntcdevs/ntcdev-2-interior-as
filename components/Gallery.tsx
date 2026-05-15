"use client";
import SectionHeader from "@/components/shared/SectionHeader";
import config from "@/config.json";

function imgUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("/")) return path;
  const base = process.env.NEXT_PUBLIC_STORAGE_URL ?? "";
  if (!base) return "";
  return `${base}/${path}`;
}

const LABELS = [
  "Profesjonelt Arbeid", "Vår Salong", "Resultater", "Detaljer",
  "Håndverk", "Stil & Kvalitet",
];

export default function Gallery() {
  const { theme, gallery, images } = config;
  const { accentColor, primaryColor, textColor, mode } = theme;
  const isLight = mode === "light";
  const bg = isLight ? "#f8fafc" : primaryColor;
  const cardBorder = isLight ? "#e2e8f0" : `${textColor}0d`;

  return (
    <section
      id="galleri"
      className="py-32 px-6"
      style={{ backgroundColor: bg }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow={gallery.eyebrow}
          heading={gallery.heading}
          subheading={gallery.subheading}
        />

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.gallery.slice(0, 6).map((src, i) => {
            const url = imgUrl(src);
            const isWide = i === 3;
            return (
              <div
                key={i}
                className={`relative group overflow-hidden transition-all duration-500 ${
                  isWide ? "md:col-span-2 aspect-[2/1]" : "aspect-square"
                }`}
                style={{ border: `1px solid ${cardBorder}` }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = `${accentColor}44`)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = cardBorder)
                }
              >
                {url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={url}
                    alt={LABELS[i] ?? "Galleri"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: isLight ? "#f1f5f9" : `${textColor}05` }}
                  >
                    <span
                      className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase"
                      style={{ color: `${accentColor}60` }}
                    >
                      {LABELS[i]}
                    </span>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />

                {/* Top accent line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }}
                />

                {/* Sliding label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <p
                    className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-center"
                    style={{ color: accentColor }}
                  >
                    {LABELS[i]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

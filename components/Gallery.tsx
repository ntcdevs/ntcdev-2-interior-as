"use client";
import config from "@/config.json";

function imgUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const base = process.env.NEXT_PUBLIC_STORAGE_URL ?? "";
  if (!base) return "";
  return `${base}/${path}`;
}

const LABELS = [
  "Profesjonelt Arbeid", "Vår Salong", "Resultater", "Detaljer",
  "Håndverk", "Stil & Kvalitet",
];

export default function Gallery() {
  const { theme } = config;
  const images = config.images.gallery;

  return (
    <section
      id="galleri"
      className="py-32 px-6"
      style={{ backgroundColor: theme.primaryColor }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p
            className="font-[family-name:var(--font-inter)] text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: theme.accentColor }}
          >
            Portefølje
          </p>
          <h2
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-semibold mb-6"
            style={{ color: theme.textColor }}
          >
            Vårt Arbeid
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20" style={{ backgroundColor: `${theme.accentColor}44` }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.accentColor }} />
            <div className="h-px w-20" style={{ backgroundColor: `${theme.accentColor}44` }} />
          </div>
          <p
            className="font-[family-name:var(--font-inter)] text-sm mt-6 max-w-lg mx-auto font-light"
            style={{ color: `${theme.textColor}40` }}
          >
            Hvert oppdrag utføres med stolthet og lidenskap for håndverket.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.slice(0, 6).map((src, i) => {
            const url = imgUrl(src);
            const isWide = i === 3;
            return (
              <div
                key={i}
                className={`relative group overflow-hidden transition-all duration-500 ${
                  isWide ? "md:col-span-2 aspect-[2/1]" : "aspect-square"
                }`}
                style={{ border: `1px solid ${theme.textColor}0d` }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = `${theme.accentColor}44`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = `${theme.textColor}0d`)
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
                    style={{ backgroundColor: `${theme.textColor}05` }}
                  >
                    <span
                      className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase"
                      style={{ color: `${theme.accentColor}40` }}
                    >
                      {LABELS[i]}
                    </span>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500" />

                {/* Top gold line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to right, transparent, ${theme.accentColor}, transparent)` }}
                />

                {/* Sliding label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <p
                    className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-center"
                    style={{ color: theme.accentColor }}
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

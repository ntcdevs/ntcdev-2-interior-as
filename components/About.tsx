import config from "@/config.json";

function imgUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const base = process.env.NEXT_PUBLIC_STORAGE_URL ?? "";
  if (!base) return "";
  return `${base}/${path}`;
}

export default function About() {
  const { theme, business, about, images } = config;
  const aboutImg = imgUrl(images.about ?? images.gallery[0]);

  return (
    <section
      id="om-oss"
      className="py-32 px-6 relative"
      style={{ backgroundColor: `${theme.primaryColor}` }}
    >
      {/* Accent line left */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px opacity-10"
        style={{ background: `linear-gradient(to bottom, transparent, ${theme.accentColor}, transparent)` }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div
              className="absolute -inset-4 opacity-20 blur-2xl"
              style={{ backgroundColor: theme.accentColor }}
            />
            <div
              className="relative aspect-[4/5] overflow-hidden"
              style={{ border: `1px solid ${theme.accentColor}22` }}
            >
              {aboutImg ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={aboutImg}
                  alt={business.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ backgroundColor: `${theme.textColor}05` }}
                >
                  <span
                    className="font-[family-name:var(--font-playfair)] text-6xl font-semibold opacity-20"
                    style={{ color: theme.accentColor }}
                  >
                    {business.name.charAt(0)}
                  </span>
                </div>
              )}
              {/* Gold corner accent */}
              <div
                className="absolute bottom-0 right-0 w-16 h-16"
                style={{ background: `linear-gradient(135deg, transparent 50%, ${theme.accentColor}33 50%)` }}
              />
            </div>

            {/* Floating stat */}
            <div
              className="absolute -bottom-6 -right-6 p-6"
              style={{ backgroundColor: theme.accentColor }}
            >
              <p
                className="font-[family-name:var(--font-playfair)] text-4xl font-bold"
                style={{ color: theme.primaryColor }}
              >
                {about.stat1.value}
              </p>
              <p
                className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase mt-1"
                style={{ color: `${theme.primaryColor}cc` }}
              >
                {about.stat1.label}
              </p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p
              className="font-[family-name:var(--font-inter)] text-xs tracking-[0.4em] uppercase mb-4"
              style={{ color: theme.accentColor }}
            >
              Om Oss
            </p>
            <h2
              className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-semibold mb-6"
              style={{ color: theme.textColor }}
            >
              {about.heading}
            </h2>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16" style={{ backgroundColor: `${theme.accentColor}66` }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.accentColor }} />
            </div>

            <p
              className="font-[family-name:var(--font-inter)] text-lg leading-relaxed font-light mb-10"
              style={{ color: `${theme.textColor}80` }}
            >
              {about.body}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-6">
              {[about.stat2, about.stat3].map((stat, i) => (
                <div
                  key={i}
                  className="p-6"
                  style={{ border: `1px solid ${theme.textColor}0d`, backgroundColor: `${theme.textColor}04` }}
                >
                  <p
                    className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-1"
                    style={{ color: theme.accentColor }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase"
                    style={{ color: `${theme.textColor}50` }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

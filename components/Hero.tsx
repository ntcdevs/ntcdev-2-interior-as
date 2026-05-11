import config from "@/config.json";

function imgUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const base = process.env.NEXT_PUBLIC_STORAGE_URL ?? "";
  if (!base) return `https://placehold.co/1400x900/2a2a2a/555555?text=Hero+Image`;
  return `${base}/${path}`;
}

export default function Hero() {
  const { business, theme, hero } = config;

  return (
    <section
      style={{ backgroundColor: theme.primaryColor }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${imgUrl(config.images.hero)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: theme.primaryColor, opacity: 0.75 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-6"
            style={{ color: theme.accentColor }}
          >
            {business.city} &middot; {business.name}
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            {hero.headline}
          </h1>

          <p className="text-xl leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
            {hero.subheadline}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="inline-block px-8 py-4 font-semibold rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: theme.accentColor, color: theme.primaryColor }}
            >
              {hero.ctaText}
            </a>
            <a
              href="#tjenester"
              className="inline-block px-8 py-4 font-semibold rounded-lg border transition-opacity hover:opacity-80"
              style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}
            >
              Se tjenester
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: `linear-gradient(to bottom, transparent, ${theme.primaryColor}22)`,
        }}
      />
    </section>
  );
}

import config from "@/config.json";

export default function Footer() {
  const { business, theme } = config;
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 border-t"
      style={{ backgroundColor: theme.primaryColor, borderColor: `${theme.textColor}0d` }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <span
            className="font-[family-name:var(--font-playfair)] text-2xl font-semibold tracking-widest uppercase"
            style={{ color: theme.textColor }}
          >
            {business.name}
          </span>
          <nav className="flex items-center gap-8">
            {["#tjenester", "#om-oss", "#galleri", "#kontakt"].map((href, i) => (
              <a
                key={href}
                href={href}
                className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase transition-colors duration-300"
                style={{ color: `${theme.textColor}40` }}
                onMouseEnter={(e) => (e.currentTarget.style.color = theme.accentColor)}
                onMouseLeave={(e) => (e.currentTarget.style.color = `${theme.textColor}40`)}
              >
                {["Tjenester", "Om Oss", "Galleri", "Kontakt"][i]}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-8" style={{ backgroundColor: `${theme.textColor}0d` }} />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="font-[family-name:var(--font-inter)] text-xs"
            style={{ color: `${theme.textColor}30` }}
          >
            © {year} {business.name} · {business.city}
          </p>
          <p
            className="font-[family-name:var(--font-inter)] text-xs"
            style={{ color: `${theme.textColor}20` }}
          >
            Nettside laget av{" "}
            <span style={{ color: theme.accentColor }}>NTCDEV</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

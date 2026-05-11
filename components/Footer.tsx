import config from "@/config.json";

export default function Footer() {
  const { business, theme } = config;
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-8 border-t"
      style={{
        backgroundColor: theme.primaryColor,
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-semibold" style={{ color: theme.accentColor }}>
          {business.name}
        </p>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
          © {year} {business.name} · {business.city}
        </p>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
          Nettside laget av NTCDEV
        </p>
      </div>
    </footer>
  );
}

import config from "@/config.json";

export default function TrustBar() {
  const { theme, trustBar } = config;
  const { accentColor, primaryColor, textColor, mode } = theme;
  const isLight = mode === "light";
  const bg = isLight ? accentColor : `${textColor}08`;
  const border = isLight ? "transparent" : `${textColor}0d`;
  const valColor = isLight ? (primaryColor === "#0c0c0c" ? "#0c0c0c" : "#ffffff") : textColor;
  const labelColor = isLight ? `${valColor}bb` : `${textColor}55`;

  return (
    <section style={{ backgroundColor: bg, borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustBar.items.map((item, i) => (
            <div key={i} className="text-center">
              <p
                className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-1"
                style={{ color: isLight ? valColor : accentColor }}
              >
                {item.value}
              </p>
              <p className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase" style={{ color: labelColor }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

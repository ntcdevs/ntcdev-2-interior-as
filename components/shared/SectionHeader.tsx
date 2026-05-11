import config from "@/config.json";

interface Props {
  eyebrow: string;
  heading: string;
  subheading?: string;
  align?: "center" | "left";
}

export default function SectionHeader({ eyebrow, heading, subheading, align = "center" }: Props) {
  const { accentColor, textColor } = config.theme;
  const centered = align === "center";

  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <p
        className="font-[family-name:var(--font-inter)] text-xs tracking-[0.4em] uppercase mb-4"
        style={{ color: accentColor }}
      >
        {eyebrow}
      </p>
      <h2
        className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
        style={{ color: textColor }}
      >
        {heading}
      </h2>
      <div className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}>
        <div className="h-px w-20" style={{ backgroundColor: `${accentColor}44` }} />
        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor }} />
        {centered && <div className="h-px w-20" style={{ backgroundColor: `${accentColor}44` }} />}
      </div>
      {subheading && (
        <p
          className="font-[family-name:var(--font-inter)] text-base mt-6 max-w-xl font-light leading-relaxed"
          style={{
            color: `${textColor}55`,
            marginLeft: centered ? "auto" : undefined,
            marginRight: centered ? "auto" : undefined,
          }}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}

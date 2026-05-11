import { Phone, Mail, MapPin } from "lucide-react";
import config from "@/config.json";

export default function Contact() {
  const { theme, business } = config;

  const items = [
    business.phone && {
      icon: Phone,
      label: "Telefon",
      value: business.phone,
      href: `tel:${business.phone}`,
    },
    business.email && {
      icon: Mail,
      label: "E-post",
      value: business.email,
      href: `mailto:${business.email}`,
    },
    ("address" in business && business.address) && {
      icon: MapPin,
      label: "Adresse",
      value: business.address as string,
      href: undefined,
    },
  ].filter(Boolean) as { icon: typeof Phone; label: string; value: string; href?: string }[];

  return (
    <section
      id="kontakt"
      className="py-32 px-6 relative"
      style={{ backgroundColor: theme.primaryColor }}
    >
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <p
              className="font-[family-name:var(--font-inter)] text-xs tracking-[0.4em] uppercase mb-4"
              style={{ color: theme.accentColor }}
            >
              Ta Kontakt
            </p>
            <h2
              className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-semibold mb-6"
              style={{ color: theme.textColor }}
            >
              Kontakt Oss
            </h2>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16" style={{ backgroundColor: `${theme.accentColor}66` }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.accentColor }} />
            </div>
            <p
              className="font-[family-name:var(--font-inter)] text-lg leading-relaxed font-light"
              style={{ color: `${theme.textColor}66` }}
            >
              Vi svarer raskt og hjelper deg gjerne. Ta kontakt for time eller spørsmål.
            </p>
          </div>

          {/* Right — contact cards */}
          <div className="space-y-4">
            {items.map((item, i) => {
              const Icon = item.icon;
              const Wrapper = item.href ? "a" : "div";
              return (
                <Wrapper
                  key={i}
                  {...(item.href ? { href: item.href } : {})}
                  className="flex items-center gap-6 p-6 group transition-all duration-300"
                  style={{ border: `1px solid ${theme.textColor}0d`, backgroundColor: `${theme.textColor}04` }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${theme.accentColor}44`;
                    (e.currentTarget as HTMLElement).style.backgroundColor = `${theme.textColor}08`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${theme.textColor}0d`;
                    (e.currentTarget as HTMLElement).style.backgroundColor = `${theme.textColor}04`;
                  }}
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: theme.accentColor }}
                  >
                    <Icon size={20} style={{ color: theme.primaryColor }} />
                  </div>
                  <div>
                    <p
                      className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase mb-1"
                      style={{ color: `${theme.textColor}40` }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="font-[family-name:var(--font-inter)] text-lg font-medium transition-colors duration-300"
                      style={{ color: theme.textColor }}
                    >
                      {item.value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

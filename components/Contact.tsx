"use client";
import { Phone, Mail, MapPin } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import config from "@/config.json";

export default function Contact() {
  const { theme, business, contact } = config;
  const { accentColor, primaryColor, textColor, mode } = theme;
  const isLight = mode === "light";
  const bg = isLight ? "#ffffff" : primaryColor;
  const cardBg = isLight ? "#f8fafc" : `${textColor}04`;
  const cardBorder = isLight ? "#e2e8f0" : `${textColor}0d`;
  const valueColor = isLight ? "#0f172a" : textColor;
  const labelColor = isLight ? "#94a3b8" : `${textColor}40`;

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
      style={{ backgroundColor: bg }}
    >
      {!isLight && (
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      )}

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <SectionHeader
              eyebrow={contact.eyebrow}
              heading={contact.heading}
              subheading={contact.subheading}
              align="left"
            />
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
                  style={{ border: `1px solid ${cardBorder}`, backgroundColor: cardBg }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${accentColor}44`;
                    (e.currentTarget as HTMLElement).style.backgroundColor = isLight ? "#f1f5f9" : `${textColor}08`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = cardBorder;
                    (e.currentTarget as HTMLElement).style.backgroundColor = cardBg;
                  }}
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: accentColor }}
                  >
                    <Icon size={20} style={{ color: isLight ? "#ffffff" : primaryColor }} />
                  </div>
                  <div>
                    <p
                      className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase mb-1"
                      style={{ color: labelColor }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="font-[family-name:var(--font-inter)] text-lg font-medium transition-colors duration-300"
                      style={{ color: valueColor }}
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

import config from "@/config.json";

export default function Services() {
  const { theme, services } = config;

  return (
    <section id="tjenester" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: theme.accentColor }}
          >
            Hva vi tilbyr
          </p>
          <h2
            className="text-4xl font-bold"
            style={{ color: theme.primaryColor }}
          >
            Våre tjenester
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold mb-6"
                style={{ backgroundColor: theme.accentColor, color: theme.primaryColor }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: theme.primaryColor }}
              >
                {service.name}
              </h3>
              <p className="text-gray-500 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

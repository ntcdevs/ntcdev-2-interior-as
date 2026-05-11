import config from "@/config.json";

export default function About() {
  const { business, theme } = config;

  return (
    <section id="om-oss" className="py-24" style={{ backgroundColor: "#f9fafb" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: theme.accentColor }}
            >
              Om oss
            </p>
            <h2
              className="text-4xl font-bold mb-6"
              style={{ color: theme.primaryColor }}
            >
              {business.name}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {business.description}
            </p>
            <p className="text-gray-500">
              Lokalisert i{" "}
              <span className="font-semibold" style={{ color: theme.primaryColor }}>
                {business.city}
              </span>
            </p>
          </div>

          {/* Accent block */}
          <div className="relative">
            <div
              className="w-full h-64 rounded-2xl"
              style={{ backgroundColor: theme.primaryColor, opacity: 0.08 }}
            />
            <div
              className="absolute inset-6 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: theme.accentColor, opacity: 0.15 }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p
                  className="text-6xl font-bold"
                  style={{ color: theme.primaryColor }}
                >
                  {business.tagline.split(" ").slice(-1)[0]}
                </p>
                <p className="text-gray-500 mt-2 text-sm uppercase tracking-widest">
                  {business.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

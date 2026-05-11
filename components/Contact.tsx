import config from "@/config.json";

export default function Contact() {
  const { business, theme } = config;

  return (
    <section
      id="kontakt"
      className="py-24"
      style={{ backgroundColor: theme.primaryColor }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Heading */}
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: theme.accentColor }}
            >
              Ta kontakt
            </p>
            <h2 className="text-4xl font-bold text-white mb-4">
              Kontakt oss
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)" }} className="text-lg">
              Vi svarer raskt og hjelper deg gjerne.
            </p>
          </div>

          {/* Contact details */}
          <div className="space-y-6">
            {business.phone && (
              <a
                href={`tel:${business.phone}`}
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: theme.accentColor }}
                >
                  <svg
                    className="w-5 h-5"
                    style={{ color: theme.primaryColor }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                    Telefon
                  </p>
                  <p className="text-white text-lg font-semibold group-hover:opacity-80 transition-opacity">
                    {business.phone}
                  </p>
                </div>
              </a>
            )}

            {business.email && (
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: theme.accentColor }}
                >
                  <svg
                    className="w-5 h-5"
                    style={{ color: theme.primaryColor }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                    E-post
                  </p>
                  <p className="text-white text-lg font-semibold group-hover:opacity-80 transition-opacity">
                    {business.email}
                  </p>
                </div>
              </a>
            )}

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: theme.accentColor }}
              >
                <svg
                  className="w-5 h-5"
                  style={{ color: theme.primaryColor }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                  By
                </p>
                <p className="text-white text-lg font-semibold">{business.city}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import config from "@/config.json";

function imgUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const base = process.env.NEXT_PUBLIC_STORAGE_URL ?? "";
  if (!base) return `https://placehold.co/600x600/e5e7eb/9ca3af?text=Bilde`;
  return `${base}/${path}`;
}

export default function Gallery() {
  const { theme } = config;
  const images = config.images.gallery;

  return (
    <section id="galleri" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: theme.accentColor }}
          >
            Bilder
          </p>
          <h2
            className="text-4xl font-bold"
            style={{ color: theme.primaryColor }}
          >
            Galleri
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl overflow-hidden bg-gray-100"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgUrl(src)}
                alt={`Galleri bilde ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

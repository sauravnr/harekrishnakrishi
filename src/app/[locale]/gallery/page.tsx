import { useTranslations } from "next-intl";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ne" }];
}

export default function GalleryPage() {
  const t = useTranslations("gallery");
  const sections = t.raw("sections" as any);

  const placeholders = ["🐄", "🥛", "👨‍🌾", "🌾", "📸", "🎬"];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          {t("title")}
        </h1>
        <p className="text-lg text-gray-600">{t("subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(sections as string[]).map((section, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            {/* Image Placeholder - Replace with real images */}
            <div className="h-48 bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center text-8xl">
              {placeholders[index % placeholders.length]}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-green-700">{section}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Coming soon with real farm photos
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-green-50 p-8 rounded-lg text-center border-l-4 border-green-600">
        <p className="text-gray-700 mb-4">
          📸 Have photos to share? Contact us to feature your farm images!
        </p>
        <a
          href="mailto:contact@example.com"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold"
        >
          Send Photos
        </a>
      </div>
    </div>
  );
}

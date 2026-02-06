import { getTranslations } from "next-intl/server";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ne" }];
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "gallery" });
  const sections = t.raw("sections" as any);

  const placeholders = ["🐄", "🥛", "👨‍🌾", "🌾", "📸", "🎬"];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
          {t("title")}
        </h1>
        <p className="text-lg text-gray-900">{t("subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(sections as string[]).map((section, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            {/* Image Placeholder - Replace with real images */}
            <div className="h-48 bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center text-8xl">
              {placeholders[index % placeholders.length]}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-green-800">{section}</h3>
              <p className="text-sm text-gray-800 mt-2">
                {t("comingSoon")}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-amber-50 p-8 rounded-lg text-center border-l-4 border-green-600">
        <p className="text-gray-700 mb-4">{t("ctaText")}</p>
        <a
          href="mailto:harekrishnakrishi@gmail.com"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold"
        >
          {t("sendPhotos")}
        </a>
      </div>
    </div>
  );
}

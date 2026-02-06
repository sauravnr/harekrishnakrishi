import { useTranslations } from "next-intl";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ne" }];
}

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-12 text-center">
        {t("title")}
      </h1>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-[#fffaf2] p-8 rounded-lg shadow-lg border-l-4 border-green-700">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            {t("storyTitle")}
          </h2>
          <p className="text-gray-900 whitespace-pre-line leading-relaxed">
            {t("story")}
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-amber-50 p-8 rounded-lg border-l-4 border-green-700">
            <h2 className="text-2xl font-bold text-green-900 mb-3">
              {t("missionTitle")}
            </h2>
            <p className="text-gray-900">{t("mission")}</p>
          </div>

          <div className="bg-amber-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              {t("valuesTitle")}
            </h2>
            <ul className="space-y-2">
              {t.raw("values" as any).map((value: string, i: number) => (
                <li key={i} className="flex items-center text-gray-900">
                  <span className="text-green-700 font-bold mr-3">✓</span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

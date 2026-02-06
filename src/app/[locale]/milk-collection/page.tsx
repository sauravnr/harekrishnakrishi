import { getTranslations } from "next-intl/server";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ne" }];
}

export default async function MilkCollectionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "milkCollection" });
  const process = t.raw("process" as any);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-12 text-center">
        {t("title")}
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Collection */}
        <div className="bg-[#fffaf2] p-8 rounded-lg shadow-lg border-l-4 border-green-600">
          <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
            <span className="text-3xl mr-3">🥛</span>
            {t("collectionTitle")}
          </h2>
          <p className="text-gray-900 leading-relaxed">
            {t("collectionDescription")}
          </p>
        </div>

        {/* Credit */}
        <div className="bg-[#fffaf2] p-8 rounded-lg shadow-lg border-l-4 border-amber-600">
          <h2 className="text-2xl font-bold text-amber-700 mb-4 flex items-center">
            <span className="text-3xl mr-3">📊</span>
            {t("creditTitle")}
          </h2>
          <p className="text-gray-900 leading-relaxed">
            {t("creditDescription")}
          </p>
        </div>
      </div>

      {/* Process */}
      <div className="bg-amber-50 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
          {t("processTitle")}
        </h2>
        <div className="space-y-4">
          {(process as string[]).map((step, index) => (
            <div
              key={index}
              className="flex items-start bg-[#fffaf2] p-4 rounded-lg shadow"
            >
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold mr-4">
                {index + 1}
              </div>
              <p className="text-gray-800">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

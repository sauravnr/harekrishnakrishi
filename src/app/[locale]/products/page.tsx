import { getTranslations } from "next-intl/server";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ne" }];
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  const items = t.raw("items" as any);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
          {t("title")}
        </h1>
        <p className="text-xl text-gray-900">{t("subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {(items as Array<{ name: string; description: string }>).map(
          (product, index) => (
            <div
              key={index}
              className="bg-[#fffaf2] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-green-600 hover:border-green-700"
            >
              <h3 className="text-xl font-bold text-green-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-800">{product.description}</p>
            </div>
          ),
        )}
      </div>

      <div className="bg-amber-50 p-8 rounded-lg text-center border-l-4 border-green-600">
        <p className="text-lg text-gray-900 mb-4">{t("priceNote")}</p>
        <a
          href="tel:+9779811062363"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold"
        >
          📞 {t("callForPricing")}
        </a>
      </div>
    </div>
  );
}

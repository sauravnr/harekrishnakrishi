import { useTranslations } from "next-intl";

export default function OffersSection() {
  const t = useTranslations("home");
  const offers = t.raw("offers" as any);

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-12">
          {t("whatWeOffer")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(offers as string[]).map((offer, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-5xl mb-4">{offer.split(" ")[0]}</div>
              <p className="text-gray-900 font-semibold">
                {offer.substring(offer.indexOf(" ") + 1)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

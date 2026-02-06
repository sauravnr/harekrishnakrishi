"use client";

import { useTranslations } from "next-intl";

export default function TrustSection() {
  const t = useTranslations("home");

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="bg-gradient-to-r from-green-50 via-white to-amber-50 p-12 rounded-lg border-l-4 border-green-700 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4 flex items-center">
          <span className="text-4xl mr-4">🤝</span>
          {t("trustTitle")}
        </h2>
        <p className="text-xl text-gray-900">{t("trustDescription")}</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-5xl mb-2">💚</div>
            <p className="font-semibold text-gray-900">Honest Pricing</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-2">📋</div>
            <p className="font-semibold text-gray-900">Transparent Process</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-2">👥</div>
            <p className="font-semibold text-gray-900">Village Family</p>
          </div>
        </div>
      </div>
    </div>
  );
}

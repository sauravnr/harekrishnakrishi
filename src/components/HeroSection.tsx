"use client";

import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("home");

  return (
    <div className="relative bg-gradient-to-r from-green-800 to-green-700 text-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {t("title")}
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-green-100">
              {t("subtitle")}
            </p>
            <p className="text-lg mb-8 text-green-50">{t("description")}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+977XXXXXXXXX"
                className="bg-white text-green-800 px-6 py-3 rounded-lg font-bold hover:bg-gray-50 transition text-center"
              >
                {t("callNow")}
              </a>
              <a
                href="https://wa.me/977XXXXXXXXX?text=Hello%2C%20I%20want%20fresh%20milk%20from%20Hare%20Krishna%20Dairy%20Farm"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-950 transition text-center"
              >
                {t("whatsapp")}
              </a>
            </div>
          </div>

          {/* Hero Image/Icon */}
          <div>
            <div className="text-center">
              <div className="text-9xl md:text-[150px]">🐄</div>
              <p className="text-green-100 mt-4 text-lg">
                Happy & Healthy Cows
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

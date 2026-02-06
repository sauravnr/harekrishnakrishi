"use client";

import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-12 text-center">
        {t("title")}
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info Cards */}
        <div className="space-y-6">
          {/* Location */}
          <div className="bg-[#fffaf2] p-6 rounded-lg shadow-lg border-l-4 border-green-700">
            <h3 className="text-xl font-bold text-green-900 mb-2">
              {t("location")}
            </h3>
            <p className="text-gray-600">
              Urlabari-03, Mangalbare, Morang
            </p>
          </div>

          {/* Phone */}
          <div className="bg-[#fffaf2] p-6 rounded-lg shadow-lg border-l-4 border-amber-600">
            <h3 className="text-xl font-bold text-amber-700 mb-2">
              {t("phone")}
            </h3>
            <a
              href="tel:+9779811062363"
              className="text-amber-700 hover:text-amber-800 font-semibold"
            >
              📞 +977 9811062363
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-[#fffaf2] p-6 rounded-lg shadow-lg border-l-4 border-green-600">
            <h3 className="text-xl font-bold text-green-700 mb-2">
              {t("whatsappAvailable")}
            </h3>
            <a
              href="https://wa.me/9779827309655?text=Hello%2C%20I%20want%20to%20know%20more%20about%20Hare%20Krishna%20Dairy%20Farm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-800 font-semibold"
            >
              💬 +977 9827309655
            </a>
          </div>

          {/* Payment & Hours */}
          <div className="bg-[#fffaf2] p-6 rounded-lg shadow-lg border-l-4 border-amber-600">
            <p className="text-gray-700 mb-2">{t("payment")}</p>
            <p className="text-gray-700">{t("timing")}</p>
          </div>
        </div>

        {/* Quick Contact Form */}
        <div className="bg-[#fffaf2] p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-green-900 mb-6">
            {t("getInTouch")}
          </h2>

          <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-green-700">
            <p className="text-gray-700 mb-4">{t("messagePlaceholder")}</p>

            <div className="flex gap-3">
              <a
                href="https://wa.me/9779827309655?text=Hello%2C%20I%20want%20to%20know%20more%20about%20Hare%20Krishna%20Dairy%20Farm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition font-semibold text-center"
              >
                💬 WhatsApp
              </a>
              <a
                href="tel:+9779811062363"
                className="flex-1 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition font-semibold text-center"
              >
                📞 Call
              </a>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-600">
            <p className="text-sm text-gray-800">
              ⏰ <strong>{t("noteLabel")}</strong> {t("bestTimeNote")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

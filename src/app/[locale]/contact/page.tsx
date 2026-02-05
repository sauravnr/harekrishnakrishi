"use client";

import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-12 text-center">
        {t("title")}
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info Cards */}
        <div className="space-y-6">
          {/* Location */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-700">
            <h3 className="text-xl font-bold text-green-800 mb-2">
              {t("location")}
            </h3>
            <p className="text-gray-600">
              [Your Village, Municipality, District]
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-bold text-blue-700 mb-2">
              {t("phone")}
            </h3>
            <a
              href="tel:+977XXXXXXXXX"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              📞 +977 XX XXX XXXX
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-600">
            <h3 className="text-xl font-bold text-green-700 mb-2">
              {t("whatsappAvailable")}
            </h3>
            <a
              href="https://wa.me/977XXXXXXXXX?text=Hello%2C%20I%20want%20to%20know%20more%20about%20Hare%20Krishna%20Dairy%20Farm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-800 font-semibold"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* Payment & Hours */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-600">
            <p className="text-gray-700 mb-2">{t("payment")}</p>
            <p className="text-gray-700">{t("timing")}</p>
          </div>
        </div>

        {/* Quick Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-6">
            {t("getInTouch")}
          </h2>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-700">
            <p className="text-gray-700 mb-4">{t("messagePlaceholder")}</p>

            <div className="flex gap-3">
              <a
                href="https://wa.me/977XXXXXXXXX?text=Hello%2C%20I%20want%20to%20know%20more%20about%20Hare%20Krishna%20Dairy%20Farm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition font-semibold text-center"
              >
                💬 WhatsApp
              </a>
              <a
                href="tel:+977XXXXXXXXX"
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-center"
              >
                📞 Call
              </a>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-600">
            <p className="text-sm text-gray-600">
              ⏰ <strong>Note:</strong> Best time to reach us is early morning
              (5-8 AM) or evening (4-7 PM)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

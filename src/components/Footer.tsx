"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-16 overflow-hidden bg-gray-800 text-white">
      <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-green-500 to-amber-400" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.14),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.12),transparent_45%)]" />
      <div className="relative max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <span className="text-2xl">🐄</span>
              <span>{t("farmName")}</span>
            </h3>
            <p className="text-gray-400 text-sm">{t("registeredDairy")}</p>
            <p className="text-green-600 text-sm mt-2">"{t("tagline")}"</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-green-600 transition">
                  {tNav("home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-600 transition">
                  {tNav("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-green-600 transition"
                >
                  {tNav("products")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-600 transition"
                >
                  {tNav("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t("contactInfo")}</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>{t("locationLine")}</p>
              <p>{t("phoneLine")}</p>
              <p>{t("whatsappLine")}</p>
              <p>{t("hoursLine")}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>
              © {currentYear} {t("farmName")}. {t("allRightsReserved")}.
            </p>
            <p className="mt-4 md:mt-0">{t("builtBy")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
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
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-green-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-600 transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-green-600 transition"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-600 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>📍 [Your Village, District]</p>
              <p>📞 +977 XXXX XXXX</p>
              <p>💬 WhatsApp Available</p>
              <p>⏰ 5 AM - 8 PM Daily</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>
              © {currentYear} {t("farmName")}. {t("allRightsReserved")}.
            </p>
            <p className="mt-4 md:mt-0">
              Built with ❤️ for our village community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

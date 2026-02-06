"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function AboutPreview() {
  const t = useTranslations("home");

  return (
    <div className="bg-transparent py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Icon/Image */}
          <div className="flex justify-center">
            <div className="text-7xl">👨‍🌾</div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
              Who Are We?
            </h2>
            <p className="text-lg text-gray-900 mb-6 leading-relaxed">
              {t("aboutPreview")}
            </p>
            <Link
              href="/about"
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition font-semibold inline-block"
            >
              Learn More About Us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

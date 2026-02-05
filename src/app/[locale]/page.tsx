import { useTranslations } from "next-intl";
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import OffersSection from "@/components/OffersSection";
import TrustSection from "@/components/TrustSection";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ne" }];
}

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className="space-y-16 py-8">
      <HeroSection />
      <AboutPreview />
      <OffersSection />
      <TrustSection />
    </div>
  );
}

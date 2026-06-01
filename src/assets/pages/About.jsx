import { useLanguage } from "../../context/LanguageContext";
import { siteConfig } from "../../siteConfig";

export default function About() {
  const { t, getTranslated } = useLanguage();

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-2xl bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
        <h1 className="text-4xl font-bold text-white mb-6 font-heading">{t("aboutTitle")}</h1>
        <p className="text-zinc-300 text-lg leading-relaxed whitespace-pre-line">
          {getTranslated(siteConfig.aboutLong)}
        </p>
      </div>
    </main>
  );
}
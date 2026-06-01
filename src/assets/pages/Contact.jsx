import { siteConfig } from "../../siteConfig";
import { GitHub, LinkedIn, Itch, Envelope, ChevronRight } from "../../components/icons/icons.jsx";
import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  // Social media configuratie met iconen
  const socialLinks = [
    { name: "GitHub", url: siteConfig.socials.github, description: t("socialGithub"), icon: <GitHub className="w-8 h-8" /> },
    { name: "LinkedIn", url: siteConfig.socials.linkedin, description: t("socialLinkedin"), icon: <LinkedIn className="w-8 h-8" /> },
    { name: "Itch.io", url: siteConfig.socials.itch, description: t("socialItch"), icon: <Itch className="w-8 h-8" /> },
  ];

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 font-heading">{t("contactTitle")}</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            {t("contactSubtitle")}
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Email CTA - Left/Top */}
          <div className="lg:flex-1 bg-white/5 rounded-2xl border border-white/10 p-8 flex flex-col justify-center backdrop-blur-md">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto lg:mx-0 mb-4 rounded-full bg-emerald-500/10 
                              flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                <Envelope className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 text-center lg:text-left font-heading">
                {t("directContact")}
              </h2>
              <p className="text-zinc-400 mb-6 text-center lg:text-left">
                {t("sendEmail")}
              </p>
            </div>
            <a
              href={`mailto:${siteConfig.socials.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-emerald-400 transition-colors"
            >
              <Envelope className="w-5 h-5" />
              {siteConfig.socials.email}
            </a>
          </div>

          {/* Social Links - Right/Bottom */}
          <div className="lg:flex-1 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white mb-2 font-heading">{t("findOnline")}</h2>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-white/5 rounded-2xl border border-white/10
                           hover:border-emerald-500/50 transition-all flex items-center gap-4 backdrop-blur-md"
              >
                {/* Icon */}
                <div className="w-12 h-12 shrink-0 rounded-full bg-black/40 
                                flex items-center justify-center text-zinc-400
                                group-hover:text-emerald-400 group-hover:bg-emerald-500/10 
                                transition-colors">
                  {social.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white 
                                 group-hover:text-emerald-400 transition-colors font-heading">
                    {social.name}
                  </h3>
                  <p className="text-sm text-zinc-400">
                    {social.description}
                  </p>
                </div>

                {/* Arrow */}
                <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
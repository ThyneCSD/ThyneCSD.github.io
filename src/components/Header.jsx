import { NavLink, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="w-full">
      <nav className="glass-panel w-full rounded-2xl px-8 py-5 flex items-center justify-between">
        
        {/* Logo Area */}
        <Link to="/" className="nav-logo flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 to-blue-500 flex items-center justify-center text-black font-bold text-xl transform group-hover:rotate-12 transition-transform duration-300">
            T.
          </div>
          <span className="text-xl font-bold tracking-wider text-white">
            THYNE<span className="text-emerald-400">.</span>
          </span>
        </Link>
        
        {/* Navigation Links */}
        <ul className="hidden md:flex gap-10 items-center">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              {t("works")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              {t("about")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              {t("contact")}
            </NavLink>
          </li>
        </ul>

        {/* Language switcher & CTA Container */}
        <div className="flex items-center gap-4">
          
          {/* Language Switcher */}
          <div className="flex gap-1 bg-white/5 p-1 rounded-full border border-white/10">
            <button
              onClick={() => setLang("nl")}
              className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 transition-all ${
                lang === "nl" ? "bg-white text-black shadow-md" : "text-zinc-400 hover:text-white"
              }`}
              title="Nederlands"
            >
              <span>🇳🇱</span> <span className="hidden sm:inline">NL</span>
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 transition-all ${
                lang === "en" ? "bg-white text-black shadow-md" : "text-zinc-400 hover:text-white"
              }`}
              title="English"
            >
              <span>🇬🇧</span> <span className="hidden sm:inline">EN</span>
            </button>
          </div>

          {/* Call to Action Button */}
          <Link to="/contact" className="hidden md:block px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 tracking-wide">
            {t("letsTalk")}
          </Link>
        </div>
        
      </nav>
    </header>
  );
}

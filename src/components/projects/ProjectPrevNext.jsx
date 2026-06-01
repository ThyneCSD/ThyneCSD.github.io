import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "../icons/icons.jsx";
import { useLanguage } from "../../context/LanguageContext";

export default function ProjectPrevNext({ previous, next }) {
  const { t } = useLanguage();

  return (
    <div className="mx-4 mt-12 mb-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between">
      {previous && (
        <Link 
          to={previous.url}
          className="group flex flex-col items-start gap-1 px-6 py-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all w-full sm:w-auto"
        >
          <span className="flex items-center gap-1 text-xs font-mono text-zinc-500 uppercase tracking-widest group-hover:text-emerald-400 font-medium">
            <ChevronLeft className="w-3 h-3" /> {t("prevProject")}
          </span>
          <span className="text-lg font-semibold text-zinc-300 group-hover:text-white transition-colors">
            {previous.title}
          </span>
        </Link>
      )}

      {next && (
        <Link 
          to={next.url}
          className="group flex flex-col items-end text-right gap-1 px-6 py-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all w-full sm:w-auto"
        >
          <span className="flex items-center gap-1 text-xs font-mono text-zinc-500 uppercase tracking-widest group-hover:text-emerald-400 font-medium">
            {t("nextProject")} <ChevronRight className="w-3 h-3" />
          </span>
          <span className="text-lg font-semibold text-zinc-300 group-hover:text-white transition-colors">
            {next.title}
          </span>
        </Link>
      )}
    </div>
  );
}
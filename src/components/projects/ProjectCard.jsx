import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <Link to={`/projects/${project.id}`} className="group block py-8 w-full">
      <div className="flex flex-col sm:flex-row gap-6 items-start">

        {/* Thumbnail - Left side, smaller */}
        <div className="relative shrink-0 w-full sm:w-52 h-36 rounded-2xl overflow-hidden border border-white/5 bg-zinc-900">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out mix-blend-luminosity group-hover:mix-blend-normal"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        </div>

        {/* Text content - Right side */}
        <div className="flex-1 flex flex-col justify-between h-full gap-3">
          
          {/* Index + Tags row */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-zinc-700">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="px-2 py-0.5 text-[10px] font-mono text-zinc-500 border border-white/5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 font-heading leading-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">
            {project.tagline}
          </p>

          {/* CTA arrow */}
          <div className="flex items-center gap-2 text-xs text-zinc-600 group-hover:text-emerald-400 transition-colors duration-300 font-mono">
            <span>View Project</span>
            <ArrowUpRight size={13} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
        </div>

      </div>
    </Link>
  );
}

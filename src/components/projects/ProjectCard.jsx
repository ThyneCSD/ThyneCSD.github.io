import { Link } from "react-router-dom";
import { ChevronRight } from "../icons/icons.jsx";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`}>
      <div className="group relative overflow-hidden rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300 h-full flex flex-col">
        {/* Thumbnail */}
        <div className="relative w-full h-40 overflow-hidden bg-neutral-900">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-400 mb-4 flex-1">{project.tagline}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded bg-neutral-700 text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
            <span className="text-sm font-semibold">Bekijk Project</span>
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}

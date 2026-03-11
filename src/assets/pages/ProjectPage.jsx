import { useParams, Link } from "react-router-dom";
import projectData from "../../components/data/projectdata.json";
import ProjectHeader from "../../components/projects/ProjectHeader";
import ProjectInfo from "../../components/projects/ProjectInfo";
import ProjectGallery from "../../components/projects/ProjectGallery";
import ProjectMechanics from "../../components/projects/ProjectMechanics";
import ProjectPrevNext from "../../components/projects/ProjectPrevNext";

const isPlaceholder = (project) =>
  !project.description || project.description.toLowerCase().includes("hier komt later");

export default function ProjectPage() {
  const { projectId } = useParams();
  const project = projectData.projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-zinc-400">
        Project niet gevonden
      </div>
    );
  }

  const currentIndex = projectData.projects.findIndex(p => p.id === projectId);
  const previousIndex = currentIndex > 0 ? currentIndex - 1 : projectData.projects.length - 1;
  const nextIndex = currentIndex < projectData.projects.length - 1 ? currentIndex + 1 : 0;

  const previousProject = {
    title: projectData.projects[previousIndex].title,
    url: `/projects/${projectData.projects[previousIndex].id}`
  };
  const nextProject = {
    title: projectData.projects[nextIndex].title,
    url: `/projects/${projectData.projects[nextIndex].id}`
  };

  // ── Coming Soon Page ──────────────────────────────────────────
  if (isPlaceholder(project)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
        {/* Glowing title */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl scale-150 pointer-events-none"></div>
          <h1 className="relative text-6xl md:text-8xl font-bold text-white tracking-tight font-heading">
            {project.title}
          </h1>
        </div>

        {/* In development badge */}
        <div className="flex items-center gap-3 mb-8 px-6 py-3 rounded-full border border-emerald-500/30 bg-emerald-500/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 font-mono text-sm tracking-wider">IN DEVELOPMENT</span>
        </div>

        <p className="text-2xl text-zinc-400 mb-3 max-w-lg leading-relaxed">
          Hier komt later meer info over dit project.
        </p>
        <p className="text-sm text-zinc-600 font-mono mb-12">— stay tuned —</p>

        <Link
          to="/"
          className="px-6 py-3 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all text-sm"
        >
          ← Back to work
        </Link>
      </div>
    );
  }

  // ── Full Project Page ─────────────────────────────────────────
  return (
    <div>
      <ProjectHeader project={project} />
      <ProjectInfo project={project} />
      <ProjectMechanics project={project} />
      <ProjectGallery project={project} />
      <ProjectPrevNext previous={previousProject} next={nextProject} />
    </div>
  );
}
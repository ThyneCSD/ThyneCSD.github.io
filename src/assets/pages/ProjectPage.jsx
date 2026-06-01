import { useParams, Link } from "react-router-dom";
import projectData from "../../components/data/projectdata.json";
import ProjectHeader from "../../components/projects/ProjectHeader";
import ProjectInfo from "../../components/projects/ProjectInfo";
import ProjectGallery from "../../components/projects/ProjectGallery";
import ProjectMechanics from "../../components/projects/ProjectMechanics";
import ProjectPrevNext from "../../components/projects/ProjectPrevNext";
import { useLanguage } from "../../context/LanguageContext";

const isPlaceholder = (project, getTranslated) => {
  const desc = getTranslated(project.description);
  return !desc || desc.toLowerCase().includes("hier komt later") || desc.toLowerCase().includes("more info coming");
};

export default function ProjectPage() {
  const { projectId } = useParams();
  const { t, getTranslated } = useLanguage();
  const project = projectData.projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-zinc-400 font-heading">
        {t("projectNotFound")}
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
  if (isPlaceholder(project, getTranslated)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
        {/* Glowing title */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl scale-150 pointer-events-none"></div>
          <h1 className="relative text-6xl md:text-8xl font-bold text-white tracking-tight font-heading">
            {project.title}
          </h1>
        </div>

        <p className="text-2xl text-zinc-400 mb-3 max-w-lg leading-relaxed font-body">
          {t("comingSoonText")}
        </p>
        <p className="text-sm text-zinc-600 font-mono mb-12">{t("stayTuned")}</p>

        <Link
          to="/"
          className="px-6 py-3 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all text-sm font-mono"
        >
          {t("backToHome")}
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
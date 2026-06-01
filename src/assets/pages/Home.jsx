import { siteConfig } from "../../siteConfig";
import ProjectCard from "../../components/projects/ProjectCard";
import projectData from "../../components/data/projectdata.json";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function Home() {
  const { lang, t, getTranslated } = useLanguage();
  const projects = projectData.projects;

  const hardSkillsList = getTranslated(siteConfig.hardSkills) || [];
  const softSkillsList = getTranslated(siteConfig.softSkills) || [];

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 w-full min-h-[80vh]">

      {/* ══════════════════════════════════════
          LEFT PANEL — Identity & Mini Game
      ══════════════════════════════════════ */}
      <section className="w-full lg:w-[42%] lg:sticky lg:top-28 h-fit flex flex-col gap-8 pt-4">

        {/* Status badge */}
        <div className="flex items-center gap-2 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 font-mono tracking-wider text-xs uppercase">{t("available")}</span>
        </div>

        {/* Profile cluster */}
        <div className="flex items-center gap-5">
          <div className="relative shrink-0">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 opacity-40 blur-md"></div>
            <img
              src={siteConfig.aboutImage}
              alt={siteConfig.name}
              className="relative w-20 h-20 rounded-full object-cover border border-white/10 z-10"
            />
          </div>
          <div>
            <p className="text-xs text-zinc-500 font-mono tracking-widest uppercase mb-1">XR Developer</p>
            <h1 className="text-4xl font-bold text-white tracking-tight leading-tight font-heading">
              {siteConfig.name.split(" ")[0]}<br />
              <span className="text-zinc-400 font-light">{siteConfig.name.split(" ")[1]}</span>
            </h1>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-zinc-400 text-base leading-relaxed border-l-2 border-emerald-500/40 pl-4">
          {getTranslated(siteConfig.tagline)}
        </p>

        {/* Skills chips */}
        <div className="flex flex-wrap gap-2">
          {[...hardSkillsList, ...softSkillsList.slice(0, 2)].map((s, i) => (
            <span key={i} className="px-3 py-1 text-xs font-mono text-zinc-400 border border-white/8 rounded-full bg-white/3 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default">
              {s}
            </span>
          ))}
        </div>

        {/* Socials + CTA */}
        <div className="flex items-center gap-4 pt-2">
          <a href={`mailto:${siteConfig.socials.email}`} className="p-2.5 rounded-xl border border-white/8 hover:border-emerald-500/50 hover:text-emerald-400 text-zinc-400 transition-all" aria-label="Email">
            <Mail size={16} />
          </a>
          <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl border border-white/8 hover:border-emerald-500/50 hover:text-emerald-400 text-zinc-400 transition-all" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl border border-white/8 hover:border-emerald-500/50 hover:text-emerald-400 text-zinc-400 transition-all" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a href={siteConfig.cv} target="_blank" rel="noreferrer" className="ml-auto flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-emerald-400 transition-colors">
            {t("resume")} <ExternalLink size={14} />
          </a>
        </div>
      </section>


      {/* ══════════════════════════════════════
          RIGHT PANEL — Work Gallery
      ══════════════════════════════════════ */}
      <section className="w-full lg:w-[58%] flex flex-col pt-4 pb-20">

        {/* Section header */}
        <div className="mb-10 pb-6 border-b border-white/5">
          <p className="text-xs font-mono tracking-widest text-zinc-600 uppercase mb-2">{t("selectedWork")}</p>
          <h2 className="text-3xl font-bold text-white font-heading">{t("featuredProjects")}</h2>
        </div>

        {/* Project list */}
        <div className="flex flex-col divide-y divide-white/[0.04]">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

    </div>
  );
}
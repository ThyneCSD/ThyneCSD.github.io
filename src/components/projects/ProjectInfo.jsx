export default function ProjectInfo({ project }) {
    const paragraphs = project.description.split("\n\n");

  return (
    <div className="mb-4 pb-12 mx-4">
      {/* Grid layout: 2 columns on desktop, stacks on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Description - takes 2 columns on desktop */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-white font-heading">Over dit project</h2>

          {/* Render each paragraph separately for better spacing */}
          <div className="space-y-4 text-zinc-400">
            {paragraphs.map((text, i) => (
              <p key={i} className="leading-relaxed">
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Project details sidebar */}
        <div className="space-y-8">
          <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/5">
            <h3 className="text-lg font-bold mb-6 text-white border-b border-white/10 pb-2 font-heading uppercase tracking-wider">Details</h3>

            <ul className="space-y-4">
              <li className="flex flex-col gap-1 border-b border-white/5 pb-3">
                <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">Rol</span>
                <span className="text-zinc-300 font-medium">{project.projectRole}</span>
              </li>

              <li className="flex flex-col gap-1 border-b border-white/5 pb-3">
                <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">Tijdlijn</span>
                <span className="text-zinc-300 font-medium">{project.timeline}</span>
              </li>

              <li className="flex flex-col gap-1 pb-1">
                <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">Tags</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            </ul>

            {/* Action buttons - shown if links exist */}
            {(project.git || project.itch) && (
              <div className="mt-8 flex flex-col gap-3">
                {project.itch && (
                  <a href={project.itch} target="_blank" rel="noopener noreferrer"
                     className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl text-center transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    Play on Itch.io
                  </a>
                )}
                {project.git && (
                  <a href={project.git} target="_blank" rel="noopener noreferrer" 
                     className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-zinc-300 hover:text-white hover:border-white/30 text-center transition-all">
                    View on GitHub
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
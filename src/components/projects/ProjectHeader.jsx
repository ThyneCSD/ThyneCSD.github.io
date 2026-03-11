export default function ProjectHeader({ project }) {
  return (
    <div className="relative w-full h-[300px] md:h-[450px] mb-12 overflow-hidden rounded-3xl border border-white/10 group">
      {/* Banner Image with subtle hover zoom */}
      <img 
        src={project.thumbnail} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
      />

      {/* Modern Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/60 to-transparent" />

      {/* Title & Tagline with refined typography */}
      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-2xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-0.5 w-12 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
          <span className="text-xs font-mono text-emerald-500 uppercase tracking-[0.3em] font-bold">Featured Prototype</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-heading tracking-tight">
          {project.title}
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-300 font-medium leading-relaxed max-w-xl">
          {project.tagline}
        </p>
      </div>

      {/* Decorative pulse element */}
      <div className="absolute top-8 right-8 flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">Live Status</span>
      </div>
    </div>
  );
}
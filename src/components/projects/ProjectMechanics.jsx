import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ProjectMechanics({ project }) {
  // Skip als er geen mechanics zijn
  if (!project.mechanics || project.mechanics.length === 0) {
    return null;
  }

  return (
    <div className="mx-4 mt-12">
      <h2 className="text-xl font-bold text-white mb-6 font-heading flex items-center gap-2">
        <span className="w-8 h-[1px] bg-emerald-500/50"></span>
        Code Highlights
      </h2>

      <div className="space-y-12">
        {project.mechanics.map((m, i) => (
          <div key={i} className="flex flex-col gap-6 group">
            {/* Title + Description */}
            <div className="max-w-3xl">
              <h3 className="text-lg font-semibold mb-2 text-zinc-200 group-hover:text-emerald-400 transition-colors">{m.subtitle}</h3>
              <p className="leading-relaxed text-zinc-400">{m.description}</p>
            </div>

            {/* Code + Image Grid — only when content exists */}
            {(m.code || m.image) && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {m.code && (
                  <div className="h-[400px] overflow-auto rounded-xl border border-white/5 bg-black/40 ring-1 ring-white/10">
                    <SyntaxHighlighter
                      language="csharp"
                      style={vscDarkPlus}
                      customStyle={{
                        margin: 0,
                        padding: '1.5rem',
                        background: 'transparent',
                        fontSize: "0.9rem",
                        lineHeight: "1.5",
                      }}
                      showLineNumbers={true}>
                      {m.code}
                    </SyntaxHighlighter>
                  </div>
                )}
                {m.image && (
                  <div className="h-[400px] rounded-xl overflow-hidden border border-white/5 bg-white/5 ring-1 ring-white/10">
                    <a href={m.image} target="_blank" rel="noopener noreferrer" className="block h-full group/img">
                      <img
                        src={m.image}
                        alt={m.subtitle}
                        className="w-full h-full object-cover cursor-pointer group-hover/img:scale-105 transition-transform duration-500"
                      />
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
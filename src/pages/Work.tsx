import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import MenuOverlay from "@/components/MenuOverlay";
import BlobBackground from "@/components/BlobBackground";
import { projects } from "@/lib/projects";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const Work = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <BlobBackground />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="h-screen flex items-center px-6 md:px-12 pt-20 pb-8">
        <div className="max-w-[1600px] mx-auto w-full h-full flex flex-col gap-6">
          {/* Futuristic Header */}
          <div className="animate-fade-in flex items-center gap-4">
            <div className="relative">
              <Sparkles className="w-6 h-6 text-[hsl(var(--terminal-green))] animate-pulse" />
              <div className="absolute inset-0 blur-lg bg-[hsl(var(--terminal-green))] opacity-50" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[hsl(var(--terminal-green))] via-[hsl(var(--terminal-purple))] to-[hsl(var(--terminal-green))] bg-clip-text text-transparent">
                Featured Projects
              </h1>
              <p className="text-sm text-muted-foreground font-mono">
                &lt;/&gt; {projects.length} projects loaded
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 pb-4">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => navigate(`/project/${project.id}`)}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glow Effect */}
                  <div 
                    className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[hsl(var(--terminal-green))] via-[hsl(var(--terminal-purple))] to-[hsl(var(--terminal-green))] opacity-0 blur-sm transition-opacity duration-500 ${
                      hoveredProject === project.id ? 'opacity-70' : ''
                    }`} 
                  />
                  
                  {/* Card */}
                  <div className="relative bg-card/90 backdrop-blur-xl border border-border/50 rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:border-[hsl(var(--terminal-green))]/50 group-hover:shadow-2xl group-hover:shadow-[hsl(var(--terminal-green))]/10">
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />
                      
                      {/* Scan Line Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,0,0.03)_50%)] bg-[length:100%_4px] pointer-events-none" />
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 right-3 px-3 py-1 bg-background/80 backdrop-blur-md border border-[hsl(var(--terminal-green))]/30 rounded-full">
                        <span className="text-xs font-mono text-[hsl(var(--terminal-green))]">
                          {project.category}
                        </span>
                      </div>

                      {/* Hover Actions */}
                      <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 px-3 py-1.5 bg-background/90 backdrop-blur-md border border-border rounded-lg text-xs font-mono hover:border-[hsl(var(--terminal-green))] hover:text-[hsl(var(--terminal-green))] transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          Source
                        </a>
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-[hsl(var(--terminal-green))]/20 backdrop-blur-md border border-[hsl(var(--terminal-green))]/50 rounded-lg text-xs font-mono text-[hsl(var(--terminal-green))] hover:bg-[hsl(var(--terminal-green))]/30 transition-colors">
                          <ExternalLink className="w-3.5 h-3.5" />
                          View
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col gap-3">
                      {/* Title & Description */}
                      <div>
                        <h3 className="text-lg font-bold mb-1 group-hover:text-[hsl(var(--terminal-green))] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.features.slice(0, 4).map((feature) => (
                          <span
                            key={feature}
                            className="text-[10px] px-2 py-1 bg-secondary/50 border border-border/50 rounded-md font-mono text-muted-foreground group-hover:border-[hsl(var(--terminal-purple))]/30 group-hover:text-foreground transition-colors"
                          >
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 4 && (
                          <span className="text-[10px] px-2 py-1 text-muted-foreground font-mono">
                            +{project.features.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Bottom Bar */}
                      <div className="flex items-center justify-between pt-3 border-t border-border/30">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[hsl(var(--terminal-green))] animate-pulse" />
                          <span className="text-xs text-muted-foreground font-mono">
                            {project.subtitle}
                          </span>
                        </div>
                        <div className="text-xs text-[hsl(var(--terminal-green))] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                          ENTER →
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Work;

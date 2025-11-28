import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import MenuOverlay from "@/components/MenuOverlay";
import BlobBackground from "@/components/BlobBackground";
import { projects } from "@/lib/projects";

const Work = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <BlobBackground />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="h-screen flex items-center px-8 md:px-16 py-32">
        <div className="max-w-7xl mx-auto w-full h-full max-h-[700px] flex flex-col">
          {/* Terminal Header */}
          <div className="animate-fade-in font-mono mb-8 flex-shrink-0">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[hsl(var(--terminal-green))]">$ </span>
              <span className="text-[hsl(var(--terminal-purple))]">ls</span>
              <span className="text-foreground"> ~/projects</span>
            </div>
            <div className="text-sm text-muted-foreground pl-4">
              Found {projects.length} projects
            </div>
          </div>

          {/* Projects Grid */}
          <div className="flex-1 overflow-y-auto pr-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-[hsl(var(--terminal-green))] hover:shadow-lg hover:shadow-[hsl(var(--terminal-green))]/20 transition-all duration-300 animate-fade-in flex flex-col h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Terminal Corner */}
                  <div className="absolute top-4 left-4 flex gap-1.5 z-10">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--terminal-red))] opacity-70" />
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--terminal-yellow))] opacity-70" />
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--terminal-green))] opacity-70" />
                  </div>

                  {/* Project Image */}
                  <div className="aspect-video overflow-hidden bg-secondary relative">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Project Info */}
                  <div className="p-5 space-y-3 flex-1 flex flex-col">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-lg font-bold leading-tight group-hover:text-[hsl(var(--terminal-green))] transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs px-2 py-1 bg-secondary border border-border rounded shrink-0 whitespace-nowrap">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>

                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                      {project.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-2 py-1 bg-background border border-border rounded"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="text-xs px-2 py-1 text-muted-foreground">
                          +{project.features.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Hover Arrow */}
                    <div className="flex items-center gap-2 text-sm text-[hsl(var(--terminal-green))] font-mono opacity-0 group-hover:opacity-100 transition-opacity pt-2">
                      <span>view_project</span>
                      <span>→</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Work;

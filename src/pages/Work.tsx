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
        <div className="w-full h-full max-h-[700px] flex flex-col">
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

          {/* Projects Horizontal Scroll */}
          <div className="flex-1 overflow-x-auto overflow-y-hidden pb-4">
            <div className="flex gap-6 h-full">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-[hsl(var(--terminal-green))] transition-all duration-300 animate-fade-in flex-shrink-0 w-[350px] h-full flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="aspect-video overflow-hidden bg-secondary flex-shrink-0">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-3 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="text-left flex-1">
                        <h3 className="text-xl font-bold mb-1 group-hover:text-[hsl(var(--terminal-green))] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {project.subtitle}
                        </p>
                      </div>
                      <span className="text-xs px-2 py-1 bg-secondary border border-border rounded shrink-0">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2 text-left">
                      {project.description}
                    </p>

                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
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
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Hover Arrow */}
                    <div className="flex items-center gap-2 text-sm text-[hsl(var(--terminal-green))] opacity-0 group-hover:opacity-100 transition-opacity pt-2 mt-auto">
                      <span>View Project</span>
                      <span>→</span>
                    </div>
                  </div>

                  {/* Terminal Corner */}
                  <div className="absolute top-4 left-4 flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--terminal-red))] opacity-50" />
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--terminal-yellow))] opacity-50" />
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--terminal-green))] opacity-50" />
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

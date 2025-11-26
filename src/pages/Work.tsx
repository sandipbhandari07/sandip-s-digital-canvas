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

      <main className="min-h-screen flex items-center px-8 md:px-16 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-baseline justify-between">
              <h2 className="text-5xl md:text-6xl font-bold">WORK</h2>
              <span className="text-sm text-muted-foreground">
                {projects.length}
              </span>
            </div>

            <div className="space-y-1">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="w-full group py-6 border-b border-border hover:border-foreground transition-colors"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <h3 className="text-xl md:text-2xl group-hover:opacity-70 transition-opacity">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.subtitle}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {project.category}
                    </span>
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

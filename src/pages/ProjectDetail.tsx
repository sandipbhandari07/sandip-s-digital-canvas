import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import MenuOverlay from "@/components/MenuOverlay";
import BlobBackground from "@/components/BlobBackground";
import { projects } from "@/lib/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Button onClick={() => navigate("/work")}>Back to Work</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <BlobBackground />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="min-h-screen px-8 md:px-16 py-24">
        <Button
          variant="ghost"
          onClick={() => navigate("/work")}
          className="mb-8 hover:bg-transparent"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Work
        </Button>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 animate-fade-in">
            <div className="space-y-6">
              <div>
                <span className="text-sm text-muted-foreground">
                  {project.category}
                </span>
                <h1 className="text-5xl md:text-6xl font-bold mt-2">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground mt-4">
                  {project.subtitle}
                </p>
              </div>

              <div className="h-px bg-border" />

              <div>
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-muted-foreground">{project.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                className="mt-6"
                onClick={() => window.open(project.github, "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </div>

            <div className="relative animate-scale-in">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Kid Learning Game",
    description:
      "Educational Android game with Alphabet, Drawing, Fruits, Numbers, and Knowledge activities",
    tech: "Android (Java)",
    github: "https://github.com/sandipbhandari07",
  },
  {
    title: "GTBS - Ecommerce Android App",
    description:
      "Full-featured eCommerce app with product management, cart, purchase flow, and admin dashboards",
    tech: "Android · Firebase",
    github: "https://github.com/sandipbhandari07",
  },
  {
    title: "Library Nepal",
    description:
      "Learning platform with books, notes, solutions, and model questions for students",
    tech: "Android · Firebase",
    github: "https://github.com/sandipbhandari07",
  },
  {
    title: "Agriculture Ecommerce Website",
    description:
      "E-commerce platform for agricultural products with cart, product management, and admin dashboard",
    tech: "Laravel · PHP",
    github: "https://github.com/sandipbhandari07",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all animate-fade-in hover:scale-[1.02] group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-text-dim mb-4 leading-relaxed">
                {project.description}
              </p>
              <p className="text-sm text-primary mb-4">{project.tech}</p>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground/80 hover:text-primary"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

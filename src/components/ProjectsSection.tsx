import projectImage from "@/assets/project-visual.jpg";

const projects = [
  { name: "Kid Learning Game", category: "Android Development" },
  { name: "GTBS Ecommerce", category: "Mobile App" },
  { name: "Library Nepal", category: "Learning Platform" },
  { name: "Agriculture Ecommerce", category: "Web Development" },
  { name: "RESTful API Projects", category: "Backend" },
  { name: "Flutter Apps", category: "Mobile Development" },
  { name: "Django Projects", category: "Web Backend" },
  { name: "Laravel Sites", category: "PHP Development" },
  { name: "Firebase Integration", category: "Cloud Services" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center px-8 md:px-16 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="relative animate-fade-in">
            <img
              src={projectImage}
              alt="Project showcase"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8 animate-fade-in">
            <div className="flex items-baseline justify-between">
              <h2 className="text-5xl md:text-6xl font-bold">WORK</h2>
              <span className="text-sm text-muted-foreground">{projects.length}</span>
            </div>

            <div className="space-y-1">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group py-4 border-b border-border hover:border-foreground transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg group-hover:opacity-70 transition-opacity">
                      {project.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {project.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import { Card } from "@/components/ui/card";
import { Smartphone, Code, Globe, Database, Layout } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Android App Development",
    description: "Building native and Flutter mobile applications with modern UI/UX",
  },
  {
    icon: Code,
    title: "RESTful API Development",
    description: "Creating scalable and secure backend APIs for mobile and web apps",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack web applications using Laravel and Django frameworks",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "MySQL, Oracle, and Firebase database design and optimization",
  },
  {
    icon: Layout,
    title: "UI Implementation",
    description: "Responsive and beautiful user interfaces with modern design principles",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all animate-fade-in hover:scale-[1.05] group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

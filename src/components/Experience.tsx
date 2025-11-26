import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "BlackBoard Nepal Pvt. Ltd.",
    role: "Android Developer & RESTful API Developer",
    period: "July 2024 – Present",
    responsibilities: [
      "Flutter app development",
      "Building eCommerce admin app",
      "Integrating RESTful APIs",
      "Designing responsive UI components",
      "Writing reusable, optimized code",
      "Documentation",
    ],
  },
  {
    company: "Corpola Tech",
    role: "Django Developer Intern",
    period: "April 2023 – July 2023",
    responsibilities: [
      "Django app development",
      "Bug fixing",
      "Database schema handling with ORM",
      "Data migration and management",
      "Documentation",
      "Query optimization",
    ],
  },
  {
    company: "LAFUGO Corporation Japan",
    role: "IT Engineer",
    period: "Dec 2022 – March 2023",
    responsibilities: [
      "Worked with containers, Docker, environment setup",
      "Implemented new features under senior guidance",
      "Learned form validation and RFC standards",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Experience
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all animate-fade-in hover:scale-[1.02] group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-primary text-sm mb-1">{exp.role}</p>
                  <p className="text-text-dim text-xs">{exp.period}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm text-text-dim flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

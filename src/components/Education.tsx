import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "BCA - Bachelor of Computer Application",
    institution: "Kathmandu Bernhardt College",
    year: "2023",
    gpa: "3.18",
  },
  {
    degree: "+2 Science",
    institution: "Kathmandu Bernhardt College",
    year: "2018",
    gpa: "2.77",
  },
  {
    degree: "SLC",
    institution: "Bright Angels' School",
    year: "2016",
    gpa: "3.70",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-card/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all animate-fade-in hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-text-dim">
                    <span>{edu.year}</span>
                    <span>·</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

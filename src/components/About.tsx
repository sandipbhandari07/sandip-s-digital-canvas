import { Card } from "@/components/ui/card";
import { MapPin, Mail, Phone, Globe } from "lucide-react";

const skills = [
  "Dart",
  "Java",
  "PHP (Laravel)",
  "SQL (MySQL & Oracle)",
  "HTML5/CSS3/JS",
  "Git & GitHub",
  "Firebase",
  "Python",
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Who I Am</h3>
            <p className="text-text-dim leading-relaxed mb-6">
              Passionate for web programming, worked with front-end and back-end
              technologies. Highly motivated and energetic team player with a strong
              foundation in modern development practices.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-text-dim">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Thankot, Kathmandu</span>
              </div>
              <div className="flex items-center gap-3 text-text-dim">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:bhandarisandip882@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  bhandarisandip882@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-text-dim">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+9779860311353"
                  className="hover:text-primary transition-colors"
                >
                  +977-9860311353
                </a>
              </div>
              <div className="flex items-center gap-3 text-text-dim">
                <Globe className="w-5 h-5 text-primary" />
                <a
                  href="https://sandipbhandari07.com.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  sandipbhandari07.com.np
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary font-medium hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

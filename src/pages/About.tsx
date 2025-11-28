import { useState } from "react";
import Header from "@/components/Header";
import MenuOverlay from "@/components/MenuOverlay";
import BlobBackground from "@/components/BlobBackground";
import profileImage from "@/assets/profile-hero.jpg";
import { Github, Linkedin, Mail, MapPin, Play } from "lucide-react";

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const experiences = [
    {
      id: 1,
      title: "Android Developer",
      company: "BlackBoard Nepal Pvt. Ltd.",
      period: "July 2024 - Present",
      description: "Flutter app development, Building eCommerce admin app, Integrating RESTful APIs",
      duration: "6 months",
      type: "work"
    },
    {
      id: 2,
      title: "Django Developer Intern",
      company: "Corpola Tech",
      period: "April 2023 - July 2023",
      description: "Django app development, Bug fixing and testing, Database schema handling",
      duration: "3 months",
      type: "work"
    },
    {
      id: 3,
      title: "IT Engineer",
      company: "LAFUGO Corporation Japan",
      period: "Dec 2022 - March 2023",
      description: "Docker containers, Environment setup, Implemented new features",
      duration: "4 months",
      type: "work"
    },
    {
      id: 4,
      title: "Bachelor in Computer Application",
      company: "Kathmandu Bernhardt College",
      period: "2023",
      description: "Web programming, mobile app development, database management",
      duration: "4 years",
      type: "education"
    },
    {
      id: 5,
      title: "+2 Science",
      company: "Kathmandu Bernhardt College",
      period: "2018",
      description: "Physics, Mathematics, Computer Science",
      duration: "2 years",
      type: "education"
    },
    {
      id: 6,
      title: "SLC",
      company: "Bright Angels' School",
      period: "2016",
      description: "Secondary education with strong academic performance",
      duration: "10 years",
      type: "education"
    }
  ];

  const skills = {
    languages: ["TypeScript", "Python", "Go", "JavaScript", "Dart"],
    backend: ["Node.js", "PostgreSQL", "Redis", "Django"],
    cloud: ["AWS", "Docker", "Kubernetes"],
    frontend: ["React", "Flutter", "Tailwind CSS"]
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <BlobBackground />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="h-screen flex items-center px-8 md:px-16 py-32">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-[400px_1fr] gap-12 h-full max-h-[700px]">
          {/* Left Side - Profile */}
          <div className="flex flex-col justify-center animate-fade-in">
            <div className="space-y-6">
              {/* Profile Image */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[hsl(var(--terminal-green))] ring-4 ring-[hsl(var(--terminal-green))]/20">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and Title */}
              <div>
                <h1 className="text-4xl font-bold mb-2">John Doe</h1>
                <p className="text-xl text-muted-foreground">Senior Software Engineer</p>
              </div>

              {/* Bio */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                15+ years building scalable systems and leading engineering teams
              </p>

              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-[hsl(var(--terminal-green))] hover:border-[hsl(var(--terminal-green))] transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-[hsl(var(--terminal-green))] hover:border-[hsl(var(--terminal-green))] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Skills and Experience */}
          <div className="flex flex-col gap-8 overflow-y-auto pr-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Core Skills */}
            <div>
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Core Skills</h2>
              
              <div className="space-y-4">
                {/* Languages */}
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="text-[hsl(var(--terminal-green))]">▸</span>
                    <span className="font-medium">Languages</span>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-4">
                    {skills.languages.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-secondary border border-border rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="text-[hsl(var(--terminal-green))]">▸</span>
                    <span className="font-medium">Backend</span>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-4">
                    {skills.backend.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-secondary border border-border rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cloud */}
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="text-[hsl(var(--terminal-green))]">▸</span>
                    <span className="font-medium">Cloud</span>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-4">
                    {skills.cloud.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-secondary border border-border rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Playlist */}
            <div>
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">Experience</h2>
              
              <div className="space-y-1">
                {experiences.map((exp, index) => (
                  <div 
                    key={exp.id}
                    className="group flex items-center gap-4 p-3 rounded hover:bg-secondary/50 transition-colors cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Track Number */}
                    <div className="w-8 text-right text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {exp.id}
                    </div>

                    {/* Play Button */}
                    <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-4 h-4 fill-current" />
                    </div>

                    {/* Experience Info */}
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate group-hover:text-[hsl(var(--terminal-green))] transition-colors">
                        {exp.title}
                      </div>
                      <div className="text-sm text-muted-foreground truncate">
                        {exp.company} • {exp.description}
                      </div>
                    </div>

                    {/* Period */}
                    <div className="text-sm text-muted-foreground hidden lg:block">
                      {exp.period}
                    </div>

                    {/* Duration */}
                    <div className="text-sm text-muted-foreground w-20 text-right">
                      {exp.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

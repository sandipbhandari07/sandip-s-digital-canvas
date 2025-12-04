import { useState } from "react";
import Header from "@/components/Header";
import MenuOverlay from "@/components/MenuOverlay";
import BlobBackground from "@/components/BlobBackground";
import { Briefcase, GraduationCap, Calendar, MapPin, Sparkles } from "lucide-react";

const Timeline = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const timelineData = [
    {
      id: 1,
      type: "work",
      title: "Android Developer",
      company: "BlackBoard Nepal Pvt. Ltd.",
      period: "July 2024 - Present",
      description: ["Flutter app development", "Building eCommerce admin app", "Integrating RESTful APIs", "Designing responsive UI components"],
      skills: ["Flutter", "REST API", "UI/UX"],
    },
    {
      id: 2,
      type: "education",
      title: "Bachelor in Computer Application",
      company: "Kathmandu Bernhardt College",
      period: "2023",
      gpa: "3.18",
      description: ["Web programming", "Mobile app development", "Database management"],
      skills: ["Programming", "Database", "Web Dev"],
    },
    {
      id: 3,
      type: "work",
      title: "Django Developer Intern",
      company: "Corpola Tech",
      period: "April 2023 - July 2023",
      description: ["Django app development", "Bug fixing and testing", "Database schema handling with ORM"],
      skills: ["Django", "Python", "PostgreSQL"],
    },
    {
      id: 4,
      type: "work",
      title: "IT Engineer",
      company: "LAFUGO Corporation Japan",
      period: "Dec 2022 - March 2023",
      description: ["Docker containers", "Environment setup", "Feature implementation"],
      skills: ["Docker", "DevOps"],
    },
    {
      id: 5,
      type: "education",
      title: "+2 Science",
      company: "Kathmandu Bernhardt College",
      period: "2018",
      gpa: "2.77",
      description: ["Physics", "Mathematics", "Computer Science"],
      skills: ["Science", "Math"],
    },
    {
      id: 6,
      type: "education",
      title: "SLC",
      company: "Bright Angels' School",
      period: "2016",
      gpa: "3.70",
      description: ["Strong academic foundation"],
      skills: ["Academics"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <BlobBackground />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="h-screen flex items-center px-6 md:px-12 pt-20 pb-8">
        <div className="max-w-[1600px] mx-auto w-full h-full flex flex-col">
          {/* Header */}
          <div className="animate-fade-in flex items-center gap-4 mb-6 flex-shrink-0">
            <div className="relative">
              <Sparkles className="w-6 h-6 text-[hsl(var(--terminal-green))] animate-pulse" />
              <div className="absolute inset-0 blur-lg bg-[hsl(var(--terminal-green))] opacity-50" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[hsl(var(--terminal-green))] via-[hsl(var(--terminal-purple))] to-[hsl(var(--terminal-green))] bg-clip-text text-transparent">
                My Journey
              </h1>
              <p className="text-sm text-muted-foreground font-mono">Experience & Education</p>
            </div>
          </div>

          {/* Horizontal Timeline */}
          <div className="flex-1 overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex gap-5 h-full pb-4 min-w-max">
              {timelineData.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative w-[300px] flex-shrink-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Glow Effect */}
                  <div 
                    className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r ${
                      item.type === "work" 
                        ? "from-[hsl(var(--terminal-blue))] to-[hsl(var(--terminal-green))]" 
                        : "from-[hsl(var(--terminal-purple))] to-[hsl(var(--terminal-green))]"
                    } opacity-0 blur-sm transition-opacity duration-500 ${
                      hoveredItem === item.id ? 'opacity-60' : ''
                    }`} 
                  />

                  {/* Card */}
                  <div className="relative h-full bg-card/90 backdrop-blur-xl border border-border/50 rounded-xl overflow-hidden hover:border-[hsl(var(--terminal-green))]/50 transition-all duration-300 flex flex-col">
                    {/* Type Header */}
                    <div className={`px-4 py-3 border-b border-border/30 flex items-center gap-3 ${
                      item.type === "work" 
                        ? "bg-[hsl(var(--terminal-blue))]/10" 
                        : "bg-[hsl(var(--terminal-purple))]/10"
                    }`}>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        item.type === "work" 
                          ? "bg-[hsl(var(--terminal-blue))]/20 text-[hsl(var(--terminal-blue))]" 
                          : "bg-[hsl(var(--terminal-purple))]/20 text-[hsl(var(--terminal-purple))]"
                      }`}>
                        {item.type === "work" ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                      </div>
                      <span className={`text-xs font-mono uppercase tracking-wider ${
                        item.type === "work" ? "text-[hsl(var(--terminal-blue))]" : "text-[hsl(var(--terminal-purple))]"
                      }`}>
                        {item.type}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col gap-3">
                      <div>
                        <h3 className="text-base font-bold group-hover:text-[hsl(var(--terminal-green))] transition-colors">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span className="text-xs">{item.company}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span className="text-xs font-mono">{item.period}</span>
                          {item.gpa && (
                            <span className="text-xs px-2 py-0.5 bg-[hsl(var(--terminal-green))]/10 border border-[hsl(var(--terminal-green))]/30 rounded-full text-[hsl(var(--terminal-green))]">
                              GPA: {item.gpa}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-1.5 flex-1">
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="text-[hsl(var(--terminal-green))] mt-0.5">▸</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/30">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] px-2 py-1 bg-secondary/50 border border-border/50 rounded-md font-mono hover:border-[hsl(var(--terminal-green))]/50 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="h-1 bg-gradient-to-r from-transparent via-[hsl(var(--terminal-green))]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Connection Line */}
                  {index < timelineData.length - 1 && (
                    <div className="absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-border to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Hint */}
          <div className="flex justify-center mt-4 flex-shrink-0">
            <span className="text-xs text-muted-foreground font-mono animate-pulse">
              ← Scroll horizontally →
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Timeline;

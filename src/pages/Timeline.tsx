import { useState } from "react";
import Header from "@/components/Header";
import MenuOverlay from "@/components/MenuOverlay";
import BlobBackground from "@/components/BlobBackground";

const Timeline = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <BlobBackground />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="min-h-screen px-8 md:px-16 py-32">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 animate-fade-in">Timeline</h2>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[hsl(var(--terminal-green))]" />
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* BlackBoard Nepal */}
              <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="md:text-right md:pr-8">
                  <div className="inline-block px-3 py-1 bg-[hsl(var(--terminal-blue))] text-xs rounded-full mb-2">
                    Work Experience
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Android Developer</h3>
                  <p className="text-lg text-muted-foreground mb-2">BlackBoard Nepal Pvt. Ltd.</p>
                  <p className="text-sm text-muted-foreground mb-4">July 2024 - Present</p>
                </div>
                <div className="md:pl-8">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Flutter app development</li>
                      <li>• Building eCommerce admin app</li>
                      <li>• Integrating RESTful APIs</li>
                      <li>• Designing responsive UI components</li>
                      <li>• Writing reusable, optimized code</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-2 py-1 bg-secondary border border-border rounded text-xs">Flutter</span>
                      <span className="px-2 py-1 bg-secondary border border-border rounded text-xs">REST API</span>
                      <span className="px-2 py-1 bg-secondary border border-border rounded text-xs">UI/UX</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 bg-[hsl(var(--terminal-green))] rounded-full -translate-x-1/2 ring-4 ring-background" />
              </div>

              {/* BCA Degree */}
              <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="md:col-start-2 md:pl-8">
                  <div className="inline-block px-3 py-1 bg-[hsl(var(--terminal-purple))] text-xs rounded-full mb-2">
                    Education
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Bachelor in Computer Application</h3>
                  <p className="text-lg text-muted-foreground mb-2">Kathmandu Bernhardt College</p>
                  <p className="text-sm text-muted-foreground mb-4">2023 • GPA: 3.18</p>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <p className="text-sm text-muted-foreground">
                      Completed BCA with focus on web programming, mobile app development, and database management.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 bg-[hsl(var(--terminal-green))] rounded-full -translate-x-1/2 ring-4 ring-background" />
              </div>

              {/* Corpola Tech */}
              <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="md:text-right md:pr-8">
                  <div className="inline-block px-3 py-1 bg-[hsl(var(--terminal-blue))] text-xs rounded-full mb-2">
                    Work Experience
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Django Developer Intern</h3>
                  <p className="text-lg text-muted-foreground mb-2">Corpola Tech</p>
                  <p className="text-sm text-muted-foreground mb-4">April 2023 - July 2023</p>
                </div>
                <div className="md:pl-8">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Django app development</li>
                      <li>• Bug fixing and testing</li>
                      <li>• Database schema handling with ORM</li>
                      <li>• Data migration and management</li>
                      <li>• Query optimization</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-2 py-1 bg-secondary border border-border rounded text-xs">Django</span>
                      <span className="px-2 py-1 bg-secondary border border-border rounded text-xs">Python</span>
                      <span className="px-2 py-1 bg-secondary border border-border rounded text-xs">PostgreSQL</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 bg-[hsl(var(--terminal-green))] rounded-full -translate-x-1/2 ring-4 ring-background" />
              </div>

              {/* LAFUGO Corporation */}
              <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="md:col-start-2 md:pl-8">
                  <div className="inline-block px-3 py-1 bg-[hsl(var(--terminal-blue))] text-xs rounded-full mb-2">
                    Work Experience
                  </div>
                  <h3 className="text-2xl font-bold mb-1">IT Engineer</h3>
                  <p className="text-lg text-muted-foreground mb-2">LAFUGO Corporation Japan</p>
                  <p className="text-sm text-muted-foreground mb-4">Dec 2022 - March 2023</p>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Worked with containers and Docker</li>
                      <li>• Environment setup and configuration</li>
                      <li>• Implemented new features</li>
                      <li>• Form validation and RFC standards</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-2 py-1 bg-secondary border border-border rounded text-xs">Docker</span>
                      <span className="px-2 py-1 bg-secondary border border-border rounded text-xs">DevOps</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 bg-[hsl(var(--terminal-green))] rounded-full -translate-x-1/2 ring-4 ring-background" />
              </div>

              {/* +2 Science */}
              <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="md:text-right md:pr-8">
                  <div className="inline-block px-3 py-1 bg-[hsl(var(--terminal-purple))] text-xs rounded-full mb-2">
                    Education
                  </div>
                  <h3 className="text-2xl font-bold mb-1">+2 Science</h3>
                  <p className="text-lg text-muted-foreground mb-2">Kathmandu Bernhardt College</p>
                  <p className="text-sm text-muted-foreground mb-4">2018 • GPA: 2.77</p>
                </div>
                <div className="md:pl-8">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <p className="text-sm text-muted-foreground">
                      Focused on science subjects including physics, math, and computer science.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 bg-[hsl(var(--terminal-green))] rounded-full -translate-x-1/2 ring-4 ring-background" />
              </div>

              {/* SLC */}
              <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="md:col-start-2 md:pl-8">
                  <div className="inline-block px-3 py-1 bg-[hsl(var(--terminal-purple))] text-xs rounded-full mb-2">
                    Education
                  </div>
                  <h3 className="text-2xl font-bold mb-1">SLC</h3>
                  <p className="text-lg text-muted-foreground mb-2">Bright Angels' School</p>
                  <p className="text-sm text-muted-foreground mb-4">2016 • GPA: 3.70</p>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <p className="text-sm text-muted-foreground">
                      Completed secondary education with strong academic performance.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 bg-[hsl(var(--terminal-green))] rounded-full -translate-x-1/2 ring-4 ring-background" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Timeline;

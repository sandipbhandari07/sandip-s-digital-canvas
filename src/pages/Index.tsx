import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import MenuOverlay from "@/components/MenuOverlay";
import BlobBackground from "@/components/BlobBackground";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <BlobBackground />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="min-h-screen flex items-center justify-center px-8 md:px-16 pt-24">
        <div className="max-w-4xl mx-auto w-full animate-fade-in">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-2xl font-mono">
            {/* Terminal Header */}
            <div className="flex gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-[hsl(var(--terminal-red))]" />
              <div className="w-3 h-3 rounded-full bg-[hsl(var(--terminal-yellow))]" />
              <div className="w-3 h-3 rounded-full bg-[hsl(var(--terminal-green))]" />
            </div>
            
            {/* Terminal Content */}
            <div className="space-y-6">
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <span className="text-[hsl(var(--terminal-green))]">$ </span>
                <span className="text-[hsl(var(--terminal-purple))]">whoami</span>
              </div>
              
              <div className="animate-fade-in pl-0" style={{ animationDelay: '0.3s' }}>
                <h1 className="text-4xl md:text-6xl font-bold mb-2">
                  Sandip Bhandari
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Android Developer · RESTful API Developer · Web Developer
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <span className="text-[hsl(var(--terminal-green))]">$ </span>
                <span className="text-[hsl(var(--terminal-purple))]">cat</span>
                <span className="text-foreground"> description.txt</span>
              </div>

              <div className="animate-fade-in pl-0 text-muted-foreground" style={{ animationDelay: '0.7s' }}>
                <p className="leading-relaxed">
                  Passionate developer working with mobile and web technologies.
                  Specializing in Android development, RESTful APIs, and building
                  modern applications with Laravel and Django.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <span className="text-[hsl(var(--terminal-green))]">$ </span>
                <span className="text-[hsl(var(--terminal-purple))]">ls</span>
                <span className="text-foreground"> skills/</span>
              </div>

              <div className="animate-fade-in flex flex-wrap gap-2 pl-0" style={{ animationDelay: '1.1s' }}>
                {['Flutter', 'Java', 'PHP', 'Python', 'Laravel', 'Django', 'Firebase'].map((skill, index) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary border border-border rounded text-sm hover:border-[hsl(var(--terminal-green))] transition-colors"
                    style={{ animationDelay: `${1.1 + index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

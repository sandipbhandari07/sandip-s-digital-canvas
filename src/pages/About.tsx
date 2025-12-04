import { useState } from "react";
import Header from "@/components/Header";
import MenuOverlay from "@/components/MenuOverlay";
import BlobBackground from "@/components/BlobBackground";
import { Github, Linkedin, Mail, MapPin, Music, Sparkles, Code2, Database, Cloud, Play } from "lucide-react";

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredPlaylist, setHoveredPlaylist] = useState<number | null>(null);

  const spotifyPlaylists = [
    { id: 1, name: "Coding Flow", description: "Deep focus music", tracks: 45, coverUrl: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=300&h=300&fit=crop" },
    { id: 2, name: "Chill Vibes", description: "Relaxing tunes", tracks: 32, coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop" },
    { id: 3, name: "Workout Energy", description: "High energy music", tracks: 28, coverUrl: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop" },
    { id: 4, name: "Late Night", description: "Midnight coding", tracks: 38, coverUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop" },
  ];

  const skills = {
    languages: ["TypeScript", "Python", "Go", "JavaScript", "Dart"],
    backend: ["Node.js", "PostgreSQL", "Redis", "Django"],
    cloud: ["AWS", "Docker", "Kubernetes"],
    frontend: ["React", "Flutter", "Tailwind CSS"]
  };

  const skillIcons = {
    languages: <Code2 className="w-4 h-4" />,
    backend: <Database className="w-4 h-4" />,
    cloud: <Cloud className="w-4 h-4" />,
    frontend: <Sparkles className="w-4 h-4" />
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <BlobBackground />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="h-screen flex items-center px-6 md:px-12 pt-20 pb-8">
        <div className="max-w-[1600px] mx-auto w-full grid md:grid-cols-[320px_1fr_280px] gap-8 h-full">
          
          {/* Left Side - Profile Card */}
          <div className="flex flex-col justify-center animate-fade-in">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[hsl(var(--terminal-green))] via-[hsl(var(--terminal-purple))] to-[hsl(var(--terminal-green))] opacity-50 blur-sm" />
              
              <div className="relative bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl p-6 space-y-5">
                {/* Profile Image */}
                <div className="relative w-24 h-24 mx-auto">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[hsl(var(--terminal-green))] to-[hsl(var(--terminal-purple))] opacity-70 blur-sm animate-pulse" />
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[hsl(var(--terminal-green))]">
                    <img alt="Sandip Bhandari" className="w-full h-full object-cover" src="/lovable-uploads/d446835f-0402-46b4-9e83-2f62ad4eb1b6.jpg" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[hsl(var(--terminal-green))] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-background rounded-full" />
                  </div>
                </div>

                {/* Name and Title */}
                <div className="text-center">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-foreground via-[hsl(var(--terminal-green))] to-foreground bg-clip-text text-transparent">
                    Sandip Bhandari
                  </h1>
                  <p className="text-sm text-[hsl(var(--terminal-purple))] font-mono mt-1">
                    Software Engineer
                  </p>
                </div>

                {/* Bio */}
                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  Building scalable systems and creating impactful digital experiences
                </p>

                {/* Status Badge */}
                <div className="flex justify-center">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-[hsl(var(--terminal-green))]/10 border border-[hsl(var(--terminal-green))]/30 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--terminal-green))] animate-pulse" />
                    <span className="text-xs font-mono text-[hsl(var(--terminal-green))]">Available for work</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 pt-2 border-t border-border/30">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-[hsl(var(--terminal-green))] transition-colors cursor-pointer">
                    <Mail className="w-4 h-4" />
                    <span className="text-xs font-mono">sandip@example.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-mono">Nepal</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 pt-2">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-[hsl(var(--terminal-green))]/20 hover:border-[hsl(var(--terminal-green))]/50 hover:text-[hsl(var(--terminal-green))] transition-all">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-center hover:bg-[hsl(var(--terminal-purple))]/20 hover:border-[hsl(var(--terminal-purple))]/50 hover:text-[hsl(var(--terminal-purple))] transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Middle - Skills */}
          <div className="flex flex-col justify-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <Sparkles className="w-5 h-5 text-[hsl(var(--terminal-green))]" />
                  <div className="absolute inset-0 blur-md bg-[hsl(var(--terminal-green))] opacity-50" />
                </div>
                <h2 className="text-xl font-bold">Tech Stack</h2>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {Object.entries(skills).map(([category, items], idx) => (
                  <div 
                    key={category}
                    className="group relative"
                  >
                    <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[hsl(var(--terminal-green))]/20 to-[hsl(var(--terminal-purple))]/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
                    <div className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:border-[hsl(var(--terminal-green))]/30 transition-all">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 rounded-lg bg-[hsl(var(--terminal-green))]/10 border border-[hsl(var(--terminal-green))]/30 flex items-center justify-center text-[hsl(var(--terminal-green))]">
                          {skillIcons[category as keyof typeof skillIcons]}
                        </div>
                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{category}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map(skill => (
                          <span 
                            key={skill} 
                            className="text-[10px] px-2 py-1 bg-secondary/50 border border-border/50 rounded-md font-mono hover:border-[hsl(var(--terminal-green))]/50 hover:text-[hsl(var(--terminal-green))] transition-colors cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Spotify Playlists */}
          <div className="flex flex-col justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[hsl(142,76%,36%)] to-[hsl(var(--terminal-purple))] opacity-30 blur-sm" />
              
              <div className="relative bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[hsl(142,76%,36%)] flex items-center justify-center">
                    <Music className="w-4 h-4 text-background" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold">My Playlists</h2>
                    <p className="text-[10px] text-muted-foreground font-mono">via Spotify</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {spotifyPlaylists.map((playlist, index) => (
                    <a 
                      key={playlist.id} 
                      href="https://open.spotify.com/user/l74zqsnogdrcza7mxoean84gk" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group/item flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-all"
                      onMouseEnter={() => setHoveredPlaylist(playlist.id)}
                      onMouseLeave={() => setHoveredPlaylist(null)}
                    >
                      <div className="relative w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
                        <img src={playlist.coverUrl} alt={playlist.name} className="w-full h-full object-cover" />
                        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity ${hoveredPlaylist === playlist.id ? 'opacity-100' : 'opacity-0'}`}>
                          <Play className="w-4 h-4 text-[hsl(142,76%,36%)] fill-current" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xs font-medium truncate group-hover/item:text-[hsl(142,76%,36%)] transition-colors">
                          {playlist.name}
                        </h3>
                        <p className="text-[10px] text-muted-foreground truncate">
                          {playlist.tracks} tracks
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <a 
                  href="https://open.spotify.com/user/l74zqsnogdrcza7mxoean84gk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block mt-3 pt-3 border-t border-border/30 text-center text-[10px] text-muted-foreground hover:text-[hsl(142,76%,36%)] transition-colors font-mono"
                >
                  View all on Spotify →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

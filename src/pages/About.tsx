import { useState } from "react";
import Header from "@/components/Header";
import MenuOverlay from "@/components/MenuOverlay";
import BlobBackground from "@/components/BlobBackground";
import profileImage from "@/assets/profile-hero.jpg";
import { Github, Linkedin, Mail, MapPin, Music } from "lucide-react";
const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Add your Spotify playlists here
  const spotifyPlaylists = [{
    id: 1,
    name: "Coding Flow",
    description: "Deep focus music for coding sessions",
    tracks: 45,
    coverUrl: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=300&h=300&fit=crop"
  }, {
    id: 2,
    name: "Chill Vibes",
    description: "Relaxing tunes for unwinding",
    tracks: 32,
    coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
  }, {
    id: 3,
    name: "Workout Energy",
    description: "High energy music to pump you up",
    tracks: 28,
    coverUrl: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop"
  }, {
    id: 4,
    name: "Late Night Coding",
    description: "Perfect for midnight programming",
    tracks: 38,
    coverUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop"
  }];
  const skills = {
    languages: ["TypeScript", "Python", "Go", "JavaScript", "Dart"],
    backend: ["Node.js", "PostgreSQL", "Redis", "Django"],
    cloud: ["AWS", "Docker", "Kubernetes"],
    frontend: ["React", "Flutter", "Tailwind CSS"]
  };
  return <div className="min-h-screen bg-background text-foreground overflow-hidden">
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
                <img alt="Profile" className="w-full h-full object-cover" src="/lovable-uploads/d446835f-0402-46b4-9e83-2f62ad4eb1b6.jpg" />
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
                  <span>Sandip Bhandari </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-[hsl(var(--terminal-green))] hover:border-[hsl(var(--terminal-green))] transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-[hsl(var(--terminal-green))] hover:border-[hsl(var(--terminal-green))] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Skills and Experience */}
          <div className="flex flex-col gap-8 overflow-y-auto pr-4 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
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
                    {skills.languages.map(skill => <span key={skill} className="px-3 py-1 bg-secondary border border-border rounded text-sm">
                        {skill}
                      </span>)}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="text-[hsl(var(--terminal-green))]">▸</span>
                    <span className="font-medium">Backend</span>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-4">
                    {skills.backend.map(skill => <span key={skill} className="px-3 py-1 bg-secondary border border-border rounded text-sm">
                        {skill}
                      </span>)}
                  </div>
                </div>

                {/* Cloud */}
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="text-[hsl(var(--terminal-green))]">▸</span>
                    <span className="font-medium">Cloud</span>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-4">
                    {skills.cloud.map(skill => <span key={skill} className="px-3 py-1 bg-secondary border border-border rounded text-sm">
                        {skill}
                      </span>)}
                  </div>
                </div>
              </div>
            </div>

            {/* Spotify Playlists */}
            <div>
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border flex items-center gap-2">
                <Music className="w-6 h-6 text-[hsl(var(--terminal-green))]" />
                My Playlists
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                {spotifyPlaylists.map((playlist, index) => <a key={playlist.id} href="https://open.spotify.com/user/l74zqsnogdrcza7mxoean84gk" target="_blank" rel="noopener noreferrer" className="group bg-card border border-border rounded-lg overflow-hidden hover:border-[hsl(var(--terminal-green))] transition-all duration-300 animate-fade-in" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    <div className="aspect-square overflow-hidden bg-secondary">
                      <img src={playlist.coverUrl} alt={playlist.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-1 group-hover:text-[hsl(var(--terminal-green))] transition-colors">
                        {playlist.name}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                        {playlist.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {playlist.tracks} tracks
                      </p>
                    </div>
                  </a>)}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>;
};
export default About;
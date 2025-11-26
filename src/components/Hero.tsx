import { Button } from "@/components/ui/button";
import { Github, Mail, Phone } from "lucide-react";
import profileImage from "@/assets/profile-hero.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-primary"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
              SANDIP BHANDARI
            </h1>
            <h2 className="text-xl md:text-2xl text-primary mb-6">
              Android Developer · RESTful API Developer · Web Developer
            </h2>
            <p className="text-lg text-text-dim mb-8 max-w-2xl">
              Passionate developer working with modern web and mobile technologies
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
              >
                View Projects
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
              >
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/sandipbhandari07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:bhandarisandip882@gmail.com"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+9779860311353"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <img
                src={profileImage}
                alt="Sandip Bhandari"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/50 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

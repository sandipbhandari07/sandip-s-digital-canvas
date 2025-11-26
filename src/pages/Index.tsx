import { useState } from "react";
import Header from "@/components/Header";
import MenuOverlay from "@/components/MenuOverlay";
import BlobBackground from "@/components/BlobBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BlobBackground />
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={scrollToSection}
      />

      <main>
        <HeroSection onNavigate={scrollToSection} />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;

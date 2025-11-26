import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Services />
      <Contact />
      
      <footer className="py-8 text-center text-text-dim border-t border-border/30">
        <p>© 2024 Sandip Bhandari. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;

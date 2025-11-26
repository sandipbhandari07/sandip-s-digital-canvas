const HeroSection = ({ onNavigate }: { onNavigate: (section: string) => void }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-4xl text-center space-y-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
          <span className="block text-muted-foreground">HEY, I'M</span>
          <span className="block" style={{ 
            WebkitTextStroke: "1px hsl(var(--foreground))",
            WebkitTextFillColor: "transparent",
          }}>
            SANDIP BHANDARI
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground">
          I'm an Android developer, RESTful API developer
          <br />& web developer
        </p>

        <div className="flex gap-6 justify-center pt-4">
          <button
            onClick={() => onNavigate("projects")}
            className="text-sm hover:opacity-70 transition-opacity"
          >
            → see my projects
          </button>
          <button
            onClick={() => onNavigate("about")}
            className="text-sm hover:opacity-70 transition-opacity"
          >
            → more about me
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

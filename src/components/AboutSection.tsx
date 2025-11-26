import profileImage from "@/assets/profile-hero.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-8 md:px-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold">ABOUT</h2>
            <div className="h-px bg-border" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              Hey, my name is Sandip Bhandari. I'm a passionate developer working with
              mobile and web technologies. I specialize in Android development, RESTful
              APIs, and building modern web applications with Laravel and Django.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm passionate about web programming, have worked with front-end and
              back-end technologies. Highly motivated and energetic team player with
              experience in Flutter, Java, PHP, Python, and various modern frameworks.
            </p>
            <button className="text-sm hover:opacity-70 transition-opacity pt-4">
              ↓ resume
            </button>
          </div>

          <div className="relative animate-scale-in">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={profileImage}
                alt="Sandip Bhandari"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

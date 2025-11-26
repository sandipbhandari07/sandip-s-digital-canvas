const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center px-8 md:px-16">
      <div className="max-w-7xl mx-auto w-full animate-fade-in">
        <h2 className="text-5xl md:text-7xl font-bold mb-12">CONTACT</h2>
        <div className="h-px bg-border mb-12" />

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-muted-foreground mb-2">MAIL</p>
            <a
              href="mailto:bhandarisandip882@gmail.com"
              className="text-lg hover:opacity-70 transition-opacity"
            >
              ↗ bhandarisandip882@gmail.com
            </a>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-4">SOCIAL MEDIAS</p>
            <div className="space-y-2">
              <a
                href="https://github.com/sandipbhandari07"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg hover:opacity-70 transition-opacity"
              >
                ↗ github
              </a>
              <a
                href="tel:+9779860311353"
                className="block text-lg hover:opacity-70 transition-opacity"
              >
                ↗ phone
              </a>
              <a
                href="https://sandipbhandari07.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg hover:opacity-70 transition-opacity"
              >
                ↗ website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

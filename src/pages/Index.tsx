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

      <main className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-4xl text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block text-muted-foreground">HEY, I'M</span>
            <span
              className="block"
              style={{
                WebkitTextStroke: "1px hsl(var(--foreground))",
                WebkitTextFillColor: "transparent",
              }}
            >
              SANDIP BHANDARI
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground">
            I'm an Android developer, RESTful API developer
            <br />& web developer
          </p>

          <div className="flex gap-6 justify-center pt-4">
            <button
              onClick={() => navigate("/work")}
              className="text-sm hover:opacity-70 transition-opacity"
            >
              → see my projects
            </button>
            <button
              onClick={() => navigate("/about")}
              className="text-sm hover:opacity-70 transition-opacity"
            >
              → more about me
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

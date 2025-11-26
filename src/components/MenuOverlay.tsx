import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: string) => void;
}

const menuItems = [
  { number: "01", label: "HOME", section: "home" },
  { number: "02", label: "WORK", section: "projects" },
  { number: "03", label: "ABOUT", section: "about" },
  { number: "04", label: "CONTACT", section: "contact" },
];

const MenuOverlay = ({ isOpen, onClose, onNavigate }: MenuOverlayProps) => {
  if (!isOpen) return null;

  const handleNavigate = (section: string) => {
    onNavigate(section);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg animate-fade-in">
      <div className="absolute top-8 right-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="hover:bg-transparent"
        >
          <X className="w-8 h-8" />
        </Button>
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <nav className="space-y-8">
          {menuItems.map((item, index) => (
            <button
              key={item.section}
              onClick={() => handleNavigate(item.section)}
              className="flex items-baseline gap-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-sm text-muted-foreground">{item.number}</span>
              <span className="text-6xl font-bold tracking-wider text-foreground group-hover:text-muted-foreground transition-colors">
                {item.label}
              </span>
            </button>
          ))}

          <div className="flex gap-6 pt-8 pl-16 text-sm">
            <a
              href="https://github.com/sandipbhandari07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ↗ github
            </a>
            <a
              href="mailto:bhandarisandip882@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ↗ email
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MenuOverlay;

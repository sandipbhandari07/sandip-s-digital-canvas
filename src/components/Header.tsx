import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onMenuOpen: () => void;
}

const Header = ({ onMenuOpen }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-8">
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="text-2xl font-light tracking-tight hover:opacity-70 transition-opacity"
        >
          SB
        </button>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuOpen}
            className="hover:bg-transparent"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

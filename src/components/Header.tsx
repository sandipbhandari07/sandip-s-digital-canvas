import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onMenuOpen: () => void;
}

const Header = ({ onMenuOpen }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-8">
      <div className="flex items-center justify-between">
        <button className="text-2xl font-light tracking-tight hover:opacity-70 transition-opacity">
          SB
        </button>

        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuOpen}
          className="hover:bg-transparent"
        >
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;


import { Button } from "@/components/ui/button";
import { Calendar, Users, Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">REDEFINE</span>
            <span className="text-lg text-purple-300">TOMORROW</span>
            <span className="text-sm text-gray-400">2025</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#speakers" className="text-white hover:text-purple-300 transition-colors">Speakers</a>
            <a href="#schedule" className="text-white hover:text-purple-300 transition-colors">Schedule</a>
            <a href="#about" className="text-white hover:text-purple-300 transition-colors">About</a>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Register Free
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

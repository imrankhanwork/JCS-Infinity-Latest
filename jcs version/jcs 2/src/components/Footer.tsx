
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Zap, Twitter, Linkedin, Globe, Mail, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-purple-400" />
              <div>
                <div className="text-xl font-bold text-white">REDEFINE</div>
                <div className="text-sm text-purple-300">TOMORROW 2025</div>
              </div>
            </div>
            <p className="text-gray-400">
              Shaping the future through AI and Web3 synergy. Join us in building smarter economies.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                <Globe className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Event Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Event Details</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Calendar className="h-5 w-5 text-purple-400" />
                <span>June 18, 2025</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <span className="w-5 h-5 flex items-center justify-center">🕐</span>
                <span>16:30 - 17:15 (GMT+7)</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <span className="w-5 h-5 flex items-center justify-center">💻</span>
                <span>Virtual Event</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-3">
              <a href="#speakers" className="block text-gray-400 hover:text-white transition-colors">Speakers</a>
              <a href="#schedule" className="block text-gray-400 hover:text-white transition-colors">Schedule</a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#register" className="block text-gray-400 hover:text-white transition-colors">Register</a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-purple-400" />
                <span>info@redefinetomorrow.com</span>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2025 Redefine Tomorrow. All rights reserved.
          </div>
          <div className="flex items-center space-x-8 text-sm">
            <span className="text-gray-400">Powered by</span>
            <div className="flex items-center space-x-4">
              <span className="text-white font-semibold">SCB 10X</span>
              <span className="text-gray-600">|</span>
              <span className="text-white font-semibold">Bloomberg</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

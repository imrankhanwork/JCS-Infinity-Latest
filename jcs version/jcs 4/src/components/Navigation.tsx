
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Bell, User, ChevronDown, Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Events', path: '/events' },
    { name: 'Blog', path: '/blog' },
  ];

  const mockUser = {
    name: "John Doe",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=40&h=40&fit=crop&crop=face"
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/20">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/0f87c9c8-e1bd-4dae-a518-dfcbde764c3d.png" 
              alt="JCS Infinity" 
              className="w-8 h-8 rounded-full"
            />
            <span className="text-lg font-bold neon-text">JCS INFINITY</span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`transition-colors hover:text-primary ${
                      isActive(item.path) ? 'text-primary font-semibold' : 'text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                {isLoggedIn ? (
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="w-5 h-5" />
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"></span>
                    </Button>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="flex items-center space-x-2">
                          <User className="w-5 h-5" />
                          <ChevronDown className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="glass bg-background/95 backdrop-blur-sm border border-primary/20">
                        <DropdownMenuItem asChild>
                          <Link to="/profile">My Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>My Courses</DropdownMenuItem>
                        <DropdownMenuItem>Post Something</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                          Log Out
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ) : (
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" asChild>
                      <Link to="/login">Log In</Link>
                    </Button>
                    <Button asChild className="neon-glow">
                      <Link to="/signup">Sign Up</Link>
                    </Button>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary/20">
            {isLoggedIn && (
              <div className="flex flex-col items-center space-y-2 mb-4 pt-4">
                <img 
                  src={mockUser.avatar} 
                  alt={mockUser.name}
                  className="w-12 h-12 rounded-full"
                />
                <span className="font-medium text-center">{mockUser.name}</span>
              </div>
            )}
            
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-2 px-3 rounded-md transition-colors ${
                    isActive(item.path) 
                      ? 'text-primary bg-primary/10 font-semibold' 
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {!isLoggedIn && (
                <div className="pt-4 space-y-2">
                  <Button variant="ghost" asChild className="w-full justify-start">
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>Log In</Link>
                  </Button>
                  <Button asChild className="w-full neon-glow">
                    <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
                  </Button>
                </div>
              )}

              {isLoggedIn && (
                <div className="pt-4 space-y-2 border-t border-primary/20">
                  <Link 
                    to="/profile" 
                    className="block py-2 px-3 rounded-md text-foreground hover:text-primary hover:bg-primary/5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    My Profile
                  </Link>
                  <button 
                    className="block w-full text-left py-2 px-3 rounded-md text-foreground hover:text-primary hover:bg-primary/5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    My Courses
                  </button>
                  <button 
                    className="block w-full text-left py-2 px-3 rounded-md text-foreground hover:text-primary hover:bg-primary/5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Post Something
                  </button>
                  <button 
                    className="block w-full text-left py-2 px-3 rounded-md text-foreground hover:text-primary hover:bg-primary/5"
                    onClick={() => {
                      setIsLoggedIn(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

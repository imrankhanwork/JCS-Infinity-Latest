
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 lg:space-y-12 max-w-4xl mx-auto">
          {/* Hero Content */}
          <div className="space-y-6 lg:space-y-8 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Explore{' '}
              <span className="text-primary neon-text">∞</span>{' '}
              Possibilities
              <br />
              <span className="text-accent">with Code</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Learn, Build, Connect — with JCS Infinity. 
              Join our community of passionate developers and unlock your coding potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center px-4">
              <Button 
                size="lg" 
                className="text-base lg:text-lg px-6 lg:px-8 py-4 lg:py-6 neon-glow hover:scale-105 transition-transform w-full sm:w-auto"
                asChild
              >
                <Link to="/signup">Join Us Today</Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base lg:text-lg px-6 lg:px-8 py-4 lg:py-6 border-primary/50 hover:bg-primary/10 w-full sm:w-auto touch-manipulation"
                asChild
              >
                <Link to="/courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

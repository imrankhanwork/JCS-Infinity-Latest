
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroGraphic from './HeroGraphic';

const UpcomingEvents = () => {
  const nextEvent = {
    title: "Web Development Bootcamp",
    date: "January 15, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Computer Lab A",
    description: "Learn the fundamentals of web development with HTML, CSS, and JavaScript.",
    spots: 25
  };

  return (
    <section className="relative -mt-32 z-20 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="glass transform hover:scale-105 transition-transform duration-300 border-2 border-primary/30 relative overflow-hidden">
            {/* Background 3D Graphic */}
            <HeroGraphic />
            
            {/* Next Event Badge */}
            <Badge className="absolute top-4 left-4 z-10 bg-accent/90 text-accent-foreground border-accent/50">
              Next Event
            </Badge>
            
            <CardHeader className="text-center relative z-10 pt-12">
              <CardTitle className="text-2xl font-bold mb-2">{nextEvent.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-center relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>{nextEvent.date}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>{nextEvent.time}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{nextEvent.location}</span>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground">{nextEvent.description}</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-primary/20">
                <span className="text-accent font-semibold">{nextEvent.spots} spots remaining</span>
                <Button size="lg" className="neon-glow px-8" asChild>
                  <Link to="/signup">Register Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;

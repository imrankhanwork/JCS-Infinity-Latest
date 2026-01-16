
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import AnimatedStars from '@/components/AnimatedStars';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const upcomingEvents = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      date: "January 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Computer Lab A",
      description: "Learn the fundamentals of web development with HTML, CSS, and JavaScript. Perfect for beginners!",
      spots: 25,
      category: "Workshop",
      difficulty: "Beginner",
      instructor: "Sarah Kim"
    },
    {
      id: 2,
      title: "Machine Learning Workshop",
      date: "January 22, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Auditorium B",
      description: "Dive into machine learning concepts with Python and scikit-learn. Build your first ML model!",
      spots: 30,
      category: "Workshop",
      difficulty: "Intermediate",
      instructor: "Alex Chen"
    },
    {
      id: 3,
      title: "Hackathon 2025",
      date: "February 5-7, 2025",
      time: "All Day",
      location: "Main Campus",
      description: "48-hour coding competition with amazing prizes. Team up and build something incredible!",
      spots: 100,
      category: "Competition",
      difficulty: "All Levels",
      instructor: "JCS Team"
    },
    {
      id: 4,
      title: "Tech Talk: Industry Insights",
      date: "February 12, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Virtual Event",
      description: "Senior engineers from Google and Microsoft share their experiences and career advice.",
      spots: 200,
      category: "Talk",
      difficulty: "All Levels",
      instructor: "Industry Experts"
    },
    {
      id: 5,
      title: "React Deep Dive",
      date: "February 19, 2025",
      time: "3:00 PM - 6:00 PM",
      location: "Computer Lab C",
      description: "Advanced React patterns, hooks, context API, and performance optimization techniques.",
      spots: 20,
      category: "Workshop",
      difficulty: "Advanced",
      instructor: "Michael Rodriguez"
    },
    {
      id: 6,
      title: "Career Fair & Networking",
      date: "February 26, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Student Center",
      description: "Meet recruiters from top tech companies and learn about internship opportunities.",
      spots: 150,
      category: "Networking",
      difficulty: "All Levels",
      instructor: "Career Services"
    }
  ];

  const handleRegister = (eventId: number) => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      // Handle registration logic
      console.log(`Registering for event ${eventId}`);
      alert('Registration successful!');
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Workshop': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Competition': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Talk': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Networking': 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      'Beginner': 'bg-green-500/20 text-green-400',
      'Intermediate': 'bg-yellow-500/20 text-yellow-400',
      'Advanced': 'bg-red-500/20 text-red-400',
      'All Levels': 'bg-blue-500/20 text-blue-400'
    };
    return colors[difficulty as keyof typeof colors] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <div className="min-h-screen">
      <AnimatedStars />
      <Navigation />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                Upcoming <span className="text-primary">Events</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join our exciting workshops, competitions, and networking events
              </p>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="glass hover:neon-glow transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex space-x-2">
                        <Badge className={getCategoryColor(event.category)}>
                          {event.category}
                        </Badge>
                        <Badge className={getDifficultyColor(event.difficulty)}>
                          {event.difficulty}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm text-accent">
                          <Users className="w-4 h-4 mr-1" />
                          {event.spots} spots
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{event.title}</CardTitle>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ExternalLink className="w-4 h-4 text-primary" />
                        <span>Instructor: {event.instructor}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-primary/20">
                      <Button 
                        onClick={() => handleRegister(event.id)}
                        className="w-full neon-glow hover:scale-105 transition-transform"
                        size="lg"
                      >
                        Register Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;

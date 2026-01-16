
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 'alex-chen',
      name: "Alex Chen",
      role: "Club President",
      bio: "Full-stack developer passionate about web technologies",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 'sarah-kim',
      name: "Sarah Kim",
      role: "Technical Lead",
      bio: "AI/ML enthusiast and competitive programmer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 'michael-rodriguez',
      name: "Michael Rodriguez",
      role: "Events Coordinator",
      bio: "Mobile app developer and UI/UX designer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 'emily-zhang',
      name: "Emily Zhang",
      role: "Community Manager",
      bio: "DevOps engineer and cloud computing specialist",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate leaders driving innovation and fostering growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Link key={index} to={`/profile/${member.id}`}>
              <Card className="glass hover:neon-glow transition-all duration-300 hover:scale-105 group cursor-pointer h-full">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="relative mb-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto border-2 border-primary/50 group-hover:border-primary transition-colors"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow min-h-[3rem] flex items-center justify-center">{member.bio}</p>
                  
                  <div className="flex justify-center space-x-3 mt-auto" onClick={(e) => e.preventDefault()}>
                    <a 
                      href={member.social.github}
                      className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a 
                      href={member.social.linkedin}
                      className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href={member.social.twitter}
                      className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

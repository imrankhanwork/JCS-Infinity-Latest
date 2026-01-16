
import React from 'react';

const MemberSpotlight = () => {
  const members = [
    {
      name: "Alex Johnson",
      role: "Full Stack Developer",
      project: "AI-Powered Study Assistant",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sarah Chen",
      role: "Frontend Specialist", 
      project: "Campus Event Management App",
      image: "https://images.unsplash.com/photo-1494790108755-2616b6e6b038?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus Williams",
      role: "Data Science Enthusiast",
      project: "Student Performance Analytics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Member Spotlight
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet some of our amazing members who are building the future
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-500"
                />
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm">Currently working on:</p>
                <p className="text-white font-semibold">{member.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberSpotlight;

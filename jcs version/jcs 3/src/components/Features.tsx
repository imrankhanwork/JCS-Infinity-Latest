
import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Weekly Events",
      description: "Join coding workshops, tech talks, and hackathons every week",
      icon: "🎯"
    },
    {
      title: "Real Projects",
      description: "Work on open-source projects and build your portfolio",
      icon: "🚀"
    },
    {
      title: "Mentorship",
      description: "Learn from experienced developers and industry professionals",
      icon: "👥"
    },
    {
      title: "Community",
      description: "Connect with like-minded peers and build lasting friendships",
      icon: "🌟"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Join Our Club?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're more than just a coding club - we're a community that empowers the next generation of developers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

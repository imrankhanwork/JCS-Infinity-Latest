import React from 'react';

const MemberSpotlight = () => {
  const members = [
    {
      name: "Riya Mehta",
      role: "AI/ML Core Member",
      project: "Smart Attendance Tracker using Face Recognition",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Aditya Sharma",
      role: "Full Stack Lead",
      project: "JCS Community Hub – A full-featured club portal",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Neha Kaur",
      role: "UI/UX & Web Dev",
      project: "CodeCamp Landing Page for workshop signups",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-purple-400">JCS Infinity</span> Member Spotlight
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Celebrating the passion, innovation, and impact of our standout student developers.
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
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-500 shadow-md"
                />
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-purple-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">Building:</p>
                <p className="text-white font-semibold text-sm">{member.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberSpotlight;

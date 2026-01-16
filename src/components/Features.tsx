const Features = () => {
  const features = [
    {
      title: "Weekly Coding Events",
      description: "Attend hands-on workshops, tech talks, and real-world coding challenges every week.",
      icon: "💻",
    },
    {
      title: "Build Projects",
      description: "Work on real team projects that strengthen your resume and GitHub portfolio.",
      icon: "🚀",
    },
    {
      title: "Peer Mentorship",
      description: "Get guidance from seniors and alumni in web dev, app dev, AI/ML, and more.",
      icon: "🎓",
    },
    {
      title: "Tech Community",
      description: "Meet passionate coders, collaborate, and grow with a supportive student network.",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Join <span className="text-purple-400">JCS Infinity?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            JCS Infinity is not just a club — it’s your launchpad into the world of tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from 'react';

const LearnCode = () => {
  const languages = [
    {
      name: "JavaScript",
      description: "Create interactive websites and dynamic UIs with ease.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      difficulty: "Beginner",
      projects: 12,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "Python",
      description: "Great for automation, data science, AI/ML, and backend apps.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      difficulty: "Beginner",
      projects: 15,
      color: "from-blue-500 to-green-500"
    },
    {
      name: "React",
      description: "Build modern, scalable, and component-based frontend apps.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      difficulty: "Intermediate",
      projects: 8,
      color: "from-cyan-400 to-cyan-600"
    },
    {
      name: "Java",
      description: "Used in enterprise development, Android apps, and OOP mastery.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      difficulty: "Intermediate",
      projects: 10,
      color: "from-red-500 to-orange-500"
    },
    {
      name: "C++",
      description: "Master memory management and data structures. Great for CP.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      difficulty: "Advanced",
      projects: 6,
      color: "from-blue-600 to-purple-600"
    },
    {
      name: "Node.js",
      description: "Run JavaScript on the server. Build full-stack apps with ease.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      difficulty: "Intermediate",
      projects: 9,
      color: "from-green-500 to-green-600"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "text-green-400 bg-green-400/20";
      case "Intermediate": return "text-yellow-400 bg-yellow-400/20";
      case "Advanced": return "text-red-400 bg-red-400/20";
      default: return "text-gray-400 bg-gray-400/20";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Learn to Code @ <span className="text-purple-400">JCS Infinity</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get hands-on experience with real projects, peer mentoring, and expert workshops — right on campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {languages.map((language, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900/30 to-black/50 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${language.color} p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <img
                    src={language.icon}
                    alt={language.name}
                    className="w-10 h-10"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                    }}
                  />
                  <div className="hidden text-white font-bold text-lg">
                    {language.name.charAt(0)}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-white">{language.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(language.difficulty)}`}>
                    {language.difficulty}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{language.description}</p>

              <div className="flex items-center justify-between">
                <div className="text-purple-300">
                  <span className="text-2xl font-bold">{language.projects}</span>
                  <span className="text-sm ml-1">projects</span>
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnCode;

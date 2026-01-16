
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Globe } from "lucide-react";

const Speakers = () => {
  const speakers = [
    {
      name: "Sean (Xiang) Ren",
      role: "CEO & Co-Founder",
      company: "Sahara AI",
      type: "SPEAKER",
      image: "SR",
      gradient: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-600/20",
      badgeColor: "bg-purple-600/30 text-purple-200",
      description: "Leading expert in AI and blockchain integration, with over a decade of experience in building scalable intelligent systems.",
      expertise: ["Artificial Intelligence", "Machine Learning", "Blockchain Technology", "Product Strategy"]
    },
    {
      name: "Narong (Di) Borjindarkoon", 
      role: "Technical Specialist",
      company: "SCB 10X",
      type: "MODERATOR",
      image: "NB",
      gradient: "from-green-400 to-green-600",
      bgColor: "bg-green-600/20",
      badgeColor: "bg-green-600/30 text-green-200",
      description: "Technical specialist focused on innovation in financial technology and digital transformation initiatives.",
      expertise: ["FinTech Innovation", "Digital Banking", "Technology Strategy", "Financial Services"]
    }
  ];

  return (
    <section id="speakers" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-purple-600/30 text-purple-200 border-purple-500/50 mb-6">
            Featured Speakers
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Experts</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from industry pioneers who are shaping the future of AI and Web3 technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {speakers.map((speaker, index) => (
            <Card key={index} className="bg-black/40 border-white/20 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Speaker Image */}
                  <div className={`${speaker.bgColor} rounded-full p-4`}>
                    <div className={`w-24 h-24 bg-gradient-to-br ${speaker.gradient} rounded-full flex items-center justify-center text-white font-bold text-2xl`}>
                      {speaker.image}
                    </div>
                  </div>

                  {/* Speaker Info */}
                  <div className="space-y-4">
                    <Badge className={`${speaker.badgeColor} border-0`}>
                      {speaker.type}
                    </Badge>
                    <h3 className="text-2xl font-bold text-white">{speaker.name}</h3>
                    <p className="text-lg text-gray-300">{speaker.role}</p>
                    <p className="text-lg font-semibold text-purple-300">{speaker.company}</p>
                    <p className="text-gray-400 max-w-md">{speaker.description}</p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {speaker.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="border-white/30 text-white/80">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                      <Twitter className="h-5 w-5" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                      <Globe className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Join the Conversation?</h3>
            <p className="text-xl text-gray-300 mb-8">
              Don't miss this opportunity to engage with industry leaders and gain insights into the future of AI and Web3.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-105">
              Register Now - It's Free!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;

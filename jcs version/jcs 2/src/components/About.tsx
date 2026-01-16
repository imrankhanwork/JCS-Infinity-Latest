
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Coins, Zap, Globe, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Innovation",
      description: "Discover cutting-edge AI technologies shaping the future of digital economies"
    },
    {
      icon: <Coins className="h-8 w-8" />,
      title: "Web3 Integration", 
      description: "Explore how blockchain and decentralized systems create new economic models"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Smart Synergy",
      description: "Learn about the powerful combination of AI and Web3 technologies"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Impact",
      description: "Understand how these technologies are transforming economies worldwide"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Future Growth",
      description: "Insights into market trends and opportunities in the AI-Web3 space"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Systems",
      description: "Building trust and security in decentralized intelligent systems"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-purple-600/30 text-purple-200 border-purple-500/50 mb-6">
            About the Event
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Smart Economies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join industry leaders as they explore the intersection of artificial intelligence and Web3 technologies, 
            discussing how this powerful synergy is creating smarter, more efficient economic systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-black/40 border-white/20 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="text-purple-400 mb-4 flex justify-center group-hover:text-cyan-400 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-black/30 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Why Attend This Fireside Chat?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-purple-300">Expert Insights</h4>
              <p className="text-gray-300">
                Gain valuable insights from Sean Ren, CEO of Sahara AI, on the latest developments 
                in AI and blockchain integration.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-300">Industry Trends</h4>
              <p className="text-gray-300">
                Stay ahead of the curve with discussions on emerging trends and future 
                opportunities in the AI-Web3 ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

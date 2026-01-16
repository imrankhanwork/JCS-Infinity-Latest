import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import UpcomingEvents from "../components/UpcomingEvents";
import LearnCode from "../components/LearnCode";
import Features from "../components/Features";
import MemberSpotlight from "../components/MemberSpotlight";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-600 text-white">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="pt-24">
        <Hero />
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <UpcomingEvents />
        </div>
      </section>

      {/* Learn Code Section */}
      <section id="learn" className="py-16 px-4 bg-black/20 backdrop-blur-lg border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <LearnCode />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Features />
        </div>
      </section>

      {/* Member Spotlight */}
      <section id="spotlight" className="py-16 px-4 bg-black/10 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <MemberSpotlight />
        </div>
      </section>
    </div>
  );
};

export default Home;

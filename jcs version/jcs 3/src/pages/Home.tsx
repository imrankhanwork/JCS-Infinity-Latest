
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import UpcomingEvents from '../components/UpcomingEvents';
import LearnCode from '../components/LearnCode';
import Features from '../components/Features';
import MemberSpotlight from '../components/MemberSpotlight';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <UpcomingEvents />
      <LearnCode />
      <Features />
      <MemberSpotlight />
    </div>
  );
};

export default Home;

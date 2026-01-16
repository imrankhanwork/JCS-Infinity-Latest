
import Navigation from '@/components/Navigation';
import AnimatedStars from '@/components/AnimatedStars';
import HeroSection from '@/components/HeroSection';
import UpcomingEvents from '@/components/UpcomingEvents';
import CoursesSection from '@/components/CoursesSection';
import TeamSection from '@/components/TeamSection';
import CompaniesSection from '@/components/CompaniesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnimatedStars />
      <Navigation />
      
      <main>
        <HeroSection />
        <UpcomingEvents />
        <CoursesSection />
        <TeamSection />
        <CompaniesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

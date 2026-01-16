
const HeroGraphic = () => {
  return (
    <div className="absolute inset-0 w-full h-full opacity-30">
      {/* Main circle with gradient */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 animate-pulse"></div>
      
      {/* Orbiting rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-accent/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-primary/10 animate-spin" style={{ animationDuration: '25s' }}></div>
      
      {/* Central core */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
        <div className="text-lg font-bold text-white">∞</div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-accent rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-0.5 h-0.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default HeroGraphic;

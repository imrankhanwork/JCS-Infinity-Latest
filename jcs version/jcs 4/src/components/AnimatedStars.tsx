
import { useEffect } from 'react';

const AnimatedStars = () => {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.width = Math.random() * 3 + 1 + 'px';
      star.style.height = star.style.width;
      star.style.animationDelay = Math.random() * 3 + 's';
      star.style.animationDuration = (Math.random() * 3 + 2) + 's';
      
      const starsContainer = document.querySelector('.stars');
      if (starsContainer) {
        starsContainer.appendChild(star);
      }
    };

    // Create initial stars
    for (let i = 0; i < 50; i++) {
      createStar();
    }

    // Cleanup function
    return () => {
      const starsContainer = document.querySelector('.stars');
      if (starsContainer) {
        starsContainer.innerHTML = '';
      }
    };
  }, []);

  return <div className="stars" />;
};

export default AnimatedStars;

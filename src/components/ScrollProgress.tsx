
import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = documentHeight > 0 ? (scrollY / documentHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        background: `repeating-linear-gradient(90deg, var(--brand-green) 0 2px, transparent 2px 6px)`,
        clipPath: `inset(0 ${100 - scrollProgress}% 0 0)`,
      }}
      className="fixed left-0 right-0 top-0 h-[3px] z-[60]"
    />
  );
};

export default ScrollProgress;


import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur shadow-sm border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo lock-up */}
          <a href="/#hero" className="flex items-center gap-2 text-base font-medium text-neutral-800 hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/2b1e6ab1-382d-4686-ba1e-6a11b71e7f34.png" 
              alt="AltPath.ai Logo" 
              className="h-6 w-6"
            />
            AltPath.ai
          </a>

          {/* Flag icon */}
          <div className="text-2xl">🇺🇸</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

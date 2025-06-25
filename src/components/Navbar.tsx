
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur shadow-sm border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo lock-up */}
          <a href="/#hero" className="flex items-center gap-2 text-lg font-medium text-neutral-800 hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/2b1e6ab1-382d-4686-ba1e-6a11b71e7f34.png" 
              alt="AltPath.ai Logo" 
              className="h-8 w-8"
            />
            AltPath.ai
          </a>

          {/* Mobile burger with logo */}
          <button className="relative z-50 flex flex-col gap-1 md:hidden p-2">
            <span className="h-0.5 w-6 bg-neutral-800 transition-all" />
            <img 
              src="/lovable-uploads/2b1e6ab1-382d-4686-ba1e-6a11b71e7f34.png" 
              alt="AltPath.ai Logo" 
              className="h-3.5 w-3.5"
            />
            <span className="h-0.5 w-6 bg-neutral-800 transition-all" />
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-accent-600' 
                  : 'text-neutral-700 hover:text-accent-600'
              }`}
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

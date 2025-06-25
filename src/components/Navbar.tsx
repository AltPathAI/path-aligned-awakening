
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center group">
            <img 
              src="/lovable-uploads/ad2fe661-0e6d-4408-a579-797fa3d62c10.png" 
              alt="AltPath.ai Logo" 
              className="h-8 max-w-[140px] object-contain group-hover:opacity-80 transition-opacity"
            />
          </Link>

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
            <Link
              to="/consult"
              className={`text-sm font-medium transition-colors ${
                isActive('/consult') 
                  ? 'text-accent-600' 
                  : 'text-neutral-700 hover:text-accent-600'
              }`}
            >
              Consult
            </Link>
            <Link
              to="/framework"
              className={`text-sm font-medium transition-colors ${
                isActive('/framework') 
                  ? 'text-accent-600' 
                  : 'text-neutral-700 hover:text-accent-600'
              }`}
            >
              Framework
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

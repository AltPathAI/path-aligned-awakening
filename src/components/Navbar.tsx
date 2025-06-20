import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { User, Home, Video, HelpCircle, Settings } from 'lucide-react';

const Navbar = () => {
  const { user, signOut } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img 
                src="/lovable-uploads/ad2fe661-0e6d-4408-a579-797fa3d62c10.png" 
                alt="AltPath.ai Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-teal-900">AltPath.ai</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-teal-600 bg-teal-50' 
                  : 'text-teal-700 hover:text-teal-900 hover:bg-teal-50'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/topics"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/topics') 
                  ? 'text-teal-600 bg-teal-50' 
                  : 'text-teal-700 hover:text-teal-900 hover:bg-teal-50'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>Topics</span>
            </Link>
            <Link
              to="/values-map"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/values-map') 
                  ? 'text-teal-600 bg-teal-50' 
                  : 'text-teal-700 hover:text-teal-900 hover:bg-teal-50'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Values Map</span>
            </Link>
            <Link
              to="/subscription"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/subscription') 
                  ? 'text-teal-600 bg-teal-50' 
                  : 'text-teal-700 hover:text-teal-900 hover:bg-teal-50'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Subscription</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <Link to="/profile">
                  <Avatar className="w-8 h-8 hover:ring-2 hover:ring-teal-200 transition-all">
                    <AvatarImage src={user.avatar_url} />
                    <AvatarFallback>
                      <User className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                </Link>
                <Button variant="ghost" size="sm" onClick={signOut} className="text-teal-700 hover:text-teal-900 hover:bg-teal-50">
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/auth">
                  <Button variant="ghost" size="sm" className="text-teal-700 hover:text-teal-900 hover:bg-teal-50">Sign In</Button>
                </Link>
                <Link to="/auth">
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white">Get Started</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

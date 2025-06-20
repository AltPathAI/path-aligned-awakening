
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
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">AltPath.ai</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-purple-600 bg-purple-50' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/topics"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/topics') 
                  ? 'text-purple-600 bg-purple-50' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>Topics</span>
            </Link>
            <Link
              to="/values-map"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/values-map') 
                  ? 'text-purple-600 bg-purple-50' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Values Map</span>
            </Link>
            <Link
              to="/subscription"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/subscription') 
                  ? 'text-purple-600 bg-purple-50' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
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
                  <Avatar className="w-8 h-8 hover:ring-2 hover:ring-purple-200 transition-all">
                    <AvatarImage src={user.avatar_url} />
                    <AvatarFallback>
                      <User className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                </Link>
                <Button variant="ghost" size="sm" onClick={signOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/auth">
                  <Button variant="ghost" size="sm">Sign In</Button>
                </Link>
                <Link to="/auth">
                  <Button size="sm">Get Started</Button>
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

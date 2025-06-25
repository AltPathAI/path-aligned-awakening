
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { User, Home, BookOpen, Briefcase, Video, FileText } from 'lucide-react';

const Navbar = () => {
  const { user, signOut } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 flex items-center justify-center bg-accent-50 rounded-lg group-hover:bg-accent-100 transition-colors">
              <img 
                src="/lovable-uploads/ad2fe661-0e6d-4408-a579-797fa3d62c10.png" 
                alt="AltPath.ai Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-xl font-medium text-neutral-800 group-hover:text-accent-600 transition-colors">AltPath.ai</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-accent-600 bg-accent-50' 
                  : 'text-neutral-700 hover:text-accent-600 hover:bg-accent-50'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/framework"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/framework') 
                  ? 'text-accent-600 bg-accent-50' 
                  : 'text-neutral-700 hover:text-accent-600 hover:bg-accent-50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Framework</span>
            </Link>
            <Link
              to="/case-studies"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/case-studies') 
                  ? 'text-accent-600 bg-accent-50' 
                  : 'text-neutral-700 hover:text-accent-600 hover:bg-accent-50'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Case Studies</span>
            </Link>
            <Link
              to="/workshop"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/workshop') 
                  ? 'text-accent-600 bg-accent-50' 
                  : 'text-neutral-700 hover:text-accent-600 hover:bg-accent-50'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>Workshop</span>
            </Link>
            <Link
              to="/journal"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/journal') 
                  ? 'text-accent-600 bg-accent-50' 
                  : 'text-neutral-700 hover:text-accent-600 hover:bg-accent-50'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Journal</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <Link to="/profile">
                  <Avatar className="w-8 h-8 hover:ring-2 hover:ring-accent-200 transition-all">
                    <AvatarImage src={user.avatar_url} />
                    <AvatarFallback>
                      <User className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                </Link>
                <Button variant="ghost" size="sm" onClick={signOut} className="text-neutral-700 hover:text-accent-600 hover:bg-accent-50">
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/auth">
                  <Button variant="ghost" size="sm" className="text-neutral-700 hover:text-accent-600 hover:bg-accent-50">Sign In</Button>
                </Link>
                <Link to="/workshop">
                  <Button size="sm" className="bg-accent-600 hover:bg-accent-500 text-white btn-primary">Book Workshop</Button>
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

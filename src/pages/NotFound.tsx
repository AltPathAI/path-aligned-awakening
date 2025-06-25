
import React from 'react';
import { Youtube } from 'lucide-react';
import { openSecureUrl } from '@/utils/urlValidation';

const NotFound = () => {
  const handleYouTubeHub = () => {
    openSecureUrl('https://www.youtube.com/@AltPath');
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/ad2fe661-0e6d-4408-a579-797fa3d62c10.png" 
            alt="AltPath.ai Logo" 
            className="h-16 mx-auto mb-6 opacity-60"
          />
        </div>
        
        <h1 className="text-6xl font-serif text-neutral-800 mb-4">404</h1>
        <h2 className="text-2xl font-serif text-neutral-700 mb-6">Page Not Found</h2>
        
        <p className="text-neutral-600 mb-8 leading-relaxed">
          This page seems to have wandered off the elegant path. 
          Let's get you back to something useful.
        </p>
        
        <button
          onClick={handleYouTubeHub}
          className="inline-flex items-center px-6 py-3 bg-accent-600 hover:bg-accent-500 text-white rounded-lg font-medium transition-all duration-150 hover:shadow-lg"
        >
          <Youtube className="w-5 h-5 mr-2" />
          Tour our YouTube hub
        </button>
        
        <div className="mt-8">
          <a href="/" className="text-accent-600 hover:text-accent-500 underline underline-offset-4">
            Or return to the home page
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

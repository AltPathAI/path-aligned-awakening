
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { CheckCircle } from 'lucide-react';

const Success = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/altpathai-vki1/30min', '_blank', 'width=800,height=600');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-16">
      <div className="max-w-2xl mx-auto px-4">
        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto mb-4">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-emerald-800 mb-2">
              Welcome to Your Journey!
            </CardTitle>
            <p className="text-lg text-gray-700">
              Thank you for taking the first step toward authentic living.
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Ready to Begin?
              </h3>
              <p className="text-gray-600">
                Let's schedule your free discovery call to explore your unique path.
              </p>
              
              <div className="space-y-3">
                <Button
                  onClick={handleBookCall}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg w-full"
                >
                  📅 Book Your Free Discovery Call
                </Button>
                
                <p className="text-sm text-gray-500">
                  30 minutes. No cost. No pressure. Just authentic conversation.
                </p>
              </div>
            </div>

            <div className="border-t pt-6 text-center">
              <p className="text-gray-600 mb-4">
                Want to explore more before we talk?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/"
                  className="text-emerald-600 hover:text-emerald-700 underline"
                >
                  Return to Homepage
                </Link>
                <span className="hidden sm:inline text-gray-400">•</span>
                <a
                  href="https://www.youtube.com/@altpathai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 underline"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Success;

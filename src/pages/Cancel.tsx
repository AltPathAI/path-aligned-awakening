
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { XCircle } from 'lucide-react';

const Cancel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-16">
      <div className="max-w-2xl mx-auto px-4">
        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto mb-4">
              <XCircle className="w-16 h-16 text-amber-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-amber-800 mb-2">
              Payment Canceled
            </CardTitle>
            <p className="text-lg text-gray-700">
              No worries—sometimes timing isn't right.
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-gray-600">
                Your payment was canceled and no charges were made to your account.
              </p>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="text-amber-800 font-medium mb-2">
                  Ready to invest in your journey?
                </p>
                <p className="text-amber-700 text-sm">
                  Real change requires commitment. When you're ready to move forward, 
                  we'll be here.
                </p>
              </div>
            </div>

            <div className="space-y-3 text-center">
              <Link to="/pricing">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg w-full">
                  Return to Sessions
                </Button>
              </Link>
              
              <p className="text-sm text-gray-500">
                Or start small with a Meet & Greet ($5) to explore if we're aligned.
              </p>
            </div>

            <div className="border-t pt-6 text-center">
              <p className="text-gray-600 mb-4">
                Have questions about our approach?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/"
                  className="text-emerald-600 hover:text-emerald-700 underline"
                >
                  Learn More About AltPath
                </Link>
                <span className="hidden sm:inline text-gray-400">•</span>
                <a
                  href="https://calendly.com/bruceboston/meet-greet-10min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 underline"
                >
                  Free Meet & Greet
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cancel;

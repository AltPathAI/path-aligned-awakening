
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { CheckCircle } from 'lucide-react';

const Success = () => {
  const [searchParams] = useSearchParams();
  const [sessionInfo, setSessionInfo] = useState<{
    sessionId: string;
    type: string;
    calendlyUrl: string;
  } | null>(null);

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    const type = searchParams.get('type');
    const calendlyUrl = searchParams.get('calendly');

    if (sessionId && type && calendlyUrl) {
      setSessionInfo({
        sessionId,
        type,
        calendlyUrl: decodeURIComponent(calendlyUrl),
      });
    }
  }, [searchParams]);

  const handleScheduleSession = () => {
    if (sessionInfo?.calendlyUrl) {
      // Open Calendly in a new tab
      window.open(sessionInfo.calendlyUrl, '_blank', 'width=800,height=600');
    }
  };

  const getSessionTypeName = (type: string) => {
    const typeMap: Record<string, string> = {
      'meet-greet': 'Meet & Greet',
      'intake': 'Intake Interview',
      'early-bird': 'Early-bird Working Session',
      'standard': 'Standard Working Session',
      'weekly': 'Weekly Update',
    };
    return typeMap[type] || type;
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
              Payment Successful!
            </CardTitle>
            <p className="text-lg text-gray-700">
              You've taken the first step toward real change.
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {sessionInfo && (
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h3 className="font-semibold text-emerald-800 mb-2">
                  Session Purchased:
                </h3>
                <p className="text-emerald-700">
                  {getSessionTypeName(sessionInfo.type)}
                </p>
                <p className="text-sm text-emerald-600 mt-1">
                  Session ID: {sessionInfo.sessionId}
                </p>
              </div>
            )}

            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Now, let's schedule your time.
              </h3>
              <p className="text-gray-600">
                Investment made. Commitment shown. Time to do the work.
              </p>
              
              <div className="space-y-3">
                <Button
                  onClick={handleScheduleSession}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg w-full"
                  disabled={!sessionInfo?.calendlyUrl}
                >
                  📅 Schedule Your Session Now
                </Button>
                
                <p className="text-sm text-gray-500">
                  You'll receive a confirmation email with session details after scheduling.
                </p>
              </div>
            </div>

            <div className="border-t pt-6 text-center">
              <p className="text-gray-600 mb-4">
                Questions about your upcoming session?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/"
                  className="text-emerald-600 hover:text-emerald-700 underline"
                >
                  Return to Homepage
                </Link>
                <span className="hidden sm:inline text-gray-400">•</span>
                <Link
                  to="/pricing"
                  className="text-emerald-600 hover:text-emerald-700 underline"
                >
                  View All Sessions
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Success;

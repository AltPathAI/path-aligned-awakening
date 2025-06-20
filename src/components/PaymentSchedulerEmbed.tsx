
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { useToast } from './ui/use-toast';

interface AppointmentType {
  id: string;
  name: string;
  duration: string;
  price: number;
  calendlyUrl: string;
  description: string;
  available: boolean;
}

const PaymentSchedulerEmbed = () => {
  const [loading, setLoading] = useState<string>('');
  const { toast } = useToast();

  const appointmentTypes: AppointmentType[] = [
    {
      id: 'meet-greet',
      name: 'Meet & Greet',
      duration: '10 min',
      price: 5,
      calendlyUrl: 'https://calendly.com/bruceboston/meet-greet-10min',
      description: 'Quick introduction to see if we\'re a good fit for your journey.',
      available: true,
    },
    {
      id: 'intake',
      name: 'Intake Interview',
      duration: '30 min',
      price: 20,
      calendlyUrl: 'https://calendly.com/bruceboston/intake-interview-30min',
      description: 'Deep dive into your current situation and desired outcomes.',
      available: true,
    },
    {
      id: 'early-bird',
      name: 'Early-bird Working Session',
      duration: '1 hr',
      price: 40,
      calendlyUrl: 'https://calendly.com/bruceboston/early-bird-session-60min',
      description: 'Hands-on session to tackle your most pressing challenges.',
      available: true,
    },
    {
      id: 'standard',
      name: 'Standard Working Session',
      duration: '1 hr',
      price: 200,
      calendlyUrl: 'https://calendly.com/bruceboston/standard-session-60min',
      description: 'Full-rate coaching session for deep transformation work.',
      available: false,
    },
    {
      id: 'weekly',
      name: 'Weekly Update',
      duration: '30 min',
      price: 100,
      calendlyUrl: 'https://calendly.com/bruceboston/weekly-update-30min',
      description: 'Regular check-ins to maintain momentum on your path.',
      available: false,
    },
  ];

  const handleBookAndPay = async (appointmentType: AppointmentType) => {
    if (!appointmentType.available) {
      toast({
        title: "Not Available",
        description: "This session type will be available in Q3 2025.",
        variant: "destructive",
      });
      return;
    }

    setLoading(appointmentType.id);

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: appointmentType.id,
          name: appointmentType.name,
          price: appointmentType.price,
          duration: appointmentType.duration,
          calendlyUrl: appointmentType.calendlyUrl,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();
      
      if (url) {
        // Redirect to Stripe Checkout
        window.location.href = url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Error",
        description: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
        variant: "destructive",
      });
    } finally {
      setLoading('');
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">
            Book & Pay for Your Session
          </h2>
          <p className="text-xl text-gray-700 mb-2">
            Choose your session type, pay securely, then schedule your time.
          </p>
          <p className="text-gray-600">
            Because transformation requires commitment from both sides.
          </p>
        </div>

        <div className="grid gap-6 mb-8">
          {appointmentTypes.map((type) => (
            <Card 
              key={type.id} 
              className={`border transition-colors ${
                type.available 
                  ? 'border-gray-200 hover:border-emerald-300' 
                  : 'border-gray-200 opacity-75'
              }`}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-emerald-800">
                        {type.name}
                      </h3>
                      <span className="text-2xl font-bold text-gray-900">
                        ${type.price}
                      </span>
                      <span className="text-sm text-gray-600">
                        ({type.duration})
                      </span>
                      {!type.available && (
                        <span className="bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Q3 2025
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">
                      {type.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button
                      onClick={() => handleBookAndPay(type)}
                      disabled={loading === type.id || !type.available}
                      className={`px-6 py-3 w-full md:w-auto ${
                        type.available
                          ? 'bg-teal-600 hover:bg-teal-700 text-white'
                          : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      }`}
                    >
                      {loading === type.id ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : type.available ? (
                        '💳 Book & Pay'
                      ) : (
                        'Coming Soon'
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">
            Secure payments powered by Stripe. After payment, you'll be directed to schedule your session.
          </p>
          <p className="text-xs text-gray-400">
            Questions? Start with the Meet & Greet to see if we're aligned.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentSchedulerEmbed;

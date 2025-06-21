
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

interface AppointmentType {
  id: string;
  name: string;
  duration: string;
  calendlyUrl: string;
  description: string;
}

const PaymentSchedulerEmbed = () => {
  const appointmentTypes: AppointmentType[] = [
    {
      id: 'discovery',
      name: 'Discovery Call',
      duration: '30 min',
      calendlyUrl: 'https://calendly.com/altpathai-vki1/30min',
      description: 'Free consultation to explore your unique path and see if we\'re aligned.',
    },
  ];

  const handleSchedule = (calendlyUrl: string) => {
    window.open(calendlyUrl, '_blank', 'width=800,height=600');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">
            Ready to Discover Your Path?
          </h2>
          <p className="text-xl text-gray-700 mb-2">
            Book a free discovery call to explore your journey.
          </p>
          <p className="text-gray-600">
            Let's see if we're aligned for your transformation.
          </p>
        </div>

        <div className="grid gap-6 mb-8">
          {appointmentTypes.map((type) => (
            <Card key={type.id} className="border border-gray-200 hover:border-emerald-300 transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-emerald-800">
                        {type.name}
                      </h3>
                      <span className="text-sm text-gray-600">
                        ({type.duration})
                      </span>
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        FREE
                      </span>
                    </div>
                    <p className="text-gray-600">
                      {type.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button
                      onClick={() => handleSchedule(type.calendlyUrl)}
                      className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 w-full md:w-auto"
                    >
                      📅 Book Free Call
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">
            No commitment required. Just a conversation about your unique journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentSchedulerEmbed;

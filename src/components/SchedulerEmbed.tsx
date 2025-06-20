
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface AppointmentType {
  id: string;
  name: string;
  duration: string;
  price: number;
  calendlyUrl: string;
  description: string;
  available: boolean;
}

const SchedulerEmbed = () => {
  const [selectedType, setSelectedType] = useState<string>('');

  const appointmentTypes: AppointmentType[] = [
    {
      id: 'meet-greet',
      name: 'Meet & Greet',
      duration: '10 min',
      price: 5,
      calendlyUrl: 'https://calendly.com/bruceboston/meet-greet-10min',
      description: 'Quick introduction session',
      available: true,
    },
    {
      id: 'intake',
      name: 'Intake Interview',
      duration: '30 min',
      price: 20,
      calendlyUrl: 'https://calendly.com/bruceboston/intake-interview-30min',
      description: 'Comprehensive assessment session',
      available: true,
    },
    {
      id: 'early-bird',
      name: 'Early-bird Working Session',
      duration: '1 hr',
      price: 40,
      calendlyUrl: 'https://calendly.com/bruceboston/early-bird-session-60min',
      description: 'Hands-on coaching session',
      available: true,
    },
  ];

  const handleSchedule = (calendlyUrl: string) => {
    // Open Calendly in a new window/tab
    window.open(calendlyUrl, '_blank', 'width=800,height=600');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">
            Schedule Your Session
          </h2>
          <p className="text-xl text-gray-700">
            Choose the session type that fits your current needs.
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
                      <span className="text-2xl font-bold text-gray-900">
                        ${type.price}
                      </span>
                      <span className="text-sm text-gray-600">
                        ({type.duration})
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
                      📅 Schedule Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">
            Can't find the right fit? Have questions about which session to choose?
          </p>
          <Button
            onClick={() => handleSchedule('https://calendly.com/bruceboston/meet-greet-10min')}
            variant="outline"
            className="border-teal-300 text-teal-700 hover:bg-teal-50"
          >
            Start with a Meet & Greet ($5)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SchedulerEmbed;

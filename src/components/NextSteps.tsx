
import React from 'react';
import { Button } from '@/components/ui/button';

const NextSteps = () => {
  const handleWorkshop = () => {
    window.open('https://calendly.com/altpathai-vki1/30min', '_blank', 'width=800,height=600');
  };

  const handleDownloadKit = () => {
    console.log('Downloading Workshop Starter Kit...');
  };

  const steps = [
    'Pick a pilot bucket (e.g., micro-flat retrofit).',
    'Run a 90-min Two-Lens Workshop.',
    'Prototype → measure → refine until both lenses say "yes."'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-slate-800 mb-6">
            Next Steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-teal-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {index + 1}
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                {step}
              </p>
              {index === 1 && (
                <Button
                  onClick={handleWorkshop}
                  className="mt-4 bg-teal-700 hover:bg-teal-600 text-white"
                >
                  Launch Calendly
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={handleDownloadKit}
            variant="outline"
            size="lg"
            className="border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            Download the Workshop Starter Kit (Free)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;

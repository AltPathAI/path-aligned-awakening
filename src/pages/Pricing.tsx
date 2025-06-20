
import React from 'react';
import PricingOverview from '../components/PricingOverview';
import PaymentSchedulerEmbed from '../components/PaymentSchedulerEmbed';
import { Card, CardContent } from '../components/ui/card';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
            Invest in Your Unique Path
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            Transformation isn't cheap. But neither is staying stuck.
          </p>
          <p className="text-lg text-gray-600">
            We anchor at <span className="font-bold text-emerald-600">$200/hour</span> because 
            real change requires real investment—from both of us.
          </p>
        </div>
      </section>

      {/* Pricing Overview */}
      <PricingOverview />

      {/* Why These Rates Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6 text-center">
                Why These Rates?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  <strong>Because transformation has a price.</strong> Not just in dollars, but in commitment, 
                  vulnerability, and the courage to choose a different path.
                </p>
                <p className="mb-4">
                  Most coaching feels like expensive therapy sessions where you pay to feel heard. 
                  Here, you're investing in <em>actual change</em>—the kind that reshapes how you 
                  approach work, relationships, and life itself.
                </p>
                <p className="mb-4">
                  Our anchor rate of <strong>$200/hour</strong> reflects the depth of work we do together. 
                  This isn't advice-giving or cheerleading. It's strategic, transformational work that 
                  most people avoid because it's uncomfortable.
                </p>
                <p className="mb-4">
                  <strong>The early-bird pricing exists for one reason:</strong> to find the right people 
                  at the right time. Those ready to invest in themselves before the crowd catches on. 
                  Before the rates reflect the full value of what happens in these sessions.
                </p>
                <p className="text-center font-medium text-emerald-700">
                  Quality work requires quality investment. From both sides.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Payment Scheduler Section */}
      <PaymentSchedulerEmbed />

      {/* Final CTA */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Stop Talking and Start Changing?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Your journey is unique. The path forward doesn't have to be unclear.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#payment-scheduler"
              className="bg-white text-emerald-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Book & Pay Now
            </a>
            <a
              href="https://calendly.com/bruceboston/meet-greet-10min"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-emerald-800 transition-colors"
            >
              Free Meet & Greet (No Payment)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

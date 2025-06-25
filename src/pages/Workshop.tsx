
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Clock, CheckCircle } from 'lucide-react';
import { openCalendlyUrl } from '@/utils/urlValidation';

const Workshop = () => {
  const handleBookWorkshop = () => {
    openCalendlyUrl('https://calendly.com/altpathai-vki1/30min');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="section-spacing">
        <div className="max-w-4xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-neutral-800 mb-6">
              Two-Lens Workshop
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed content-width mx-auto">
              90 minutes to transform how your team evaluates and builds solutions.
            </p>
          </div>

          {/* Calendar Embed Placeholder */}
          <div className="bg-neutral-50 rounded-lg p-8 mb-16 text-center">
            <Calendar className="w-16 h-16 mx-auto mb-6 text-accent-600" />
            <h3 className="text-2xl font-serif text-neutral-800 mb-4">
              Book Your Workshop
            </h3>
            <p className="text-neutral-600 mb-6">
              Choose a time that works for your team. All sessions include follow-up materials.
            </p>
            <Button
              onClick={handleBookWorkshop}
              size="lg"
              className="bg-accent-600 hover:bg-accent-500 text-white btn-primary"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Workshop
            </Button>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border-2 border-accent-500 rounded-lg p-8">
              <div className="text-center mb-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-accent-600" />
                <h3 className="text-2xl font-serif text-neutral-800 mb-2">Community Workshop</h3>
                <div className="text-3xl font-bold text-accent-600 mb-2">Free</div>
                <p className="text-neutral-600">Public sessions with other teams</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-neutral-700">90-minute guided session</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-neutral-700">PDF framework guide</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-neutral-700">Access to community forum</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-neutral-700">Monthly follow-up email</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-accent-500 text-accent-600 hover:bg-accent-50">
                Join Next Session
              </Button>
            </div>

            <div className="bg-accent-50 border-2 border-accent-600 rounded-lg p-8">
              <div className="text-center mb-6">
                <Clock className="w-12 h-12 mx-auto mb-4 text-accent-600" />
                <h3 className="text-2xl font-serif text-neutral-800 mb-2">Private Sprint</h3>
                <div className="text-3xl font-bold text-accent-600 mb-2">$2,400</div>
                <p className="text-neutral-600">Dedicated session for your team</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-neutral-700">Customized to your project</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-neutral-700">Private team session</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-neutral-700">90-day implementation support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent-500 mr-3" />
                  <span className="text-neutral-700">Custom evaluation tools</span>
                </li>
              </ul>
              <Button className="w-full bg-accent-600 hover:bg-accent-500 text-white btn-primary">
                Book Private Sprint
              </Button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-neutral-800 text-center mb-8">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              <details className="bg-neutral-50 rounded-lg p-6">
                <summary className="text-lg font-medium text-neutral-800 cursor-pointer">
                  What happens in a Two-Lens Workshop?
                </summary>
                <div className="mt-4 text-neutral-600 leading-relaxed">
                  We'll walk through your current project or a case study, applying both the pragmatic and elegant lenses. You'll learn to identify when solutions are missing one dimension, and practice refining until both lenses say "yes."
                </div>
              </details>

              <details className="bg-neutral-50 rounded-lg p-6">
                <summary className="text-lg font-medium text-neutral-800 cursor-pointer">
                  How many people can attend?
                </summary>
                <div className="mt-4 text-neutral-600 leading-relaxed">
                  Community workshops accommodate up to 12 participants. Private sprints work best with 3-8 team members who will be implementing the framework together.
                </div>
              </details>

              <details className="bg-neutral-50 rounded-lg p-6">
                <summary className="text-lg font-medium text-neutral-800 cursor-pointer">
                  Do I need any preparation?
                </summary>
                <div className="mt-4 text-neutral-600 leading-relaxed">
                  Come with a current challenge or project in mind. We'll provide all frameworks and materials. If you're booking a private sprint, we'll send a brief prep questionnaire.
                </div>
              </details>

              <details className="bg-neutral-50 rounded-lg p-6">
                <summary className="text-lg font-medium text-neutral-800 cursor-pointer">
                  What's included in follow-up support?
                </summary>
                <div className="mt-4 text-neutral-600 leading-relaxed">
                  All participants get PDF guides and access to our community forum. Private sprint clients receive 90 days of email support and optional monthly check-ins to review progress.
                </div>
              </details>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Workshop;

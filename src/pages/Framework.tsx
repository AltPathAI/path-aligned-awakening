
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Youtube, Calendar } from 'lucide-react';

const Framework = () => {
  const handleYouTube = () => {
    window.open('https://www.youtube.com/@AltPath', '_blank');
  };

  const handleConsult = () => {
    window.location.href = '/consult';
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="content-width mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif text-neutral-800 mb-12">
              The Elegant Pragmatism Framework
            </h1>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-3xl font-serif text-neutral-800 mb-6">Core Principle</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Every solution must pass two tests: Does it work under real-world stress? Does it add beauty and meaning to life? 
                  This dual-lens approach ensures we solve first, then beautify—creating solutions that are both pragmatically sound and aesthetically enriching.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-serif text-neutral-800 mb-6">The Two-Lens Test</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-medium text-neutral-800 mb-4">Pragmatic Lens</h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li>✔︎ Problem-fit</li>
                      <li>✔︎ Feasibility</li>
                      <li>✔︎ Efficiency</li>
                      <li>✔︎ Resilience</li>
                      <li>✔︎ Reproducibility</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-neutral-800 mb-4">Elegant Lens</h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li>✔︎ Simplicity</li>
                      <li>✔︎ Harmony</li>
                      <li>✔︎ Surprise</li>
                      <li>✔︎ Sensory delight</li>
                      <li>✔︎ Spiritual uplift</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-serif text-neutral-800 mb-6">Application Areas</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The framework applies across life's essential buckets: housing, food, mobility, utilities, savings, and community. 
                  Each area offers opportunities to optimize for both function and delight.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleYouTube}
                    className="inline-flex items-center px-6 py-3 bg-accent-600 hover:bg-accent-500 text-white rounded-lg font-medium transition-colors"
                  >
                    <Youtube className="w-4 h-4 mr-2" />
                    Watch case studies on YouTube
                  </button>
                  <button
                    onClick={handleConsult}
                    className="inline-flex items-center px-6 py-3 border border-accent-500 text-accent-600 hover:bg-accent-50 rounded-lg font-medium transition-colors"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book a consultation
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Framework;


import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Download, BookOpen } from 'lucide-react';

const Framework = () => {
  const handleDownloadPDF = () => {
    console.log('Downloading framework infographic PDF...');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="section-spacing">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Story */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-serif text-neutral-800 mb-6">
                  Pragmatism × Aestheticism
                </h1>
                <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                  The synthesis that transforms how we build, choose, and live.
                </p>
              </div>

              <div className="space-y-12">
                <div className="bg-neutral-50 rounded-lg p-8">
                  <h3 className="text-2xl font-serif text-neutral-800 mb-4">The Pragmatic Foundation</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Rooted in William James's philosophy: "The ultimate test for us of what a truth means is the conduct it dictates or inspires."
                  </p>
                  <ul className="space-y-2 text-neutral-600">
                    <li>• Solutions must solve real problems</li>
                    <li>• Resources are finite and precious</li>
                    <li>• Efficiency matters, waste doesn't</li>
                    <li>• Results speak louder than intentions</li>
                  </ul>
                </div>

                <div className="bg-accent-50 rounded-lg p-8">
                  <h3 className="text-2xl font-serif text-neutral-800 mb-4">The Aesthetic Dimension</h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Beauty isn't luxury—it's infrastructure for human flourishing. When we delight in our daily environment, we take better care of it.
                  </p>
                  <ul className="space-y-2 text-neutral-600">
                    <li>• Sensory pleasure enhances function</li>
                    <li>• Beauty builds emotional resilience</li>
                    <li>• Elegance invites participation</li>
                    <li>• Delight sustains long-term habits</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-accent-500 rounded-lg p-8">
                  <h3 className="text-2xl font-serif text-accent-600 mb-4">The Synthesis</h3>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    When pragmatic solutions also delight, they become antifragile. People want to maintain them, improve them, share them. The beautiful solution doesn't just work—it works <em>because</em> it's beautiful.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Infographic & Download */}
            <div className="space-y-8">
              <div className="bg-neutral-50 rounded-lg p-8 text-center">
                <BookOpen className="w-16 h-16 mx-auto mb-6 text-accent-600" />
                <h3 className="text-2xl font-serif text-neutral-800 mb-4">
                  Framework Infographic
                </h3>
                <p className="text-neutral-600 mb-6">
                  One-page visual guide to applying Elegant Pragmatism in your next project.
                </p>
                <Button
                  onClick={handleDownloadPDF}
                  className="bg-accent-600 hover:bg-accent-500 text-white btn-primary"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF Guide
                </Button>
              </div>

              <div className="bg-white border border-neutral-200 rounded-lg p-8">
                <h4 className="text-lg font-medium text-neutral-800 mb-4">What's Inside</h4>
                <ul className="space-y-3 text-neutral-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Two-Lens decision framework</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Evaluation checklist with examples</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Common anti-patterns to avoid</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Quick reference for teams</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <p className="text-sm text-neutral-500">
                  Free for personal use • CC-BY for commercial projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Framework;

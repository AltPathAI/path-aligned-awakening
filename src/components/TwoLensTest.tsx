
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

const TwoLensTest = () => {
  const [activeTab, setActiveTab] = useState<'pragmatic' | 'elegant'>('pragmatic');

  const handleDownloadPDF = () => {
    // In a real implementation, this would download an actual PDF
    console.log('Downloading Two-Lens Test PDF checklist...');
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-slate-800 mb-6">
            The Two-Lens Test
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            A proposal must say "yes" to most items in both columns—or we refine until it can.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          {/* Tab Headers */}
          <div className="flex">
            <button
              onClick={() => setActiveTab('pragmatic')}
              className={`flex-1 py-6 px-8 text-lg font-medium transition-colors ${
                activeTab === 'pragmatic'
                  ? 'bg-slate-800 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Pragmatic Lens
            </button>
            <button
              onClick={() => setActiveTab('elegant')}
              className={`flex-1 py-6 px-8 text-lg font-medium transition-colors ${
                activeTab === 'elegant'
                  ? 'bg-teal-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Elegant Lens
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'pragmatic' && (
              <div className="space-y-4">
                {['Problem-fit', 'Feasibility', 'Efficiency', 'Resilience', 'Reproducibility'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-lg text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'elegant' && (
              <div className="space-y-4">
                {['Simplicity', 'Harmony', 'Surprise', 'Sensory Pleasure', 'Uplift'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-lg text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={handleDownloadPDF}
            variant="outline"
            className="border-teal-500 text-teal-700 hover:bg-teal-50"
          >
            Download One-Page PDF Checklist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TwoLensTest;

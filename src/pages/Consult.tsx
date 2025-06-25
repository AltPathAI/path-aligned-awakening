
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDown, Youtube } from 'lucide-react';

const Consult = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const handleYouTubeDIY = () => {
    window.open('https://www.youtube.com/@AltPath', '_blank');
  };

  const faqs = [
    {
      id: 'what-covered',
      question: 'What\'s covered in 30 minutes?',
      answer: 'We\'ll apply the Two-Lens Test to your specific challenge, identify pragmatic solutions, and explore aesthetic refinements.'
    },
    {
      id: 'preparation',
      question: 'How should I prepare?',
      answer: 'Come with one concrete problem you\'re solving. The more specific, the more actionable our session will be.'
    },
    {
      id: 'follow-up',
      question: 'Is there follow-up support?',
      answer: 'This session is diagnostic. For ongoing implementation support, we\'ll discuss options that fit your needs.'
    },
    {
      id: 'cost',
      question: 'What does it cost?',
      answer: 'The initial 30-minute consultation is complimentary. We believe in solving first—payment structures follow value delivery.'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-neutral-800 mb-6">
              Book a 30-min Elegant Pragmatism session
            </h1>
          </div>

          {/* Calendly Embed */}
          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 mb-12">
            <div className="aspect-[4/3] bg-neutral-100 rounded-lg flex items-center justify-center">
              <div className="text-center text-neutral-600">
                <p className="text-lg mb-4">Calendly embed placeholder</p>
                <p className="text-sm">Integration: https://calendly.com/altpathai-vki1/30min</p>
              </div>
            </div>
          </div>

          {/* DIY Link */}
          <div className="text-center mb-12">
            <button
              onClick={handleYouTubeDIY}
              className="text-accent-600 hover:text-accent-500 underline underline-offset-4 flex items-center justify-center gap-2 mx-auto"
            >
              <Youtube className="w-4 h-4" />
              Prefer DIY? Tutorials live on YouTube.
            </button>
          </div>

          {/* Mini FAQ */}
          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
            <div className="p-6 border-b border-neutral-200">
              <h3 className="text-xl font-medium text-neutral-800">Frequently Asked Questions</h3>
            </div>
            
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-neutral-200 last:border-b-0">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-medium text-neutral-800">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-neutral-600 transition-transform ${
                      openFAQ === faq.id ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-6 pb-4">
                    <p className="text-neutral-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consult;

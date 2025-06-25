
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const Footer = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/altpathai-vki1/30min', '_blank', 'width=800,height=600');
  };

  return (
    <footer className="bg-slate-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Framework</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Workshop</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Journal</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Mastodon</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Start Your Journey</h3>
            <p className="text-slate-300 mb-4">
              Ready to apply Elegant Pragmatism to your next project?
            </p>
            <Button
              onClick={handleBookCall}
              className="bg-teal-600 hover:bg-teal-500 text-white"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Discovery Call
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400">
            Copy-left notice: Reuse anything; cite AltPath.ai.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

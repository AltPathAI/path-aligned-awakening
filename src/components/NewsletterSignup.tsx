
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, CheckCircle } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-neutral-800 mb-2">Thank you!</h3>
        <p className="text-neutral-600">We'll keep you updated on our journey toward elegant pragmatism.</p>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-accent-200 max-w-md mx-auto">
      <div className="text-center mb-6">
        <Mail className="w-8 h-8 text-accent-600 mx-auto mb-3" />
        <h3 className="text-xl font-semibold text-neutral-800 mb-2">Stay Updated</h3>
        <p className="text-neutral-600 text-sm">
          Get notified when we share new insights on elegant pragmatism
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
            required
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg disabled:opacity-50"
          >
            {isLoading ? 'Joining...' : 'Join'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewsletterSignup;


import React, { useState } from 'react';
import { Button } from './ui/button';

interface StripePaymentButtonProps {
  amount: number;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

const StripePaymentButton: React.FC<StripePaymentButtonProps> = ({
  amount,
  description,
  className = '',
  children
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    try {
      // Call the API route to create a Stripe Checkout Session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount * 100, // Convert to cents
          description,
          success_url: `${window.location.origin}/thank-you`,
          cancel_url: window.location.href,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();
      
      if (url) {
        // Redirect to Stripe Checkout
        window.location.href = url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (err) {
      console.error('Payment error:', err);
      setError(err instanceof Error ? err.message : 'Payment failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <Button
        onClick={handlePayment}
        disabled={loading}
        className={`relative ${className}`}
      >
        {loading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Processing...
          </>
        ) : (
          children || `Pay $${amount}`
        )}
      </Button>
      {error && (
        <p className="text-red-600 text-sm">
          {error}
        </p>
      )}
    </div>
  );
};

export default StripePaymentButton;

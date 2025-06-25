
import React from 'react';
import { openCalendlyUrl } from '@/utils/urlValidation';

interface CalendlyEmbedProps {
  eventUrl: string;
  className?: string;
  children: React.ReactNode;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ eventUrl, className = '', children }) => {
  const handleClick = () => {
    openCalendlyUrl(eventUrl);
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default CalendlyEmbed;

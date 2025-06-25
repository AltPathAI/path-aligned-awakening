
import React from 'react';

export const BadgeOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor"
    strokeWidth={2} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <polygon points="12 3 19 7 19 17 12 21 5 17 5 7" />
    <path d="M12 3v18M5 7l14 10M19 7L5 17" />
  </svg>
);

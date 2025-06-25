
// Utility functions for validating and securing external URLs

const ALLOWED_DOMAINS = [
  'calendly.com',
  'youtube.com',
  'www.youtube.com',
  'youtu.be'
];

/**
 * Validates if a URL belongs to an allowed domain
 */
export const isAllowedDomain = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname.toLowerCase();
    
    return ALLOWED_DOMAINS.some(domain => 
      hostname === domain || hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
};

/**
 * Validates Calendly URL format and domain
 */
export const isValidCalendlyUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname.toLowerCase();
    
    // Check if it's a Calendly domain
    const isCalendlyDomain = hostname === 'calendly.com' || hostname.endsWith('.calendly.com');
    
    // Basic format validation for Calendly URLs
    const hasValidPath = urlObj.pathname.length > 1;
    
    return isCalendlyDomain && hasValidPath;
  } catch {
    return false;
  }
};

/**
 * Safely opens an external URL with proper security attributes
 */
export const openSecureUrl = (url: string): void => {
  if (!isAllowedDomain(url)) {
    console.warn('Attempted to open URL from non-allowed domain:', url);
    return;
  }
  
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Validates and opens a Calendly URL securely
 */
export const openCalendlyUrl = (url: string): void => {
  if (!isValidCalendlyUrl(url)) {
    console.warn('Invalid Calendly URL format:', url);
    return;
  }
  
  window.open(url, '_blank', 'noopener,noreferrer');
};

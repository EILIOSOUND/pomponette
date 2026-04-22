import { useState, useEffect } from 'react';

const COOKIE_KEY = 'pomponette_cookie_consent';

export interface ConsentPreferences {
  analytics: boolean;
  marketing: boolean;
}

export function getConsent(): ConsentPreferences | null {
  try {
    const raw = localStorage.getItem(COOKIE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentPreferences;
  } catch {
    return null;
  }
}

export function useConsent() {
  const [consent, setConsent] = useState<ConsentPreferences | null>(getConsent);

  useEffect(() => {
    const handleStorage = () => setConsent(getConsent());
    const handleReset = () => setConsent(null);

    window.addEventListener('storage', handleStorage);
    window.addEventListener('pomponette_reset_cookies', handleReset);
    window.addEventListener('pomponette_consent_updated', handleStorage);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('pomponette_reset_cookies', handleReset);
      window.removeEventListener('pomponette_consent_updated', handleStorage);
    };
  }, []);

  return consent;
}

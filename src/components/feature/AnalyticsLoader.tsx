import { useEffect } from 'react';
import { useConsent } from '@/hooks/useConsent';

/**
 * Charge les scripts analytics UNIQUEMENT si l'utilisateur a accepté les cookies analytiques.
 * Ajouter ici les scripts Google Analytics, Matomo, etc. quand nécessaire.
 * Ce composant est un no-op tant qu'aucun outil analytics n'est configuré.
 */
export default function AnalyticsLoader() {
  const consent = useConsent();

  useEffect(() => {
    if (!consent || !consent.analytics) return;

    // ─── Google Analytics (exemple — décommenter et remplacer G-XXXXXXXX) ───
    // if (document.getElementById('ga-script')) return;
    // const script = document.createElement('script');
    // script.id = 'ga-script';
    // script.async = true;
    // script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX';
    // document.head.appendChild(script);
    // window.dataLayer = window.dataLayer || [];
    // function gtag(...args: unknown[]) { window.dataLayer.push(args); }
    // gtag('js', new Date());
    // gtag('config', 'G-XXXXXXXX');

    // ─── Matomo (exemple — décommenter si utilisé) ───
    // ...

  }, [consent]);

  return null;
}

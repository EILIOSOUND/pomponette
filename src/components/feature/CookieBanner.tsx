import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const COOKIE_KEY = 'pomponette_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setTimeout(() => setVisible(true), 1500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ analytics: true, marketing: true }));
    setVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ analytics: false, marketing: false }));
    setVisible(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ analytics, marketing }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] p-4 md:p-6">
      <div className="mx-auto max-w-4xl rounded-2xl bg-black/95 p-6 text-cream animate-slide-down">
        {!showCustomize ? (
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <p className="font-playfair text-base font-medium text-cream mb-1">
                Nous respectons votre vie privée
              </p>
              <p className="font-inter text-xs leading-relaxed text-cream/70">
                Nous utilisons des cookies pour améliorer votre expérience. Consultez notre{' '}
                <Link to="/politique-cookies" className="text-gold underline hover:text-gold/80">
                  politique de cookies
                </Link>{' '}
                et notre{' '}
                <Link to="/politique-confidentialite" className="text-gold underline hover:text-gold/80">
                  politique de confidentialité
                </Link>.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:flex-nowrap md:shrink-0">
              <button
                onClick={() => setShowCustomize(true)}
                className="whitespace-nowrap rounded-lg border border-cream/20 px-4 py-2 font-inter text-xs text-cream/70 transition-all hover:border-cream/50 hover:text-cream cursor-pointer"
              >
                Personnaliser
              </button>
              <button
                onClick={handleRefuse}
                className="whitespace-nowrap rounded-lg border border-cream/20 px-4 py-2 font-inter text-xs text-cream/70 transition-all hover:border-cream/50 hover:text-cream cursor-pointer"
              >
                Refuser
              </button>
              <button
                onClick={handleAccept}
                className="whitespace-nowrap rounded-lg bg-gold px-5 py-2 font-inter text-xs font-medium text-black transition-all hover:bg-gold/90 cursor-pointer"
              >
                Accepter
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="mb-4 font-playfair text-lg font-medium text-cream">
              Personnaliser les cookies
            </h3>
            <div className="mb-4 space-y-3">
              <div className="flex items-center justify-between rounded-lg border border-cream/10 p-3">
                <div>
                  <p className="font-inter text-sm font-medium text-cream">Cookies essentiels</p>
                  <p className="font-inter text-xs text-cream/50">Nécessaires au fonctionnement du site</p>
                </div>
                <span className="font-inter text-xs text-gold">Toujours actifs</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-cream/10 p-3">
                <div>
                  <p className="font-inter text-sm font-medium text-cream">Cookies analytiques</p>
                  <p className="font-inter text-xs text-cream/50">Mesure d&apos;audience anonymisée</p>
                </div>
                <button
                  onClick={() => setAnalytics(!analytics)}
                  className={`relative h-6 w-11 rounded-full transition-colors cursor-pointer ${analytics ? 'bg-gold' : 'bg-cream/20'}`}
                >
                  <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${analytics ? 'translate-x-5' : 'translate-x-0.5'}`} />
                </button>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-cream/10 p-3">
                <div>
                  <p className="font-inter text-sm font-medium text-cream">Cookies marketing</p>
                  <p className="font-inter text-xs text-cream/50">Publicités personnalisées</p>
                </div>
                <button
                  onClick={() => setMarketing(!marketing)}
                  className={`relative h-6 w-11 rounded-full transition-colors cursor-pointer ${marketing ? 'bg-gold' : 'bg-cream/20'}`}
                >
                  <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${marketing ? 'translate-x-5' : 'translate-x-0.5'}`} />
                </button>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowCustomize(false)}
                className="whitespace-nowrap rounded-lg border border-cream/20 px-4 py-2 font-inter text-xs text-cream/70 transition-all hover:text-cream cursor-pointer"
              >
                Retour
              </button>
              <button
                onClick={handleSaveCustom}
                className="whitespace-nowrap rounded-lg bg-gold px-5 py-2 font-inter text-xs font-medium text-black transition-all hover:bg-gold/90 cursor-pointer"
              >
                Enregistrer mes préférences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

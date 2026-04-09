import { useState, useEffect } from 'react';

const AGE_KEY = 'pomponette_age_verified';

export default function AgeVerification() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem(AGE_KEY);
    if (!verified) {
      setVisible(true);
      setTimeout(() => setMounted(true), 10);
    }
  }, []);

  const handleAccept = () => {
    setMounted(false);
    setTimeout(() => {
      localStorage.setItem(AGE_KEY, 'true');
      setVisible(false);
    }, 400);
  };

  const handleRefuse = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-500 ${
        mounted ? 'bg-black/97 backdrop-blur-sm' : 'bg-black/0'
      }`}
    >
      <div
        className={`relative mx-4 w-full max-w-md transition-all duration-500 ${
          mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
        }`}
      >
        {/* Card */}
        <div className="rounded-3xl bg-cream px-10 py-12 text-center">
          {/* Top ornament */}
          <div className="mx-auto mb-8 flex flex-col items-center gap-3">
            <div className="h-px w-12 bg-gold/50" />
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/5">
              <i className="ri-shield-check-line text-xl text-gold" />
            </div>
            <div className="h-px w-12 bg-gold/50" />
          </div>

          {/* Logo */}
          <div className="mb-6 flex items-center justify-center gap-2.5">
            <img
              src="https://storage.readdy-site.link/project_files/03c08238-6c7d-4d06-8529-e8bd18a2251a/b2c75794-4f3f-4caf-bf90-4236446fa8ef_pomponette_logo.png?v=acc7d23ba030e8d746eff9a6bbd1e295"
              alt="Pomponette"
              className="h-9 w-auto"
            />
            <span className="font-playfair text-xl font-semibold text-black">Pomponette</span>
          </div>

          <h1 className="mb-4 font-playfair text-2xl font-semibold leading-tight text-black">
            Accès réservé aux adultes
          </h1>

          <p className="mb-8 font-inter text-sm leading-relaxed text-black/55">
            Ce site contient du contenu destiné uniquement aux personnes majeures.
            En entrant, vous confirmez avoir au moins{' '}
            <strong className="font-semibold text-black">18 ans</strong>.
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleAccept}
              className="w-full whitespace-nowrap rounded-xl bg-black py-4 font-inter text-sm font-medium tracking-widest text-cream uppercase transition-all duration-300 hover:bg-gold hover:text-black cursor-pointer"
            >
              J&apos;ai 18 ans ou plus
            </button>
            <button
              onClick={handleRefuse}
              className="w-full whitespace-nowrap rounded-xl border border-black/15 bg-transparent py-4 font-inter text-sm font-medium tracking-wide text-black/50 transition-all duration-300 hover:border-black/40 hover:text-black cursor-pointer"
            >
              Quitter le site
            </button>
          </div>

          <p className="mt-7 font-inter text-[11px] leading-relaxed text-black/35">
            En continuant, vous acceptez nos{' '}
            <a href="/cgu" className="text-gold underline hover:text-gold/70">CGU</a>
            {' '}et notre{' '}
            <a href="/politique-confidentialite" className="text-gold underline hover:text-gold/70">
              politique de confidentialité
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';

const NEWSLETTER_URL = 'https://readdy.ai/api/form/d7bd5c8mqd64j87imjc0';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      const body = new URLSearchParams({ email });
      const res = await fetch(NEWSLETTER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-cream">
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5 flex items-center gap-2.5">
              <img
                src="https://storage.readdy-site.link/project_files/03c08238-6c7d-4d06-8529-e8bd18a2251a/b2c75794-4f3f-4caf-bf90-4236446fa8ef_pomponette_logo.png?v=acc7d23ba030e8d746eff9a6bbd1e295"
                alt="Pomponette"
                className="h-9 w-auto"
              />
              <span className="font-playfair text-lg font-semibold text-cream">Pomponette</span>
            </div>
            <div className="mb-5 h-px w-8 bg-gold/40" />
            <p className="font-inter text-[12px] leading-relaxed text-cream/35 italic">
              &ldquo;Le petit secret qui change tout.&rdquo;
            </p>

            {/* Social icons — thin line, modern */}
            <div className="mt-7 flex gap-2.5">
              {[
                { icon: 'ri-twitter-x-line', href: '#', label: 'X (Twitter)' },
                { icon: 'ri-instagram-line', href: '#', label: 'Instagram' },
                { icon: 'ri-tiktok-line', href: '#', label: 'TikTok' },
                { icon: 'ri-facebook-circle-line', href: '#', label: 'Facebook' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="group flex h-8 w-8 items-center justify-center rounded-lg border border-cream/10 text-cream/35 transition-all duration-300 hover:border-gold/50 hover:text-gold hover:bg-gold/5 cursor-pointer"
                >
                  <i className={`${s.icon} text-[13px]`} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/35">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'Pour Elle', href: '/pour-elle' },
                { label: 'Pour Lui', href: '/pour-lui' },
                { label: 'À Deux', href: '/a-deux' },
                { label: 'Guide & Conseils', href: '/guide-conseils' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="font-inter text-[13px] text-cream/50 transition-colors duration-200 hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="mb-5 font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/35">
              Ressources
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'À propos', href: '/a-propos' },
                { label: 'Contact', href: '/contact' },
                { label: 'Divulgation d\'affiliation', href: '/divulgation-affiliation' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="font-inter text-[13px] text-cream/50 transition-colors duration-200 hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Newsletter */}
          <div>
            <h4 className="mb-5 font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/35">
              Légal
            </h4>
            <ul className="mb-8 space-y-3">
              {[
                { label: 'Mentions légales', href: '/mentions-legales' },
                { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
                { label: 'Politique de cookies', href: '/politique-cookies' },
                { label: 'CGU', href: '/cgu' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="font-inter text-[13px] text-cream/50 transition-colors duration-200 hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mini newsletter */}
            <h4 className="mb-4 font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/35">
              Newsletter
            </h4>
            {status === 'success' ? (
              <p className="font-inter text-[12px] text-gold">Merci pour votre inscription !</p>
            ) : (
              <form onSubmit={handleSubmit} data-readdy-form className="flex gap-2">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  required
                  className="flex-1 min-w-0 rounded-lg border border-cream/15 bg-white/5 px-3 py-2.5 font-inter text-[12px] text-cream placeholder-cream/25 outline-none focus:border-gold/50 transition-colors"
                />
                <button
                  type="submit"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold text-black transition-all duration-300 hover:bg-gold/85 cursor-pointer"
                  aria-label="S'inscrire"
                >
                  <i className="ri-send-plane-line text-[13px]" />
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="mt-1.5 font-inter text-[11px] text-red-400">Une erreur est survenue.</p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row md:px-14">
          <p className="font-inter text-[11px] text-cream/30">
            © 2026 Pomponette. Tous droits réservés.
          </p>
          <p className="font-inter text-[11px] text-cream/20">
            Site réservé aux personnes majeures (+18)
          </p>
        </div>
      </div>
    </footer>
  );
}

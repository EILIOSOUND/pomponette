import { useState } from 'react';

const BREVO_FUNCTION_URL = 'https://friqlmdjwwsglgdzvgfd.supabase.co/functions/v1/brevo-subscribe';

export default function NewsletterSection() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [gdpr, setGdpr] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !gdpr) return;
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch(BREVO_FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, ...(firstName.trim() && { firstName: firstName.trim() }) }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus('success');
        setFirstName('');
        setEmail('');
        setGdpr(false);
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Une erreur est survenue. Veuillez réessayer.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Radial gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink/10 blur-3xl" />
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-xl px-6 text-center">
        {/* Brevo placeholder container */}
        <div id="brevo-newsletter-form" />

        <span className="mb-4 inline-block rounded-full border border-gold/30 px-4 py-1.5 font-inter text-xs tracking-widest text-gold uppercase">
          Newsletter
        </span>

        <h2 className="mb-4 font-playfair text-3xl font-semibold leading-tight text-cream md:text-4xl">
          Recevez nos idées complices
        </h2>
        <p className="mb-10 font-inter text-sm leading-relaxed text-pink/80">
          Bons plans, nouveautés et conseils bien-être directement dans votre boîte mail.
        </p>

        {status === 'success' ? (
          <div className="rounded-xl border border-gold/30 bg-gold/10 p-8">
            <i className="ri-check-line mb-3 block text-3xl text-gold" />
            <p className="font-playfair text-lg text-cream">Merci pour votre inscription !</p>
            <p className="mt-2 font-inter text-sm text-cream/60">
              Vous recevrez bientôt nos idées complices.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            data-readdy-form
            className="space-y-4"
          >
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Votre prénom (optionnel)"
              className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-3.5 font-inter text-sm text-cream placeholder-cream/30 outline-none transition-colors focus:border-gold"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email *"
              required
              className="w-full rounded-lg border border-cream/20 bg-transparent px-4 py-3.5 font-inter text-sm text-cream placeholder-cream/30 outline-none transition-colors focus:border-gold"
            />
            <label className="flex cursor-pointer items-start gap-3 text-left">
              <div className="relative mt-0.5 shrink-0">
                <input
                  type="checkbox"
                  name="gdpr"
                  checked={gdpr}
                  onChange={(e) => setGdpr(e.target.checked)}
                  required
                  className="sr-only"
                />
                <div
                  className={`h-4 w-4 rounded border transition-colors ${
                    gdpr ? 'border-gold bg-gold' : 'border-cream/30 bg-transparent'
                  }`}
                >
                  {gdpr && <i className="ri-check-line absolute inset-0 flex items-center justify-center text-[10px] text-black" />}
                </div>
              </div>
              <span className="font-inter text-xs leading-relaxed text-cream/50">
                J&apos;accepte de recevoir les emails de Pomponette et j&apos;ai pris connaissance de la{' '}
                <a href="/politique-confidentialite" className="text-gold underline hover:text-gold/80">
                  politique de confidentialité
                </a>.
              </span>
            </label>

            <button
              type="submit"
              disabled={status === 'loading' || !gdpr}
              className="w-full whitespace-nowrap rounded-lg bg-gold py-4 font-inter text-sm font-medium tracking-wide text-black transition-all duration-300 hover:bg-gold/90 disabled:opacity-50 cursor-pointer"
            >
              {status === 'loading' ? 'Inscription...' : 'Je m\'inscris'}
            </button>

            {status === 'error' && (
              <p className="font-inter text-xs text-red-400">
                {errorMsg || 'Une erreur est survenue. Veuillez réessayer.'}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}

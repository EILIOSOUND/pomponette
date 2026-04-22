import { useState } from 'react';

const CONTACT_URL = 'https://readdy.ai/api/form/d7bd5c8mqd64j87imjcg';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const charLimit = 500;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > charLimit) return;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');
    try {
      const body = new URLSearchParams(form);
      const res = await fetch(CONTACT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="pt-20">
      <section className="bg-black py-20 px-6 text-center">
        <span className="mb-3 inline-block font-inter text-xs tracking-widest text-gold uppercase">Nous écrire</span>
        <h1 className="font-playfair text-4xl font-semibold text-cream md:text-6xl">Contact</h1>
        <p className="mx-auto mt-4 max-w-md font-inter text-sm text-cream/60">Une question, une suggestion ? Nous vous répondons avec plaisir.</p>
      </section>
      <section className="bg-cream py-20 px-6 md:px-12">
        <div className="mx-auto max-w-xl">
          {status === 'success' ? (
            <div className="rounded-xl border border-gold/30 bg-gold/10 p-10 text-center">
              <i className="ri-check-line mb-4 block text-4xl text-gold" />
              <h2 className="mb-2 font-playfair text-2xl font-semibold text-black">Message envoyé !</h2>
              <p className="font-inter text-sm text-dark-gray">Nous vous répondrons dans les plus brefs délais à l&apos;adresse indiquée.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} data-readdy-form className="space-y-5 rounded-xl bg-white p-8">
              <div>
                <label className="mb-1.5 block font-inter text-xs font-medium text-black/70">Nom *</label>
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Votre nom" className="w-full rounded-lg border border-black/10 px-4 py-3 font-inter text-sm text-black outline-none transition-colors focus:border-gold" />
              </div>
              <div>
                <label className="mb-1.5 block font-inter text-xs font-medium text-black/70">Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="votre@email.com" className="w-full rounded-lg border border-black/10 px-4 py-3 font-inter text-sm text-black outline-none transition-colors focus:border-gold" />
              </div>
              <div>
                <label className="mb-1.5 block font-inter text-xs font-medium text-black/70">Message * ({form.message.length}/{charLimit})</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Votre message..." className="w-full resize-none rounded-lg border border-black/10 px-4 py-3 font-inter text-sm text-black outline-none transition-colors focus:border-gold" />
                {form.message.length >= charLimit && <p className="mt-1 font-inter text-xs text-red-500">Limite de {charLimit} caractères atteinte.</p>}
              </div>
              <button type="submit" disabled={status === 'loading'} className="w-full whitespace-nowrap rounded-lg bg-black py-4 font-inter text-sm font-medium text-cream transition-all hover:bg-gold hover:text-black disabled:opacity-50 cursor-pointer">
                {status === 'loading' ? 'Envoi...' : 'Envoyer le message'}
              </button>
              {status === 'error' && <p className="text-center font-inter text-xs text-red-500">Une erreur est survenue. Veuillez réessayer.</p>}
            </form>
          )}
          <div className="mt-8 text-center">
            <p className="font-inter text-xs text-dark-gray/50">Ou écrivez-nous directement à <a href="mailto:shop.pomponette@gmail.com" className="text-gold underline">shop.pomponette@gmail.com</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}

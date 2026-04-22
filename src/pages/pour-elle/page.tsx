import { useState } from 'react';
import ProductCard from '@/components/base/ProductCard';
import NewsletterSection from '@/components/base/NewsletterSection';
import { productsElle } from '@/mocks/products';

const subCategories = ['Tous', 'Vibromasseurs', 'Stimulateurs', 'Lingerie', 'Huiles'];

export default function PourEllePage() {
  const [activeFilter, setActiveFilter] = useState('Tous');

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="/images/723de039b442d9c98921105a49644b9d.jpg"
          alt="Pour Elle"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="mb-3 inline-block rounded-full border border-gold/40 px-4 py-1 font-inter text-[11px] tracking-[0.2em] text-gold uppercase">
            Bien-être féminin
          </span>
          <h1 className="font-playfair text-4xl font-semibold text-cream md:text-6xl">Pour Elle</h1>
          <p className="mt-3 font-inter text-[13px] text-cream/65 max-w-md leading-relaxed">
            Une sélection raffinée de produits pensés pour le plaisir et le bien-être féminin.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="bg-cream py-20 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Header + filters */}
          <div className="mb-10">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-playfair text-2xl font-semibold text-black">Notre sélection</h2>
                <div className="mt-2 h-px w-10 bg-gold/40" />
              </div>
              <span className="font-inter text-[12px] text-black/40">{productsElle.length} produits</span>
            </div>

            {/* Sub-category pills */}
            <div className="flex flex-wrap gap-2">
              {subCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`pill-filter ${activeFilter === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" data-product-shop>
            {productsElle.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <p className="mt-12 text-center font-inter text-[11px] text-black/35">
            * En tant que partenaire affilié Espace Plaisir via Kwanko, nous percevons une commission sur les ventes réalisées via nos liens.{' '}
            <a href="/divulgation-affiliation" className="text-gold underline hover:text-gold/70">En savoir plus</a>
          </p>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}

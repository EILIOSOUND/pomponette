import { useState, useEffect } from 'react';
import ProductCard from '@/components/base/ProductCard';
import NewsletterSection from '@/components/base/NewsletterSection';
import { fetchProducts } from '@/mocks/products';

const subCategories = ['Tous', 'Couple', 'Jeux', 'Huiles', 'Coffrets'];

export default function ADeuxPage() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const normalize = (value: string = '') =>
    value.toLowerCase().trim();

  const filteredProducts = products.filter((p) => {
    if (activeFilter === 'Tous') return true;

    return normalize(p.category) === normalize(activeFilter);
  });

  return (
    <main className="pt-20">
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="/images/1b29687a55b18b0e31a956981e1a6fac.jpg"
          alt="À Deux"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="mb-3 inline-block rounded-full border border-gold/40 px-4 py-1 font-inter text-[11px] tracking-[0.2em] text-gold uppercase">
            Complicité &amp; Partage
          </span>
          <h1 className="font-playfair text-4xl font-semibold text-cream md:text-6xl">À Deux</h1>
          <p className="mt-3 font-inter text-[13px] text-cream/65 max-w-md leading-relaxed">
            Renforcez votre complicité avec des produits conçus pour les moments partagés.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-playfair text-2xl font-semibold text-black">Notre sélection</h2>
                <div className="mt-2 h-px w-10 bg-gold/40" />
              </div>
              <span className="font-inter text-[12px] text-black/40">
                {filteredProducts.length} produits
              </span>
            </div>

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
            {filteredProducts.map((p) => (
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
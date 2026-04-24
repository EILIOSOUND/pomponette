import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import ReassuranceSection from './components/ReassuranceSection';
import ProductCard from '@/components/base/ProductCard';
import NewsletterSection from '@/components/base/NewsletterSection';
import { fetchProducts, Product } from '@/mocks/products';
import { articles } from '@/mocks/articles';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch((error) => {
        console.error('Erreur chargement produits Google Sheet:', error);
      });
  }, []);

  const featuredProducts = products.slice(0, 4);

  return (
    <main>
      <HeroSection />
      <CategorySection />

      <section className="bg-black py-28 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block rounded-full border border-gold/25 px-4 py-1.5 font-inter text-[11px] tracking-[0.2em] text-gold uppercase">
              Sélection du moment
            </span>
            <h2 className="font-playfair text-4xl font-semibold text-cream md:text-5xl">Nos coups de cœur</h2>
            <div className="mx-auto mt-5 h-px w-14 bg-gold/40" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" data-product-shop>
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/pour-elle"
              className="whitespace-nowrap inline-block rounded-full border border-gold/35 px-9 py-3.5 font-inter text-[12px] tracking-widest text-gold uppercase transition-all duration-300 hover:bg-gold hover:text-black hover:border-gold cursor-pointer"
            >
              Voir toute la boutique
            </Link>
          </div>
        </div>
      </section>

      <ReassuranceSection />

      <section className="bg-cream py-28 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block font-inter text-[11px] tracking-[0.2em] text-gold uppercase">
              Bien-être &amp; Conseils
            </span>
            <h2 className="font-playfair text-4xl font-semibold text-black md:text-5xl">Nos Conseils Bien-Être</h2>
            <div className="mx-auto mt-5 h-px w-14 bg-gold/40" />
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {articles.slice(0, 3).map((article) => (
              <article
                key={article.id}
                className="group overflow-hidden rounded-2xl bg-white transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.09)] cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover object-top transition-transform duration-600 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                  <span className="absolute bottom-3 left-4 rounded-full bg-black/50 px-3 py-0.5 font-inter text-[10px] tracking-wide text-cream/90 backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="font-inter text-[11px] text-black/35">{article.readTime}</span>
                    <span className="h-px flex-1 bg-black/8" />
                  </div>

                  <h3 className="mb-2.5 font-playfair text-[17px] font-semibold leading-snug text-black line-clamp-2 tracking-tight">
                    {article.title}
                  </h3>

                  <p className="mb-5 font-inter text-[12px] leading-relaxed text-black/45 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <Link
                    to={`/guide/${article.slug}`}
                    className="inline-flex items-center gap-1.5 font-inter text-[11px] tracking-widest text-gold uppercase transition-all duration-300 hover:gap-2.5 cursor-pointer"
                  >
                    Lire la suite
                    <i className="ri-arrow-right-line" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/guide-conseils"
              className="whitespace-nowrap inline-block rounded-full border border-black/15 px-9 py-3.5 font-inter text-[12px] tracking-widest text-black/60 uppercase transition-all duration-300 hover:bg-black hover:text-cream hover:border-black cursor-pointer"
            >
              Tous nos articles
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}
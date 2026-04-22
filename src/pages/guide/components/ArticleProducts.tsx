import ProductCard from '@/components/base/ProductCard';
import type { Product } from '@/mocks/products';

interface ArticleProductsProps {
  products: Product[];
}

export default function ArticleProducts({ products }: ArticleProductsProps) {
  if (!products.length) return null;

  return (
    <section className="bg-black py-20 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full border border-gold/25 px-4 py-1.5 font-inter text-[11px] tracking-[0.2em] text-gold uppercase">
            Sélection de l&apos;article
          </span>
          <h2 className="font-playfair text-3xl font-semibold text-cream md:text-4xl">Nos coups de cœur</h2>
          <div className="mx-auto mt-4 h-px w-12 bg-gold/40" />
        </div>
        <div
          className={`grid grid-cols-1 gap-6 ${products.length === 1 ? 'sm:grid-cols-1 max-w-xs mx-auto' : 'sm:grid-cols-2 max-w-2xl mx-auto'}`}
          data-product-shop
        >
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Product } from '@/mocks/products';

interface AssociatedProductBlockProps {
  product: Product;
}

export default function AssociatedProductBlock({ product }: AssociatedProductBlockProps) {
  return (
    <aside className="my-8 flex items-center gap-5 rounded-2xl border border-gold/20 bg-white p-5">
      {/* Image */}
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-cream/60">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-top"
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-1.5">
        <span className="font-inter text-[10px] tracking-[0.18em] text-gold uppercase">Produit associé</span>
        <p className="font-playfair text-[15px] font-semibold leading-snug text-black line-clamp-2">
          {product.name}
        </p>
        <p className="font-inter text-[11px] leading-relaxed text-black/45 line-clamp-2">
          {product.description}
        </p>
      </div>

      {/* CTA */}
      <a
        href={product.affiliateUrl}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className="whitespace-nowrap flex-shrink-0 rounded-xl bg-black px-5 py-2.5 font-inter text-[10px] font-medium tracking-widest text-cream uppercase transition-all duration-300 hover:bg-gold hover:text-black cursor-pointer"
      >
        Découvrir
      </a>
    </aside>
  );
}

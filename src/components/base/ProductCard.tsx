import type { Product } from '@/mocks/products';

interface ProductCardProps {
  product: Product;
}

const badgeStyles: Record<string, string> = {
  'Best seller': 'bg-gold/15 text-gold border border-gold/30',
  'Nouveau': 'bg-pink/20 text-pink border border-pink/30',
  'Coup de cœur': 'bg-black/8 text-black/70 border border-black/15',
};

export default function ProductCard({ product }: ProductCardProps) {
  const badgeClass = product.badge ? (badgeStyles[product.badge] ?? 'bg-gold/15 text-gold border border-gold/30') : '';

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
      {/* Badge */}
      {product.badge && (
        <span className={`absolute left-3 top-3 z-10 rounded-full px-2.5 py-0.5 font-inter text-[10px] font-medium tracking-wide ${badgeClass}`}>
          {product.badge}
        </span>
      )}

      {/* Affiliate badge */}
      <span className="absolute right-3 top-3 z-10 rounded-full bg-black/50 px-2 py-0.5 font-inter text-[9px] tracking-wide text-cream/70 backdrop-blur-sm">
        Espace Plaisir
      </span>

      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden bg-cream/60">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-top transition-transform duration-600 group-hover:scale-108"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-400 group-hover:bg-black/5" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 font-playfair text-[15px] font-semibold leading-snug text-black line-clamp-2 tracking-tight">
          {product.name}
        </h3>
        <p className="mb-5 flex-1 font-inter text-[12px] leading-relaxed text-black/50 line-clamp-3">
          {product.description}
        </p>
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="group/btn relative block w-full overflow-hidden whitespace-nowrap rounded-xl bg-black py-3 text-center font-inter text-[11px] font-medium tracking-widest text-cream uppercase transition-all duration-300 hover:bg-gold hover:text-black cursor-pointer"
        >
          <span className="relative z-10 flex items-center justify-center gap-1.5">
            Découvrir l&apos;offre
            <i className="ri-external-link-line text-[10px] transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </span>
        </a>
      </div>
    </article>
  );
}

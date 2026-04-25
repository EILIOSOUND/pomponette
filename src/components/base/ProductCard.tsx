import { useState, useEffect } from "react";
import type { Product } from '@/mocks/products';

interface ProductCardProps {
  product: Product;
}

const badgeStyles: Record<string, string> = {
  'Best seller': 'bg-gold/90 text-black',
  'Nouveau': 'bg-black text-cream',
  'Coup de cœur': 'bg-cream text-black border border-black/20',
};

export default function ProductCard({ product }: ProductCardProps) {
  const badgeClass = product.badge
    ? (badgeStyles[product.badge] ?? 'bg-gold/90 text-black')
    : '';

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (open) setIndex(0);
  }, [open]);

  const sliderImages = [
    product.image,
    ...(product.images || [])
  ];

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
    >
      {product.badge && (
        <span className={`absolute left-4 top-4 z-20 rounded-full px-3 py-1 font-inter text-[10px] font-medium tracking-[0.08em] uppercase ${badgeClass}`}>
          {product.badge}
        </span>
      )}

      <span className="absolute right-3 top-3 z-10 rounded-full bg-black/50 px-2 py-0.5 font-inter text-[9px] tracking-wide text-cream/70 backdrop-blur-sm">
        Espace Plaisir
      </span>

      {/* IMAGE MINIATURE — VERSION NON TRONQUÉE */}
      <div className="relative h-64 w-full bg-cream/60 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          onClick={() => setOpen(true)}
          className="max-h-full max-w-full object-contain cursor-pointer"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 font-playfair text-[15px] font-semibold leading-snug text-black line-clamp-2 tracking-tight">
          {product.title}
        </h3>

        <p className="mb-5 flex-1 font-inter text-[12px] leading-relaxed text-black/50 line-clamp-3">
          {product.description}
        </p>

        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="block w-full rounded-xl bg-black py-3 text-center font-inter text-[11px] font-medium tracking-widest text-cream uppercase transition-all duration-300 hover:bg-gold hover:text-black"
        >
          Découvrir l'offre
        </a>
      </div>

      {open && sliderImages.length > 0 && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              ✕
            </button>

            <button
              onClick={() =>
                setIndex((index - 1 + sliderImages.length) % sliderImages.length)
              }
              className="absolute -left-12 text-white text-4xl"
            >
              ‹
            </button>

            <img
              src={sliderImages[index]}
              className="max-h-[70vh] max-w-[70vw] object-contain rounded-xl shadow-2xl"
            />

            <button
              onClick={() =>
                setIndex((index + 1) % sliderImages.length)
              }
              className="absolute -right-12 text-white text-4xl"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </article>
  );
}
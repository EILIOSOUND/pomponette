import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '@/mocks/articles';
import { productsElle, productsLui, productsDeux } from '@/mocks/products';

const allProducts = [...productsElle, ...productsLui, ...productsDeux];

const categoryLabel: Record<string, string> = {
  elle: 'Pour Elle',
  lui: 'Pour Lui',
  deux: 'À Deux',
};

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const q = query.trim().toLowerCase();

  const matchedArticles = q.length >= 2
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q),
      )
    : [];

  const matchedProducts = q.length >= 2
    ? allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          categoryLabel[p.category]?.toLowerCase().includes(q),
      )
    : [];

  const hasResults = matchedArticles.length > 0 || matchedProducts.length > 0;
  const showEmpty = q.length >= 2 && !hasResults;

  const handleClose = useCallback(() => {
    setQuery('');
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 80);
    } else {
      setQuery('');
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    if (open) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, handleClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Recherche"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Panel */}
      <div className="relative z-10 mx-auto mt-20 w-full max-w-2xl px-4">
        {/* Search input */}
        <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-[0_24px_64px_rgba(0,0,0,0.18)]">
          <div className="flex h-5 w-5 items-center justify-center text-black/30">
            <i className="ri-search-line text-lg" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un article, un produit…"
            className="flex-1 bg-transparent font-inter text-[15px] text-black placeholder-black/30 outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-black/8 text-black/40 transition-colors hover:bg-black/12 cursor-pointer"
            >
              <i className="ri-close-line text-sm" />
            </button>
          )}
          <button
            onClick={handleClose}
            className="ml-1 whitespace-nowrap font-inter text-[11px] tracking-widest text-black/35 uppercase transition-colors hover:text-black/60 cursor-pointer"
          >
            Fermer
          </button>
        </div>

        {/* Results */}
        {(hasResults || showEmpty) && (
          <div className="mt-2 max-h-[60vh] overflow-y-auto rounded-2xl bg-white shadow-[0_24px_64px_rgba(0,0,0,0.14)]">

            {/* Empty state */}
            {showEmpty && (
              <div className="flex flex-col items-center gap-2 py-12 text-center">
                <div className="flex h-12 w-12 items-center justify-center text-black/15">
                  <i className="ri-search-2-line text-3xl" />
                </div>
                <p className="font-inter text-[13px] text-black/40">
                  Aucun résultat pour &ldquo;<span className="text-black/60">{query}</span>&rdquo;
                </p>
              </div>
            )}

            {/* Articles */}
            {matchedArticles.length > 0 && (
              <div>
                <div className="border-b border-black/6 px-5 py-3">
                  <span className="font-inter text-[10px] tracking-[0.18em] text-black/35 uppercase">
                    Articles · {matchedArticles.length}
                  </span>
                </div>
                <ul>
                  {matchedArticles.map((article) => (
                    <li key={article.id}>
                      <Link
                        to={`/guide/${article.slug}`}
                        onClick={handleClose}
                        className="flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-[#faf8f5] cursor-pointer"
                      >
                        <div className="h-12 w-16 shrink-0 overflow-hidden rounded-lg">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-inter text-[13px] font-medium text-black line-clamp-1">
                            {article.title}
                          </p>
                          <p className="mt-0.5 font-inter text-[11px] text-black/40 line-clamp-1">
                            {article.excerpt}
                          </p>
                        </div>
                        <span className="shrink-0 rounded-full bg-black/5 px-2.5 py-0.5 font-inter text-[10px] text-black/40">
                          {article.category}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Products */}
            {matchedProducts.length > 0 && (
              <div className={matchedArticles.length > 0 ? 'border-t border-black/6' : ''}>
                <div className="border-b border-black/6 px-5 py-3">
                  <span className="font-inter text-[10px] tracking-[0.18em] text-black/35 uppercase">
                    Produits · {matchedProducts.length}
                  </span>
                </div>
                <ul>
                  {matchedProducts.slice(0, 6).map((product) => (
                    <li key={product.id}>
                      <a
                        href={product.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        onClick={handleClose}
                        className="flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-[#faf8f5] cursor-pointer"
                      >
                        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-[#f5f2ee]">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-inter text-[13px] font-medium text-black line-clamp-1">
                            {product.name}
                          </p>
                          <p className="mt-0.5 font-inter text-[11px] text-black/40 line-clamp-1">
                            {product.description}
                          </p>
                        </div>
                        <span className="shrink-0 rounded-full bg-black/5 px-2.5 py-0.5 font-inter text-[10px] text-black/40">
                          {categoryLabel[product.category]}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Footer hint */}
            {hasResults && (
              <div className="border-t border-black/6 px-5 py-3 text-center">
                <span className="font-inter text-[10px] text-black/25">
                  Appuie sur <kbd className="rounded bg-black/6 px-1.5 py-0.5 font-mono text-[10px]">Échap</kbd> pour fermer
                </span>
              </div>
            )}
          </div>
        )}

        {/* Suggestions when empty query */}
        {q.length < 2 && (
          <div className="mt-2 rounded-2xl bg-white px-5 py-4 shadow-[0_24px_64px_rgba(0,0,0,0.14)]">
            <p className="mb-3 font-inter text-[10px] tracking-[0.18em] text-black/30 uppercase">Suggestions</p>
            <div className="flex flex-wrap gap-2">
              {['massage', 'lubrifiant', 'vibromasseur', 'couple', 'confiance', 'huile'].map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="whitespace-nowrap rounded-full border border-black/10 px-3.5 py-1.5 font-inter text-[12px] text-black/50 transition-all hover:border-gold/40 hover:text-black/70 cursor-pointer"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

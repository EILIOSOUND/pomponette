import { Link } from 'react-router-dom';
import type { Article } from '@/mocks/articles';

interface ArticleRelatedProps {
  articles: Article[];
}

export default function ArticleRelated({ articles }: ArticleRelatedProps) {
  if (!articles.length) return null;

  return (
    <section className="bg-cream py-20 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block font-inter text-[11px] tracking-[0.2em] text-gold uppercase">
            Continuer la lecture
          </span>
          <h2 className="font-playfair text-3xl font-semibold text-black md:text-4xl">Articles liés</h2>
          <div className="mx-auto mt-4 h-px w-12 bg-gold/40" />
        </div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/guide/${article.slug}`}
              className="group overflow-hidden rounded-2xl bg-white transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.09)] cursor-pointer block"
            >
              <article>
              <div className="relative h-52 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover object-top transition-transform duration-600 group-hover:scale-105"
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
                  <span className="font-inter text-[11px] text-black/30">{article.date}</span>
                </div>
                <h3 className="mb-2.5 font-playfair text-[17px] font-semibold leading-snug text-black line-clamp-2 tracking-tight">
                  {article.title}
                </h3>
                <p className="mb-5 font-inter text-[12px] leading-relaxed text-black/45 line-clamp-3">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 font-inter text-[11px] tracking-widest text-gold uppercase transition-all duration-300 group-hover:gap-2.5">
                  Lire l&apos;article
                  <i className="ri-arrow-right-line" />
                </span>
              </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { articles } from '@/mocks/articles';
import NewsletterSection from '@/components/base/NewsletterSection';

export default function GuideConseilsPage() {
  return (
    <main className="pt-20">
      <section className="bg-black py-20 px-6 text-center">
        <span className="mb-3 inline-block font-inter text-xs tracking-widest text-gold uppercase">Bien-être & Intimité</span>
        <h1 className="font-playfair text-4xl font-semibold text-cream md:text-6xl">Guide & Conseils</h1>
        <p className="mx-auto mt-4 max-w-xl font-inter text-sm leading-relaxed text-cream/60">
          Des articles bienveillants et élégants sur l&apos;intimité, le bien-être et la communication au sein du couple.
        </p>
      </section>
      <section className="bg-cream py-20 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.id} className="group overflow-hidden rounded-xl bg-white">
                <div className="relative h-52 overflow-hidden">
                  <img src={article.image} alt={article.title} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-pink/20 px-3 py-1 font-inter text-xs text-black/70">{article.category}</span>
                    <span className="font-inter text-xs text-dark-gray/50">{article.readTime} de lecture</span>
                  </div>
                  <h2 className="mb-2 font-playfair text-xl font-semibold leading-snug text-black">{article.title}</h2>
                  <p className="mb-4 font-inter text-xs leading-relaxed text-dark-gray line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-inter text-xs text-dark-gray/40">{article.date}</span>
                    <Link
                      to={`/guide/${article.slug}`}
                      className="inline-flex items-center gap-1 font-inter text-xs text-gold cursor-pointer hover:gap-2 transition-all"
                    >
                      Lire <i className="ri-arrow-right-line" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <NewsletterSection />
    </main>
  );
}

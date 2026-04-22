import type { Article } from '@/mocks/articles';

interface ArticleHeroProps {
  article: Article;
}

export default function ArticleHero({ article }: ArticleHeroProps) {
  return (
    <section className="relative h-[520px] md:h-[620px] w-full overflow-hidden">
      {/* Background image */}
      <img
        src={article.image}
        alt={article.title}
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/75" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-16 px-6 text-center">
        {/* Category pill */}
        <span className="mb-5 inline-block rounded-full border border-gold/50 bg-black/30 px-4 py-1.5 font-inter text-[11px] tracking-[0.2em] text-gold uppercase backdrop-blur-sm">
          {article.category}
        </span>

        {/* Title */}
        <h1 className="mx-auto mb-6 max-w-3xl font-playfair text-3xl font-semibold leading-tight text-cream md:text-5xl">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-5 font-inter text-[12px] text-cream/60">
          <span className="flex items-center gap-1.5">
            <i className="ri-time-line text-gold/70" />
            {article.readTime} de lecture
          </span>
          <span className="h-3 w-px bg-cream/25" />
          <span className="flex items-center gap-1.5">
            <i className="ri-calendar-line text-gold/70" />
            {article.date}
          </span>
        </div>
      </div>
    </section>
  );
}

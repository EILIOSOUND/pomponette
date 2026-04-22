import { useParams, Link, Navigate } from 'react-router-dom';
import { articles } from '@/mocks/articles';
import { featuredProducts, productsDeux } from '@/mocks/products';
import { articleContents } from '@/mocks/articleContents';
import ArticleHero from './components/ArticleHero';
import ArticleProducts from './components/ArticleProducts';
import ArticleRelated from './components/ArticleRelated';
import TipBlock from './components/TipBlock';
import KeyTakeawayBlock from './components/KeyTakeawayBlock';
import AssociatedProductBlock from './components/AssociatedProductBlock';
import NewsletterSection from '@/components/base/NewsletterSection';

const allProducts = [...featuredProducts, ...productsDeux];

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/guide-conseils" replace />;
  }

  const relatedArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);
  const articleProducts = featuredProducts.slice(0, 2);
  const content = articleContents.find((c) => c.slug === slug);

  return (
    <main className="pt-20">
      {/* Hero */}
      <ArticleHero article={article} />

      {/* Breadcrumb */}
      <div className="bg-cream border-b border-black/6 px-6 py-3">
        <div className="mx-auto flex max-w-3xl items-center gap-2 font-inter text-[11px] text-black/40">
          <Link to="/" className="transition-colors hover:text-gold cursor-pointer">Accueil</Link>
          <i className="ri-arrow-right-s-line text-[12px]" />
          <Link to="/guide-conseils" className="transition-colors hover:text-gold cursor-pointer">Guide &amp; Conseils</Link>
          <i className="ri-arrow-right-s-line text-[12px]" />
          <span className="text-black/60 line-clamp-1">{article.title}</span>
        </div>
      </div>

      {/* Article body */}
      <section className="bg-cream px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[700px]">

          {/* Chapeau / intro */}
          <p className="mb-10 border-l-2 border-gold/50 pl-5 font-playfair text-[18px] italic leading-relaxed text-black/70">
            {article.excerpt}
          </p>

          {/* Dynamic content */}
          {content ? (
            content.sections.map((section, i) => {
              if (section.type === 'h2') {
                return (
                  <h2 key={i} className="mb-4 mt-10 font-playfair text-2xl font-semibold text-black first:mt-0">
                    {section.content}
                  </h2>
                );
              }
              if (section.type === 'paragraph') {
                return (
                  <p key={i} className="mb-6 font-inter text-[14px] leading-[1.9] text-black/60">
                    {section.content}
                  </p>
                );
              }
              if (section.type === 'tip') {
                return (
                  <TipBlock key={i} title={section.title}>
                    {section.content}
                  </TipBlock>
                );
              }
              if (section.type === 'keyTakeaway' && section.items) {
                return (
                  <KeyTakeawayBlock key={i} title={section.title} items={section.items} />
                );
              }
              if (section.type === 'associatedProduct' && section.productId) {
                const prod = allProducts.find((p) => p.id === section.productId);
                if (prod) return <AssociatedProductBlock key={i} product={prod} />;
              }
              return null;
            })
          ) : (
            /* Fallback placeholder si pas de contenu encore */
            <>
              <h2 className="mb-4 font-playfair text-2xl font-semibold text-black">Comprendre l&apos;essentiel</h2>
              <p className="mb-6 font-inter text-[14px] leading-[1.9] text-black/60">
                Le contenu de cet article sera disponible très prochainement. En attendant, découvrez nos autres guides et conseils sur le bien-être intime.
              </p>
              <TipBlock title="Le conseil Pomponette">
                Prenez le temps d&apos;explorer à votre rythme. Il n&apos;y a pas de bonne ou mauvaise façon d&apos;aborder ce sujet — l&apos;essentiel est de rester à l&apos;écoute de vos envies et de celles de votre partenaire.
              </TipBlock>
              <KeyTakeawayBlock
                title="À retenir"
                items={[
                  'La communication est la base de toute relation épanouie.',
                  'Prenez le temps d\'explorer vos envies sans jugement.',
                  'Chaque personne est unique — adaptez ces conseils à votre situation.',
                ]}
              />
            </>
          )}

          {/* CTA back to guide */}
          <div className="mt-14 flex flex-col items-center gap-4 border-t border-black/8 pt-10 text-center">
            <span className="font-inter text-[12px] tracking-[0.15em] text-black/35 uppercase">Continuer à explorer</span>
            <Link
              to="/guide-conseils"
              className="whitespace-nowrap inline-flex items-center gap-2 rounded-full border border-black/15 px-8 py-3.5 font-inter text-[12px] tracking-widest text-black/60 uppercase transition-all duration-300 hover:bg-black hover:text-cream hover:border-black cursor-pointer"
            >
              <i className="ri-arrow-left-line" />
              Tous les articles
            </Link>
          </div>
        </div>
      </section>

      {/* Products section */}
      <ArticleProducts products={articleProducts} />

      {/* Related articles */}
      <ArticleRelated articles={relatedArticles} />

      <NewsletterSection />
    </main>
  );
}

import NewsletterSection from '@/components/base/NewsletterSection';

export default function AProposPage() {
  return (
    <main className="pt-20">
      <section className="bg-black py-20 px-6 text-center">
        <span className="mb-3 inline-block font-inter text-xs tracking-widest text-gold uppercase">Notre histoire</span>
        <h1 className="font-playfair text-4xl font-semibold text-cream md:text-6xl">À propos</h1>
      </section>
      <section className="bg-cream py-20 px-6 md:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <div className="mb-4 h-px w-16 bg-gold/40" />
            <h2 className="mb-6 font-playfair text-3xl font-semibold text-black">L&apos;histoire de Pomponette</h2>
            <p className="mb-5 font-playfair text-lg italic leading-relaxed text-black/70">
              Et si votre bien-être intime devenait enfin une évidence, sans gêne ni compromis ?
            </p>
            <p className="mb-4 font-inter text-sm leading-relaxed text-dark-gray">
              Pomponette est née d&apos;une conviction simple : le plaisir et l&apos;intimité méritent la même attention, la même élégance et la même bienveillance que tous les autres aspects de votre vie.
            </p>
            <p className="mb-4 font-inter text-sm leading-relaxed text-dark-gray">
              Dans un monde où la sexualité est encore trop souvent abordée avec maladresse ou vulgarité, nous avons choisi une autre voie.
              Un espace raffiné, rassurant, pensé pour vous — où vous pouvez explorer, découvrir et vous épanouir en toute sérénité.
            </p>
            <p className="mb-4 font-inter text-sm leading-relaxed text-dark-gray">
              Chaque produit est sélectionné avec exigence : qualité, sécurité, design.
              Rien n&apos;est laissé au hasard.
              Parce que vous méritez ce qu&apos;il se fait de mieux, nous collaborons avec Espace Plaisir, référence française du bien-être intime.
            </p>
            <p className="mb-4 font-inter text-sm leading-relaxed text-dark-gray">
              Pomponette, c&apos;est plus qu&apos;une sélection.
              C&apos;est une invitation à vous reconnecter à vous-même, à votre plaisir, et à ce qui vous fait du bien.
            </p>
            <p className="font-inter text-sm font-medium leading-relaxed text-black">
              Le petit secret qui change tout — pour elle, pour lui, pour vous deux.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: 'ri-shield-check-line', title: 'Discrétion', desc: 'Votre vie privée est sacrée. Nous ne partageons jamais vos données.' },
              { icon: 'ri-heart-3-line', title: 'Bienveillance', desc: 'Un regard positif et sans jugement sur l\'intimité et le plaisir.' },
              { icon: 'ri-award-line', title: 'Excellence', desc: 'Uniquement des produits de qualité premium, testés et approuvés.' },
            ].map((v) => (
              <div key={v.title} className="rounded-xl bg-white p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <i className={`${v.icon} text-xl text-gold`} />
                </div>
                <h3 className="mb-2 font-playfair text-lg font-semibold text-black">{v.title}</h3>
                <p className="font-inter text-xs leading-relaxed text-dark-gray">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <NewsletterSection />
    </main>
  );
}

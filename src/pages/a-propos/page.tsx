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
            <p className="mb-4 font-inter text-sm leading-relaxed text-dark-gray">
              Pomponette est née d&apos;une conviction simple : le bien-être intime mérite la même attention, la même élégance et la même bienveillance que tout autre aspect de notre santé et de notre bonheur.
            </p>
            <p className="mb-4 font-inter text-sm leading-relaxed text-dark-gray">
              Dans un monde où la sexualité est encore trop souvent abordée avec maladresse ou vulgarité, nous avons voulu créer un espace différent — raffiné, rassurant, et profondément humain. Un endroit où chacun peut explorer, découvrir et s&apos;épanouir en toute sérénité.
            </p>
            <p className="mb-4 font-inter text-sm leading-relaxed text-dark-gray">
              Notre sélection est pensée avec soin : chaque produit est choisi pour sa qualité, sa sécurité et son élégance. Nous travaillons en partenariat avec Lovehoney, leader mondial du bien-être intime, pour vous proposer ce qu&apos;il se fait de mieux.
            </p>
            <p className="font-inter text-sm leading-relaxed text-dark-gray">
              Pomponette, c&apos;est <strong>le petit secret qui change tout</strong> — pour elle, pour lui, pour vous deux.
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

const items = [
  {
    icon: 'ri-eye-off-line',
    title: 'Discrétion Absolue',
    desc: 'Votre vie privée est notre priorité. Tous nos partenaires garantissent une livraison discrète et confidentielle.',
  },
  {
    icon: 'ri-award-line',
    title: 'Qualité Premium',
    desc: 'Chaque produit est soigneusement sélectionné pour sa qualité, sa sécurité et son élégance.',
  },
  {
    icon: 'ri-links-line',
    title: 'Partenaires Reconnus',
    desc: 'Nous collaborons exclusivement avec Lovehoney, leader mondial du bien-être intime depuis 20 ans.',
  },
];

export default function ReassuranceSection() {
  return (
    <section className="bg-cream py-24 px-6 md:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Divider */}
        <div className="mb-16 flex items-center gap-6">
          <div className="flex-1 h-px bg-black/8" />
          <span className="font-inter text-[10px] tracking-[0.25em] text-black/30 uppercase">Notre engagement</span>
          <div className="flex-1 h-px bg-black/8" />
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {items.map((item, i) => (
            <div key={item.title} className="group flex flex-col items-center text-center">
              {/* Number + icon */}
              <div className="relative mb-6">
                <span className="absolute -top-3 -right-3 font-playfair text-5xl font-semibold text-black/5 select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-black/4 transition-all duration-300 group-hover:bg-gold/10">
                  <i className={`${item.icon} text-xl text-black/40 transition-colors duration-300 group-hover:text-gold`} />
                </div>
              </div>
              <h3 className="mb-3 font-playfair text-lg font-semibold text-black tracking-tight">{item.title}</h3>
              <p className="font-inter text-[13px] leading-relaxed text-black/50 max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

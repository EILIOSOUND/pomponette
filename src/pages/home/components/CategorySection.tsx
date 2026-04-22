import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Pour Elle',
    description: 'Une sélection raffinée de produits pensés pour le plaisir et le bien-être féminin.',
    href: '/pour-elle',
    image: '/images/c3d84e0f8aa397e73a4ae0fc7d24065b.jpg',
  },
  {
    title: 'Pour Lui',
    description: 'Des produits soigneusement sélectionnés pour explorer et enrichir le bien-être masculin.',
    href: '/pour-lui',
    image: '/images/de9004fd0f9648a1cfa3f8bdbb63c5bb.jpg',
  },
  {
    title: 'À Deux',
    description: 'Renforcez votre complicité avec des produits conçus pour les moments partagés.',
    href: '/a-deux',
    image: '/images/d06aaeabadbeb0b141b821fa6ae08205.jpg',
  },
];

export default function CategorySection() {
  return (
    <section className="bg-cream py-28 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block font-inter text-[11px] tracking-[0.2em] text-gold uppercase">Nos univers</span>
          <h2 className="font-playfair text-4xl font-semibold text-black md:text-5xl">Explorez nos univers</h2>
          <div className="mx-auto mt-5 h-px w-14 bg-gold/40" />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              to={cat.href}
              className="group relative overflow-hidden rounded-2xl cursor-pointer block"
              style={{ height: '520px' }}
            >
              {/* Image with zoom */}
              <img
                src={cat.image}
                alt={cat.title}
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Base gradient always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5 transition-all duration-500" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-0">
                <div className="mb-3 h-px w-8 bg-gold/60 transition-all duration-500 group-hover:w-14" />
                <h3 className="mb-3 font-playfair text-3xl font-semibold text-cream leading-tight">
                  {cat.title}
                </h3>
                <p className="mb-5 font-inter text-[13px] leading-relaxed text-cream/0 transition-all duration-400 group-hover:text-cream/80 max-w-xs">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-2 font-inter text-[11px] tracking-widest text-gold uppercase">
                  Découvrir
                  <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

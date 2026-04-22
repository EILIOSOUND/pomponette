import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/f9ad96852406563374ecd695abe0adc3.jpg"
          alt="Pomponette hero"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <div className="animate-fade-up">
          <span className="mb-6 inline-block rounded-full border border-gold/40 px-5 py-1.5 font-inter text-xs tracking-widest text-gold uppercase">
            Bien-être intime élégant
          </span>

          <h1 className="mb-4 font-playfair text-5xl font-semibold leading-tight text-cream md:text-7xl">
            Pomponette
          </h1>

          <p className="mb-10 font-playfair text-lg italic text-pink/90 md:text-2xl">
            &ldquo;Le petit secret qui change tout.&rdquo;
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/pour-elle"
              className="whitespace-nowrap rounded-full bg-gold px-8 py-3.5 font-inter text-sm font-medium tracking-wide text-black transition-all duration-300 hover:bg-gold/90 hover:scale-105 cursor-pointer"
            >
              Découvrir la boutique
            </Link>
            <Link
              to="/guide-conseils"
              className="whitespace-nowrap rounded-full border border-cream/40 px-8 py-3.5 font-inter text-sm font-medium tracking-wide text-cream transition-all duration-300 hover:border-cream hover:bg-cream/10 cursor-pointer"
            >
              Guide & Conseils
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-gold">
        <span className="font-inter text-xs tracking-widest text-cream/40 uppercase">Découvrir</span>
        <i className="ri-arrow-down-line text-gold text-lg" />
      </div>
    </section>
  );
}

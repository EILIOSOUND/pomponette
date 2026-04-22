import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchOverlay from '@/components/feature/SearchOverlay';

const navLinks = [
  { label: 'Pour Elle', href: '/pour-elle' },
  { label: 'Pour Lui', href: '/pour-lui' },
  { label: 'À Deux', href: '/a-deux' },
  { label: 'Guide & Conseils', href: '/guide-conseils' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const isTransparent = !scrolled && isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled || !isHome
          ? 'bg-cream/96 backdrop-blur-xl border-b border-gold/10 h-16'
          : 'bg-transparent h-20'
      }`}
    >
      <nav className="flex h-full items-center justify-between px-6 md:px-14">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
          <img
            src="https://storage.readdy-site.link/project_files/03c08238-6c7d-4d06-8529-e8bd18a2251a/44a885d9-4740-4a9e-a62d-f0c390c97596_pomponette_logo2.png?v=9d5af8ddca74dabf7b373490880c1a9e"
            alt="Pomponette"
            className="h-9 w-auto transition-opacity duration-300 group-hover:opacity-80"
          />
          <span
            className={`font-playfair text-lg font-semibold tracking-wide transition-colors duration-300 ${
              isTransparent ? 'text-cream' : 'text-black'
            }`}
          >
            Pomponette
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`relative font-inter text-[13px] tracking-wide transition-colors duration-300 group ${
                    isTransparent
                      ? 'text-cream/75 hover:text-cream'
                      : 'text-black/60 hover:text-black'
                  } ${isActive ? (isTransparent ? 'text-cream' : 'text-black') : ''}`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Search button desktop */}
        <button
          onClick={() => setSearchOpen(true)}
          className={`hidden md:flex h-9 w-9 items-center justify-center rounded-lg cursor-pointer transition-all duration-300 ${
            isTransparent
              ? 'text-cream/70 hover:text-cream hover:bg-cream/10'
              : 'text-black/50 hover:text-black hover:bg-black/5'
          }`}
          aria-label="Rechercher"
        >
          <i className="ri-search-line text-[18px]" />
        </button>

        {/* Mobile right actions */}
        <div className="md:hidden flex items-center gap-1">
          <button
            onClick={() => setSearchOpen(true)}
            className={`flex h-9 w-9 items-center justify-center rounded-lg cursor-pointer transition-all duration-300 ${
              isTransparent
                ? 'text-cream/70 hover:text-cream hover:bg-cream/10'
                : 'text-black/50 hover:text-black hover:bg-black/5'
            }`}
            aria-label="Rechercher"
          >
            <i className="ri-search-line text-[18px]" />
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex h-9 w-9 items-center justify-center rounded-lg cursor-pointer transition-all duration-300 ${
              isTransparent
                ? 'text-cream hover:bg-cream/10'
                : 'text-black hover:bg-black/5'
            }`}
            aria-label="Menu"
          >
            <i className="ri-menu-3-line text-xl" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-black/85 backdrop-blur-xl border-t border-gold/10`}
      >
        <ul className="flex flex-col py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-6 py-3.5 font-inter text-[13px] tracking-wide transition-colors hover:text-gold hover:bg-white/5 ${
                  location.pathname === link.href ? 'text-gold' : 'text-white/85'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/a-propos"
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3.5 font-inter text-[13px] tracking-wide text-white/85 transition-colors hover:text-gold hover:bg-white/5"
            >
              À propos
            </Link>
          </li>
        </ul>
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}

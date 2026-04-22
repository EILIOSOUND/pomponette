import { BrowserRouter, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AppRoutes } from './router';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AgeVerification from '@/components/feature/AgeVerification';
import CookieBanner from '@/components/feature/CookieBanner';
import AnalyticsLoader from '@/components/feature/AnalyticsLoader';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.key]);
  return null;
}

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Remonter en haut"
      className={`md:hidden fixed bottom-6 right-5 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-black/80 text-white cursor-pointer transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <i className="ri-arrow-up-line text-[18px]" />
    </button>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <ScrollToTop />
      <AgeVerification />
      <CookieBanner />
      <AnalyticsLoader />
      <Navbar />
      <AppRoutes />
      <Footer />
      <ScrollTopButton />
    </BrowserRouter>
  );
}

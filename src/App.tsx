import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AgeVerification from '@/components/feature/AgeVerification';
import CookieBanner from '@/components/feature/CookieBanner';

export default function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <AgeVerification />
      <CookieBanner />
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

import type { RouteObject } from 'react-router-dom';
import HomePage from '@/pages/home/page';
import PourEllePage from '@/pages/pour-elle/page';
import PourLuiPage from '@/pages/pour-lui/page';
import ADeuxPage from '@/pages/a-deux/page';
import GuideConseilsPage from '@/pages/guide-conseils/page';
import AProposPage from '@/pages/a-propos/page';
import ContactPage from '@/pages/contact/page';
import MentionsLegales from '@/pages/legal/MentionsLegales';
import PolitiqueConfidentialite from '@/pages/legal/PolitiqueConfidentialite';
import PolitiqueCookies from '@/pages/legal/PolitiqueCookies';
import CGU from '@/pages/legal/CGU';
import DivulgationAffiliation from '@/pages/legal/DivulgationAffiliation';
import NotFound from '@/pages/NotFound';

const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/pour-elle', element: <PourEllePage /> },
  { path: '/pour-lui', element: <PourLuiPage /> },
  { path: '/a-deux', element: <ADeuxPage /> },
  { path: '/guide-conseils', element: <GuideConseilsPage /> },
  { path: '/a-propos', element: <AProposPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/mentions-legales', element: <MentionsLegales /> },
  { path: '/politique-confidentialite', element: <PolitiqueConfidentialite /> },
  { path: '/politique-cookies', element: <PolitiqueCookies /> },
  { path: '/cgu', element: <CGU /> },
  { path: '/divulgation-affiliation', element: <DivulgationAffiliation /> },
  { path: '*', element: <NotFound /> },
];

export default routes;

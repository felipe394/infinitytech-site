import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { WhyUsPage } from './pages/WhyUsPage';
import { ContactPage } from './pages/ContactPage';
import { CyberField3D } from './components/3d/CyberField3D';
import { AnimeClickBurst } from './components/anime/AnimeClickBurst';
import { PageTransition } from './components/motion/PageTransition';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path="/home"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/servicos"
          element={
            <PageTransition>
              <ServicesPage />
            </PageTransition>
          }
        />
        <Route
          path="/portfolio"
          element={
            <PageTransition>
              <PortfolioPage />
            </PageTransition>
          }
        />
        <Route
          path="/porquenos"
          element={
            <PageTransition>
              <WhyUsPage />
            </PageTransition>
          }
        />
        <Route
          path="/contato"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', background: '#050a18', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {/* Three.js Global Cyber Particles Background */}
        <CyberField3D />
        
        {/* Anime.js Interactive Click Burst FX */}
        <AnimeClickBurst />

        <Header />
        <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
          <AnimatedRoutes />
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

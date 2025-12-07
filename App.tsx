import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer, StickyMobileBar } from './components/Layout';
import { HomePage } from './pages/Home';
import { IndustrialPage } from './pages/Industrial';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/industrial" element={<IndustrialPage />} />
          </Routes>
        </main>
        <Footer />
        <StickyMobileBar />
      </div>
    </HashRouter>
  );
};

export default App;
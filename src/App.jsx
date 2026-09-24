import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';

export default function App() {
  // Preloader only plays once per visit (not on every client-side route
  // change), so it lives here and unmounts itself once done.
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <CustomCursor />
      <ScrollProgress />
      <div className="min-h-screen flex flex-col grain">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
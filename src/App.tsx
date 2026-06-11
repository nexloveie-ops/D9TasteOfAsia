import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Preloader } from './components/Preloader';
import { Hero } from './components/Hero';
import { ScrollHint } from './components/ScrollHint';
import { HeroScrollBtn } from './components/HeroScrollBtn';
import { CategoryStrip } from './components/CategoryStrip';
import { SpecialChefGrid } from './components/SpecialChefGrid';
import { MenuSection } from './components/MenuSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reservation } from './components/Reservation';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { VisitSidebar } from './components/VisitSidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add('ui-dark', 'full-layout');
    document.body.style.backgroundColor = '#172a2f';
    return () => {
      document.body.classList.remove('ui-dark', 'full-layout');
      document.body.style.backgroundColor = '';
    };
  }, []);

  function openReservation() {
    setSidebarOpen(false);
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Preloader />
      <Header onOpenReservation={openReservation} />
      <main className="site-main tst-dynamic-content full-layout">
        <div className="hero-transition">
          <Hero onOpenReservation={openReservation} />
          <ScrollHint />
          <HeroScrollBtn />
        </div>
        <div id="content-start" className="content-frame">
          <CategoryStrip />
          <SpecialChefGrid />
          <MenuSection />
          <WhyChooseUs />
          <Reservation />
          <BlogSection />
        </div>
      </main>
      <Footer />

      <button type="button" className="fab-reservation" onClick={() => setSidebarOpen(true)}>
        Reservation
      </button>
      <VisitSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}

export default App;

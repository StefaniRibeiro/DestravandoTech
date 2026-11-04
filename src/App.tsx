import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { EbooksSection } from './components/sections/EbooksSection';
import { CtaSection } from './components/sections/CtaSection';
import { TeamSection } from './components/sections/TeamSection';
import { FaqSection } from './components/sections/FaqSection';

function App() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <EbooksSection />
        <CtaSection />
        <TeamSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

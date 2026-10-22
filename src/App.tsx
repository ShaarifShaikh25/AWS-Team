import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TeamsSection } from './components/TeamsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { NotificationModal } from './components/NotificationModal';
import type { TeamItem } from './types';

export function App() {
  const [modalTeam, setModalTeam] = useState<TeamItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlaceholderClick = (team: TeamItem) => {
    setModalTeam(team);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalTeam(null);
  };

  return (
    <div className="min-h-screen bg-[#050816] text-[#F8FAFC] selection:bg-[#FF9900]/30 selection:text-white">
      {/* Sticky / Fixed Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* About Community Section */}
        <AboutSection />

        {/* Five Teams Section */}
        <TeamsSection onPlaceholderClick={handlePlaceholderClick} />

        {/* Why Join Us Section */}
        <BenefitsSection />

        {/* How It Works 3-Step Section */}
        <HowItWorksSection />

        {/* FAQ Accordion Section */}
        <FAQSection />

        {/* Final Call to Action */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Placeholder Form Notification Modal */}
      <NotificationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        team={modalTeam}
      />
    </div>
  );
}

export default App;

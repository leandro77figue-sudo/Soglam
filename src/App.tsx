import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceCatalog } from './components/ServiceCatalog';
import { SalonExperience } from './components/SalonExperience';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { RitualSimulatorModal } from './components/RitualSimulatorModal';
import { FloatingBookingBar } from './components/FloatingBookingBar';
import { LegalModal, LegalTab } from './components/LegalModal';
import { CookieBanner } from './components/CookieBanner';
import { ServiceItem } from './data/salonData';

export default function App() {
  const [selectedServices, setSelectedServices] = useState<ServiceItem[]>([]);
  const [simulatorOpen, setSimulatorOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState<LegalTab>('mentions');

  const handleToggleService = (service: ServiceItem) => {
    setSelectedServices((prev) => {
      const exists = prev.some((s) => s.id === service.id);
      if (exists) {
        return prev.filter((s) => s.id !== service.id);
      } else {
        return [...prev, service];
      }
    });
  };

  const handleRemoveService = (id: string) => {
    setSelectedServices((prev) => prev.filter((s) => s.id !== id));
  };

  const handleClearAll = () => {
    setSelectedServices([]);
  };

  const handleOpenLegal = (tab: LegalTab = 'mentions') => {
    setActiveLegalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2A2523] pb-16 sm:pb-0 selection:bg-[#EFE4DC] selection:text-[#2A2523]">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenSimulator={() => setSimulatorOpen(true)}
        selectedCount={selectedServices.length}
      />

      <main className="flex-1">
        {/* Editorial Hero with Visual Showcase */}
        <Hero onOpenSimulator={() => setSimulatorOpen(true)} />

        {/* Complete Interactive Services Catalog */}
        <ServiceCatalog
          selectedServiceIds={selectedServices.map((s) => s.id)}
          onToggleService={handleToggleService}
          onOpenSimulator={() => setSimulatorOpen(true)}
        />

        {/* Salon Experience & Photo Gallery */}
        <SalonExperience />

        {/* Verified Customer Reviews & Google Rating */}
        <ReviewsSection />

        {/* Location, Google Maps & Opening Hours */}
        <LocationSection />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer with Legal Tabs (Mentions, Confidentialité, CGV, Cookies, Contact) */}
      <Footer onOpenLegalTab={handleOpenLegal} />

      {/* Interactive Ritual Simulator & Budget Calculator Modal */}
      <RitualSimulatorModal
        isOpen={simulatorOpen}
        onClose={() => setSimulatorOpen(false)}
        selectedServices={selectedServices}
        onRemoveService={handleRemoveService}
        onClearAll={handleClearAll}
      />

      {/* Interactive Legal Modal (Tabs: Mentions, Confidentialité, CGV, Cookies, Contact) */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        defaultTab={activeLegalTab}
      />

      {/* Cookie Consent Banner (Accepter, Refuser, Personnaliser) */}
      <CookieBanner onOpenLegal={handleOpenLegal} />

      {/* Slim Mobile Floating Action Bar */}
      <FloatingBookingBar
        onOpenSimulator={() => setSimulatorOpen(true)}
        selectedCount={selectedServices.length}
      />
    </div>
  );
}

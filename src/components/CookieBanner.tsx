import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { LegalTab } from './LegalModal';

interface CookieBannerProps {
  onOpenLegal: (tab: LegalTab) => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenLegal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('soglam_cookies_consent');
    if (!consent) {
      // Small delay for clean entrance
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('soglam_cookies_consent', 'accepted');
    setIsVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem('soglam_cookies_consent', 'refused');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Consentement aux cookies"
      className="fixed bottom-14 sm:bottom-4 inset-x-3 sm:inset-x-auto sm:right-4 z-40 max-w-md bg-[#2A2523] text-stone-100 p-4 sm:p-5 rounded-2xl shadow-2xl border border-stone-700/80 animate-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <div className="flex items-center gap-2">
          <Cookie className="w-4 h-4 text-[#BFA08A] shrink-0" />
          <h3 className="text-xs font-serif font-medium text-white">
            Respect de votre vie privée
          </h3>
        </div>
        <button
          type="button"
          onClick={handleRefuse}
          className="text-stone-400 hover:text-white p-1 rounded-md transition-colors"
          aria-label="Fermer le bandeau"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className="text-[11px] text-stone-300 font-light leading-relaxed mb-3.5">
        Ce site utilise des cookies techniques nécessaires à son bon fonctionnement et, avec votre accord, des cookies de mesure d'audience anonymes pour améliorer votre expérience.{' '}
        <button
          type="button"
          onClick={() => onOpenLegal('cookies')}
          className="underline text-[#EFE4DC] hover:text-white"
        >
          En savoir plus
        </button>
        .
      </p>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={handleAcceptAll}
          className="flex-1 py-1.5 px-3 rounded-full text-xs font-medium text-stone-900 bg-[#FAF7F2] hover:bg-white transition-colors"
        >
          Accepter
        </button>
        <button
          type="button"
          onClick={handleRefuse}
          className="py-1.5 px-3 rounded-full text-xs font-medium text-stone-300 hover:text-white bg-stone-800/80 hover:bg-stone-800 transition-colors"
        >
          Refuser
        </button>
        <button
          type="button"
          onClick={() => onOpenLegal('cookies')}
          className="py-1.5 px-3 rounded-full text-xs font-medium text-stone-300 hover:text-white underline underline-offset-2 transition-colors"
        >
          Personnaliser
        </button>
      </div>
    </div>
  );
};
export default CookieBanner;

import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { LegalTab } from './LegalModal';

interface FooterProps {
  onOpenLegalTab?: (tab: LegalTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalTab }) => {
  const handleOpen = (tab: LegalTab) => {
    if (onOpenLegalTab) {
      onOpenLegalTab(tab);
    }
  };

  return (
    <footer className="bg-[#FAF7F2] border-t border-stone-200/60 text-stone-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Brand & Corporate entity note */}
          <div className="md:col-span-5 space-y-2">
            <h3 className="text-xl font-serif font-medium text-stone-900">
              SoGlam' Beauty Bar
            </h3>
            <p className="text-xs text-stone-500 font-light leading-relaxed max-w-sm">
              Bar à ongles, bar à regard et équipe attentionnée à Versailles.<br />
              1 Rue du Général Leclerc, 78000 Versailles.
            </p>
            <p className="text-[11px] text-stone-400 font-light pt-0.5">
              Exploité par la société <strong>AZIIA BEAUTY</strong> (SARL – SIREN 930 749 809).
            </p>
            <p className="text-xs text-stone-500 pt-1">
              Tél : <a href={`tel:${SALON_INFO.phoneRaw}`} className="text-stone-800 underline">{SALON_INFO.phone}</a>
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-7 flex flex-wrap gap-x-8 gap-y-3 text-xs md:justify-end text-stone-600 pt-1">
            <a href="#soins" className="hover:text-stone-900 transition-colors">Soins & Tarifs</a>
            <a href="#institut" className="hover:text-stone-900 transition-colors">L'Institut</a>
            <a href="#avis" className="hover:text-stone-900 transition-colors">Avis Google</a>
            <a href="#acces" className="hover:text-stone-900 transition-colors">Accès & Transports</a>
            <a
              href={SALON_INFO.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 font-medium underline underline-offset-2 hover:text-stone-700 transition-colors"
            >
              Réserver sur Planity
            </a>
          </div>

        </div>

        {/* Legal Tabs & Copyright Line requested by user */}
        <div className="mt-10 pt-6 border-t border-stone-200/60 flex flex-col items-center justify-center text-center space-y-3">
          
          {/* Legal navigation tabs bar */}
          <nav
            aria-label="Informations légales et réglementaires"
            className="flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3.5 gap-y-1.5 text-xs text-stone-600"
          >
            <button
              type="button"
              onClick={() => handleOpen('mentions')}
              className="hover:text-stone-950 hover:underline transition-colors cursor-pointer"
            >
              Mentions légales
            </button>
            <span className="text-stone-300" aria-hidden="true">|</span>

            <button
              type="button"
              onClick={() => handleOpen('confidentialite')}
              className="hover:text-stone-950 hover:underline transition-colors cursor-pointer"
            >
              Politique de confidentialité
            </button>
            <span className="text-stone-300" aria-hidden="true">|</span>

            <button
              type="button"
              onClick={() => handleOpen('cgv')}
              className="hover:text-stone-950 hover:underline transition-colors cursor-pointer"
            >
              CGV
            </button>
            <span className="text-stone-300" aria-hidden="true">|</span>

            <button
              type="button"
              onClick={() => handleOpen('cookies')}
              className="hover:text-stone-950 hover:underline transition-colors cursor-pointer"
            >
              Cookies
            </button>
            <span className="text-stone-300" aria-hidden="true">|</span>

            <button
              type="button"
              onClick={() => handleOpen('contact')}
              className="hover:text-stone-950 hover:underline transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Exact required copyright text */}
          <p className="text-[11px] sm:text-xs text-stone-500 font-light tracking-wide">
            © 2026 AZIIA BEAUTY – So Glam Beauty Bar – Tous droits réservés
          </p>
        </div>

      </div>
    </footer>
  );
};
export default Footer;

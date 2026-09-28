import React, { useState } from 'react';
import { Calendar, Phone, Menu, X, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenSimulator: () => void;
  selectedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSimulator, selectedCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-stone-200/50 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Brand */}
          <a
            href="#"
            className="text-lg sm:text-xl font-serif tracking-tight text-stone-900 hover:text-stone-700 transition-colors shrink-0"
          >
            SoGlam' <span className="font-light text-stone-600 text-sm sm:text-base">Beauty Bar</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-[11px] font-medium uppercase tracking-wider text-stone-600">
            <a
              href="#soins"
              className="hover:text-stone-900 transition-colors py-1"
            >
              Soins & Tarifs
            </a>
            <a
              href="#institut"
              className="hover:text-stone-900 transition-colors py-1"
            >
              L'Institut
            </a>
            <a
              href="#avis"
              className="hover:text-stone-900 transition-colors py-1"
            >
              Avis
            </a>
            <a
              href="#acces"
              className="hover:text-stone-900 transition-colors py-1"
            >
              Accès
            </a>
            {selectedCount > 0 && (
              <button
                type="button"
                onClick={onOpenSimulator}
                className="flex items-center gap-1.5 text-stone-900 font-semibold bg-[#EFE4DC] px-2.5 py-1 rounded-full text-[11px] transition-colors hover:bg-[#E6D7CD]"
              >
                <Sparkles className="w-3 h-3 text-[#BFA08A]" />
                <span>Mon Rituel ({selectedCount})</span>
              </button>
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="hidden lg:inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors"
              title="Appeler l'institut"
            >
              <Phone className="w-3.5 h-3.5 text-stone-400" />
              <span>{SALON_INFO.phone}</span>
            </a>

            <a
              href={SALON_INFO.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-xs font-medium tracking-wide text-white bg-[#2A2523] hover:bg-stone-800 rounded-full transition-all duration-200 shadow-xs shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 text-[#EFE4DC]" />
              <span>
                <span className="hidden sm:inline">Réserver en ligne</span>
                <span className="sm:hidden">Réserver</span>
              </span>
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-600 hover:text-stone-900 focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200/60 bg-[#FAF7F2] px-6 py-6 space-y-4 animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-3 text-sm text-stone-700">
            <a
              href="#soins"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-950 transition-colors"
            >
              Soins & Tarifs
            </a>
            <a
              href="#institut"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-950 transition-colors"
            >
              L'Institut
            </a>
            <a
              href="#avis"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-950 transition-colors"
            >
              Avis Clients (4.6★)
            </a>
            <a
              href="#acces"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-950 transition-colors"
            >
              Accès & Horaires
            </a>
            {selectedCount > 0 && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSimulator();
                }}
                className="flex items-center justify-between text-left py-1 text-stone-900 font-medium"
              >
                <span>Mon Rituel</span>
                <span className="text-xs bg-[#EFE4DC] px-2 py-0.5 rounded-full">
                  {selectedCount} soin{selectedCount > 1 ? 's' : ''}
                </span>
              </button>
            )}
          </nav>

          <div className="pt-4 border-t border-stone-200/60 flex flex-col gap-2.5">
            <a
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-stone-700 bg-stone-100 rounded-full"
            >
              <Phone className="w-3.5 h-3.5 text-stone-500" />
              <span>{SALON_INFO.phone}</span>
            </a>
            <a
              href={SALON_INFO.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-white bg-[#2A2523] rounded-full"
            >
              <Calendar className="w-3.5 h-3.5 text-[#EFE4DC]" />
              <span>Prendre rendez-vous sur Planity</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

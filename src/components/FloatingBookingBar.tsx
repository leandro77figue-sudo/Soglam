import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface FloatingBookingBarProps {
  onOpenSimulator: () => void;
  selectedCount: number;
}

export const FloatingBookingBar: React.FC<FloatingBookingBarProps> = ({
  onOpenSimulator,
  selectedCount,
}) => {
  return (
    <div className="fixed bottom-3 inset-x-3 z-30 sm:hidden">
      <div className="max-w-xs mx-auto bg-[#2A2523]/95 backdrop-blur-md text-white rounded-full p-1.5 pl-3.5 pr-1.5 shadow-lg flex items-center justify-between gap-2.5 border border-stone-800/80">
        
        {/* Left side: phone or ritual */}
        {selectedCount > 0 ? (
          <button
            type="button"
            onClick={onOpenSimulator}
            className="text-[11px] text-[#EFE4DC] font-medium truncate hover:text-white"
          >
            {selectedCount} soin{selectedCount > 1 ? 's' : ''} choisi{selectedCount > 1 ? 's' : ''}
          </button>
        ) : (
          <a
            href={`tel:${SALON_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 text-[11px] text-stone-300 hover:text-white"
          >
            <Phone className="w-3 h-3 text-[#EFE4DC]" />
            <span>{SALON_INFO.phone}</span>
          </a>
        )}

        {/* Right side: Planity button */}
        <a
          href={SALON_INFO.planityUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] font-medium text-[#2A2523] bg-[#FAF7F2] hover:bg-white rounded-full transition-all shrink-0 shadow-xs"
        >
          <Calendar className="w-3 h-3 text-[#BFA08A]" />
          <span>Réserver</span>
        </a>

      </div>
    </div>
  );
};
export default FloatingBookingBar;

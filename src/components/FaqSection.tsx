import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/salonData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-10 sm:py-14 md:py-20 bg-white border-t border-stone-200/50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-7 sm:mb-10">
          <p className="text-[11px] uppercase tracking-widest text-stone-500 font-medium mb-1.5">
            Informations pratiques
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-normal text-stone-900">
            Questions fréquentes
          </h2>
        </div>

        <div className="divide-y divide-stone-100">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div key={idx} className="py-3.5 sm:py-4">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 text-left font-serif font-medium text-stone-900 text-sm sm:text-base hover:text-stone-700 transition-colors py-0.5"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-stone-800' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-2 text-xs sm:text-sm text-stone-600 font-light leading-relaxed animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default FaqSection;

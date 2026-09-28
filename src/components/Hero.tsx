import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowDown, Star } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { salonImages } from '../assets/images';

interface HeroProps {
  onOpenSimulator?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [currentStatus, setCurrentStatus] = useState<{ open: boolean; text: string }>({
    open: true,
    text: 'Ouvert aujourd’hui',
  });

  useEffect(() => {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours() + now.getMinutes() / 60;

    if (day === 0) {
      setCurrentStatus({ open: false, text: 'Fermé le dimanche' });
    } else if (day === 6) {
      if (hours >= 10 && hours < 19) {
        setCurrentStatus({ open: true, text: 'Ouvert jusqu’à 19h00' });
      } else {
        setCurrentStatus({ open: false, text: 'Fermé · Ouvre samedi 10h' });
      }
    } else {
      if (hours >= 10.5 && hours < 19.5) {
        setCurrentStatus({ open: true, text: 'Ouvert jusqu’à 19h30' });
      } else {
        setCurrentStatus({ open: false, text: 'Fermé · Ouvre à 10h30' });
      }
    }
  }, []);

  return (
    <section className="relative pt-6 sm:pt-10 md:pt-14 pb-8 sm:pb-12 md:pb-16 overflow-hidden">
      {/* Subtle organic background aura */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 -z-10 w-[min(600px,90vw)] h-[280px] sm:h-[400px] bg-gradient-to-b from-[#EFE4DC]/40 via-[#FAF7F2]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Refined, Elegant Hero Typography (Delicate & not oversized) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto text-center mb-7 sm:mb-10 md:mb-12"
        >
          {/* Status pill & rating */}
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium text-stone-500 mb-3 sm:mb-3.5 tracking-wide">
            <span>Versailles</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${currentStatus.open ? 'bg-emerald-500' : 'bg-stone-400'}`} />
              <span>{currentStatus.text}</span>
            </span>
            <span aria-hidden="true">·</span>
            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-stone-700 hover:text-stone-900 transition-colors"
            >
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>4.6/5 (200+ avis)</span>
            </a>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-stone-900 leading-[1.2] sm:leading-[1.18] text-balance">
            Décor peps, esprit cosy &<br />
            <span className="italic text-stone-600 font-light">équipe attentionnée à Versailles.</span>
          </h1>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-lg mx-auto font-light px-1 sm:px-0">
            À deux pas du célébrissime Château, retrouvez notre bar à regard, notre bar à ongles et notre équipe attentionnée pour mettre en valeur votre beauté naturelle.
          </p>

          {/* Refined, touch-friendly CTA buttons */}
          <div className="mt-5 sm:mt-6 flex flex-row items-center justify-center gap-2.5 sm:gap-3.5 max-w-sm sm:max-w-none mx-auto">
            <a
              href={SALON_INFO.planityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-medium uppercase tracking-wider text-white bg-[#2A2523] hover:bg-stone-800 rounded-full transition-all duration-200 shadow-xs hover:shadow-md min-h-[38px] sm:min-h-[40px]"
            >
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#EFE4DC]" />
              <span>Réserver</span>
            </a>

            <a
              href="#soins"
              className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-4.5 py-2 sm:py-2.5 text-xs font-medium text-stone-700 hover:text-stone-950 bg-white hover:bg-stone-50 border border-stone-200/80 rounded-full transition-all shadow-2xs min-h-[38px] sm:min-h-[40px]"
            >
              <span>Les rituels</span>
              <ArrowDown className="w-3 h-3 text-stone-400" />
            </a>
          </div>
        </motion.div>

        {/* Refined & Well-Proportioned Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4 md:gap-5 items-center"
        >
          {/* Main Storefront view */}
          <div className="md:col-span-7 relative group">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xs bg-stone-100 aspect-[16/10] border border-stone-200/50">
              <img
                src={salonImages.storefront}
                alt="Devanture SoGlam Beauty Bar Versailles"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-[11px] text-stone-500">
              <span className="flex items-center gap-1 font-light truncate pr-2">
                <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                <span className="truncate">1 Rue du Général Leclerc, Versailles</span>
              </span>
              <span className="font-light shrink-0">4 min RER C</span>
            </div>
          </div>

          {/* Secondary Interior & Lash view (2 neat photos side by side on mobile) */}
          <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-2.5 sm:gap-3.5">
            <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-xs bg-stone-100 aspect-[4/3] group border border-stone-200/50">
              <img
                src={salonImages.nailBar}
                alt="Espace bar à ongles SoGlam"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-xs bg-stone-100 aspect-[4/3] group border border-stone-200/50">
              <img
                src={salonImages.lashes}
                alt="Art du regard SoGlam"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
export default Hero;

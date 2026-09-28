import React from 'react';
import { MapPin, Phone, Calendar, Clock, ExternalLink } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const LocationSection: React.FC = () => {
  const todayName = new Intl.DateTimeFormat('fr-FR', { weekday: 'long' })
    .format(new Date())
    .replace(/^./, (str) => str.toUpperCase());

  return (
    <section id="acces" className="py-10 sm:py-14 md:py-20 bg-[#FAF7F2] border-t border-stone-200/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-xl mx-auto text-center mb-8 sm:mb-10">
          <p className="text-[11px] uppercase tracking-widest text-stone-500 font-medium mb-1.5">
            Venir au Salon
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-normal text-stone-900">
            Horaires & Accès
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-stone-600 font-light">
            1 Rue du Général Leclerc, 78000 Versailles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          
          {/* Practical Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white border border-stone-200/60 shadow-xs">
              <h3 className="text-sm font-serif font-medium text-stone-900 mb-3 sm:mb-4 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#BFA08A]" />
                <span>Horaires d'ouverture</span>
              </h3>

              <div className="divide-y divide-stone-100 text-xs">
                {SALON_INFO.hours.map((item, idx) => {
                  const isToday = item.day.toLowerCase() === todayName.toLowerCase();
                  return (
                    <div
                      key={idx}
                      className={`py-1.5 sm:py-2 flex items-center justify-between ${
                        isToday ? 'font-semibold text-stone-900 bg-stone-50/90 -mx-1.5 px-1.5 rounded' : 'text-stone-600'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <span>{item.day}</span>
                        {isToday && (
                          <span className="text-[9px] text-[#BFA08A] font-semibold bg-[#EFE4DC]/60 px-1.5 py-0.5 rounded-full">
                            Aujourd'hui
                          </span>
                        )}
                      </span>
                      <span className="tabular-nums font-mono text-[11px] sm:text-xs">{item.hours}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-3.5 border-t border-stone-100 flex items-center gap-2.5">
                <a
                  href={`tel:${SALON_INFO.phoneRaw}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-stone-700 bg-stone-100/90 hover:bg-stone-200/80 rounded-full transition-colors min-h-[38px]"
                >
                  <Phone className="w-3 h-3 text-stone-500" />
                  <span>{SALON_INFO.phone}</span>
                </a>

                <a
                  href={SALON_INFO.planityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-white bg-[#2A2523] hover:bg-stone-800 rounded-full transition-colors min-h-[38px]"
                >
                  <Calendar className="w-3 h-3 text-[#EFE4DC]" />
                  <span>Prendre RDV</span>
                </a>
              </div>
            </div>

            {/* Access guidance */}
            <div className="p-4 rounded-xl sm:rounded-2xl bg-white/80 border border-stone-200/60 text-xs space-y-1.5 shadow-2xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#BFA08A] shrink-0 mt-0.5" />
                <div className="space-y-1 leading-relaxed">
                  <p className="font-semibold text-stone-900 text-xs">Accès transports & stationnement :</p>
                  <p className="text-[11px] text-stone-600 font-light leading-relaxed">
                    • <strong>RER C</strong> : Versailles Rive Gauche (4 min à pied)<br />
                    • <strong>Lignes N, U & TER</strong> : Versailles Chantiers (8 min)<br />
                    • <strong>Parking</strong> : Cathédrale Saint-Louis & voirie immédiate
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Preview (Refined height) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-stone-200/70 shadow-xs bg-white">
              <div className="relative w-full h-48 sm:h-64 lg:h-72 bg-stone-100">
                <iframe
                  title="Localisation SoGlam Beauty Bar Versailles"
                  src={SALON_INFO.googleMapsEmbed}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-3.5 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-stone-100 text-xs">
                <div>
                  <p className="font-medium text-stone-900 text-xs">1 Rue du Général Leclerc</p>
                  <p className="text-[11px] text-stone-500 font-light">78000 Versailles · Proche Château</p>
                </div>

                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-700 hover:text-stone-950 font-medium underline underline-offset-4 text-xs"
                >
                  <span>Ouvrir dans Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default LocationSection;

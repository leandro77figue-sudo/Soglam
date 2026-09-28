import React from 'react';
import { salonImages } from '../assets/images';
import { SALON_INFO, TEAM_MEMBERS } from '../data/salonData';
import { Sparkles, Eye, Heart } from 'lucide-react';

export const SalonExperience: React.FC = () => {
  return (
    <section id="institut" className="py-10 sm:py-14 md:py-20 bg-white border-t border-stone-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Authentic Presentation */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
          <p className="text-[11px] uppercase tracking-widest text-stone-500 font-medium mb-2">
            À propos de l'institut
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-stone-900 tracking-tight text-balance">
            Décor peps, esprit cosy & équipe attentionnée
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-xl mx-auto px-1 sm:px-0">
            {SALON_INFO.presentation.intro}
          </p>

          {/* Badges from user screenshot */}
          <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {SALON_INFO.badges.map((badge, idx) => (
              <span
                key={idx}
                className="text-[10px] sm:text-[11px] font-medium text-stone-700 bg-[#FAF7F2] border border-stone-200/80 px-2.5 sm:px-3 py-1 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Gallery Using ONLY the 6 Google Maps Photos (Refined 2-col on phone, 3-col on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16">
          {/* Photo 6: Real Storefront */}
          <div className="space-y-1.5 group">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200/60 shadow-xs">
              <img
                src={salonImages.storefront}
                alt="Devanture SoGlam Beauty Bar 1 Rue du Général Leclerc Versailles"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-serif font-medium text-stone-900 truncate">1 Rue du Général Leclerc</p>
              <p className="text-[10px] sm:text-[11px] text-stone-500 font-light truncate">Façade ardoise & lettrage or</p>
            </div>
          </div>

          {/* Photo 2: Real Nail Bar Interior */}
          <div className="space-y-1.5 group">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200/60 shadow-xs">
              <img
                src={salonImages.nailBar}
                alt="Espace bar à ongles SoGlam Versailles"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-serif font-medium text-stone-900 truncate">Bar à ongles</p>
              <p className="text-[10px] sm:text-[11px] text-stone-500 font-light truncate">Manucure russe, semi-permanent & gel</p>
            </div>
          </div>

          {/* Photo 4: Real Floral Wall & Peps Decor */}
          <div className="space-y-1.5 group">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200/60 shadow-xs">
              <img
                src={salonImages.salonDecor}
                alt="Décor peps et mur floral de SoGlam Beauty Bar"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-serif font-medium text-stone-900 truncate">Décor peps & esprit cosy</p>
              <p className="text-[10px] sm:text-[11px] text-stone-500 font-light truncate">Mur floral & velours rose</p>
            </div>
          </div>

          {/* Photo 3: Real Treatment Station */}
          <div className="space-y-1.5 group">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200/60 shadow-xs">
              <img
                src={salonImages.lashes}
                alt="Bar à regard cils et sourcils SoGlam"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-serif font-medium text-stone-900 truncate">Bar à regard</p>
              <p className="text-[10px] sm:text-[11px] text-stone-500 font-light truncate">Extensions, microblading & rehaussement</p>
            </div>
          </div>

          {/* Photo 1: Real Treatment Room */}
          <div className="space-y-1.5 group">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200/60 shadow-xs">
              <img
                src={salonImages.treatmentRoom}
                alt="Cabine de soin et d'épilation"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-serif font-medium text-stone-900 truncate">Cabine de soins privés</p>
              <p className="text-[10px] sm:text-[11px] text-stone-500 font-light truncate">Soin du visage & Candy lips</p>
            </div>
          </div>

          {/* Photo 5: Real Overview */}
          <div className="space-y-1.5 group">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200/60 shadow-xs">
              <img
                src={salonImages.overview}
                alt="Atmosphère cosy SoGlam Beauty Bar"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-serif font-medium text-stone-900 truncate">Atmosphère chaleureuse</p>
              <p className="text-[10px] sm:text-[11px] text-stone-500 font-light truncate">Accueil bienveillant à Versailles</p>
            </div>
          </div>
        </div>

        {/* Short, balanced presentation of the personnel */}
        <div className="border-t border-stone-200/60 pt-10 sm:pt-14">
          <div className="max-w-2xl mx-auto text-center mb-7 sm:mb-10">
            <p className="text-[11px] uppercase tracking-widest text-stone-500 font-medium mb-1.5">
              Le Personnel de l'Institut
            </p>
            <h3 className="text-xl sm:text-2xl font-serif font-medium text-stone-900 tracking-tight">
              Une équipe attentionnée à vos petits soins
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 font-light leading-relaxed px-1 sm:px-0">
              Chaque praticienne de l'institut met son expertise spécifique au service de votre beauté et de votre bien-être.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#FAF7F2] border border-stone-200/70 flex flex-col justify-between space-y-3.5 shadow-2xs hover:border-stone-300 transition-colors"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 shrink-0 shadow-2xs">
                      {idx === 0 ? (
                        <Sparkles className="w-4 h-4 text-[#BFA08A]" />
                      ) : idx === 1 ? (
                        <Heart className="w-4 h-4 text-amber-600" />
                      ) : (
                        <Eye className="w-4 h-4 text-purple-600" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-serif font-medium text-stone-900">
                        {member.name}
                      </h4>
                      <p className="text-[11px] text-stone-500 font-light">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 font-light leading-relaxed">
                    {member.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-stone-200/60">
                  <p className="text-[9px] uppercase font-semibold text-stone-400 tracking-wider mb-1.5">
                    Spécialités
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {member.specialties.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] text-stone-700 bg-white border border-stone-200/60 px-2 py-0.5 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
export default SalonExperience;

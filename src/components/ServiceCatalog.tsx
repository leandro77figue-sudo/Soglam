import React, { useState } from 'react';
import { Calendar, ArrowRight, Sparkles, ChevronDown, Check, Plus, Eye, Droplet, Zap, Heart, Palette } from 'lucide-react';
import { DockNav, DockNavItem } from '@/components/ui/dock-nav';
import { GlowCard } from '@/components/ui/spotlight-card';
import { SERVICES, ServiceItem, SALON_INFO } from '../data/salonData';

interface ServiceCatalogProps {
  selectedServiceIds: string[];
  onToggleService: (service: ServiceItem) => void;
  onOpenSimulator: () => void;
}

interface RitualGroup {
  id: string;
  category: 'onglerie' | 'regard' | 'epilation' | 'visage' | 'maquillage' | 'lifting';
  dockLabel: string;
  title: string;
  subtitle: string;
  startingPrice: number;
  durationRange: string;
  poeticDescription: string;
  highlights: string[];
  planityDirectUrl: string;
  glowColor: 'orange' | 'purple' | 'green' | 'blue' | 'red';
}

const RITUAL_GROUPS: RitualGroup[] = [
  {
    id: 'onglerie',
    category: 'onglerie',
    dockLabel: 'Bar à ongles',
    title: 'Bar à ongles · Mains & Pieds',
    subtitle: 'Prothésiste ongulaire Versailles',
    startingPrice: 15,
    durationRange: '20 à 75 min',
    poeticDescription: 'Les mains et les pieds se font chouchouter dans les règles de l\'art le temps d\'un soin, d\'une pose de semi-permanent, de gel ou de nail art.',
    highlights: [
      'Soin des mains et des pieds',
      'Pose de semi-permanent',
      'Pose de gel sur mesure',
      'Séance de nail art'
    ],
    planityDirectUrl: 'https://www.planity.com/so-glam-78000-versailles',
    glowColor: 'orange',
  },
  {
    id: 'regard',
    category: 'regard',
    dockLabel: 'Bar à regard',
    title: 'Bar à regard · Cils & Sourcils',
    subtitle: 'Microblading, extensions & rehaussement',
    startingPrice: 15,
    durationRange: '20 à 90 min',
    poeticDescription: 'Votre sanctuaire où cils et sourcils bénéficient de la meilleure expertise pour sublimer et intensifier votre beauté naturelle.',
    highlights: [
      'Extensions de cils',
      'Microblading & Microshading',
      'Restructuration des sourcils',
      'Rehaussement de cils & Teinture'
    ],
    planityDirectUrl: 'https://www.planity.com/so-glam-78000-versailles',
    glowColor: 'purple',
  },
  {
    id: 'epilation',
    category: 'epilation',
    dockLabel: 'Épilation',
    title: 'Épilation · Douceur & Précision',
    subtitle: 'À la cire, au fil & définitive',
    startingPrice: 20,
    durationRange: '20 à 30 min',
    poeticDescription: 'Réalisée dans toutes ses versions : douceur de la cire tiède, précision du fil de coton ou confort de l\'épilation définitive.',
    highlights: [
      'Épilation à la cire',
      'Épilation au fil (visage & sourcils)',
      'Épilation définitive haute tolérance'
    ],
    planityDirectUrl: 'https://www.planity.com/so-glam-78000-versailles',
    glowColor: 'blue',
  },
  {
    id: 'visage',
    category: 'visage',
    dockLabel: 'Soin visage',
    title: 'Soin du visage',
    subtitle: 'Éclat & pureté naturelle',
    startingPrice: 65,
    durationRange: '50 min',
    poeticDescription: 'Un soin personnalisé pour purifier, apaiser et illuminer le teint au cœur de l\'atmosphère cosy de l\'institut.',
    highlights: [
      'Nettoyage en profondeur',
      'Hydratation & régénération',
      'Teint frais et éclatant'
    ],
    planityDirectUrl: 'https://www.planity.com/so-glam-78000-versailles',
    glowColor: 'green',
  },
  {
    id: 'maquillage',
    category: 'maquillage',
    dockLabel: 'Maquillage perm.',
    title: 'Maquillage permanent',
    subtitle: 'Candy lips & taches de rousseur',
    startingPrice: 80,
    durationRange: '45 à 120 min',
    poeticDescription: 'Prestations exclusives de dermo-pigmentation pour sublimer la bouche et illuminer le visage en toute délicatesse.',
    highlights: [
      'Candy lips (lèvres repulpées & teintées)',
      'Taches de rousseur naturelles'
    ],
    planityDirectUrl: 'https://www.planity.com/so-glam-78000-versailles',
    glowColor: 'red',
  },
  {
    id: 'lifting',
    category: 'lifting',
    dockLabel: 'Lifting colombien',
    title: 'Lifting colombien',
    subtitle: 'L\'allié des fesses bombées',
    startingPrice: 90,
    durationRange: '45 min',
    poeticDescription: 'L\'allié des fesses bombées sans douleurs ni efforts grâce à la stimulation ciblée par ventouses.',
    highlights: [
      'Galbe fessier sans chirurgie',
      'Tonification cutanée et musculaire',
      'Résultats visibles sans efforts'
    ],
    planityDirectUrl: 'https://www.planity.com/so-glam-78000-versailles',
    glowColor: 'orange',
  },
];

export const ServiceCatalog: React.FC<ServiceCatalogProps> = ({
  selectedServiceIds,
  onToggleService,
  onOpenSimulator,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedGroupId, setExpandedGroupId] = useState<string | null>(null);

  const displayedGroups = activeCategory === 'all'
    ? RITUAL_GROUPS
    : RITUAL_GROUPS.filter(g => g.category === activeCategory);

  const dockItems: DockNavItem[] = [
    {
      label: 'Tous',
      icon: <Sparkles className="w-3.5 h-3.5 text-stone-800" />,
      onClick: () => setActiveCategory('all'),
      active: activeCategory === 'all',
    },
    {
      label: 'Ongles',
      icon: <Sparkles className="w-3.5 h-3.5 text-amber-700/80" />,
      onClick: () => setActiveCategory('onglerie'),
      active: activeCategory === 'onglerie',
    },
    {
      label: 'Regard',
      icon: <Eye className="w-3.5 h-3.5 text-purple-700/80" />,
      onClick: () => setActiveCategory('regard'),
      active: activeCategory === 'regard',
    },
    {
      label: 'Épilation',
      icon: <Zap className="w-3.5 h-3.5 text-sky-700/80" />,
      onClick: () => setActiveCategory('epilation'),
      active: activeCategory === 'epilation',
    },
    {
      label: 'Visage',
      icon: <Droplet className="w-3.5 h-3.5 text-emerald-700/80" />,
      onClick: () => setActiveCategory('visage'),
      active: activeCategory === 'visage',
    },
    {
      label: 'Maquillage',
      icon: <Palette className="w-3.5 h-3.5 text-rose-600/80" />,
      onClick: () => setActiveCategory('maquillage'),
      active: activeCategory === 'maquillage',
    },
    {
      label: 'Lifting',
      icon: <Heart className="w-3.5 h-3.5 text-amber-600/80" />,
      onClick: () => setActiveCategory('lifting'),
      active: activeCategory === 'lifting',
    },
  ];

  return (
    <section id="soins" className="py-10 sm:py-14 md:py-20 bg-[#FAF7F2] border-t border-stone-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with presentation quote */}
        <div className="max-w-2xl mx-auto text-center mb-7 sm:mb-10">
          <p className="text-[11px] uppercase tracking-widest text-stone-500 font-medium mb-2">
            Prestations & Tarifs · Versailles
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-stone-900 tracking-tight text-balance">
            Bar à ongles, bar à regard & rituels sur mesure.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-xl mx-auto px-1 sm:px-0">
            « Avec son décor peps, son esprit cosy et son équipe attentionnée, l’institut de beauté So Glam Beauty Bar, à Versailles, a tout de la parfaite adresse. À deux pas du célébrissime Château, vous y trouverez un large choix d’options pour mettre en valeur votre beauté naturelle. »
          </p>

          {selectedServiceIds.length > 0 && (
            <div className="mt-4 flex items-center justify-center">
              <button
                type="button"
                onClick={onOpenSimulator}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-stone-900 bg-[#EFE4DC] hover:bg-[#E6D7CD] rounded-full transition-colors min-h-[36px] shadow-2xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#BFA08A]" />
                <span>Mon rituel ({selectedServiceIds.length} sélectionné{selectedServiceIds.length > 1 ? 's' : ''})</span>
              </button>
            </div>
          )}
        </div>

        {/* Refined Category Dock / Pills */}
        <div className="mb-7 sm:mb-10">
          <DockNav
            items={dockItems}
            className="w-full max-w-xl mx-auto"
          />
        </div>

        {/* Refined Rituals Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {displayedGroups.map((group) => {
            const isExpanded = expandedGroupId === group.id;
            const subServices = SERVICES.filter(s => s.category === group.category);

            return (
              <GlowCard
                key={group.id}
                glowColor={group.glowColor}
                customSize={true}
                className="min-h-0 sm:min-h-[340px] bg-white/95 border border-stone-200/70 p-5 sm:p-6 justify-between shadow-2xs"
              >
                <div className="space-y-3 sm:space-y-3.5">
                  {/* Top Line: Category & Price Indicator */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-400 uppercase tracking-widest text-[10px] font-medium">
                      {group.dockLabel}
                    </span>
                    <span className="font-serif text-sm sm:text-base font-semibold text-stone-900 tabular-nums">
                      Dès {group.startingPrice} €
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif font-medium text-stone-900 tracking-tight">
                      {group.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-stone-500 font-light mt-0.5">
                      {group.subtitle} · {group.durationRange}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-stone-600 font-light leading-relaxed">
                    {group.poeticDescription}
                  </p>

                  {/* Highlights List */}
                  <ul className="space-y-1.5 pt-1.5 border-t border-stone-100">
                    {group.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-stone-600 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#BFA08A] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expandable sub-services preview */}
                  {isExpanded && (
                    <div className="mt-2.5 pt-2.5 border-t border-stone-100 space-y-1.5 animate-in fade-in duration-200">
                      <p className="text-[10px] text-stone-400 uppercase font-semibold">Prestations détaillées :</p>
                      {subServices.map((service) => {
                        const isSelected = selectedServiceIds.includes(service.id);
                        return (
                          <div
                            key={service.id}
                            className="flex items-center justify-between py-1 text-xs text-stone-700"
                          >
                            <span className="truncate pr-2 font-light text-[11px] sm:text-xs">{service.name}</span>
                            <div className="flex items-center gap-2 shrink-0">
                              <span className="font-medium tabular-nums text-xs">{service.price} €</span>
                              <button
                                type="button"
                                onClick={() => onToggleService(service)}
                                className={`p-1 rounded-full text-xs min-h-[28px] min-w-[28px] flex items-center justify-center transition-colors ${
                                  isSelected ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                                }`}
                                title={isSelected ? 'Retirer' : 'Ajouter au rituel'}
                              >
                                {isSelected ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Card Action Footer: Direct link to Planity */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2.5">
                  <button
                    type="button"
                    onClick={() => setExpandedGroupId(isExpanded ? null : group.id)}
                    className="text-[11px] sm:text-xs text-stone-500 hover:text-stone-900 font-light flex items-center gap-1 transition-colors min-h-[36px] py-1"
                  >
                    <span>{isExpanded ? 'Réduire' : 'Détails & tarifs'}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  <a
                    href={group.planityDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs font-medium uppercase tracking-wider text-white bg-[#2A2523] hover:bg-stone-800 rounded-full transition-all duration-200 shadow-xs group min-h-[36px]"
                  >
                    <Calendar className="w-3 h-3 text-[#EFE4DC] shrink-0" />
                    <span>Prendre RDV</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </a>
                </div>
              </GlowCard>
            );
          })}
        </div>

        {/* Quiet Reassurance Banner */}
        <div className="mt-10 sm:mt-14 p-5 sm:p-6 rounded-2xl bg-white/80 border border-stone-200/60 text-center max-w-lg mx-auto space-y-1.5">
          <p className="text-xs sm:text-sm font-serif font-medium text-stone-900">
            Une équipe attentionnée à votre écoute
          </p>
          <p className="text-[11px] sm:text-xs text-stone-500 font-light leading-relaxed">
            Pour toute demande spécifique ou conseil sur vos soins, notre équipe vous répond au <a href={`tel:${SALON_INFO.phoneRaw}`} className="text-stone-900 font-medium underline">{SALON_INFO.phone}</a>.
          </p>
        </div>

      </div>
    </section>
  );
};
export default ServiceCatalog;

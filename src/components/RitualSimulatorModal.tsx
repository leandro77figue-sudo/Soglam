import React, { useState } from 'react';
import { X, Calendar, Trash2, Clock, Copy, Check } from 'lucide-react';
import { ServiceItem, SALON_INFO } from '../data/salonData';

interface RitualSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServices: ServiceItem[];
  onRemoveService: (id: string) => void;
  onClearAll: () => void;
}

export const RitualSimulatorModal: React.FC<RitualSimulatorModalProps> = ({
  isOpen,
  onClose,
  selectedServices,
  onRemoveService,
  onClearAll,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const totalPrice = selectedServices.reduce((acc, curr) => acc + curr.price, 0);
  const totalMinutes = selectedServices.reduce((acc, curr) => acc + curr.durationMinutes, 0);

  const formatDuration = (minutes: number) => {
    if (minutes === 0) return '0 min';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours === 0) return `${mins} min`;
    if (mins === 0) return `${hours}h00`;
    return `${hours}h${mins < 10 ? '0' : ''}${mins}`;
  };

  const handleCopySummary = () => {
    const text = `Mon rituel SoGlam' Beauty Bar (Versailles) :\n${selectedServices
      .map((s) => `• ${s.name} (${s.duration}) : ${s.price} €`)
      .join('\n')}\n\nDurée estimée : ${formatDuration(totalMinutes)}\nBudget total : ${totalPrice} €\nAdresse : 1 Rue du Général Leclerc, 78000 Versailles\nTél : 01 39 51 81 02\nRéserver : ${SALON_INFO.planityUrl}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl border border-stone-200/60 overflow-hidden animate-in fade-in duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#FAF7F2] border-b border-stone-200/50 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-serif font-medium text-stone-900">
              Votre Sélection de Soins
            </h3>
            <p className="text-xs text-stone-500 font-light">
              Estimation durée & budget
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-full transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-3">
          {selectedServices.length === 0 ? (
            <div className="py-8 text-center text-xs text-stone-500 space-y-2">
              <p>Aucun soin sélectionné pour le moment.</p>
              <button
                type="button"
                onClick={onClose}
                className="text-stone-900 underline font-medium"
              >
                Parcourir la carte des soins
              </button>
            </div>
          ) : (
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs text-stone-400 pb-1">
                <span>{selectedServices.length} prestation{selectedServices.length > 1 ? 's' : ''}</span>
                <button
                  type="button"
                  onClick={onClearAll}
                  className="hover:text-stone-700 transition-colors flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Effacer</span>
                </button>
              </div>

              {selectedServices.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-stone-50/80 border border-stone-100"
                >
                  <div className="min-w-0 pr-3">
                    <p className="text-xs font-serif font-medium text-stone-900 truncate">
                      {service.name}
                    </p>
                    <p className="text-[11px] text-stone-500 font-light">
                      {service.duration} · {service.categoryLabel}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-sm font-serif font-bold text-stone-900 tabular-nums">
                      {service.price} €
                    </span>
                    <button
                      type="button"
                      onClick={() => onRemoveService(service.id)}
                      className="text-stone-400 hover:text-stone-700 p-1"
                      title="Retirer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {selectedServices.length > 0 && (
          <div className="p-6 bg-[#FAF7F2] border-t border-stone-200/50 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1.5 text-stone-600 text-xs">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                <span>Durée : <strong className="font-medium text-stone-900">{formatDuration(totalMinutes)}</strong></span>
              </div>
              <div className="text-right">
                <span className="text-xs text-stone-500 mr-2">Total :</span>
                <span className="text-xl font-serif font-bold text-stone-900 tabular-nums">
                  {totalPrice} €
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href={SALON_INFO.planityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-white bg-[#2A2523] hover:bg-stone-800 rounded-full transition-colors text-center"
              >
                <Calendar className="w-3.5 h-3.5 text-[#EFE4DC]" />
                <span>Réserver sur Planity</span>
              </a>

              <button
                type="button"
                onClick={handleCopySummary}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 rounded-full transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copié dans le presse-papier</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-stone-400" />
                    <span>Copier le récapitulatif</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

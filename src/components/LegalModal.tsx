import React, { useState } from 'react';
import { X, ShieldCheck, FileText, Scale, Cookie, Mail, Phone, MapPin, CheckCircle2, Clock } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export type LegalTab = 'mentions' | 'confidentialite' | 'cgv' | 'cookies' | 'contact';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: LegalTab;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'mentions',
}) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(defaultTab);
  const [analyticsCookies, setAnalyticsCookies] = useState<boolean>(() => {
    return localStorage.getItem('soglam_cookies_consent') === 'accepted';
  });
  const [cookieSavedToast, setCookieSavedToast] = useState(false);

  // Synchronize defaultTab if prop changes
  React.useEffect(() => {
    if (isOpen) {
      setActiveTab(defaultTab);
    }
  }, [isOpen, defaultTab]);

  if (!isOpen) return null;

  const handleSaveCookiePreferences = () => {
    localStorage.setItem('soglam_cookies_consent', analyticsCookies ? 'accepted' : 'refused');
    setCookieSavedToast(true);
    setTimeout(() => setCookieSavedToast(false), 2500);
  };

  const navItems: { id: LegalTab; label: string; icon: React.ReactNode }[] = [
    { id: 'mentions', label: 'Mentions légales', icon: <FileText className="w-4 h-4" /> },
    { id: 'confidentialite', label: 'Politique de confidentialité', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'cgv', label: 'CGV', icon: <Scale className="w-4 h-4" /> },
    { id: 'cookies', label: 'Cookies', icon: <Cookie className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[85vh] bg-[#FAF7F2] rounded-2xl sm:rounded-3xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden text-stone-800"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-5 py-4 sm:px-8 sm:py-5 border-b border-stone-200/80 bg-white/80 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[10px] uppercase font-semibold tracking-widest text-[#BFA08A]">
              Informations Juridiques & Réglementaires
            </span>
            <h2 className="text-lg sm:text-xl font-serif font-medium text-stone-900">
              AZIIA BEAUTY · So Glam Beauty Bar
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation (horizontal scrollable on mobile) */}
        <div className="flex border-b border-stone-200/80 bg-white/50 px-3 sm:px-6 overflow-x-auto no-scrollbar shrink-0">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 py-3 px-3 sm:px-4 text-xs font-medium whitespace-nowrap border-b-2 transition-all shrink-0 ${
                  isActive
                    ? 'border-[#2A2523] text-stone-950 font-semibold'
                    : 'border-transparent text-stone-500 hover:text-stone-800 hover:border-stone-300'
                }`}
              >
                <span className={isActive ? 'text-[#BFA08A]' : 'text-stone-400'}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-stone-700 font-light leading-relaxed">
          
          {/* TAB 1: MENTIONS LÉGALES */}
          {activeTab === 'mentions' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Important ownership cession note */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-950 text-xs space-y-1">
                <p className="font-semibold text-amber-900">
                  Information juridique importante :
                </p>
                <p>
                  Le fonds de commerce a été cédé en 2024 à la société <strong>AZIIA BEAUTY</strong> (SIREN 930 749 809). C’est cette société qui est l’exploitante légale exclusive du salon et éditrice de ce site, et non plus l’ancienne entité SOGLAM BEAUTY BAR (en liquidation).
                </p>
              </div>

              <div>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">
                  1. Éditeur du site (Loi LCEN)
                </h3>
                <ul className="space-y-1 bg-white p-4 rounded-xl border border-stone-200/70 text-xs">
                  <li><strong>Dénomination sociale :</strong> AZIIA BEAUTY</li>
                  <li><strong>Forme juridique :</strong> Société à responsabilité limitée (SARL)</li>
                  <li><strong>Enseigne commerciale :</strong> So Glam Beauty Bar</li>
                  <li><strong>Siège social :</strong> 1 Rue du Général Leclerc, 78000 Versailles, France</li>
                  <li><strong>SIREN :</strong> 930 749 809</li>
                  <li><strong>SIRET :</strong> 930 749 809 00016</li>
                  <li><strong>Registre du Commerce et des Sociétés :</strong> RCS Versailles</li>
                  <li><strong>N° TVA intracommunautaire :</strong> FR67930749809</li>
                  <li><strong>Capital social :</strong> 1 000,00 €</li>
                  <li><strong>Activité (Code NAF / APE) :</strong> Soins de beauté, onglerie et esthétique</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">
                  2. Directeur de la publication
                </h3>
                <p className="bg-white p-4 rounded-xl border border-stone-200/70 text-xs">
                  <strong>Directrice de la publication :</strong> Madame Marie GASTON (Gérante d'AZIIA BEAUTY).
                </p>
              </div>

              <div>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">
                  3. Contact de l'institut
                </h3>
                <ul className="space-y-1 bg-white p-4 rounded-xl border border-stone-200/70 text-xs">
                  <li><strong>Adresse :</strong> 1 Rue du Général Leclerc, 78000 Versailles</li>
                  <li><strong>Téléphone :</strong> <a href={`tel:${SALON_INFO.phoneRaw}`} className="underline font-medium text-stone-900">{SALON_INFO.phone}</a></li>
                  <li><strong>Email :</strong> contact@aziia-beauty.fr</li>
                  <li><strong>Réservations officielles :</strong> <a href={SALON_INFO.planityUrl} target="_blank" rel="noopener noreferrer" className="underline font-medium text-stone-900">Planity Versailles</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">
                  4. Hébergeur du site
                </h3>
                <p className="bg-white p-4 rounded-xl border border-stone-200/70 text-xs leading-relaxed">
                  Le présent site est hébergé sur une infrastructure Cloud haute disponibilité :<br />
                  <strong>Hébergeur :</strong> Google Cloud Platform / Vercel Inc.<br />
                  <strong>Adresse :</strong> 440 N Bernardo Ave, Mountain View, CA 94043, États-Unis (Serveurs situés en Union Européenne).<br />
                  <strong>Téléphone :</strong> +1 650-253-0000
                </p>
              </div>

              <div>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">
                  5. Propriété intellectuelle
                </h3>
                <p className="text-xs leading-relaxed">
                  L’ensemble du contenu de ce site web (textes, visuels, photographies, charte graphique, logos, icônes) est la propriété exclusive de la société <strong>AZIIA BEAUTY / So Glam Beauty Bar</strong>, sauf mentions ou éléments tiers explicitement cités. Toute reproduction, représentation, modification, publication ou adaptation totale ou partielle de ces éléments, quel que soit le moyen ou le procédé utilisé, est formellement interdite sans l’accord préalable et écrit de la société AZIIA BEAUTY.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: POLITIQUE DE CONFIDENTIALITÉ (RGPD) */}
          {activeTab === 'confidentialite' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">
                  1. Responsable du traitement des données
                </h3>
                <p className="bg-white p-4 rounded-xl border border-stone-200/70 text-xs">
                  <strong>Responsable :</strong> AZIIA BEAUTY – So Glam Beauty Bar<br />
                  <strong>Adresse :</strong> 1 Rue du Général Leclerc, 78000 Versailles<br />
                  <strong>Contact DPO / Données :</strong> contact@aziia-beauty.fr
                </p>
              </div>

              <div>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">
                  2. Données collectées
                </h3>
                <ul className="list-disc pl-5 space-y-1.5 text-xs">
                  <li><strong>Via la prise de rendez-vous en ligne (Planity) :</strong> données d’identité (nom, prénom), coordonnées (adresse email, numéro de téléphone portable) et détails des prestations réservées.</li>
                  <li><strong>Via les demandes directes (téléphone, email) :</strong> nom, numéro de téléphone, message ou précisions relatives au rituel beauté souhaité.</li>
                  <li><strong>Données de navigation :</strong> cookies techniques strictement indispensables au fonctionnement du site et, avec consentement préalable, mesures d'audience anonymisées.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">
                  3. Finalités et bases légales
                </h3>
                <p className="text-xs mb-2">
                  Vos informations personnelles sont collectées et traitées uniquement pour des objectifs légitimes et déterminés :
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li><strong>Exécution de la prestation :</strong> gestion, confirmation, rappels SMS et suivi personnalisé des rendez-vous de soins (Base légale : contrat de service).</li>
                  <li><strong>Relation client :</strong> réponse à vos questions et conseils personnalisés pré/post-soin (Base légale : intérêt légitime).</li>
                  <li><strong>Obligations légales :</strong> tenue de la comptabilité et conservation des justificatifs légaux (Base légale : obligation légale).</li>
                  <li><strong>Amélioration de l'accueil :</strong> statistiques anonymes de fréquentation (Base légale : consentement).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">
                  4. Durée de conservation
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li><strong>Données de contact et prospects :</strong> 3 ans maximum à compter du dernier contact émanant de la cliente.</li>
                  <li><strong>Données de facturation et réservations :</strong> conservées conformément aux délais légaux en vigueur (10 ans selon le Code de commerce).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">
                  5. Vos droits et réclamations (CNIL)
                </h3>
                <p className="text-xs leading-relaxed">
                  Conformément au Règlement Général sur la Protection des Données (RGPD 2016/679) et à la loi n° 78-17 « Informatique et Libertés », vous disposez des droits suivants concernant vos données : droit d'accès, de rectification, d'effacement, de limitation du traitement, d'opposition et de portabilité.
                </p>
                <div className="mt-2.5 p-3.5 bg-white rounded-xl border border-stone-200/70 text-xs">
                  Pour faire valoir vos droits, adressez-nous simplement votre demande avec un justificatif d'identité :<br />
                  • Par email : <strong>contact@aziia-beauty.fr</strong><br />
                  • Par voie postale : <strong>AZIIA BEAUTY, 1 Rue du Général Leclerc, 78000 Versailles</strong><br />
                  Vous pouvez également introduire une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l’Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="underline text-stone-900 font-medium">www.cnil.fr</a>.
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CGV */}
          {activeTab === 'cgv' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">
                  1. Objet & Prestataire
                </h3>
                <p className="text-xs leading-relaxed">
                  Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre la société <strong>AZIIA BEAUTY</strong> (exploitant sous l’enseigne commerciale <em>So Glam Beauty Bar</em>), immatriculée au RCS de Versailles sous le SIREN 930 749 809, et toute cliente réservant ou bénéficiant d'une prestation de beauté au sein du salon situé au 1 Rue du Général Leclerc, 78000 Versailles.
                </p>
              </div>

              <div>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">
                  2. Prestations & Tarifs
                </h3>
                <p className="text-xs leading-relaxed">
                  L’institut propose des soins d’onglerie (manucure, gel, semi-permanent, nail art), beauté du regard (extensions de cils, microblading, microshading, rehaussement), épilation toutes versions (cire, fil, définitive), soin du visage, maquillage permanent (Candy lips, taches de rousseur) et lifting colombien. Les prix en vigueur sont indiqués en Euros Toutes Taxes Comprises (€ TTC) sur le site et confirmés sur la plateforme de réservation Planity.
                </p>
              </div>

              <div>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">
                  3. Réservation, Annulation & Report
                </h3>
                <div className="bg-white p-4 rounded-xl border border-stone-200/70 text-xs space-y-2">
                  <p>
                    <strong>Prise de rendez-vous :</strong> Les réservations s'effectuent sur la plateforme officielle Planity, par téléphone au 01 39 51 81 02 ou à l’accueil du salon.
                  </p>
                  <p>
                    <strong>Politique d'annulation :</strong> Afin de garantir la disponibilité des praticiennes et le respect de notre planning, <strong>toute annulation ou modification est gratuite jusqu’à 24 heures avant l’horaire fixé</strong>.
                  </p>
                  <p className="text-stone-600">
                    En cas d'annulation tardive (moins de 24h avant le rendez-vous) ou de non-présentation injustifiée (« no-show »), l'institut se réserve le droit de facturer ou retenir une indemnité forfaitaire correspondant à 50 % ou 100 % de la valeur de la prestation conformément aux conditions indiquées sur Planity.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">
                  4. Modalités de paiement
                </h3>
                <p className="text-xs leading-relaxed">
                  Le paiement des prestations s'effectue sur place au salon par Carte Bancaire ou Espèces, ou lors de la prise de rendez-vous via les moyens sécurisés de Planity. Sur certaines prestations spécifiques ou forfaits, un paiement fractionné en plusieurs fois peut être proposé selon les modalités acceptées par le salon.
                </p>
              </div>

              <div>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">
                  5. Contre-indications & Consignes de santé
                </h3>
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-950 text-xs space-y-2">
                  <p className="font-semibold text-amber-900">
                    Obligation d'information préalable par la cliente :
                  </p>
                  <p>
                    Certaines prestations avancées (épilation définitive, lifting colombien, maquillage semi-permanent) font l'objet de contre-indications médicales strictes (notamment : grossesse, allaitement, pacemaker, affection cutanée active, traitement médicamenteux photosensibilisant ou anticoagulant).
                  </p>
                  <p>
                    La cliente est tenue d'informer l’équipe avant le début du soin de tout antécédent médical, allergie ou traitement en cours. L’institut décline toute responsabilité en cas de déclaration inexacte ou de non-respect des recommandations pré et post-soin communiquées par les praticiennes.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">
                  6. Absence de droit de rétractation
                </h3>
                <p className="text-xs leading-relaxed">
                  Conformément aux dispositions de l’article <strong>L. 221-28 12° du Code de la consommation</strong>, le droit de rétractation ne peut être exercé pour les contrats de prestations de services de loisirs ou de soins fournies à une date ou selon une périodicité déterminée.
                </p>
              </div>

              <div>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">
                  7. Réclamations & Médiation de la consommation
                </h3>
                <p className="text-xs leading-relaxed">
                  Pour toute réclamation, notre équipe est à votre écoute par téléphone au 01 39 51 81 02 ou par email à contact@aziia-beauty.fr. Conformément à l’article L. 612-1 du Code de la consommation, en cas de litige non résolu à l’amiable, la cliente a le droit de recourir gratuitement à un médiateur de la consommation agréé.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: COOKIES */}
          {activeTab === 'cookies' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">
                  Politique de gestion des Cookies
                </h3>
                <p className="text-xs leading-relaxed">
                  Un cookie est un petit fichier texte déposé sur votre terminal lors de la consultation d’un site web. Conformément aux directives de la CNIL et au RGPD, nous mettons à votre disposition ce panneau de contrôle vous permettant d'ajuster vos préférences à tout moment.
                </p>
              </div>

              {/* Preferences panel */}
              <div className="space-y-3">
                {/* Essential cookies */}
                <div className="p-4 rounded-xl bg-white border border-stone-200/80 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-stone-900 text-xs">Cookies strictement nécessaires</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-medium px-2 py-0.5 rounded-full">
                        Toujours actif
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 font-light">
                      Indispensables pour mémoriser vos choix, assurer la sécurité de navigation et permettre le bon fonctionnement technique de l'application. Ne peuvent pas être désactivés.
                    </p>
                  </div>
                </div>

                {/* Analytics cookies */}
                <div className="p-4 rounded-xl bg-white border border-stone-200/80 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-stone-900 text-xs">Cookies de mesure d'audience & statistiques</span>
                    </div>
                    <p className="text-xs text-stone-500 font-light">
                      Permettent de mesurer la fréquentation de nos pages de façon agrégée et totalement anonymisée afin d'adapter l'ergonomie du site à vos besoins.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={analyticsCookies}
                      onChange={(e) => setAnalyticsCookies(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#2A2523]"></div>
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <p className="text-[11px] text-stone-400">
                  Dernière mise à jour : 2026 · Conforme CNIL
                </p>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => {
                      setAnalyticsCookies(true);
                      localStorage.setItem('soglam_cookies_consent', 'accepted');
                      setCookieSavedToast(true);
                      setTimeout(() => setCookieSavedToast(false), 2500);
                    }}
                    className="flex-1 sm:flex-none px-4 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors"
                  >
                    Tout accepter
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveCookiePreferences}
                    className="flex-1 sm:flex-none px-5 py-2 text-xs font-medium text-white bg-[#2A2523] hover:bg-stone-800 rounded-full transition-colors"
                  >
                    Enregistrer mes choix
                  </button>
                </div>
              </div>

              {cookieSavedToast && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl text-xs flex items-center gap-2 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Vos préférences de cookies ont bien été enregistrées.</span>
                </div>
              )}
            </div>
          )}

          {/* TAB 5: CONTACT */}
          {activeTab === 'contact' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">
                  Nous Contacter & Informations d'accès
                </h3>
                <p className="text-xs text-stone-600 font-light">
                  L'équipe de l'institut So Glam Beauty Bar (AZIIA BEAUTY) vous accueille avec plaisir à Versailles.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-stone-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-stone-900 font-medium text-xs">
                    <MapPin className="w-4 h-4 text-[#BFA08A]" />
                    <span>Adresse du salon</span>
                  </div>
                  <p className="text-xs text-stone-600 font-light">
                    1 Rue du Général Leclerc<br />
                    78000 Versailles, France<br />
                    <span className="text-[11px] text-stone-400">À 4 min à pied de Versailles Château Rive Gauche</span>
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-stone-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-stone-900 font-medium text-xs">
                    <Phone className="w-4 h-4 text-[#BFA08A]" />
                    <span>Téléphone & Email</span>
                  </div>
                  <p className="text-xs text-stone-600 font-light space-y-1">
                    <span>Tél : <a href={`tel:${SALON_INFO.phoneRaw}`} className="text-stone-900 font-medium underline">{SALON_INFO.phone}</a></span><br />
                    <span>Email : <a href="mailto:contact@aziia-beauty.fr" className="text-stone-900 font-medium underline">contact@aziia-beauty.fr</a></span>
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/80 space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-medium text-xs">
                  <Clock className="w-4 h-4 text-[#BFA08A]" />
                  <span>Horaires d'ouverture</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-stone-600 font-light pt-1">
                  <div><strong>Lundi :</strong> 10h30 – 19h30</div>
                  <div><strong>Mardi :</strong> 10h30 – 19h30</div>
                  <div><strong>Mercredi :</strong> 10h30 – 19h30</div>
                  <div><strong>Jeudi :</strong> 10h30 – 19h30</div>
                  <div><strong>Vendredi :</strong> 10h30 – 19h30</div>
                  <div><strong>Samedi :</strong> 10h00 – 19h00</div>
                  <div className="col-span-2 text-stone-400"><strong>Dimanche :</strong> Fermé</div>
                </div>
              </div>

              <div className="pt-2 text-center">
                <a
                  href={SALON_INFO.planityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-medium uppercase tracking-wider text-white bg-[#2A2523] hover:bg-stone-800 rounded-full transition-all shadow-xs"
                >
                  <span>Prendre rendez-vous sur Planity</span>
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 sm:px-8 sm:py-3.5 border-t border-stone-200/80 bg-white/70 flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0 text-[11px] text-stone-500">
          <p>
            © 2026 AZIIA BEAUTY – So Glam Beauty Bar – Tous droits réservés
          </p>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-full text-xs font-medium text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-colors"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
};
export default LegalModal;

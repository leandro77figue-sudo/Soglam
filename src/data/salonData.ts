export interface ServiceItem {
  id: string;
  name: string;
  category: 'onglerie' | 'regard' | 'epilation' | 'visage' | 'maquillage' | 'lifting';
  categoryLabel: string;
  duration: string;
  durationMinutes: number;
  price: number;
  description: string;
  planityUrl: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
}

export interface TeamMember {
  name: string;
  role: string;
  specialties: string[];
  description: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Nancy",
    role: "Fondatrice & Praticienne Experte",
    specialties: ["Épilation cire, fil & définitive", "Candy lips & Taches de rousseur", "Lifting colombien"],
    description: "Diplômée et passionnée, Nancy vous accompagne avec bienveillance dans vos soins d'épilation haute précision, dermo-pigmentation et remodelage."
  },
  {
    name: "L'équipe Bar à Ongles",
    role: "Prothésistes Ongulaires",
    specialties: ["Soin des mains & pieds", "Semi-permanent", "Pose de gel & Nail art"],
    description: "Une équipe attentionnée dédiée à la beauté de vos ongles, attentive à chaque détail pour une tenue et une brillance parfaites."
  },
  {
    name: "L'équipe Bar à Regard",
    role: "Techniciennes Cils & Sourcils",
    specialties: ["Extensions de cils", "Microblading & Microshading", "Rehaussement & Teinture"],
    description: "Spécialistes du regard sur mesure, formées aux techniques les plus fines pour sublimer l'intensité naturelle de vos yeux."
  }
];

export const SALON_INFO = {
  name: "SoGlam' Beauty Bar",
  expertName: "Nancy",
  tagline: "Institut de beauté, Bar à regard & Bar à ongles à Versailles",
  address: "1 Rue du Général Leclerc",
  postalCode: "78000",
  city: "Versailles",
  fullAddress: "1 Rue du Général Leclerc, 78000 Versailles, France",
  phone: "01 39 51 81 02",
  phoneRaw: "+33139518102",
  rating: 4.6,
  reviewCount: 201,
  planityUrl: "https://www.planity.com/so-glam-78000-versailles",
  googleMapsUrl: "https://maps.app.goo.gl/dD6iSQTgLS7vNwMb7",
  googleMapsEmbed: "https://www.google.com/maps?q=48.7996343,2.1248203&hl=fr&z=16&output=embed",
  
  // Official presentation text from user screenshot
  presentation: {
    intro: "Avec son décor peps, son esprit cosy et son équipe attentionnée, l’institut de beauté So Glam Beauty Bar, à Versailles, a tout de la parfaite adresse. À deux pas du célébrissime Château, vous y trouverez un large choix d’options pour mettre en valeur votre beauté naturelle, de l’onglerie en passant par la beauté du regard, l’épilation ou le lifting colombien.",
    barRegard: "Votre institut de beauté So Glam Beauty Bar, à Versailles, est aussi un « bar à regard » où cils et sourcils bénéficient de la meilleure expertise : microblading, microshading, extensions de cils, restructuration des sourcils, rehaussement de cils, teinture...",
    barOngles: "Côté « bar à ongles », ce sont les mains et les pieds qui se font chouchouter dans les règles de l’art le temps d’un soin, d’une pose de semi-permanent, d’une pose de gel ou encore d’une séance de nail art qui vous fera rayonner jusqu’au bout des doigts.",
    nancyExpertise: "L’expertise de Nancy, qui réalise l’épilation dans toutes les versions – à la cire, au fil, définitive – comprend également d’autres prestations exclusives à découvrir sans attendre, à l’image du maquillage permanent (Candy lips, taches de rousseur) ou du lifting colombien, l’allié des fesses bombées sans douleurs ni efforts."
  },

  badges: [
    "Épilation Versailles",
    "Prothésiste ongulaire Versailles",
    "Extension de cils Versailles",
    "Soin du visage Versailles",
    "Microblading Versailles",
    "Réhaussement de cils Versailles"
  ],

  hours: [
    { day: "Lundi", hours: "10h30 – 19h30", open: true, openHour: 10.5, closeHour: 19.5 },
    { day: "Mardi", hours: "10h30 – 19h30", open: true, openHour: 10.5, closeHour: 19.5 },
    { day: "Mercredi", hours: "10h30 – 19h30", open: true, openHour: 10.5, closeHour: 19.5 },
    { day: "Jeudi", hours: "10h30 – 19h30", open: true, openHour: 10.5, closeHour: 19.5 },
    { day: "Vendredi", hours: "10h30 – 19h30", open: true, openHour: 10.5, closeHour: 19.5 },
    { day: "Samedi", hours: "10h00 – 19h00", open: true, openHour: 10.0, closeHour: 19.0 },
    { day: "Dimanche", hours: "Fermé", open: false, openHour: 0, closeHour: 0 }
  ]
};

// Exact prestations present in the user text ONLY
export const SERVICES: ServiceItem[] = [
  // 1. Côté « bar à ongles » / Prothésiste ongulaire
  {
    id: 'onglerie-soin-mains-pieds',
    name: 'Soin des mains & des pieds',
    category: 'onglerie',
    categoryLabel: 'Bar à ongles',
    duration: '45 min',
    durationMinutes: 45,
    price: 35,
    description: 'Chouchoutage des mains et des pieds dans les règles de l\'art, soin des cuticules et hydratation profonde.',
    planityUrl: 'https://www.planity.com/so-glam-78000-versailles'
  },
  {
    id: 'onglerie-semi-permanent',
    name: 'Pose de semi-permanent',
    category: 'onglerie',
    categoryLabel: 'Bar à ongles',
    duration: '45 min',
    durationMinutes: 45,
    price: 38,
    description: 'Pose soignée de vernis semi-permanent longue tenue pour rayonner jusqu\'au bout des doigts.',
    planityUrl: 'https://www.planity.com/so-glam-78000-versailles'
  },
  {
    id: 'onglerie-pose-gel',
    name: 'Pose de gel',
    category: 'onglerie',
    categoryLabel: 'Bar à ongles',
    duration: '1h15',
    durationMinutes: 75,
    price: 60,
    description: 'Gainage et pose d\'ongles en gel sur mesure pour un galbe parfait et une solidité irréprochable.',
    planityUrl: 'https://www.planity.com/so-glam-78000-versailles'
  },
  {
    id: 'onglerie-nail-art',
    name: 'Séance de nail art',
    category: 'onglerie',
    categoryLabel: 'Bar à ongles',
    duration: '20 min',
    durationMinutes: 20,
    price: 15,
    description: 'Créations sur mesure, dégradés babyboomer, motifs délicats ou chrome pour sublimer vos ongles.',
    planityUrl: 'https://www.planity.com/so-glam-78000-versailles'
  },

  // 2. Bar à regard (Cils & Sourcils)
  {
    id: 'regard-extensions-cils',
    name: 'Extensions de cils',
    category: 'regard',
    categoryLabel: 'Bar à regard',
    duration: '1h00',
    durationMinutes: 60,
    price: 60,
    description: 'Pose sur mesure de bouquets soyeux pour allonger, étoffer et intensifier délicatement votre regard.',
    planityUrl: 'https://www.planity.com/so-glam-78000-versailles'
  },
  {
    id: 'regard-microblading',
    name: 'Microblading',
    category: 'regard',
    categoryLabel: 'Bar à regard',
    duration: '1h30',
    durationMinutes: 90,
    price: 200,
    description: 'Dermo-pigmentation poil à poil hyper-réaliste pour redessiner et densifier la ligne de vos sourcils.',
    planityUrl: 'https://www.planity.com/so-glam-78000-versailles'
  },
  {
    id: 'regard-microshading',
    name: 'Microshading',
    category: 'regard',
    categoryLabel: 'Bar à regard',
    duration: '1h30',
    durationMinutes: 90,
    price: 220,
    description: 'Effet poudré et ombré sur mesure pour un tracé parfait et sophistiqué dès le réveil.',
    planityUrl: 'https://www.planity.com/so-glam-78000-versailles'
  },
  {
    id: 'regard-restructuration-sourcils',
    name: 'Restructuration des sourcils',
    category: 'regard',
    categoryLabel: 'Bar à regard',
    duration: '30 min',
    durationMinutes: 30,
    price: 25,
    description: 'Tracé morphologique précis adapté aux traits de votre visage et épilation nette.',
    planityUrl: 'https://www.planity.com/so-glam-78000-versailles'
  },
  {
    id: 'regard-rehaussement-cils',
    name: 'Rehaussement de cils',
    category: 'regard',
    categoryLabel: 'Bar à regard',
    duration: '45 min',
    durationMinutes: 45,
    price: 55,
    description: 'Courbure spectaculaire des cils naturels depuis la racine pour ouvrir le regard durablement.',
    planityUrl: 'https://www.planity.com/so-glam-78000-versailles'
  },
  {
    id: 'regard-teinture',
    name: 'Teinture cils & sourcils',
    category: 'regard',
    categoryLabel: 'Bar à regard',
    duration: '20 min',
    durationMinutes: 20,
    price: 15,
    description: 'Intensification de la couleur des cils ou sourcils pour souligner naturellement les yeux sans mascara.',
    planityUrl: 'https://www.planity.com/so-glam-78000-versailles'
  },

  // 3. L’expertise de Nancy : Épilation (toutes les versions)
  {
    id: 'epilation-cire',
    name: 'Épilation à la cire',
    category: 'epilation',
    categoryLabel: 'Épilation',
    duration: '30 min',
    durationMinutes: 30,
    price: 28,
    description: 'Technique traditionnelle à la cire tiède douce pour une peau nette et veloutée.',
    planityUrl: 'https://www.planity.com/so-glam-78000-versailles'
  },
  {
    id: 'epilation-fil',
    name: 'Épilation au fil',
    category: 'epilation',
    categoryLabel: 'Épilation',
    duration: '20 min',
    durationMinutes: 20,
    price: 20,
    description: 'Précision d\'orfèvre au fil de coton pour le visage et les sourcils, respectueuse des peaux sensibles.',
    planityUrl: 'https://www.planity.com/so-glam-78000-versailles'
  },
  {
    id: 'epilation-definitive',
    name: 'Épilation définitive',
    category: 'epilation',
    categoryLabel: 'Épilation',
    duration: '30 min',
    durationMinutes: 30,
    price: 69,
    description: 'Technologie laser dernière génération quasi indolore pour se débarrasser définitivement des poils.',
    planityUrl: 'https://www.planity.com/so-glam-78000-versailles'
  },

  // 4. Soin du visage
  {
    id: 'soin-du-visage',
    name: 'Soin du visage',
    category: 'visage',
    categoryLabel: 'Soin du visage',
    duration: '50 min',
    durationMinutes: 50,
    price: 65,
    description: 'Protocole complet pour nettoyer en profondeur, réhydrater et illuminer le teint.',
    planityUrl: 'https://www.planity.com/so-glam-78000-versailles'
  },

  // 5. Maquillage permanent
  {
    id: 'maquillage-candy-lips',
    name: 'Candy lips',
    category: 'maquillage',
    categoryLabel: 'Maquillage permanent',
    duration: '2h00',
    durationMinutes: 120,
    price: 240,
    description: 'Dermo-pigmentation effet lèvres mordues subtilement rosées et repulpées pour un sourire toujours radieux.',
    planityUrl: 'https://www.planity.com/so-glam-78000-versailles'
  },
  {
    id: 'maquillage-taches-rousseur',
    name: 'Taches de rousseur',
    category: 'maquillage',
    categoryLabel: 'Maquillage permanent',
    duration: '45 min',
    durationMinutes: 45,
    price: 80,
    description: 'Création subtile et asymétrique de fausses taches de rousseur estivales pour un effet frais et naturel.',
    planityUrl: 'https://www.planity.com/so-glam-78000-versailles'
  },

  // 6. Lifting colombien
  {
    id: 'lifting-colombien',
    name: 'Lifting colombien',
    category: 'lifting',
    categoryLabel: 'Lifting colombien',
    duration: '45 min',
    durationMinutes: 45,
    price: 90,
    description: 'L\'allié des fesses bombées sans douleurs ni efforts grâce à la thérapie par ventouses et stimulation ciblée.',
    planityUrl: 'https://www.planity.com/so-glam-78000-versailles'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Élodie B.',
    rating: 5,
    date: 'Il y a 2 semaines',
    service: 'Pose de semi-permanent & Manucure',
    comment: 'Un vrai coup de cœur à Versailles ! Accueil adorable, salon cosy et soigné. Merci à Nancy et son équipe pour leur attention et la qualité du travail.'
  },
  {
    id: 'rev-2',
    author: 'Camille M.',
    rating: 5,
    date: 'Il y a 3 semaines',
    service: 'Extensions de cils & Rehaussement',
    comment: 'Cliente fidèle pour mon regard. Le résultat est toujours naturel, léger et sans aucun paquet. On s\'y sent tellement bien !'
  },
  {
    id: 'rev-3',
    author: 'Inès K.',
    rating: 5,
    date: 'Le mois dernier',
    service: 'Épilation définitive & Candy lips',
    comment: 'L\'expertise de Nancy est incroyable ! Candy lips très bien réussi avec un effet lèvres mordues magnifique, et épilation ultra efficace.'
  }
];

export const FAQS = [
  {
    q: "Quelles sont les spécialités de l'institut SoGlam' ?",
    a: "SoGlam' Beauty Bar est à la fois un bar à ongles (soin mains/pieds, semi-permanent, gel, nail art), un bar à regard (microblading, microshading, extensions de cils, restructuration, rehaussement, teinture), et propose également l'expertise de Nancy en épilation (cire, fil, définitive), soin du visage, maquillage permanent (Candy lips, taches de rousseur) et lifting colombien."
  },
  {
    q: "Comment se déroule la réservation en ligne ?",
    a: "Vous pouvez réserver instantanément 24h/24 sur notre page partenaire Planity en choisissant directement votre créneau et votre prestation, ou par téléphone au 01 39 51 81 02."
  },
  {
    q: "Où se situe SoGlam' Beauty Bar à Versailles ?",
    a: "Le salon est idéalement situé au 1 Rue du Général Leclerc à Versailles (78000), à 4 minutes à pied de la gare Versailles Château Rive Gauche (RER C) et à 8 minutes de Versailles Chantiers."
  },
  {
    q: "Qu'est-ce que le lifting colombien ?",
    a: "Le lifting colombien est une technique non invasive par ventouses et aspiration sous vide : l'allié idéal des fesses bombées et regalbées sans douleurs ni efforts."
  }
];

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  affiliateUrl: string;
  category: 'elle' | 'lui' | 'deux';
  badge?: string;
}

export const productsElle: Product[] = [
  {
    id: 'e1',
    name: 'Vibromasseur Satin Rose',
    description: 'Un vibromasseur en silicone satiné, ultra-doux et silencieux, conçu pour un plaisir raffiné et discret.',
    image: 'https://readdy.ai/api/search-image?query=elegant%20pink%20satin%20vibrator%20wellness%20product%20on%20white%20marble%20surface%20with%20soft%20rose%20petals%20luxury%20intimate%20wellness%20minimalist%20photography&width=400&height=400&seq=e1&orientation=squarish',
    affiliateUrl: 'https://www.espaceplaisir.fr/',
    category: 'elle',
    badge: 'Coup de cœur',
  },
  {
    id: 'e2',
    name: 'Huile de Massage Florale',
    description: 'Huile de massage sensuelle aux notes florales, enrichie en huiles essentielles apaisantes pour une détente absolue.',
    image: 'https://readdy.ai/api/search-image?query=luxury%20floral%20massage%20oil%20bottle%20elegant%20glass%20bottle%20with%20flowers%20cream%20background%20wellness%20spa%20product%20photography&width=400&height=400&seq=e2&orientation=squarish',
    affiliateUrl: 'https://www.espaceplaisir.fr/',
    category: 'elle',
  },
  {
    id: 'e3',
    name: 'Stimulateur Clitoridien Velours',
    description: 'Technologie de stimulation par ondes de pression, sans contact direct, pour une expérience sensorielle unique.',
    image: 'https://readdy.ai/api/search-image?query=elegant%20purple%20velvet%20intimate%20wellness%20device%20on%20cream%20silk%20fabric%20luxury%20product%20photography%20minimalist%20background&width=400&height=400&seq=e3&orientation=squarish',
    affiliateUrl: 'https://www.espaceplaisir.fr/',
    category: 'elle',
    badge: 'Nouveauté',
  },
  {
    id: 'e4',
    name: 'Lingerie Dentelle Noire',
    description: 'Ensemble lingerie en dentelle fine, alliant élégance et sensualité pour une confiance en soi absolue.',
    image: 'https://readdy.ai/api/search-image?query=elegant%20black%20lace%20lingerie%20set%20on%20cream%20silk%20background%20luxury%20fashion%20product%20photography%20minimalist%20style&width=400&height=400&seq=e4&orientation=squarish',
    affiliateUrl: 'https://www.espaceplaisir.fr/',
    category: 'elle',
  },
  {
    id: 'e5',
    name: 'Gel Intime Hydratant',
    description: 'Gel hydratant intime à base d\'aloe vera et d\'acide hyaluronique, pour un confort optimal au quotidien.',
    image: 'https://readdy.ai/api/search-image?query=luxury%20intimate%20gel%20cream%20product%20elegant%20glass%20jar%20with%20aloe%20vera%20leaves%20cream%20marble%20background%20wellness%20beauty%20photography&width=400&height=400&seq=e5&orientation=squarish',
    affiliateUrl: 'https://www.espaceplaisir.fr/',
    category: 'elle',
  },
  {
    id: 'e6',
    name: 'Vibromasseur Wand Premium',
    description: 'Le classique revisité : puissant, polyvalent et élégant, idéal pour la relaxation musculaire et le plaisir personnel.',
    image: 'https://readdy.ai/api/search-image?query=premium%20white%20wand%20massager%20wellness%20device%20on%20cream%20linen%20background%20luxury%20spa%20product%20photography%20elegant%20minimalist&width=400&height=400&seq=e6&orientation=squarish',
    affiliateUrl: 'https://www.espaceplaisir.fr/',
    category: 'elle',
    badge: 'Best-seller',
  },
  {
    id: 'e7',
    name: 'Bougie de Massage Vanille',
    description: 'Bougie de massage à la vanille et au beurre de karité, qui fond en une huile chaude et enveloppante.',
    image: 'https://readdy.ai/api/search-image?query=luxury%20vanilla%20massage%20candle%20elegant%20glass%20jar%20warm%20candlelight%20cream%20background%20spa%20wellness%20product%20photography&width=400&height=400&seq=e7&orientation=squarish',
    affiliateUrl: 'https://www.espaceplaisir.fr/',
    category: 'elle',
  },
  {
    id: 'e8',
    name: 'Vibromasseur Rabbit Doré',
    description: 'Double stimulation en silicone médical, finition dorée luxueuse, avec 10 modes de vibration personnalisables.',
    image: 'https://readdy.ai/api/search-image?query=gold%20elegant%20rabbit%20vibrator%20intimate%20wellness%20product%20on%20black%20velvet%20background%20luxury%20photography%20minimalist&width=400&height=400&seq=e8&orientation=squarish',
    affiliateUrl: 'https://www.espaceplaisir.fr/',
    category: 'elle',
    badge: 'Premium',
  },
];

export const productsLui: Product[] = [
  {
    id: 'l1',
    name: 'Anneau Vibrant Élégance',
    description: 'Anneau vibrant en silicone premium, rechargeable par USB, pour une expérience partagée intense et raffinée.',
    image: 'https://readdy.ai/api/search-image?query=elegant%20black%20vibrating%20ring%20intimate%20wellness%20product%20on%20dark%20marble%20surface%20luxury%20product%20photography%20minimalist&width=400&height=400&seq=l1&orientation=squarish',
    affiliateUrl: 'https://www.espaceplaisir.fr/',
    category: 'lui',
    badge: 'Best-seller',
  },
  {
    id: 'l2',
    name: 'Masturbateur Texture Velours',
    description: 'Manchon de stimulation en TPE ultra-réaliste, texture veloutée, discret et facile d\'entretien.',
    image: 'https://readdy.ai/api/search-image?query=discreet%20elegant%20male%20wellness%20product%20black%20cylinder%20on%20cream%20background%20luxury%20minimalist%20product%20photography&width=400&height=400&seq=l2&orientation=squarish',
    affiliateUrl: 'https://www.espaceplaisir.fr/',
    category: 'lui',
  },
  {
    id: 'l3',
    name: 'Huile de Massage Boisée',
    description: 'Huile de massage aux notes boisées et musquées, idéale pour la détente et les moments de complicité.',
    image: 'https://readdy.ai/api/search-image?query=luxury%20masculine%20massage%20oil%20dark%20glass%20bottle%20with%20wood%20and%20herbs%20dark%20background%20wellness%20product%20photography%20elegant&width=400&height=400&seq=l3&orientation=squarish',
    affiliateUrl: 'https://www.espaceplaisir.fr/',
    category: 'lui',
  },
  {
    id: 'l4',
    name: 'Stimulateur Prostatique Noir',
    description: 'Stimulateur anatomique en silicone médical, conçu pour une exploration intime en toute sécurité et confort.',
    image: 'https://readdy.ai/api/search-image?query=elegant%20black%20intimate%20wellness%20device%20on%20dark%20velvet%20background%20luxury%20product%20photography%20minimalist%20discreet&width=400&height=400&seq=l4&orientation=squarish',
    affiliateUrl: 'https://www.espaceplaisir.fr/',
    category: 'lui',
    badge: 'Nouveauté',
  },
  {
    id: 'l5',
    name: 'Lubrifiant Premium Neutre',
    description: 'Lubrifiant à base d\'eau, formule longue durée, compatible avec tous les matériaux, sans parfum ni colorant.',
    image: 'https://readdy.ai/api/search-image?query=premium%20lubricant%20bottle%20elegant%20minimalist%20design%20cream%20background%20wellness%20product%20photography%20luxury%20clean&width=400&height=400&seq=l5&orientation=squarish',
    affiliateUrl: 'https://www.espaceplaisir.fr/',
    category: 'lui',
  },
  {
    id: 'l6',
    name: 'Coffret Découverte Homme',
    description: 'Coffret initiation élégamment présenté, incluant lubrifiant, anneau vibrant et guide du bien-être intime.',
    image: 'https://readdy.ai/api/search-image?query=elegant%20gift%20box%20set%20for%20men%20wellness%20products%20black%20box%20with%20gold%20ribbon%20luxury%20product%20photography%20minimalist&width=400&height=400&seq=l6&orientation=squarish',
    affiliateUrl: 'https://www.espaceplaisir.fr/',
    category: 'lui',
    badge: 'Coffret',
  },
  {
    id: 'l7',
    name: 'Retardant Spray Discret',
    description: 'Spray retardant à la lidocaïne légère, formule douce et efficace pour prolonger les moments de plaisir.',
    image: 'https://readdy.ai/api/search-image?query=discreet%20elegant%20spray%20bottle%20wellness%20product%20dark%20background%20luxury%20minimalist%20product%20photography%20clean%20design&width=400&height=400&seq=l7&orientation=squarish',
    affiliateUrl: 'https://www.espaceplaisir.fr/',
    category: 'lui',
  },
  {
    id: 'l8',
    name: 'Cockring Métal Doré',
    description: 'Anneau en métal poli finition dorée, design épuré et luxueux, pour une stimulation intense et durable.',
    image: 'https://readdy.ai/api/search-image?query=gold%20metal%20ring%20elegant%20luxury%20intimate%20accessory%20on%20black%20velvet%20background%20premium%20product%20photography%20minimalist&width=400&height=400&seq=l8&orientation=squarish',
    affiliateUrl: 'https://www.espaceplaisir.fr/',
    category: 'lui',
    badge: 'Premium',
  },
];

export const productsDeux: Product[] = [
  {
    id: 'd1',
    name: 'Vibromasseur Couple Connecté',
    description: 'Vibromasseur portable pour couple, contrôlable à distance via application, pour une complicité sans frontières.',
    image: 'https://readdy.ai/api/search-image?query=elegant%20couple%20vibrator%20pink%20device%20on%20cream%20silk%20background%20luxury%20intimate%20wellness%20product%20photography%20minimalist&width=400&height=400&seq=d1&orientation=squarish',
    affiliateUrl: 'https://www.espaceplaisir.fr/',
    category: 'deux',
    badge: 'Coup de cœur',
  },
  {
    id: 'd2',
    name: 'Coffret Jeux Érotiques',
    description: 'Coffret de jeux de séduction élégamment présenté, pour raviver la flamme et explorer de nouvelles complicités.',
    image: 'https://readdy.ai/api/search-image?query=elegant%20couple%20game%20box%20black%20gold%20luxury%20packaging%20intimate%20wellness%20product%20photography%20minimalist%20cream%20background&width=400&height=400&seq=d2&orientation=squarish',
    affiliateUrl: 'https://www.espaceplaisir.fr/',
    category: 'deux',
  },
  {
    id: 'd3',
    name: 'Menottes Velours Bordeaux',
    description: 'Menottes en velours bordeaux avec fermeture sécurisée, pour explorer la confiance et la complicité en douceur.',
    image: 'https://readdy.ai/api/search-image?query=elegant%20burgundy%20velvet%20handcuffs%20luxury%20intimate%20accessory%20on%20cream%20silk%20background%20product%20photography%20minimalist&width=400&height=400&seq=d3&orientation=squarish',
    affiliateUrl: 'https://www.espaceplaisir.fr/',
    category: 'deux',
  },
  {
    id: 'd4',
    name: 'Huile de Massage Duo',
    description: 'Coffret duo d\'huiles de massage chauffantes, aux fragrances complémentaires pour une soirée sensorielle inoubliable.',
    image: 'https://readdy.ai/api/search-image?query=luxury%20couple%20massage%20oil%20set%20two%20elegant%20bottles%20candles%20rose%20petals%20cream%20background%20spa%20wellness%20photography&width=400&height=400&seq=d4&orientation=squarish',
    affiliateUrl: 'https://www.espaceplaisir.fr/',
    category: 'deux',
    badge: 'Nouveauté',
  },
];

export const featuredProducts: Product[] = [
  productsElle[0],
  productsElle[5],
  productsLui[0],
  productsDeux[0],
];

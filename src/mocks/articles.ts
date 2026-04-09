export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  date: string;
}

export const articles: Article[] = [
  {
    id: 'a1',
    slug: 'communication-couple-intimite',
    title: 'La communication, clé d\'une intimité épanouie',
    excerpt: 'Découvrez comment une communication ouverte et bienveillante peut transformer votre vie intime et renforcer les liens au sein de votre couple.',
    category: 'Couple',
    readTime: '5 min',
    image: 'https://readdy.ai/api/search-image?query=couple%20talking%20intimately%20soft%20candlelight%20elegant%20bedroom%20warm%20tones%20romantic%20atmosphere%20photography%20lifestyle&width=600&height=400&seq=a1&orientation=landscape',
    date: '15 mars 2026',
  },
  {
    id: 'a2',
    slug: 'bien-etre-intime-femme',
    title: 'Bien-être intime féminin : prendre soin de soi',
    excerpt: 'Un guide doux et bienveillant pour comprendre et célébrer son corps, avec des conseils pratiques pour un bien-être intime au quotidien.',
    category: 'Pour Elle',
    readTime: '7 min',
    image: 'https://readdy.ai/api/search-image?query=woman%20self%20care%20routine%20elegant%20bathroom%20flowers%20candles%20soft%20light%20wellness%20lifestyle%20photography%20warm%20tones&width=600&height=400&seq=a2&orientation=landscape',
    date: '8 mars 2026',
  },
  {
    id: 'a3',
    slug: 'choisir-premier-sextoy',
    title: 'Comment choisir son premier accessoire intime ?',
    excerpt: 'Conseils pratiques et bienveillants pour faire le bon choix parmi les nombreuses options disponibles, selon vos envies et votre sensibilité.',
    category: 'Guide',
    readTime: '6 min',
    image: 'https://readdy.ai/api/search-image?query=elegant%20intimate%20wellness%20products%20arranged%20on%20cream%20marble%20surface%20with%20flowers%20luxury%20lifestyle%20photography%20soft%20light&width=600&height=400&seq=a3&orientation=landscape',
    date: '1 mars 2026',
  },
  {
    id: 'a4',
    slug: 'massage-sensuel-guide',
    title: 'L\'art du massage sensuel : un guide pour les couples',
    excerpt: 'Le massage est un langage universel de tendresse. Apprenez les techniques de base pour offrir et recevoir un massage sensuel mémorable.',
    category: 'Couple',
    readTime: '8 min',
    image: 'https://readdy.ai/api/search-image?query=couple%20massage%20candles%20rose%20petals%20elegant%20bedroom%20warm%20soft%20light%20romantic%20wellness%20lifestyle%20photography&width=600&height=400&seq=a4&orientation=landscape',
    date: '22 février 2026',
  },
  {
    id: 'a5',
    slug: 'confiance-en-soi-intimite',
    title: 'Confiance en soi et épanouissement intime',
    excerpt: 'La confiance en soi est le fondement d\'une vie intime épanouie. Explorez des pistes concrètes pour cultiver cette confiance au quotidien.',
    category: 'Bien-être',
    readTime: '5 min',
    image: 'https://readdy.ai/api/search-image?query=confident%20woman%20elegant%20mirror%20reflection%20soft%20light%20bedroom%20empowerment%20wellness%20lifestyle%20photography%20warm%20tones&width=600&height=400&seq=a5&orientation=landscape',
    date: '14 février 2026',
  },
  {
    id: 'a6',
    slug: 'lubrifiant-guide-complet',
    title: 'Lubrifiants intimes : le guide complet',
    excerpt: 'Tout ce que vous devez savoir sur les lubrifiants intimes : types, compositions, usages et conseils pour choisir celui qui vous convient.',
    category: 'Guide',
    readTime: '6 min',
    image: 'https://readdy.ai/api/search-image?query=luxury%20intimate%20wellness%20products%20bottles%20elegant%20cream%20background%20soft%20light%20product%20photography%20minimalist%20clean&width=600&height=400&seq=a6&orientation=landscape',
    date: '5 février 2026',
  },
];

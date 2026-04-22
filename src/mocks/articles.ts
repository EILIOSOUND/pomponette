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
    image: '/images/432f1f5dbabe6e084849064799d08607.jpg',
    date: '15 mars 2026',
  },
  {
    id: 'a2',
    slug: 'bien-etre-intime-femme',
    title: 'Bien-être intime féminin : prendre soin de soi',
    excerpt: 'Un guide doux et bienveillant pour comprendre et célébrer son corps, avec des conseils pratiques pour un bien-être intime au quotidien.',
    category: 'Pour Elle',
    readTime: '7 min',
    image: '/images/82535a5491b132b1903057f00b194be9.jpg',
    date: '8 mars 2026',
  },
  {
    id: 'a3',
    slug: 'choisir-premier-sextoy',
    title: 'Comment choisir son premier accessoire intime ?',
    excerpt: 'Conseils pratiques et bienveillants pour faire le bon choix parmi les nombreuses options disponibles, selon vos envies et votre sensibilité.',
    category: 'Guide',
    readTime: '6 min',
    image: '/images/399a8b51bba0340ddbe598fbcf20c2f6.jpg',
    date: '1 mars 2026',
  },
  {
    id: 'a4',
    slug: 'massage-sensuel-guide',
    title: 'L\'art du massage sensuel : un guide pour les couples',
    excerpt: 'Le massage est un langage universel de tendresse. Apprenez les techniques de base pour offrir et recevoir un massage sensuel mémorable.',
    category: 'Couple',
    readTime: '8 min',
    image: '/images/e5997909be987417ef6683a7a4b29f8d.jpg',
    date: '22 février 2026',
  },
  {
    id: 'a5',
    slug: 'confiance-en-soi-intimite',
    title: 'Confiance en soi et épanouissement intime',
    excerpt: 'La confiance en soi est le fondement d\'une vie intime épanouie. Explorez des pistes concrètes pour cultiver cette confiance au quotidien.',
    category: 'Bien-être',
    readTime: '5 min',
    image: '/images/4abb75e29dce15d850dfe8cc7dd1b1b9.jpg',
    date: '14 février 2026',
  },
  {
    id: 'a6',
    slug: 'lubrifiant-guide-complet',
    title: 'Lubrifiants intimes : le guide complet',
    excerpt: 'Tout ce que vous devez savoir sur les lubrifiants intimes : types, compositions, usages et conseils pour choisir celui qui vous convient.',
    category: 'Guide',
    readTime: '6 min',
    image: '/images/8b25f4c8c9e361ca530285edf3070bce.jpg',
    date: '5 février 2026',
  },
];

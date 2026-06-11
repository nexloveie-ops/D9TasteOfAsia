import { assets } from '../assets';

export type MenuCategory = 'hongkong' | 'japanese' | 'dimsum' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: MenuCategory;
  tag?: 'New' | 'Popular';
  image: string;
}

export interface HeroSlide {
  id: number;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    eyebrow: 'Hong Kong Heritage',
    title: 'Savour Every Bite',
    subtitle:
      'Authentic dim sum, wok-hei stir-fries, and Cantonese classics — refined for the modern table.',
    image: assets.hero[0],
  },
  {
    id: 2,
    eyebrow: 'Japanese Craft',
    title: 'Delightful Experience',
    subtitle:
      'Fresh sushi, soulful ramen, and delicate tempura — precision and artistry in every dish.',
    image: assets.hero[1],
  },
  {
    id: 3,
    eyebrow: 'East Meets West',
    title: 'Taste Of Asia',
    subtitle:
      'Two culinary traditions under one roof — fine Asian dining in the heart of Dublin.',
    image: assets.hero[2],
  },
];

export const specialDishes: MenuItem[] = [
  {
    id: 'sp1',
    name: 'Har Gow',
    description: 'Crystal shrimp dumplings — translucent skin, plump prawns, bamboo-steamed to perfection.',
    price: 12.5,
    originalPrice: 15.0,
    category: 'dimsum',
    tag: 'Popular',
    image: assets.special[0],
  },
  {
    id: 'sp2',
    name: 'Salmon Nigiri Set',
    description: 'Premium Norwegian salmon over seasoned sushi rice — buttery, clean, and elegant.',
    price: 18.0,
    originalPrice: 22.0,
    category: 'japanese',
    tag: 'New',
    image: assets.special[1],
  },
  {
    id: 'sp3',
    name: 'Char Siu Bao',
    description: 'Fluffy steamed buns filled with honey-glazed Cantonese barbecue pork.',
    price: 9.5,
    category: 'hongkong',
    image: assets.special[2],
  },
  {
    id: 'sp4',
    name: 'Tonkotsu Ramen',
    description: 'Rich pork bone broth, chashu, soft egg, nori, and spring onion — comfort in a bowl.',
    price: 16.5,
    originalPrice: 19.0,
    category: 'japanese',
    tag: 'Popular',
    image: assets.special[3],
  },
  {
    id: 'sp5',
    name: 'Prawn Har Gow Platter',
    description: 'A generous selection of steamed dim sum — har gow, siu mai, and crystal dumplings.',
    price: 22.0,
    originalPrice: 26.0,
    category: 'dimsum',
    tag: 'Popular',
    image: assets.menu.ds[2],
  },
  {
    id: 'sp6',
    name: 'Salmon Sashimi',
    description: 'Freshly sliced Atlantic salmon — clean, buttery, and served with wasabi and pickled ginger.',
    price: 19.5,
    category: 'japanese',
    tag: 'New',
    image: assets.menu.jp[0],
  },
];

export const menuItems: MenuItem[] = [
  {
    id: 'hk1',
    name: 'Wonton Noodle Soup',
    description: 'Silky egg noodles in clear broth with plump shrimp wontons and Chinese greens.',
    price: 14.5,
    category: 'hongkong',
    image: assets.menu.hk[0],
  },
  {
    id: 'hk2',
    name: 'Beef Ho Fun',
    description: 'Wide rice noodles wok-fried with tender beef, bean sprouts, and dark soy.',
    price: 16.0,
    category: 'hongkong',
    tag: 'Popular',
    image: assets.menu.hk[1],
  },
  {
    id: 'hk3',
    name: 'Salt & Pepper Squid',
    description: 'Crispy fried squid tossed with garlic, chilli, and spring onion.',
    price: 15.5,
    category: 'hongkong',
    image: assets.menu.hk[2],
  },
  {
    id: 'hk4',
    name: 'Claypot Rice',
    description: 'Fragrant rice with lap cheong and marinated chicken, finished with crispy base.',
    price: 17.0,
    category: 'hongkong',
    tag: 'New',
    image: assets.menu.hk[3],
  },
  {
    id: 'jp1',
    name: 'Dragon Roll',
    description: 'Tempura prawn inside, avocado and tobiko on top — our signature roll.',
    price: 19.5,
    category: 'japanese',
    tag: 'Popular',
    image: assets.menu.jp[0],
  },
  {
    id: 'jp2',
    name: 'Chicken Katsu Curry',
    description: 'Panko-crumbed chicken cutlet with Japanese curry and steamed rice.',
    price: 15.0,
    category: 'japanese',
    image: assets.menu.jp[1],
  },
  {
    id: 'jp3',
    name: 'Ebi Tempura',
    description: 'Light, crisp batter around jumbo prawns — served with tentsuyu dipping sauce.',
    price: 14.0,
    category: 'japanese',
    image: assets.menu.jp[2],
  },
  {
    id: 'jp4',
    name: 'Miso Black Cod',
    description: 'Marinated overnight in sweet miso, grilled until caramelised and tender.',
    price: 28.0,
    category: 'japanese',
    tag: 'New',
    image: assets.menu.jp[3],
  },
  {
    id: 'ds1',
    name: 'Siu Mai',
    description: 'Open-topped pork and shrimp dumplings — a dim sum essential.',
    price: 10.5,
    category: 'dimsum',
    image: assets.menu.ds[0],
  },
  {
    id: 'ds2',
    name: 'Cheung Fun',
    description: 'Silky rice noodle rolls with char siu, served with sweet soy glaze.',
    price: 11.0,
    category: 'dimsum',
    image: assets.menu.ds[1],
  },
  {
    id: 'ds3',
    name: 'Lo Mai Gai',
    description: 'Sticky rice with chicken, mushrooms, and lap cheong wrapped in lotus leaf.',
    price: 12.0,
    category: 'dimsum',
    tag: 'Popular',
    image: assets.menu.ds[2],
  },
  {
    id: 'ds4',
    name: 'Egg Tart',
    description: 'Flaky pastry shell with silky custard — a Hong Kong bakery classic.',
    price: 6.5,
    category: 'dimsum',
    image: assets.menu.ds[3],
  },
  {
    id: 'dr1',
    name: 'Jasmine Tea',
    description: 'Fragrant loose-leaf jasmine — complimentary with dim sum service.',
    price: 4.5,
    category: 'drinks',
    image: assets.menu.dr[0],
  },
  {
    id: 'dr2',
    name: 'Yuzu Highball',
    description: 'Japanese whisky, yuzu, soda, and a twist of lemon — bright and refreshing.',
    price: 12.0,
    category: 'drinks',
    tag: 'New',
    image: assets.menu.dr[1],
  },
  {
    id: 'dr3',
    name: 'Hong Kong Milk Tea',
    description: 'Strong Ceylon tea with evaporated milk — silky, bold, and iconic.',
    price: 5.0,
    category: 'drinks',
    tag: 'Popular',
    image: assets.menu.dr[2],
  },
  {
    id: 'dr4',
    name: 'Sake Flight',
    description: 'Three premium sakes — junmai, ginjo, and daiginjo — curated by our sommelier.',
    price: 22.0,
    category: 'drinks',
    image: assets.menu.dr[3],
  },
];

export const menuCategories: { id: MenuCategory; label: string; image: string }[] = [
  { id: 'hongkong', label: 'Hong Kong', image: assets.categories.hongkong },
  { id: 'japanese', label: 'Japanese', image: assets.categories.japanese },
  { id: 'dimsum', label: 'Dim Sum', image: assets.categories.dimsum },
  { id: 'drinks', label: 'Drinks', image: assets.categories.drinks },
];

export const categoryStrip = [
  { id: 'hongkong', label: 'Hong Kong', image: assets.categories.hongkong },
  { id: 'japanese', label: 'Japanese', image: assets.categories.japanese },
  { id: 'dimsum', label: 'Dim Sum', image: assets.categories.dimsum },
  { id: 'drinks', label: 'Drinks', image: assets.categories.drinks },
];

export const whyItems = [
  {
    feature: 'Skilled chef',
    image: assets.advantages[0],
    value: 600,
    suffix: '+',
    label: 'Monthly visitors',
    detail:
      'Guests from across Dublin and beyond choose us for authentic Hong Kong and Japanese flavours.',
  },
  {
    feature: 'Hygienic food',
    image: assets.advantages[1],
    value: 450,
    suffix: '+',
    label: 'Positive reviews',
    detail:
      'Rated highly for quality, service, and our unique dual-cuisine fine dining experience.',
  },
  {
    feature: 'Fresh ambience',
    image: assets.advantages[2],
    value: 135,
    suffix: '+',
    label: 'Signature recipes',
    detail:
      'Family recipes from Hong Kong and Tokyo, refined with precision for every plate.',
  },
  {
    feature: 'Secret recipe',
    image: assets.advantages[3],
    value: 25,
    suffix: '+',
    label: 'Awards & honours',
    detail:
      'Recognised for excellence in Asian cuisine and hospitality across Ireland.',
  },
] as const;

/** @deprecated use whyItems */
export const stats = whyItems.map(({ value, suffix, label, detail }) => ({
  value,
  suffix,
  label,
  detail,
}));

export const blogPosts = [
  {
    id: 1,
    date: 'May 15, 2024',
    category: 'Dim Sum, Salads',
    title: 'The Art of Har Gow',
    image: assets.blog[0],
  },
  {
    id: 2,
    date: 'Jun 20, 2024',
    category: 'Japanese',
    title: 'Finding the Perfect Ramen Broth',
    image: assets.blog[1],
  },
  {
    id: 3,
    date: 'Jul 12, 2024',
    category: 'Fine Food',
    title: 'East Meets West at Taste Of Asia',
    image: assets.blog[2],
  },
];

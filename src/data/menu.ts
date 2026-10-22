import { assets } from '../assets';

export type MenuCategory = 'hongkong' | 'sichuan' | 'japanese' | 'dimsum' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  descriptionEn?: string;
  price: number;
  /** Shown instead of the euro amount, for example a market price. */
  priceLabel?: string;
  originalPrice?: number;
  category: MenuCategory;
  tag?: 'New' | 'Popular';
  image: string;
  /** Poster artwork should be shown in full, without the arch crop. */
  poster?: boolean;
}

export interface HeroSlide {
  id: number;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  /** Square photo used instead of the wide banner on phones. */
  mobileImage?: string;
  /** Poster already includes its own title, so the slide stays image-only. */
  artwork?: boolean;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    eyebrow: 'East Meets West',
    title: 'Taste Of Asia',
    subtitle:
      'Two culinary traditions under one roof — fine Asian dining in the heart of Dublin.',
    image: assets.hero[0],
    mobileImage: assets.reservationDining,
  },
  {
    id: 2,
    eyebrow: '',
    title: 'Taste Of Asia',
    subtitle: 'Authentic Asian cuisine',
    image: assets.hero[1],
    mobileImage: assets.grid.balcony,
    artwork: true,
  },
];

export const specialDishes: MenuItem[] = [
  {
    id: 'sp1',
    name: '澳龙刺身',
    nameEn: 'Australian Lobster Sashimi',
    description: '鲜活澳龙现开现切，肉质晶莹爽甜，佐芥末与酱油，尽显干净的鲜甜本味。',
    descriptionEn:
      'Live Australian lobster, sliced to order and served with wasabi and soy — translucent, delicate, and sweetest the moment it is cut.',
    price: 0,
    priceLabel: '时价 · Market price',
    category: 'hongkong',
    tag: 'Popular',
    image: assets.lobsterSashimi,
    poster: true,
  },
  {
    id: 'sp2',
    name: '熟醉飞蟹（1只）',
    nameEn: 'Marinated Flying Crab (1 pc)',
    description:
      '精选鲜美飞蟹，完全蒸熟后冷却，浸入以酱油、绍兴黄酒、姜片及多种传统中式香料调制的秘制醉卤中充分腌制。蟹肉鲜甜细嫩，融合浓郁酱香与醇厚酒香，咸鲜回甘，口感层次丰富，呈现经典江南熟醉风味。',
    descriptionEn:
      'Selected fresh flying crabs, fully steamed and cooled, then marinated in a signature brine of soy sauce, Shaoxing wine, ginger, and traditional Chinese spices. The meat is sweet and tender, with a rich savoury sauce and mellow wine aroma — a classic Jiangnan drunken crab.',
    price: 9.9,
    priceLabel: '€9.90 / 只',
    category: 'hongkong',
    tag: 'New',
    image: assets.flyingCrab,
    poster: true,
  },
  {
    id: 'sp3',
    name: '酱爆鸭舌',
    nameEn: 'Sautéed Duck Tongues',
    description:
      '精选鲜嫩鸭舌，搭配秘制浓香酱汁，以大火快速爆炒，充分吸收酱油、蒜蓉、姜及中式香料的浓郁风味。鸭舌口感鲜嫩弹牙，酱香醇厚，咸鲜微甜，香气四溢，令人回味无穷。',
    descriptionEn:
      'Selected tender duck tongues, stir-fried over high heat in a rich signature sauce so they take on soy, garlic, ginger, and traditional Chinese spices. Springy and succulent, deeply savoury with a hint of sweetness, and fragrant to the last bite.',
    price: 16.8,
    category: 'hongkong',
    image: assets.duckTongues,
    poster: true,
  },
  {
    id: 'sp4',
    name: '蒜香骨',
    nameEn: 'Garlic Pork Ribs',
    description:
      '精选鲜嫩猪排骨，以新鲜蒜蓉及秘制中式香料精心腌制，炸至外皮金黄酥脆，搭配香脆蒜酥及特色调味料。排骨外酥里嫩，肉质鲜嫩多汁，蒜香浓郁，咸香惹味，呈现经典粤式蒜香骨风味。',
    descriptionEn:
      'Selected tender pork ribs, marinated with fresh garlic and a signature blend of Chinese spices, then fried until the crust is golden and crisp and finished with crunchy garlic crumbs. Crisp outside, juicy inside, with a rich garlic aroma and a classic Cantonese savoury flavour.',
    price: 22.8,
    category: 'hongkong',
    image: assets.garlicRibs,
    poster: true,
  },
  {
    id: 'sp5',
    name: '枝竹羊腩煲',
    nameEn: 'Braised Lamb with Bean Curd Sticks',
    description:
      '精选鲜嫩羊腩，搭配传统枝竹、姜片、蒜蓉及多种中式香料，以秘制酱汁慢火焖煮。羊腩肉质软嫩入味，肥瘦相间，枝竹充分吸收浓郁鲜香的羊肉汤汁，口感软滑，酱香醇厚，呈现经典粤式羊腩煲风味。',
    descriptionEn:
      'Selected tender lamb belly, braised slowly in a signature sauce with bean curd sticks, ginger, garlic, and Chinese spices. The meat is soft and well seasoned, while the bean curd sticks soak up the rich lamb broth — silky, deeply savoury, and classically Cantonese.',
    price: 22.8,
    category: 'hongkong',
    image: assets.lambBrisket,
    poster: true,
  },
  {
    id: 'sp6',
    name: '香煎黄花鱼',
    nameEn: 'Pan Fried Yellow Croaker',
    description:
      '精选整条黄花鱼，以恰到好处的火候慢煎至表皮金黄酥香，鱼肉细嫩鲜甜，搭配姜葱与特调酱汁，层层提鲜。外酥里嫩，鲜香醇厚，尽显黄花鱼的本真风味。',
    descriptionEn:
      'A whole yellow croaker, pan-fried slowly until the skin is golden and fragrant, the flesh delicate and sweet, finished with ginger, spring onion, and a house sauce. Crisp outside, tender inside — the fish at its most honest.',
    price: 24.8,
    category: 'hongkong',
    image: assets.yellowCroaker,
    poster: true,
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
    id: 'sc1',
    name: 'Mapo Tofu',
    description: 'Silken tofu in a fiery chilli-bean sauce, finished with minced beef and Sichuan pepper.',
    price: 14.5,
    category: 'sichuan',
    tag: 'Popular',
    image: assets.menu.sc[0],
  },
  {
    id: 'sc2',
    name: 'Kung Pao Chicken',
    description: 'Wok-fried chicken with roasted peanuts, dried chilli, and a sweet-sour kick.',
    price: 15.5,
    category: 'sichuan',
    image: assets.menu.sc[1],
  },
  {
    id: 'sc3',
    name: 'Dan Dan Noodles',
    description: 'Wheat noodles in sesame chilli oil, minced pork, and pickled mustard greens.',
    price: 13.5,
    category: 'sichuan',
    tag: 'New',
    image: assets.menu.sc[2],
  },
  {
    id: 'sc4',
    name: 'Fish-Fragrant Aubergine',
    description: 'Braised aubergine with garlic, ginger, chilli, and a glossy sweet-savoury sauce.',
    price: 13.0,
    category: 'sichuan',
    image: assets.menu.sc[3],
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

export const menuCategories: {
  id: MenuCategory;
  label: string;
  image: string;
  panel?: string;
  poster?: boolean;
}[] = [
  {
    id: 'hongkong',
    label: 'Cantonese',
    image: assets.categories.hongkong,
    panel: assets.menuPanels.cantonese,
    poster: true,
  },
  {
    id: 'sichuan',
    label: 'Sichuan',
    image: assets.categories.sichuan,
    panel: assets.menuPanels.sichuan,
    poster: true,
  },
  {
    id: 'japanese',
    label: 'Japanese',
    image: assets.categories.japanese,
    panel: assets.menuPanels.japanese,
    poster: true,
  },
  {
    id: 'dimsum',
    label: 'Dim Sum',
    image: assets.categories.dimsum,
    panel: assets.menuPanels.dimsum,
    poster: true,
  },
  {
    id: 'drinks',
    label: 'Drinks',
    image: assets.categories.drinks,
    panel: assets.menuPanels.drinks,
    poster: true,
  },
];

export const categoryStrip = menuCategories;

export const whyItems = [
  {
    feature: 'Heung Yeung Luk',
    image: assets.team.heungYeungLuk,
    label: 'Chef',
    detail:
      'Chef at Taste Of Asia. He cooks the house Cantonese signatures with careful heat, rich sauces, and respect for every ingredient.',
  },
  {
    feature: 'Wei Xiong Lim',
    image: assets.team.weiXiongLim,
    label: 'Chef',
    detail:
      'Chef at Taste Of Asia. He works the Cantonese kitchen with the team, keeping each plate precise, fresh, and true to the house style.',
  },
  {
    feature: 'Chun Yep Chin',
    image: assets.team.chunYepChin,
    label: 'Chef',
    detail:
      'Chef at Taste Of Asia. He prepares the Cantonese dishes with a steady hand, from the sauce to the final garnish on the plate.',
  },
  {
    feature: 'Mingxiong Zheng',
    image: assets.team.mingxiongZheng,
    label: 'Chef',
    detail:
      'Chef at Taste Of Asia. He finishes the Cantonese plates in the kitchen, balancing flavour, texture, and the look of every dish.',
  },
] as const;

/** @deprecated use whyItems */
export const stats = whyItems.map(({ label, detail }) => ({
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

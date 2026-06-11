/** Local assets — tastyc demo photos for categories/hero, food folder for dishes */
const tastyc = (name: string) => `/assets/tastyc/images/${name}`;
const food = (name: string) => `/assets/food/${name}`;

export const assets = {
  hero: [tastyc('hero-slide-1.webp'), tastyc('hero-slide-2.webp'), food('hero-3.jpg')],
  categories: {
    hongkong: tastyc('cat-hongkong.webp'),
    japanese: tastyc('cat-japanese.webp'),
    dimsum: tastyc('cat-dimsum.webp'),
    drinks: tastyc('cat-drinks.webp'),
  },
  special: [food('dimsum.webp'), food('sushi.jpg'), food('hongkong.jpg'), food('ramen.webp')],
  chef: food('chef.webp'),
  menu: {
    hk: [food('wonton.png'), food('noodles.png'), food('hongkong.jpg'), food('platter.jpg')],
    jp: [food('sushi.jpg'), food('katsu.jpg'), food('tempura.png'), food('cod.jpg')],
    ds: [food('dimsum.webp'), food('hongkong.jpg'), food('platter.jpg'), food('eggtart.jpg')],
    dr: [food('tea.jpg'), food('drinks.jpg'), food('milktea.jpg'), food('drinks.jpg')],
  },
  blog: [
    tastyc('news-01-950x950.jpg.webp'),
    tastyc('news-02-950x950.jpg.webp'),
    tastyc('news-03-950x950.jpg.webp'),
  ],
  grid: {
    dining: tastyc('book-table-bg.jpg.webp'),
    chefKitchen: tastyc('pic8.jpg.webp'),
    chefPortrait: tastyc('portrait-man-smiling-kitchen-1.jpg.webp'),
  },
  scrollIcon: tastyc('dinner-table-2.png'),
  logo: '/assets/brand/logo.png',
  logoWhite: tastyc('logo-white.png'),
  pattern: tastyc('pattern-dark.png'),
  patternGrid: tastyc('pattern-dark-2x-2.png'),
  advantages: [
    tastyc('adv-01.jpg.webp'),
    tastyc('adv-02.jpg.webp'),
    tastyc('adv-03.jpg.webp'),
    tastyc('adv-04.jpg.webp'),
  ],
} as const;

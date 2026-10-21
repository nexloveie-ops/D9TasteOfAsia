/** Local assets — tastyc demo photos for categories/hero, food folder for dishes */
const tastyc = (name: string) => `/assets/tastyc/images/${name}`;
const food = (name: string) => `/assets/food/${name}`;
export const assets = {
  hero: ['/assets/hero/dining-room.png', '/assets/hero/cuisine-banner.png'],
  categories: {
    hongkong: '/assets/categories/cantonese.png',
    sichuan: '/assets/categories/sichuan.png',
    japanese: tastyc('cat-japanese.webp'),
    dimsum: '/assets/categories/dimsum.png',
    drinks: '/assets/categories/drinks.png',
  },
  menuPanels: {
    cantonese: '/assets/menu/cantonese-panel.png',
    sichuan: '/assets/menu/sichuan-panel.png',
    japanese: '/assets/menu/japanese-panel.png',
    dimsum: '/assets/menu/dimsum-panel.png',
    drinks: '/assets/menu/drinks-panel.png',
  },
  special: [food('dimsum.webp'), food('sushi.jpg'), food('hongkong.jpg'), food('ramen.webp')],
  lobsterSashimi: '/assets/food/lobster-sashimi.jpg',
  flyingCrab: '/assets/food/flying-crab.jpg',
  duckTongues: '/assets/food/duck-tongues.jpg',
  garlicRibs: '/assets/food/garlic-ribs.jpg',
  lambBrisket: '/assets/food/lamb-brisket.jpg',
  yellowCroaker: '/assets/food/yellow-croaker.jpg',
  chef: food('chef.webp'),
  menu: {
    hk: [food('wonton.png'), food('noodles.png'), food('hongkong.jpg'), food('platter.jpg')],
    sc: [food('platter.jpg'), food('noodles.png'), food('hongkong.jpg'), food('ramen.webp')],
    jp: [food('sushi.jpg'), food('katsu.jpg'), food('tempura.png'), food('cod.jpg')],
    ds: [food('dimsum.webp'), food('hongkong.jpg'), food('platter.jpg'), food('eggtart.jpg')],
    dr: [food('tea.jpg'), food('drinks.jpg'), food('milktea.jpg'), food('drinks.jpg')],
  },
  blog: [
    tastyc('news-01-950x950.jpg.webp'),
    tastyc('news-02-950x950.jpg.webp'),
    tastyc('news-03-950x950.jpg.webp'),
  ],
  reservationDining: '/assets/reservation/dining-room.png',
  grid: {
    dining: tastyc('book-table-bg.jpg.webp'),
    balcony: '/assets/grid/balcony.png',
    chefKitchen: '/assets/grid/featured-dishes.png',
    chefPortrait: tastyc('portrait-man-smiling-kitchen-1.jpg.webp'),
  },
  scrollIcon: tastyc('dinner-table-2.png'),
  logo: '/assets/brand/logo.png',
  logoWhite: tastyc('logo-white.png'),
  pattern: tastyc('pattern-dark.png'),
  patternGrid: tastyc('pattern-dark-2x-2.png'),
  team: {
    heungYeungLuk: '/assets/team/heung-yeung-luk.png',
    weiXiongLim: '/assets/team/wei-xiong-lim.png',
    chunYepChin: '/assets/team/chun-yep-chin.png',
    mingxiongZheng: '/assets/team/mingxiong-zheng.png',
  },
  advantages: [
    tastyc('adv-01.jpg.webp'),
    tastyc('adv-02.jpg.webp'),
    tastyc('adv-03.jpg.webp'),
    tastyc('adv-04.jpg.webp'),
  ],
} as const;

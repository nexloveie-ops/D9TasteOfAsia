# Taste Of Asia — Fine Asian Dining

Restaurant portal inspired by [Tastyc Fine Dining](https://tastyc.bslthemes.com/fine-dining/).

## Downloaded assets

All demo media and reference files are stored locally:

```
public/assets/tastyc/
├── images/          # 71 images (hero, menu, categories, blog, etc.)
├── css/             # tastyc-style.css + tastyc-bundle.css (reference)
├── reference/       # Original HTML snapshot
├── manifest.json    # URL → local path mapping
└── rect-box-3.svg   # Circular text path reference
```

Images are served from `/assets/tastyc/images/` — no external CDN dependency.

## Effects implemented

- Preloader with logo animation
- Hero Swiper (fade + parallax zoom)
- Circular rotating "Book Now" scroll button
- Scroll-hint mouse indicator
- Category strip hover background overlay
- Special dishes carousel with arch images + shine hover
- Button dual-text slide animation
- Section scroll-reveal fade-up
- Menu dotted price lines + circular dish photos

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Customisation

- **Content & prices**: `src/data/menu.ts`
- **Asset paths**: `src/assets.ts`
- **Theme colours**: `src/index.css` (`:root` variables)
- **Tastyc effects**: `src/tastyc-effects.css`
- **Reference CSS**: `public/assets/tastyc/css/tastyc-style.css`

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { heroSlides } from '../data/menu';
import { sitePhones } from '../data/site';
import { ThemeButton } from './ThemeButton';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

interface HeroProps {
  onOpenMenu: () => void;
}

export function Hero({ onOpenMenu }: HeroProps) {
  const [scrolled, setScrolled] = useState(false);
  const [compactHero, setCompactHero] = useState(
    () => window.matchMedia('(max-width: 768px)').matches,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const sync = () => setCompactHero(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return (
    <section id="home" className={`hero bg-video-wrap ${scrolled ? 'hero--scrolled' : ''}`}>
      <Swiper
        key={compactHero ? 'compact' : 'full'}
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={compactHero ? 1200 : 900}
        loop={!compactHero}
        rewind={compactHero}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          prevEl: '.hero__nav-prev',
          nextEl: '.hero__nav-next',
        }}
        className="hero__swiper tst-hero-style-2"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`hero__cover tst-cover-frame${slide.artwork ? ' hero__cover--artwork' : ''}`}>
              <img
                src={compactHero && slide.mobileImage ? slide.mobileImage : slide.image}
                alt={slide.artwork ? 'Taste Of Asia — Authentic Asian Cuisine' : ''}
                className="tst-cover"
              />
              {!slide.artwork && <div className="hero__overlay tst-overlay" />}
            </div>
            {!slide.artwork && (
              <div className="hero__container auto-container">
                <div className="hero__content align-center">
                  <p className="hero__suptitle tst-suptitle">{slide.eyebrow}</p>
                  <h1 className="hero__title tst-title--h">{slide.title}</h1>
                  <p className="hero__text tst-text-lg">{slide.subtitle}</p>
                  <div className="hero__actions">
                    <ThemeButton onClick={onOpenMenu}>FULL MENU</ThemeButton>
                    <a href="#menu" className="tst-label tst-label--light">
                      Today Special
                    </a>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="banner-call">
        <span className="line" />
        <span className="banner-call__numbers">
          {sitePhones.map((phone) => (
            <a key={phone.tel} href={`tel:${phone.tel}`}>
              {phone.display}
            </a>
          ))}
        </span>
        <span className="line" />
      </div>

      <div className="banner-social banner-social-list">
        <span className="line" />
        <ul>
          <li><a href="#">FB</a></li>
          <li><a href="#">IG</a></li>
          <li><a href="#">YT</a></li>
        </ul>
        <span className="line" />
      </div>

      <div className="hero__navigation tst-main-slider-navigation slider-navs-style-2">
        <button type="button" className="hero__nav-btn tst-slider-btn hero__nav-prev" aria-label="Previous slide">
          ←
        </button>
        <button type="button" className="hero__nav-btn tst-slider-btn hero__nav-next" aria-label="Next slide">
          →
        </button>
      </div>

      <svg className="hero__curve bg-curve-center" viewBox="0 0 1440 65" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,65 C360,0 1080,0 1440,65 L1440,65 L0,65 Z" />
      </svg>
    </section>
  );
}

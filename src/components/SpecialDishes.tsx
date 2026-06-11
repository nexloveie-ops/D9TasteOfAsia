import { useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { specialDishes } from '../data/menu';
import { SectionHeading } from './SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const categoryLabels: Record<string, string> = {
  hongkong: 'Hong Kong',
  japanese: 'Japanese',
  dimsum: 'Dim Sum',
  drinks: 'Drinks',
};

export function SpecialDishes() {
  const sectionRef = useScrollReveal<HTMLElement>();

  const onSwiper = useCallback((swiper: SwiperType) => {
    requestAnimationFrame(() => {
      swiper.navigation.init();
      swiper.navigation.update();
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    });
  }, []);

  return (
    <section ref={sectionRef} className="section special-dishes reveal">
      <div className="container">
        <SectionHeading suptitle="Popular" title="Special Dishes" centered />

        <div className="special-dishes__wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            rewind
            grabCursor
            observer
            observeParents
            navigation={{
              prevEl: '.special-dishes__prev',
              nextEl: '.special-dishes__next',
            }}
            pagination={{
              clickable: true,
              el: '.special-dishes__pagination',
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
            }}
            onSwiper={onSwiper}
            className="special-dishes__swiper tst-slider-two"
          >
            {specialDishes.map((dish) => (
              <SwiperSlide key={dish.id}>
                <article className="offer-block tst-slider-two-slide">
                  <div className="inner-box">
                    <div className="image image-col img-size-sq-2">
                      <img src={dish.image} alt={dish.name} loading="lazy" />
                    </div>
                    <span className="dish-slide__category suptitle">
                      {categoryLabels[dish.category]}
                    </span>
                    <h3 className="h6 dish-slide__name">{dish.name}</h3>
                    <p className="dish-slide__desc tst-text">{dish.description}</p>
                    <div className="dish-slide__prices tst-prices">
                      {dish.originalPrice && (
                        <span className="dish-slide__old tst-price tst-old-price">
                          €{dish.originalPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="dish-slide__price tst-price tst-color">
                        €{dish.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="special-dishes__nav tst-slider-navigation">
            <button
              type="button"
              className="slider-btn tst-slider-btn special-dishes__prev"
              aria-label="Previous dish"
            >
              ←
            </button>
            <div className="special-dishes__pagination" />
            <button
              type="button"
              className="slider-btn tst-slider-btn special-dishes__next"
              aria-label="Next dish"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { specialDishes } from '../data/menu';
import { assets } from '../assets';
import { SectionHeading } from './SectionHeading';
import { StarIcon } from './StarIcon';
import { ThemeButton } from './ThemeButton';
import { useScrollReveal } from '../hooks/useScrollReveal';
import 'swiper/css';
import 'swiper/css/pagination';

const categoryLabels: Record<string, string> = {
  hongkong: 'Hong Kong',
  japanese: 'Japanese',
  dimsum: 'Dim Sum',
  drinks: 'Drinks',
};

export function SpecialChefGrid() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="special-chef-grid reveal">
      <div className="special-chef-grid__layout">
        <div className="special-chef-grid__cell special-chef-grid__cell--dishes">
          <div className="special-chef-grid__dishes-inner">
            <div className="special-chef-grid__dishes-heading special-chef-grid__dishes-heading--mobile">
              <SectionHeading suptitle="Popular" title="Special Dishes" centered />
            </div>

            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={0}
              rewind
              grabCursor
              centeredSlides
              pagination={{ clickable: true }}
              className="tst-slider-two special-chef-grid__swiper"
            >
              {specialDishes.map((dish) => (
                <SwiperSlide key={dish.id}>
                  <div className="tst-slider-two-slide">
                    <div className="image-col img-size-sq-2 tst-mb-20">
                      <img src={dish.image} alt={dish.name} loading="lazy" />
                    </div>
                    <div className="title-box">
                      <span className="suptitle">{categoryLabels[dish.category]}</span>
                    </div>
                    <div className="h6 tst-mb-15">{dish.name}</div>
                    <p className="tst-text tst-mb-15">{dish.description}</p>
                    <div className="tst-prices">
                      {dish.originalPrice && (
                        <div className="tst-price tst-old-price">
                          €{dish.originalPrice.toFixed(2)}
                        </div>
                      )}
                      <div className="tst-price tst-color">€{dish.price.toFixed(2)}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="special-chef-grid__cell special-chef-grid__cell--dining">
          <img src={assets.grid.dining} alt="Dining at Taste Of Asia" loading="lazy" />
          <div className="special-chef-grid__vertical-tab" aria-hidden="true">
            <span>Special Dishes</span>
          </div>
        </div>

        <div className="special-chef-grid__cell special-chef-grid__cell--kitchen">
          <img src={assets.grid.chefKitchen} alt="Chef preparing dishes" loading="lazy" />
        </div>

        <div id="about" className="special-chef-grid__cell special-chef-grid__cell--chef">
          <div className="special-chef-grid__chef-inner">
            <div className="tst-image-s-2">
              <div className="image-col img-size-lg">
                <img src={assets.grid.chefPortrait} alt="Chef Wei Tanaka" loading="lazy" />
              </div>
            </div>

            <div className="title-box title-box--centered">
              <div className="suptitle">
                <StarIcon className="icon-elem-svg" />
                <span>Meet the Chef</span>
                <StarIcon className="icon-elem-svg" />
              </div>
              <h2 className="tst-title--h">Chef Wei Tanaka</h2>
            </div>

            <p className="special-chef-grid__chef-text">
              Born in Hong Kong and trained in Tokyo, Chef Wei brings two culinary worlds
              together at Taste Of Asia — precision, passion, and unforgettable flavours in every
              plate.
            </p>

            <ThemeButton href="#about" variant="border">
              Meet Our Team
            </ThemeButton>
          </div>
        </div>
      </div>
    </section>
  );
}

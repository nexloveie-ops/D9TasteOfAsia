import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { specialDishes } from '../data/menu';
import { assets } from '../assets';
import { siteContact } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { ThemeButton } from './ThemeButton';
import { useScrollReveal } from '../hooks/useScrollReveal';
import 'swiper/css';
import 'swiper/css/pagination';

const categoryLabels: Record<string, string> = {
  hongkong: 'Cantonese',
  sichuan: 'Sichuan',
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
                    <div className={`image-col img-size-sq-2 tst-mb-20${dish.poster ? ' image-col--poster' : ''}`}>
                      <img src={dish.image} alt={dish.name} loading="lazy" />
                    </div>
                    <div className="title-box">
                      <span className="suptitle">{categoryLabels[dish.category]}</span>
                    </div>
                    <div className="h6 tst-mb-15">
                      {dish.name}
                      {dish.nameEn && <span className="dish-name-en">{dish.nameEn}</span>}
                    </div>
                    <p className="tst-text tst-mb-15">
                      {dish.description}
                      {dish.descriptionEn && <span className="dish-desc-en">{dish.descriptionEn}</span>}
                    </p>
                    <div className="tst-prices">
                      {dish.priceLabel ? (
                        <div className="tst-price tst-color">{dish.priceLabel}</div>
                      ) : (
                        <>
                          {dish.originalPrice && (
                            <div className="tst-price tst-old-price">
                              €{dish.originalPrice.toFixed(2)}
                            </div>
                          )}
                          <div className="tst-price tst-color">€{dish.price.toFixed(2)}</div>
                        </>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="special-chef-grid__cell special-chef-grid__cell--dining">
          <img src={assets.grid.balcony} alt="Dining at Taste Of Asia" loading="lazy" />
          <div className="special-chef-grid__vertical-tab" aria-hidden="true">
            <span>Special Dishes</span>
          </div>
        </div>

        <div className="special-chef-grid__cell special-chef-grid__cell--kitchen">
          <img src={assets.grid.chefKitchen} alt="Chef preparing dishes" loading="lazy" />
        </div>

        <div id="about" className="special-chef-grid__cell special-chef-grid__cell--visit">
          <div className="special-chef-grid__visit-inner">
            <SectionHeading suptitle="Visit Us" title="Taste Of Asia" centered />
            <p className="special-chef-grid__visit-text">{siteContact.address}</p>
            <p className="special-chef-grid__visit-text">{siteContact.hours}</p>
            <ThemeButton href="#reservation" variant="border">
              Book a Table
            </ThemeButton>
          </div>
        </div>
      </div>
    </section>
  );
}

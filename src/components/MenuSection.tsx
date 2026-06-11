import { useState } from 'react';
import { menuCategories, menuItems, type MenuCategory } from '../data/menu';
import { assets } from '../assets';
import { SectionHeading } from './SectionHeading';
import { ThemeButton } from './ThemeButton';
import { StarIcon } from './StarIcon';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function MenuSection() {
  const [active, setActive] = useState<MenuCategory>('hongkong');
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="menu" ref={ref} className="section menu reveal">
      <div className="container">
        <SectionHeading suptitle="Special Fine Dine" title="Delicious Menu" centered />

        <div className="menu-tabs-box">
          <ul className="tab-buttons">
            {menuCategories.map((cat, index) => (
              <li
                key={cat.id}
                className={`tab-btn ${active === cat.id ? 'active-btn' : ''}`}
              >
                <button type="button" onClick={() => setActive(cat.id)}>
                  <span>{cat.label}</span>
                </button>
                {index < menuCategories.length - 1 && (
                  <span className="icon-elem-svg" aria-hidden="true">
                    <StarIcon />
                  </span>
                )}
              </li>
            ))}
          </ul>

          <div className="tabs-content">
            {menuCategories.map((cat) => {
              const items = menuItems.filter((item) => item.category === cat.id);

              return (
                <div
                  key={cat.id}
                  id={`menu-tab-${cat.id}`}
                  className={`tab-item bookstl-tab ${active === cat.id ? 'active-tab' : ''}`}
                >
                  <div
                    className="pattrn-top"
                    style={{ backgroundImage: `url(${assets.pattern})` }}
                  />

                  <div className="menu-book-row">
                    <div className="menu-col menu-col--list">
                      <div className="menu-col__heading">
                        <h3 className="menu-col__title tst-title--h">{cat.label}</h3>
                      </div>

                      <div className="dish-blocks">
                        {items.map((item) => (
                          <article key={item.id} className="dish-block">
                            <div className="dish-image">
                              <div className="tst-item-cover-frame">
                                <img src={item.image} alt={item.name} loading="lazy" />
                              </div>
                            </div>
                            <div className="dish-desc">
                              <div className="dish-title">
                                <div className="h6">
                                  <span>{item.name}</span>
                                  {item.tag && <span className="s-info">{item.tag}</span>}
                                </div>
                                <span className="menu-list-line" />
                                <div className="price">
                                  <span>€{item.price.toFixed(2)}</span>
                                </div>
                              </div>
                              <div className="dish-bottom">
                                <div className="dish-text">
                                  <div>{item.description}</div>
                                </div>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>

                    <div className="menu-col menu-col--image">
                      <div className="image-col img-size-sq">
                        <img src={cat.image} alt={cat.label} loading="lazy" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="menu-note">
          Dim sum served daily from 12:00 pm to 3:00 pm · Dinner from 5:30 pm
        </p>
        <div className="menu-footer">
          <ThemeButton href="#menu" variant="border">
            View All Menu
          </ThemeButton>
        </div>
      </div>
    </section>
  );
}

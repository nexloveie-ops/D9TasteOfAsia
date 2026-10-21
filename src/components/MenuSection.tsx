import { useEffect, useState } from 'react';
import { assets } from '../assets';
import type { MenuCategory } from '../data/menu';
import { groupMatchesFocus, siteCategoryFor, type TodaysSpecialGroup } from '../data/todaysSpecials';
import { SectionHeading } from './SectionHeading';
import { StarIcon } from './StarIcon';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { TodaysSpecialsStatus } from '../hooks/useTodaysSpecials';

const PANEL: Record<MenuCategory, string> = {
  hongkong: assets.menuPanels.cantonese,
  sichuan: assets.menuPanels.sichuan,
  japanese: assets.menuPanels.japanese,
  dimsum: assets.menuPanels.dimsum,
  drinks: assets.menuPanels.drinks,
};

const PAGE_SIZE = 2;

function panelFor(group: TodaysSpecialGroup): string | null {
  const category = siteCategoryFor(group);
  return category ? PANEL[category] : null;
}

export function MenuSection({
  focus,
  groups,
  status,
}: {
  focus: MenuCategory | null;
  groups: TodaysSpecialGroup[];
  status: TodaysSpecialsStatus;
}) {
  const ref = useScrollReveal<HTMLElement>();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (!groups.length) return;
    if (!focus) {
      setActiveId((current) => current ?? groups[0].id);
      return;
    }
    const match = groups.find((group) => groupMatchesFocus(group, focus));
    if (match) setActiveId(match.id);
  }, [focus, groups]);

  useEffect(() => {
    setPage(0);
  }, [activeId]);

  const active = groups.find((group) => group.id === activeId) ?? groups[0];
  const pageCount = active ? Math.ceil(active.items.length / PAGE_SIZE) : 0;
  const currentPage = Math.min(page, Math.max(pageCount - 1, 0));
  const visibleItems = active
    ? active.items.slice(currentPage * PAGE_SIZE, currentPage * PAGE_SIZE + PAGE_SIZE)
    : [];

  return (
    <section id="menu" ref={ref} className="section menu reveal">
      <div className="container">
        <SectionHeading suptitle="Today's Specials" title="今日特供" centered />

        {status === 'loading' && <p className="menu-note">正在读取今日特供…</p>}
        {status === 'error' && (
          <p className="menu-note">今日特供暂时读不到，请确认点餐服务已打开。</p>
        )}
        {status === 'ready' && groups.length === 0 && (
          <p className="menu-note">今天还没有特供菜品。</p>
        )}

        {status === 'ready' && active && (
          <div className="menu-tabs-box">
            <ul className="tab-buttons">
              {groups.map((group, index) => (
                <li
                  key={group.id}
                  className={`tab-btn ${active.id === group.id ? 'active-btn' : ''}`}
                >
                  <button type="button" onClick={() => setActiveId(group.id)}>
                    <span>{group.name}</span>
                  </button>
                  {index < groups.length - 1 && (
                    <span className="icon-elem-svg" aria-hidden="true">
                      <StarIcon />
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="tabs-content">
              <div className="tab-item bookstl-tab active-tab">
                <div
                  className="pattrn-top"
                  style={{ backgroundImage: `url(${assets.pattern})` }}
                />

                <div className="menu-book-row">
                  <div className="menu-col menu-col--list">
                    <div className="menu-col__heading">
                      <h3 className="menu-col__title tst-title--h">
                        {active.name}
                        {active.nameEn && <span className="menu-col__title-en">{active.nameEn}</span>}
                      </h3>
                    </div>

                    <div className="dish-blocks">
                      {visibleItems.map((item) => (
                        <article key={item.id} className="dish-block">
                          {item.photoUrl && (
                            <div className="dish-image">
                              <div className="tst-item-cover-frame">
                                <img src={item.photoUrl} alt={item.name} loading="lazy" />
                              </div>
                            </div>
                          )}
                          <div className="dish-desc">
                            <div className="dish-title">
                              <div className="h6">
                                <span>
                                  {item.name}
                                  {item.isRecommended && <span className="s-info">推荐</span>}
                                  {item.isSoldOut && <span className="s-info">售罄</span>}
                                </span>
                                {item.nameEn && <span className="dish-name-en">{item.nameEn}</span>}
                              </div>
                              <span className="menu-list-line" />
                              <div className="price">
                                {item.price > item.sellPrice && (
                                  <span className="price-old">€{item.price.toFixed(2)}</span>
                                )}
                                <span>€{item.sellPrice.toFixed(2)}</span>
                              </div>
                            </div>
                            <div className="dish-bottom">
                              <div className="dish-text">
                                {item.description && <div>{item.description}</div>}
                                {item.descriptionEn && (
                                  <div className="dish-desc-en">{item.descriptionEn}</div>
                                )}
                              </div>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>

                    {pageCount > 1 && (
                      <div className="dish-pager">
                        <button
                          type="button"
                          className="slider-btn dish-pager__btn"
                          aria-label="Previous dishes"
                          disabled={currentPage === 0}
                          onClick={() => setPage(currentPage - 1)}
                        >
                          ←
                        </button>
                        <div className="dish-pager__dots">
                          {Array.from({ length: pageCount }, (_, index) => (
                            <button
                              key={index}
                              type="button"
                              className={`dish-pager__dot${index === currentPage ? ' is-active' : ''}`}
                              aria-label={`Page ${index + 1}`}
                              aria-current={index === currentPage ? 'page' : undefined}
                              onClick={() => setPage(index)}
                            />
                          ))}
                        </div>
                        <button
                          type="button"
                          className="slider-btn dish-pager__btn"
                          aria-label="Next dishes"
                          disabled={currentPage >= pageCount - 1}
                          onClick={() => setPage(currentPage + 1)}
                        >
                          →
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="menu-col menu-col--image">
                    <div className="image-col img-size-sq image-col--poster">
                      <img src={panelFor(active)!} alt={active.name} loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <p className="menu-note">
          Dim sum served daily from 12:00 pm to 3:00 pm · Dinner from 5:30 pm
        </p>
      </div>
    </section>
  );
}

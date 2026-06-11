import { categoryStrip } from '../data/menu';
import { StarIcon } from './StarIcon';

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M18.7 6.8 17.3 8.2 24.1 15H4v2h20.1l-6.8 6.8 1.4 1.4 8.5-8.5.7-.7-.7-.7z" />
    </svg>
  );
}

export function CategoryStrip() {
  return (
    <section id="category-start" className="category-section">
      <div className="category-section__inner">
        <div className="category-section__header">
          <div className="title-box title-box--centered">
            <div className="suptitle">
              <StarIcon className="icon-elem-svg" />
              <span>Explore Our Delicious Selections</span>
              <StarIcon className="icon-elem-svg" />
            </div>
          </div>
        </div>

        <div className="category-strip">
          {categoryStrip.map((cat) => (
            <a key={cat.id} href={`#menu-${cat.id}`} className="menucat-row">
              <div className="menucat-list">
                <div
                  className="menucat-overlay"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                <div className="menucat-img">
                  <img src={cat.image} alt={cat.label} loading="lazy" />
                </div>
                <div className="menucat-title">
                  <div className="h3">{cat.label}</div>
                </div>
                <div className="menucat-actions">
                  <div className="menucat-star">
                    <StarIcon />
                  </div>
                  <div className="menucat-arrow-btn">
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import { siteBrand, siteContact } from '../data/site';
import { StarIcon } from './StarIcon';

export function MainFooterBreak() {
  return (
    <section className="site-break" aria-label={siteBrand.name}>
      <div className="site-break__inner">
        <div className="suptitle">
          <StarIcon className="icon-elem-svg" />
          <span>{siteBrand.tagline}</span>
          <StarIcon className="icon-elem-svg" />
        </div>
        <p className="site-break__name">{siteBrand.name}</p>
        <p className="site-break__hours">{siteContact.hours}</p>
      </div>
    </section>
  );
}

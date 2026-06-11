import { assets } from '../assets';
import { SectionHeading } from './SectionHeading';
import { ThemeButton } from './ThemeButton';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function ChefSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="section chef reveal">
      <div className="container chef__grid">
        <div className="chef__media">
          <div className="chef__image-wrap offer-block">
            <div className="inner-box">
              <div className="image">
                <img src={assets.chef} alt="Head Chef at Taste Of Asia" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="chef__stamp">Since 2018</div>
        </div>
        <div className="chef__content">
          <SectionHeading suptitle="Meet the Chef" title="Chef Wei Tanaka" />
          <p>
            Born in Hong Kong and trained in Tokyo, Chef Wei brings two culinary
            worlds together at Taste Of Asia. With over twenty years in Michelin-starred
            kitchens across Asia and Europe, he crafts dishes that honour tradition
            with modern fine dining precision.
          </p>
          <p>
            From hand-folded har gow to precision-cut sashimi, every plate reflects
            passion, creativity, and the belief that great food tells a story.
          </p>
          <ThemeButton href="#about" variant="border">
            Meet Our Team
          </ThemeButton>
        </div>
      </div>
    </section>
  );
}

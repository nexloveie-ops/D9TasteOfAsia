import { whyItems } from '../data/menu';
import { SectionHeading } from './SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function WhyChooseUs() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section why reveal">
      <div className="container">
        <SectionHeading suptitle="The Team" title="Meet Our Team" centered />

        <div className="why-grid">
          {whyItems.map((item) => (
            <div key={item.feature} className="why-col">
              <div className="adv-image">
                <div className="image-box">
                  <img src={item.image} alt={item.feature} loading="lazy" />
                </div>
                <div className="over-box">
                  <div className="h6">
                    <span>{item.feature}</span>
                  </div>
                </div>
              </div>

              <div className="tst-count">
                <div className="h6 tst-color tst-mb-20">
                  <span>{item.label}</span>
                </div>
                <div className="tst-text">
                  <p>{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

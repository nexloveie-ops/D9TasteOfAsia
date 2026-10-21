import { useEffect, useRef, useState } from 'react';
import { whyItems } from '../data/menu';
import { SectionHeading } from './SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';

function AnimatedNumber({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tst-number">
      {count}
    </span>
  );
}

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
                {'value' in item && (
                  <div className="h2">
                    <AnimatedNumber target={item.value} />
                    <span className="tst-after">
                      <span>{item.suffix}</span>
                    </span>
                  </div>
                )}
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

import { StarIcon } from './StarIcon';

export function MainFooterBreak() {
  return (
    <section className="site-break" aria-label="Now open. 10% off all dishes. No service charge.">
      <div className="site-break__inner">
        <div className="suptitle site-break__eyebrow">
          <StarIcon className="icon-elem-svg" />
          <span>Now Open · 新开业</span>
          <StarIcon className="icon-elem-svg" />
        </div>
        <p className="site-break__title">10% off all dishes</p>
        <p className="site-break__title-zh">菜品 9 折</p>
        <p className="site-break__note">No service charge · 免服务费</p>
      </div>
    </section>
  );
}

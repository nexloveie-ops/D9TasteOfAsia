export function Marquee() {
  const items = Array.from({ length: 16 }, (_, i) => (
    <span key={i} className="marquee__item">
      Book Now <em>·</em>
    </span>
  ));

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__inner">{items}</div>
      <div className="marquee__inner">{items}</div>
    </div>
  );
}

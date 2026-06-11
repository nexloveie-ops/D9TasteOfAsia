import { useEffect, useState } from 'react';
import { BrandMark } from './BrandMark';

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`preloader ${done ? 'preloader--done' : ''}`} aria-hidden={done}>
      <div className="preloader__inner">
        <BrandMark variant="preloader" className="preloader__logo" />
        <span className="preloader__spinner" />
      </div>
    </div>
  );
}

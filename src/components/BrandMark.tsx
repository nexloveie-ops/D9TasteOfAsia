import { siteBrand } from '../data/site';
import { SiteLogo } from './SiteLogo';

interface BrandMarkProps {
  variant: 'header' | 'footer' | 'preloader';
  className?: string;
}

export function BrandMark({ variant, className = '' }: BrandMarkProps) {
  return (
    <span className={`brand-mark brand-mark--${variant} ${className}`.trim()}>
      <SiteLogo className={`site-logo--${variant}`} />
      <span className="brand-mark__text">
        <span className="brand-mark__name">
          {siteBrand.logoPrimary} <span className="brand-mark__accent">{siteBrand.logoAccent}</span>
        </span>
        {variant === 'footer' && (
          <span className="brand-mark__tagline">{siteBrand.tagline}</span>
        )}
      </span>
    </span>
  );
}

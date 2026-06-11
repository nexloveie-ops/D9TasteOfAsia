import { assets } from '../assets';
import { siteBrand } from '../data/site';

interface SiteLogoProps {
  className?: string;
}

export function SiteLogo({ className = '' }: SiteLogoProps) {
  return (
    <img
      src={assets.logo}
      alt={siteBrand.name}
      className={`site-logo ${className}`.trim()}
      width={160}
      height={160}
      decoding="async"
    />
  );
}

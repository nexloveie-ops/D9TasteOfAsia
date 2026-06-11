import { assets } from '../assets';

export function HeroScrollBtn() {
  return (
    <a href="#content-start" className="hero-scroll-btn" aria-label="Scroll to content">
      <svg viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <path
            id="heroCirclePath"
            d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text fill="currentColor" fontSize="14" letterSpacing="4">
          <textPath href="#heroCirclePath" startOffset="0">
            Book Now · Book Now · Book Now ·
          </textPath>
        </text>
      </svg>
      <span className="hero-scroll-btn__icon">
        <img src={assets.scrollIcon} alt="" />
      </span>
    </a>
  );
}

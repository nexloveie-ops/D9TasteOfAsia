export function ScrollHint() {
  return (
    <a href="#category-start" className="scroll-hint" aria-label="Explore menu">
      {/* Tastyc e6b4124: 500px text-path inside 120px link, clipped to pill border */}
      <svg
        className="scroll-hint__ring"
        viewBox="0 0 100 180"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <path
            id="scrollHintPath"
            d="M 50,10 A 40,40 0 0,1 90,50 V 100 A 40,40 0 0,1 50,130 A 40,40 0 0,1 10,100 V 50 A 40,40 0 0,1 50,10 Z"
          />
        </defs>
        <text
          fill="#ffffff"
          fontSize="2.4"
          fontWeight="500"
          letterSpacing="0.96"
          fontFamily="Josefin Sans, sans-serif"
        >
          <textPath href="#scrollHintPath" startOffset="0%">
            · Explore Menu · Explore Menu ·
          </textPath>
        </text>
      </svg>
      <span className="scroll-hint__pill">
        <span className="scroll-hint__arrow scrl-hint-anim">
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M 15 4 L 15 24.0625 L 10.71875 19.78125 L 9.28125 21.1875 L 16 27.90625 L 22.71875 21.1875 L 21.28125 19.78125 L 17 24.0625 L 17 4 Z" />
          </svg>
        </span>
      </span>
    </a>
  );
}

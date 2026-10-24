import { useEffect, useState } from 'react';
import { ThemeButton } from './ThemeButton';
import { BrandMark } from './BrandMark';
import { MEMBER_CENTER_URL, TAKEOUT_MENU_URL } from './OrderMenuDialog';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#reservation', label: 'Reservation' },
  { href: '#contact', label: 'Contact' },
];

interface HeaderProps {
  onOpenReservation: () => void;
  onOpenMenu: () => void;
  onOpenMember: () => void;
}

export function Header({ onOpenReservation, onOpenMenu, onOpenMember }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`header ${scrolled ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <a href="#home" className="header__logo" aria-label="Taste Of Asia home">
          <BrandMark variant="header" />
        </a>

        <nav className={`header__nav ${open ? 'header__nav--open' : ''}`}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a
            href={TAKEOUT_MENU_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => {
              setOpen(false);
              if (window.matchMedia('(max-width: 768px)').matches) return;
              event.preventDefault();
              onOpenMenu();
            }}
          >
            Menu
          </a>
          <a
            href={MEMBER_CENTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => {
              setOpen(false);
              if (window.matchMedia('(max-width: 768px)').matches) return;
              event.preventDefault();
              onOpenMember();
            }}
          >
            Member Center
          </a>
          {navLinks.slice(2).map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <ThemeButton
            onClick={() => {
              setOpen(false);
              onOpenReservation();
            }}
            className="header__book header__book--mobile"
          >
            Book a Table
          </ThemeButton>
        </nav>

        <div className="header__actions">
          <ThemeButton onClick={onOpenReservation} className="header__book">
            Book a Table
          </ThemeButton>
          <button
            type="button"
            className="header__toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}

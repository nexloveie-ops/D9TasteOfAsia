import { siteContact } from '../data/site';
import { ThemeButton } from './ThemeButton';

interface VisitSidebarProps {
  open: boolean;
  onClose: () => void;
}

export function VisitSidebar({ open, onClose }: VisitSidebarProps) {
  return (
    <>
      <div
        className={`sidebar-overlay ${open ? 'sidebar-overlay--visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className={`visit-sidebar ${open ? 'visit-sidebar--open' : ''}`}>
        <button
          type="button"
          className="visit-sidebar__close"
          aria-label="Close"
          onClick={onClose}
        >
          &times;
        </button>

        <h3>Visit Us</h3>
        <ul>
          <li>{siteContact.address}</li>
          <li>{siteContact.hours}</li>
        </ul>
        <p><a href={`mailto:${siteContact.email}`}>{siteContact.email}</a></p>
        <p>
          Landline:{' '}
          <a href={`tel:${siteContact.landline.tel}`}>{siteContact.landline.display}</a>
        </p>
        <p>
          Mobile:{' '}
          <a href={`tel:${siteContact.mobile.tel}`}>{siteContact.mobile.display}</a>
        </p>
        <ThemeButton
          onClick={() => {
            onClose();
            document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="visit-sidebar__btn"
        >
          Book a Table
        </ThemeButton>
      </aside>
    </>
  );
}

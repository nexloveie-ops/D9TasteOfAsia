import { assets } from '../assets';
import { mapEmbedUrl, siteBrand, siteContact } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { BrandMark } from './BrandMark';

const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'TikTok', href: 'https://tiktok.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
  { label: 'X', href: 'https://x.com' },
] as const;

export function Footer() {
  return (
    <footer id="contact" className="footer white-footer">
      <div className="footer__layout">
        <div className="footer__map">
          <iframe
            title={siteContact.mapQuery}
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div
          className="footer__panel"
          style={{ backgroundImage: `url(${assets.grid.balcony})` }}
        >
          <div className="footer__panel-overlay" aria-hidden="true" />

          <div className="footer__panel-content">
            <div className="footer__panel-main">
              <a href="#home" className="footer__brand" aria-label="Taste Of Asia home">
                <BrandMark variant="footer" />
              </a>

              <SectionHeading suptitle="Visit Us" centered />

              <ul className="footer__contact-list">
                <li>{siteContact.address}</li>
                <li>{siteContact.hours}</li>
                <li>
                  <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
                </li>
                <li>
                  Landline:{' '}
                  <a href={`tel:${siteContact.landline.tel}`}>{siteContact.landline.display}</a>
                </li>
                <li>
                  Mobile:{' '}
                  <a href={`tel:${siteContact.mobile.tel}`}>{siteContact.mobile.display}</a>
                </li>
              </ul>
            </div>

            <div className="footer__bar">
              <p className="footer__copyright">
                &copy; {new Date().getFullYear()} {siteBrand.name}. All Rights Reserved.
              </p>
              <div className="footer__social-icons">
                {socialLinks.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <span>{label[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

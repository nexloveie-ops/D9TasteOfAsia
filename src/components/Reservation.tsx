import { useState, type FormEvent } from 'react';
import { assets } from '../assets';
import { siteContact } from '../data/site';
import { SectionHeading } from './SectionHeading';
export function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="reservation" className="reservation">
      <div className="reservation__layout">
        <div className="reservation__panel">
          <div className="reservation__panel-inner">
            <div className="reservation__intro">
              <SectionHeading suptitle="Online Reservation" title="Book A Table" centered />
              <p className="reservation__lead">
                Booking request{' '}
                <a href={`tel:${siteContact.landline.tel}`}>{siteContact.landline.display}</a>
                {' · '}
                <a href={`tel:${siteContact.mobile.tel}`}>{siteContact.mobile.display}</a>
                {' '}or fill out the order form
              </p>
            </div>

            {submitted ? (
              <div className="reservation-form__success">
                <h3>Thank You!</h3>
                <p>We&apos;ve received your booking request and will confirm shortly.</p>
              </div>
            ) : (
              <form className="reservation-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input type="text" name="name" required placeholder="Your Name" aria-label="Your Name" />
                  <input type="tel" name="phone" required placeholder="Phone Number" aria-label="Phone Number" />
                </div>
                <div className="form-row">
                  <input type="email" name="email" required placeholder="Email" aria-label="Email" />
                  <select name="guests" required defaultValue="" aria-label="Number of Guests">
                    <option value="" disabled>
                      Number of Guests
                    </option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-row">
                  <input type="date" name="date" required aria-label="Date" />
                  <select name="time" required defaultValue="" aria-label="Time">
                    <option value="" disabled>
                      Time
                    </option>
                    {['12:00', '12:30', '13:00', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map(
                      (t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ),
                    )}
                  </select>
                </div>
                <textarea
                  name="notes"
                  rows={4}
                  placeholder="Message"
                  aria-label="Message"
                />
                <button type="submit" className="theme-btn btn-style-one reservation-form__submit">
                  <span className="btn-wrap">
                    <span className="text-one">Send Message</span>
                    <span className="text-two">Send Message</span>
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>

        <div
          className="reservation__image"
          style={{ backgroundImage: `url(${assets.reservationDining})` }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

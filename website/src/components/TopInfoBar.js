import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import './TopInfoBar.css';

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/haciendadelsolresort/',
    icon: FaInstagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/HaciendaDelSolResort',
    icon: FaFacebook,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@Haciendadelsolresort',
    icon: FaYoutube,
  },
];

function TopInfoBar() {
  return (
    <div className="top-info-bar" role="complementary" aria-label="Contact information">
      <div className="top-info-bar__contact">
        <span className="top-info-bar__eyebrow">Contact Us</span>
        <a className="top-info-bar__contact-link" href="tel:19564599800">
          (956) 459-9800
        </a>
      </div>
      <div className="top-info-bar__address">
        <span className="top-info-bar__eyebrow">Location</span>
        <a 
          className="top-info-bar__contact-link" 
          href="https://www.google.com/maps/search/?api=1&query=4660+Sol+Rd,+Brownsville,+TX,+78526"
          target="_blank"
          rel="noreferrer noopener"
        >
          4660 Sol Rd, Brownsville, TX, 78526
        </a>
      </div>
      <div className="top-info-bar__social">
        <span className="top-info-bar__eyebrow">Follow us</span>
        <div className="top-info-bar__social-links">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              className="top-info-bar__social-link"
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopInfoBar;

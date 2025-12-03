import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Accomodations', href: '/accomodations' },
  { label: 'Weddings & Events', href: '/weddings-events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About Us', href: '#about' },
];

function Navbar({ onBookNowClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="navbar">
      <Link to="/" className="navbar__logo">
        <img src="/HDSLogo.png" alt="Hacienda Del Sol Logo" className="navbar__logo-image" />
        <div className="navbar__logo-text">
          Hacienda Del Sol
          <span className="navbar__logo-subtitle">Resort & Venue</span>
          <span className="navbar__logo-est">Est. 2025</span>
        </div>
      </Link>
      <button
        className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`}
        onClick={handleToggle}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
        <div className="navbar__links-list">
          {NAV_LINKS.map(({ label, href }) => (
            href.startsWith('#') ? (
              <a key={label} href={href} onClick={handleLinkClick}>
                {label}
              </a>
            ) : (
              <Link key={label} to={href} onClick={handleLinkClick}>
                {label}
              </Link>
            )
          ))}
        </div>
        <button
          className="navbar__cta"
          type="button"
          onClick={() => {
            if (typeof onBookNowClick === 'function') {
              onBookNowClick();
            }
            handleLinkClick();
          }}
        >
          Book Now
        </button>
      </nav>
    </header>
  );
}

export default Navbar;


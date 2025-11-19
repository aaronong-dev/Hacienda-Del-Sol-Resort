import React, { useState } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Weddings & Events', href: '#weddings-events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About Us', href: '#about' },
];

function Navbar({ onBookNowClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src="/HDSLogo.png" alt="Hacienda Del Sol Logo" className="navbar__logo-image" />
        <div className="navbar__logo-text">
          Hacienda Del Sol
          <span className="navbar__logo-subtitle">Resort & Venue</span>
          <span className="navbar__logo-est">Est. 2025</span>
        </div>
      </div>
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
            <a key={label} href={href} onClick={handleLinkClick}>
              {label}
            </a>
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


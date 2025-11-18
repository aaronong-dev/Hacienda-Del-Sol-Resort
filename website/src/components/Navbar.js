import React, { useState } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Accommodations', href: '#accommodations' },
  { label: 'Weddings & Events', href: '#weddings-events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__logo">Hacienda Del Sol</div>
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
        <a
          className="navbar__cta"
          href="#book-now"
          onClick={handleLinkClick}
        >
          Book Now
        </a>
      </nav>
    </header>
  );
}

export default Navbar;


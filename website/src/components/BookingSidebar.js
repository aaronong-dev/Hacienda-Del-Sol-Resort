import React, { useEffect } from 'react';
import './BookingSidebar.css';

const AIRBNB_EMBED_ID = '1403910525596681559';
const AIRBNB_EMBED_SRC = 'https://www.airbnb.mx/embeddable/airbnb_jssdk';

function ensureAirbnbScriptLoaded() {
  if (typeof document === 'undefined') return;
  const existingScript = document.querySelector(`script[src="${AIRBNB_EMBED_SRC}"]`);

  if (existingScript) return;

  const script = document.createElement('script');
  script.src = AIRBNB_EMBED_SRC;
  script.async = true;
  script.dataset.airbnbSdk = 'true';
  document.body.appendChild(script);
}

function BookingSidebar({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      ensureAirbnbScriptLoaded();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className={`booking-sidebar ${isOpen ? 'booking-sidebar--open' : ''}`} aria-hidden={!isOpen}>
      <div
        className="booking-sidebar__backdrop"
        role="button"
        tabIndex={-1}
        onClick={onClose}
        aria-label="Close booking sidebar"
      ></div>
      <aside className="booking-sidebar__panel" role="dialog" aria-modal="true" aria-label="Book your stay">
        <h2 className="booking-sidebar__title">Reserve Your Stay</h2>
        <p className="booking-sidebar__subtitle">Secure your dates directly through Airbnb.</p>
        <div className="booking-sidebar__embed">
          <div
            className="airbnb-embed-frame"
            data-id={AIRBNB_EMBED_ID}
            data-view="home"
            data-hide-price="true"
            style={{ width: '100%', maxWidth: 450, height: 300, margin: 'auto' }}
          >
            <a href="https://www.airbnb.mx/rooms/1403910525596681559?guests=1&adults=1&s=66&source=embed_widget">
              Ver en Airbnb
            </a>
            <a
              href="https://www.airbnb.mx/rooms/1403910525596681559?guests=1&adults=1&s=66&source=embed_widget"
              rel="nofollow"
            >
              Villa · Brownsville · 4 habitaciones · 6 camas · 4,5 baños
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default BookingSidebar;



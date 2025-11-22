import React, { useState } from 'react';
import './WeddingsEvents.css';
import Navbar from '../components/Navbar';
import TopInfoBar from '../components/TopInfoBar';
import BookingSidebar from '../components/BookingSidebar';
import Footer from '../components/Footer';
import Wedding1 from '../assets/outdoor/Wedding1.jpg';
import Wedding2 from '../assets/outdoor/Wedding2.jpg';
import Wedding3 from '../assets/outdoor/Wedding3.jpg';

const WEDDING_IMAGES = [
  { src: Wedding1, alt: 'Wedding at Hacienda Del Sol' },
  { src: Wedding2, alt: 'Wedding at Hacienda Del Sol' },
  { src: Wedding3, alt: 'Wedding at Hacienda Del Sol' },
];

function WeddingsEvents() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? WEDDING_IMAGES.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === WEDDING_IMAGES.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="weddings-events" id="weddings-events">
      <TopInfoBar />
      <Navbar onBookNowClick={handleOpenBooking} />
      <section className="hero">
        <div className="hero-image-wrapper">
          <img
            src={WEDDING_IMAGES[currentImageIndex].src}
            alt={WEDDING_IMAGES[currentImageIndex].alt}
            className={`hero-image ${currentImageIndex === 2 ? 'hero-image--bottom' : ''}`}
          />
          <div className="hero-overlay"></div>
          <button
            className="hero-arrow hero-arrow--left"
            onClick={handlePrevious}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            className="hero-arrow hero-arrow--right"
            onClick={handleNext}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      </section>
      <Footer />
      <BookingSidebar isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}

export default WeddingsEvents;


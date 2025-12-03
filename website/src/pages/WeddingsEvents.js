import React, { useState, useEffect } from 'react';
import './WeddingsEvents.css';
import Navbar from '../components/Navbar';
import TopInfoBar from '../components/TopInfoBar';
import BookingSidebar from '../components/BookingSidebar';
import Footer from '../components/Footer';
import Wedding1 from '../assets/outdoor/Wedding1.jpg';
import Wedding2 from '../assets/outdoor/Wedding2.jpg';
import Wedding3 from '../assets/outdoor/Wedding3.jpg';

const WEDDING_IMAGES = [
  { src: Wedding1, alt: 'Wedding at Hacienda Del Sol', title: 'Elegant Wedding Celebration' },
  { src: Wedding2, alt: 'Wedding at Hacienda Del Sol', title: 'Beautiful Outdoor Ceremony' },
  { src: Wedding3, alt: 'Wedding at Hacienda Del Sol', title: 'Memorable Wedding Reception' },
];

function WeddingsEvents() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload all images to prevent black box flash during scrolling
  useEffect(() => {
    const imagePromises = WEDDING_IMAGES.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = image.src;
      });
    });

    Promise.all(imagePromises).catch((error) => {
      console.error('Error preloading images:', error);
    });
  }, []);

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
            loading="eager"
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
          <div className="hero-content">
            <h1 className="hero-title">Weddings & Events</h1>
            <p className="hero-subtitle">{WEDDING_IMAGES[currentImageIndex].title}</p>
            <div className="hero-pagination">
              {currentImageIndex + 1} / {WEDDING_IMAGES.length}
            </div>
          </div>
        </div>
      </section>
      <section className="gallery-grid-section">
        <div className="gallery-grid-container">
          <h2 className="gallery-grid-title">Explore Our Events</h2>
          <div className="gallery-grid">
            {WEDDING_IMAGES.map((image, index) => (
              <div
                key={index}
                className={`gallery-grid-item ${index === currentImageIndex ? 'gallery-grid-item--active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-grid-image"
                />
                <div className="gallery-grid-overlay">
                  <h3 className="gallery-grid-item-title">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <BookingSidebar isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}

export default WeddingsEvents;


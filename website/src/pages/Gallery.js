import React, { useState } from 'react';
import './Gallery.css';
import Navbar from '../components/Navbar';
import TopInfoBar from '../components/TopInfoBar';
import BookingSidebar from '../components/BookingSidebar';
import Footer from '../components/Footer';
import PropertyImage1 from '../assets/property-intro/1.png';
import PropertyImage2 from '../assets/property-intro/2.png';
import PropertyImage3 from '../assets/property-intro/3.png';
import PropertyImage4 from '../assets/property-intro/4.png';

const GALLERY_IMAGES = [
  { src: PropertyImage1, alt: 'Hacienda Del Sol Resort', title: 'Luxury Accommodations' },
  { src: PropertyImage2, alt: 'Hacienda Del Sol Resort', title: 'Scenic Views' },
  { src: PropertyImage3, alt: 'Hacienda Del Sol Resort', title: 'Tranquil Gardens' },
  { src: PropertyImage4, alt: 'Hacienda Del Sol Resort', title: 'Resort Amenities' },
];

function Gallery() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? GALLERY_IMAGES.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === GALLERY_IMAGES.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="gallery-page" id="gallery">
      <TopInfoBar />
      <Navbar onBookNowClick={handleOpenBooking} />
      <section className="gallery-hero">
        <div className="gallery-hero-image-wrapper">
          <img
            src={GALLERY_IMAGES[currentImageIndex].src}
            alt={GALLERY_IMAGES[currentImageIndex].alt}
            className="gallery-hero-image"
          />
          <div className="gallery-hero-overlay"></div>
          <button
            className="gallery-hero-arrow gallery-hero-arrow--left"
            onClick={handlePrevious}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            className="gallery-hero-arrow gallery-hero-arrow--right"
            onClick={handleNext}
            aria-label="Next image"
          >
            ›
          </button>
          <div className="gallery-hero-content">
            <h1 className="gallery-hero-title">Property Gallery</h1>
            <p className="gallery-hero-subtitle">{GALLERY_IMAGES[currentImageIndex].title}</p>
            <div className="gallery-hero-pagination">
              {currentImageIndex + 1} / {GALLERY_IMAGES.length}
            </div>
          </div>
        </div>
      </section>
      <section className="gallery-grid-section">
        <div className="gallery-grid-container">
          <h2 className="gallery-grid-title">Explore Our Property</h2>
          <div className="gallery-grid">
            {GALLERY_IMAGES.map((image, index) => (
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

export default Gallery;


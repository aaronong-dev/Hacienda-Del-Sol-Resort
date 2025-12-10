import React, { useState, useEffect } from 'react';
import './Gallery.css';
import Navbar from '../components/Navbar';
import TopInfoBar from '../components/TopInfoBar';
import BookingSidebar from '../components/BookingSidebar';
import Footer from '../components/Footer';
import IndoorImage1 from '../assets/outdoor/indoor/01-DSC05091.jpg';
import IndoorImage2 from '../assets/outdoor/indoor/02-DSC05096.jpg';
import IndoorImage3 from '../assets/outdoor/indoor/03-DSC05101.jpg';
import IndoorImage4 from '../assets/outdoor/indoor/04-DSC05104.jpg';
import IndoorImage5 from '../assets/outdoor/indoor/05-DSC05104.jpg';
import IndoorImage6 from '../assets/outdoor/indoor/06-DSC05109.jpg';
import IndoorImage7 from '../assets/outdoor/indoor/07-DSC05114.jpg';
import IndoorImage8 from '../assets/outdoor/indoor/08-DSC05119.jpg';
import IndoorImage9 from '../assets/outdoor/indoor/09-DSC05126.jpg';
import IndoorImage10 from '../assets/outdoor/indoor/10-DSC05127.jpg';
import IndoorImage11 from '../assets/outdoor/indoor/11-DSC05128.jpg';
import IndoorImage12 from '../assets/outdoor/indoor/12-DSC05129.jpg';
import IndoorImage13 from '../assets/outdoor/indoor/13-DSC05132.jpg';
import IndoorImage14 from '../assets/outdoor/indoor/14-DSC05139.jpg';
import IndoorImage15 from '../assets/outdoor/indoor/15-DSC05144.jpg';
import IndoorImage16 from '../assets/outdoor/indoor/16-DSC05147.jpg';
import IndoorImage17 from '../assets/outdoor/indoor/17-DSC05150.jpg';
import IndoorImage18 from '../assets/outdoor/indoor/18-DSC05151.jpg';
import IndoorImage19 from '../assets/outdoor/indoor/19-DSC05152.jpg';
import IndoorImage20 from '../assets/outdoor/indoor/20-DSC05157.jpg';
import IndoorImage21 from '../assets/outdoor/indoor/21-DSC05162.jpg';
import IndoorImage22 from '../assets/outdoor/indoor/22-DSC05172.jpg';
import IndoorImage23 from '../assets/outdoor/indoor/23-DSC05177.jpg';
import IndoorImage24 from '../assets/outdoor/indoor/24-DSC05182.jpg';
import IndoorImage25 from '../assets/outdoor/indoor/25-DSC05185.jpg';
import IndoorImage26 from '../assets/outdoor/indoor/26-DSC05192.jpg';
import IndoorImage27 from '../assets/outdoor/indoor/27-DSC05197.jpg';
import IndoorImage28 from '../assets/outdoor/indoor/28-DSC05202.jpg';
import IndoorImage29 from '../assets/outdoor/indoor/29-DSC05207.jpg';
import IndoorImage30 from '../assets/outdoor/indoor/30-DSC05212.jpg';
import IndoorImage31 from '../assets/outdoor/indoor/31-DSC05217.jpg';
import IndoorImage32 from '../assets/outdoor/indoor/32-DSC05222.jpg';
import IndoorImage33 from '../assets/outdoor/indoor/33-DSC05227.jpg';
import IndoorImage34 from '../assets/outdoor/indoor/34-DSC05232.jpg';
import IndoorImage35 from '../assets/outdoor/indoor/35-DSC05237.jpg';
import IndoorImage36 from '../assets/outdoor/indoor/36-DSC05242.jpg';
import IndoorImage37 from '../assets/outdoor/indoor/37-DSC05247.jpg';
import IndoorImage38 from '../assets/outdoor/indoor/38-DSC05252.jpg';
import IndoorImage39 from '../assets/outdoor/indoor/39-DSC05257.jpg';
import IndoorImage40 from '../assets/outdoor/indoor/40-DSC05262.jpg';
import IndoorImage41 from '../assets/outdoor/indoor/41-DSC05267.jpg';
import IndoorImage42 from '../assets/outdoor/indoor/42-DSC05272.jpg';
import IndoorImage43 from '../assets/outdoor/indoor/43-DSC05277.jpg';
import IndoorImage44 from '../assets/outdoor/indoor/44-DSC05278.jpg';
import IndoorImage45 from '../assets/outdoor/indoor/45-DSC05279.jpg';
import IndoorImage46 from '../assets/outdoor/indoor/46-DSC05280.jpg';
import IndoorImage47 from '../assets/outdoor/indoor/47-DSC05281.jpg';
import IndoorImage48 from '../assets/outdoor/indoor/48-DSC05282.jpg';
import IndoorImage49 from '../assets/outdoor/indoor/49-DSC05285.jpg';
import IndoorImage50 from '../assets/outdoor/indoor/50-DSC05287.jpg';
import IndoorImage51 from '../assets/outdoor/indoor/51-DSC05288.jpg';
import IndoorImage52 from '../assets/outdoor/indoor/52-DSC05289.jpg';
import IndoorImage53 from '../assets/outdoor/indoor/53-DSC05290.jpg';
import IndoorImage54 from '../assets/outdoor/indoor/54-DSC05291.jpg';
import IndoorImage55 from '../assets/outdoor/indoor/55-DSC05292.jpg';
import IndoorImage56 from '../assets/outdoor/indoor/56-DSC05293.jpg';
import IndoorImage57 from '../assets/outdoor/indoor/57-DSC05294.jpg';
import IndoorImage58 from '../assets/outdoor/indoor/58-DSC05295.jpg';
import IndoorImage59 from '../assets/outdoor/indoor/59-DSC05296.jpg';
import IndoorImage60 from '../assets/outdoor/indoor/60-DSC05297.jpg';
import IndoorImage61 from '../assets/outdoor/indoor/61-DSC05298.jpg';
import IndoorImage62 from '../assets/outdoor/indoor/62-DSC05299.jpg';
import IndoorImage63 from '../assets/outdoor/indoor/63-DSC05300.jpg';
import IndoorImage64 from '../assets/outdoor/indoor/64-DSC05301.jpg';
import IndoorImage65 from '../assets/outdoor/indoor/65-DSC05302.jpg';
import IndoorImage66 from '../assets/outdoor/indoor/66-DSC05303.jpg';
import IndoorImage67 from '../assets/outdoor/indoor/67-DSC05304.jpg';
import IndoorImage68 from '../assets/outdoor/indoor/68-DSC05305.jpg';
import IndoorImage69 from '../assets/outdoor/indoor/69-DSC05306.jpg';
import IndoorImage70 from '../assets/outdoor/indoor/70-DSC05307.jpg';
import IndoorImage71 from '../assets/outdoor/indoor/71-DSC05308.jpg';
import IndoorImage72 from '../assets/outdoor/indoor/74-DSC05311.jpg';

const GALLERY_IMAGES = [
  { src: IndoorImage1, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage2, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage3, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage4, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage5, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage6, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage7, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage8, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage9, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage10, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage11, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage12, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage13, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage14, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage15, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage16, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage17, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage18, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage19, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage20, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage21, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage22, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage23, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage24, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage25, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage26, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage27, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage28, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage29, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage30, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage31, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage32, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage33, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage34, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage35, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage36, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage37, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage38, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage39, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage40, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage41, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage42, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage43, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage44, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage45, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage46, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage47, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage48, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage49, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage50, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage51, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage52, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage53, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage54, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage55, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage56, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage57, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage58, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage59, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage60, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage61, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage62, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage63, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage64, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage65, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage66, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage67, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage68, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage69, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage70, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage71, alt: 'Hacienda Del Sol Resort', title: '' },
  { src: IndoorImage72, alt: 'Hacienda Del Sol Resort', title: '' },
];

function Gallery() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(null);

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

  const openLightbox = (index) => {
    setLightboxImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImageIndex(null);
  };

  const handleLightboxPrevious = (e) => {
    e.stopPropagation();
    setLightboxImageIndex((prevIndex) =>
      prevIndex === 0 ? GALLERY_IMAGES.length - 1 : prevIndex - 1
    );
  };

  const handleLightboxNext = (e) => {
    e.stopPropagation();
    setLightboxImageIndex((prevIndex) =>
      prevIndex === GALLERY_IMAGES.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Close lightbox on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && lightboxImageIndex !== null) {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [lightboxImageIndex]);

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
                onClick={() => {
                  setCurrentImageIndex(index);
                  openLightbox(index);
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-grid-image"
                />
                <div className="gallery-grid-overlay-hover">
                  <div className="gallery-magnify-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <BookingSidebar isOpen={isBookingOpen} onClose={handleCloseBooking} />
      
      {/* Lightbox Modal */}
      {lightboxImageIndex !== null && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <button
            className="gallery-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <button
            className="gallery-lightbox-arrow gallery-lightbox-arrow--left"
            onClick={handleLightboxPrevious}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            className="gallery-lightbox-arrow gallery-lightbox-arrow--right"
            onClick={handleLightboxNext}
            aria-label="Next image"
          >
            ›
          </button>
          <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={GALLERY_IMAGES[lightboxImageIndex].src}
              alt={GALLERY_IMAGES[lightboxImageIndex].alt}
              className="gallery-lightbox-image"
            />
            <div className="gallery-lightbox-pagination">
              {lightboxImageIndex + 1} / {GALLERY_IMAGES.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;

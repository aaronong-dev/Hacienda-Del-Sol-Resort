import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Navbar from '../components/Navbar';
import TopInfoBar from '../components/TopInfoBar';
import BookingSidebar from '../components/BookingSidebar';
import Footer from '../components/Footer';
import CTAPhoto from '../assets/outdoor/CTAPhoto.png';
import PropertyImage1 from '../assets/property-intro/1.png';
import PropertyImage2 from '../assets/property-intro/2.png';
import PropertyImage3 from '../assets/property-intro/3.png';
import PropertyImage4 from '../assets/property-intro/4.png';
import GrandOpeningImage from '../assets/grandopening/grandOpening.jpg';
import PerfectForImage from '../assets/grandopening/PerfectFor.png';

const PROPERTY_IMAGES = [
  { src: PropertyImage1, alt: 'Hacienda Del Sol Resort', title: 'Luxury Accommodations', description: 'Experience unparalleled comfort in our elegantly designed rooms and suites.' },
  { src: PropertyImage2, alt: 'Hacienda Del Sol Resort', title: 'Scenic Views', description: 'Wake up to breathtaking views of the surrounding landscape and gardens.' },
  { src: PropertyImage3, alt: 'Hacienda Del Sol Resort', title: 'Tranquil Gardens', description: 'Stroll through our beautifully maintained gardens and outdoor spaces.' },
  { src: PropertyImage4, alt: 'Hacienda Del Sol Resort', title: 'Resort Amenities', description: 'Enjoy world-class amenities and exceptional service throughout your stay.' },
];

function Home() {
  const navigate = useNavigate();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);
  const isScrollingRef = useRef(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);
  const handleViewGallery = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    navigate('/gallery');
  };
  const handleViewWeddingsEvents = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    navigate('/weddings-events');
  };

  const handleRequestTour = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    navigate('/weddings-events');
    // Scroll to the quote form section after navigation
    setTimeout(() => {
      const quoteSection = document.querySelector('.quote-form-section');
      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? PROPERTY_IMAGES.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === PROPERTY_IMAGES.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleCardClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Scroll carousel to center the selected card
  useEffect(() => {
    // Wait a bit for card width transition to start
    const timeoutId = setTimeout(() => {
      if (carouselRef.current && cardRefs.current[currentImageIndex]) {
        isScrollingRef.current = true;
        const carousel = carouselRef.current;
        const card = cardRefs.current[currentImageIndex];
        
        // Use requestAnimationFrame to ensure DOM has updated
        requestAnimationFrame(() => {
          // Calculate scroll position to center the card
          const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
          const carouselCenter = carousel.offsetWidth / 2;
          const scrollPosition = cardCenter - carouselCenter;
          
          carousel.scrollTo({
            left: Math.max(0, scrollPosition),
            behavior: 'smooth'
          });

          // Reset the flag after scroll animation completes
          const scrollDuration = 600;
          setTimeout(() => {
            isScrollingRef.current = false;
          }, scrollDuration);
        });
      }
    }, 50); // Small delay to let CSS transition start

    return () => clearTimeout(timeoutId);
  }, [currentImageIndex]);

  // Handle scroll to detect which card is centered (only for user-initiated scrolls)
  const handleScroll = () => {
    // Don't update index if we're programmatically scrolling
    if (isScrollingRef.current) {
      return;
    }

    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const carouselCenter = carousel.scrollLeft + carousel.offsetWidth / 2;
      
      // Find which card is closest to the center
      let closestIndex = 0;
      let closestDistance = Infinity;
      
      cardRefs.current.forEach((card, index) => {
        if (card) {
          const cardCenter = card.offsetLeft + card.offsetWidth / 2;
          const distance = Math.abs(carouselCenter - cardCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });
      
      if (closestIndex !== currentImageIndex) {
        setCurrentImageIndex(closestIndex);
      }
    }
  };

  return (
    <div className="home" id="home">
      <TopInfoBar />
      <Navbar onBookNowClick={handleOpenBooking} />
      <section className="hero">
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SUTcMei_Gl4?si=eDJth-fmCuT-OakI&amp;start=1&amp;autoplay=1&amp;mute=1&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;loop=1&amp;playlist=SUTcMei_Gl4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="video-overlay" aria-hidden="true"></div>
        </div>
      </section>
      <section className="cta-section">
        <img src={CTAPhoto} alt="Hacienda Del Sol Resort" className="cta-image" />
        <div className="cta-overlay"></div>
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Experience Luxury Like Never Before</h2>
            <p className="cta-text">
              Book your stay today and discover the perfect blend of elegance, comfort, and exceptional service.
            </p>
            <button className="cta-button" onClick={handleRequestTour}>
              Request Tour
            </button>
          </div>
        </div>
      </section>
      <section className="property-intro">
        <div 
          className="property-intro-background"
          style={{ backgroundImage: `url(${PROPERTY_IMAGES[currentImageIndex].src})` }}
        ></div>
        <div className="property-intro-overlay"></div>
        <div className="property-intro-container">
          <div className="property-intro-header">
            <h2 className="property-intro-title">Discover Our Property</h2>
            <p className="property-intro-subtitle">Explore the elegance and beauty of Hacienda Del Sol Resort</p>
          </div>
          <div className="gallery-wrapper">
            <div 
              className="gallery-carousel"
              ref={carouselRef}
              onScroll={handleScroll}
            >
              {PROPERTY_IMAGES.map((image, index) => (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`gallery-card ${index === currentImageIndex ? 'gallery-card--active' : ''}`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="gallery-card-image-wrapper">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="gallery-card-image"
                    />
                    {index !== currentImageIndex && <div className="gallery-card-overlay"></div>}
                  </div>
                  <div className="gallery-card-content">
                    <h3 className="gallery-card-title">{image.title}</h3>
                    <p className="gallery-card-description">{image.description}</p>
                    {index === currentImageIndex && (
                      <button className="gallery-card-button" onClick={handleViewGallery}>VIEW GALLERY</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="gallery-pagination">
            <button
              className="gallery-arrow gallery-arrow--left"
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              ‹
            </button>
            <span className="gallery-pagination-text">
              {currentImageIndex + 1} / {PROPERTY_IMAGES.length}
            </span>
            <button
              className="gallery-arrow gallery-arrow--right"
              onClick={handleNext}
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      </section>
      <section className="weddings-events-section">
        <div className="weddings-events-container">
          <div className="weddings-events-header">
            <h2 className="weddings-events-title">Weddings & Events</h2>
          </div>
          <div className="weddings-events-image-wrapper">
            <img 
              src={PerfectForImage} 
              alt="Perfect for Weddings & Events" 
              className="weddings-events-image"
            />
          </div>
          <div className="weddings-events-button-wrapper">
            <button className="weddings-events-button" onClick={handleViewWeddingsEvents}>
              <div className="weddings-events-button-main">
                DISCOVER WEDDINGS & EVENTS →
              </div>
              <div className="weddings-events-button-subtitle">
                Explore our stunning venue and create unforgettable memories.
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className="history-section">
        <div className="history-container">
          <div className="history-header">
            <h2 className="history-title">Our Grand Opening</h2>
          </div>
          <div className="history-image-wrapper">
            <img 
              src={GrandOpeningImage} 
              alt="Grand Opening Celebration" 
              className="history-image"
            />
          </div>
          <div className="history-content">
            <p className="history-text">
            Hacienda Del Sol Resort opened its doors in June 2025, introducing a new standard of luxury, hospitality, 
            and celebration to the Rio Grande Valley. Thoughtfully designed with elegance and timeless tradition, 
            our property offers more than a place to stay. It is a destination for unforgettable moments.
            </p>
            <p className="history-text">
            Whether you are here for a relaxing getaway or celebrating a wedding or special event, every detail has 
            been crafted to elevate your experience. 
            Since our opening, we’ve been honored 
            to host countless stays and celebrations. Hacienda Del Sol 
            has become a destination where comfort, joy, and tradition come together for every guest.
            </p>
          </div>
        </div>
      </section>
      <Footer />
      <BookingSidebar isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}

export default Home;


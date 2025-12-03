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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    numberOfGuests: '',
    eventType: '',
    wantsTour: false,
    message: ''
  });

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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call or form handling logic here
    alert('Thank you for your request! We will contact you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      numberOfGuests: '',
      eventType: '',
      wantsTour: false,
      message: ''
    });
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
      <section className="quote-form-section">
        <div className="quote-form-container">
          <div className="quote-form-header">
            <h2 className="quote-form-title">Request a Quote</h2>
            <p className="quote-form-subtitle">Let us help you plan your perfect event</p>
          </div>
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="quote-form-row">
              <div className="quote-form-group">
                <label htmlFor="name" className="quote-form-label">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="quote-form-input"
                  required
                />
              </div>
              <div className="quote-form-group">
                <label htmlFor="email" className="quote-form-label">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="quote-form-input"
                  required
                />
              </div>
            </div>
            <div className="quote-form-row">
              <div className="quote-form-group">
                <label htmlFor="phone" className="quote-form-label">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="quote-form-input"
                  required
                />
              </div>
              <div className="quote-form-group">
                <label htmlFor="eventDate" className="quote-form-label">Event Date *</label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="quote-form-input"
                  required
                />
              </div>
            </div>
            <div className="quote-form-row">
              <div className="quote-form-group">
                <label htmlFor="numberOfGuests" className="quote-form-label">Number of Guests *</label>
                <input
                  type="number"
                  id="numberOfGuests"
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleInputChange}
                  className="quote-form-input"
                  min="1"
                  required
                />
              </div>
              <div className="quote-form-group">
                <label htmlFor="eventType" className="quote-form-label">Event Type *</label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="quote-form-input"
                  required
                >
                  <option value="">Select Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Celebration</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="quote-form-group quote-form-checkbox-group">
              <label className="quote-form-checkbox-label">
                <input
                  type="checkbox"
                  name="wantsTour"
                  checked={formData.wantsTour}
                  onChange={handleInputChange}
                  className="quote-form-checkbox"
                />
                <span className="quote-form-checkbox-text">I would like to schedule a tour of the venue</span>
              </label>
            </div>
            <div className="quote-form-group">
              <label htmlFor="message" className="quote-form-label">Additional Details</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="quote-form-textarea"
                rows="5"
                placeholder="Tell us about your event vision, special requirements, or any questions you may have..."
              />
            </div>
            <button type="submit" className="quote-form-submit">
              Submit Request
            </button>
          </form>
        </div>
      </section>
      <Footer />
      <BookingSidebar isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}

export default WeddingsEvents;


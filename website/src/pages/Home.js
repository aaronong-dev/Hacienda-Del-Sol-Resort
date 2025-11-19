import React, { useState } from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import TopInfoBar from '../components/TopInfoBar';
import BookingSidebar from '../components/BookingSidebar';

function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

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
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Experience Luxury Like Never Before</h2>
            <p className="cta-text">
              Book your stay today and discover the perfect blend of elegance, comfort, and exceptional service.
            </p>
            <button className="cta-button" onClick={handleOpenBooking}>
              Request Tour
            </button>
          </div>
        </div>
      </section>
      <section className="property-intro">
        <div className="property-intro-container">
          <div className="property-intro-content">
            <h2 className="property-intro-title">Welcome to Hacienda Del Sol Resort</h2>
            <p className="property-intro-text">
              Nestled in the heart of paradise, Hacienda Del Sol Resort offers an unparalleled 
              luxury experience where timeless elegance meets modern comfort. Our stunning property 
              features beautifully appointed accommodations, world-class amenities, and breathtaking 
              views that will create memories to last a lifetime.
            </p>
            <p className="property-intro-text">
              Whether you're seeking a romantic getaway, a family vacation, or a peaceful retreat, 
              our dedicated team is committed to providing exceptional service and ensuring your stay 
              is nothing short of extraordinary.
            </p>
          </div>
        </div>
      </section>
      <BookingSidebar isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}

export default Home;


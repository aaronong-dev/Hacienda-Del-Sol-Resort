import React, { useState } from 'react';
import './AboutUs.css';
import Navbar from '../components/Navbar';
import TopInfoBar from '../components/TopInfoBar';
import BookingSidebar from '../components/BookingSidebar';
import PropertyImage1 from '../assets/property-intro/1.png';
import PropertyImage2 from '../assets/property-intro/2.png';

function AboutUs() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div className="about-us-page" id="about-us">
      <TopInfoBar />
      <Navbar onBookNowClick={handleOpenBooking} />
      <section className="our-story-section">
        <div className="our-story-container">
          <div className="our-story-content">
            <div className="our-story-text">
              <h2 className="our-story-title">Our Story</h2>
              <p className="our-story-paragraph">
                Hacienda Del Sol Resort represents a vision of luxury and hospitality that began with a simple yet profound goal: 
                to create a destination where elegance meets comfort, and where every guest feels truly at home. Nestled in the 
                heart of the Rio Grande Valley, our resort was designed to honor the rich traditions of the region while 
                introducing a new standard of excellence in hospitality.
              </p>
              <p className="our-story-paragraph">
                From the moment we opened our doors in June 2025, we have been committed to providing an experience that 
                transcends the ordinary. Every detail, from the thoughtfully designed accommodations to the meticulously 
                maintained gardens, reflects our dedication to creating unforgettable moments for our guests.
              </p>
              <p className="our-story-paragraph">
                Whether you're planning a romantic getaway, celebrating a special occasion, or simply seeking a peaceful 
                retreat, Hacienda Del Sol Resort is here to welcome you with open arms and exceptional service.
              </p>
            </div>
            <div className="our-story-image-wrapper">
              <img 
                src={PropertyImage1} 
                alt="Hacienda Del Sol Resort" 
                className="our-story-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="our-mission-section">
        <div className="our-mission-container">
          <div className="our-mission-content">
            <div className="our-mission-image-wrapper">
              <img 
                src={PropertyImage2} 
                alt="Hacienda Del Sol Resort" 
                className="our-mission-image"
              />
            </div>
            <div className="our-mission-text">
              <h2 className="our-mission-title">Our Mission</h2>
              <p className="our-mission-paragraph">
                At Hacienda Del Sol Resort, our mission is to provide an unparalleled hospitality experience that 
                celebrates the beauty of the Rio Grande Valley while setting new standards for luxury and service. 
                We are dedicated to creating a sanctuary where guests can escape, relax, and create lasting memories.
              </p>
              <p className="our-mission-paragraph">
                We believe that exceptional hospitality goes beyond beautiful accommodations. It's about understanding 
                our guests' needs, anticipating their desires, and ensuring every moment of their stay exceeds expectations. 
                From the warm welcome at check-in to the thoughtful details throughout their visit, we strive to make 
                each guest feel valued and cherished.
              </p>
              <p className="our-mission-paragraph">
                Our commitment extends to the community we call home. We are proud to be part of the Rio Grande Valley, 
                and we work to support local businesses, preserve the region's natural beauty, and contribute to its 
                vibrant culture. Hacienda Del Sol Resort is more than a destination—it's a promise of excellence, 
                comfort, and genuine care.
              </p>
            </div>
          </div>
        </div>
      </section>
      <BookingSidebar isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}

export default AboutUs;

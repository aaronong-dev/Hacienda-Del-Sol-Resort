import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Accommodations.css';
import Navbar from '../components/Navbar';
import TopInfoBar from '../components/TopInfoBar';
import BookingSidebar from '../components/BookingSidebar';
import Footer from '../components/Footer';
import BedroomsImage from '../assets/outdoor/indoor/Bedrooms.png';
import LivingRoomsImage from '../assets/outdoor/indoor/LivingRooms.png';
import KitchenDiningImage from '../assets/outdoor/indoor/KitchenDining.png';
import FireplaceImage from '../assets/property-intro/4.png';
import HeroImage from '../assets/outdoor/Accomodation1.jpg';

function Accommodations() {
  const navigate = useNavigate();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

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

  const amenities = [
    {
      title: '4 Private Bedrooms',
      description: 'Experience comfort and luxury in our four beautifully appointed bedrooms. Each room is thoughtfully designed to provide a restful retreat with elegant furnishings and attention to detail.',
      image: BedroomsImage,
      imagePlaceholder: false,
      showGalleryButton: true
    },
    {
      title: '2 Spacious Living Rooms',
      description: 'Relax and unwind in our spacious living room, perfect for gathering with family and friends. The elegant design creates a warm and inviting atmosphere for your stay.',
      image: LivingRoomsImage,
      imagePlaceholder: false,
      showGalleryButton: true
    },
    {
      title: 'Kitchen & Dining',
      description: 'Prepare delicious meals in our fully equipped kitchen, complete with modern appliances and ample counter space. The adjacent dining area provides the perfect setting for enjoying meals together with family and friends.',
      image: KitchenDiningImage,
      imagePlaceholder: false,
      showGalleryButton: true
    },
    {
      title: 'Fireplace',
      description: 'Cozy up by the fireplace and enjoy the warmth and ambiance it brings to your stay. Perfect for creating memorable moments during your visit.',
      image: FireplaceImage,
      imagePlaceholder: false
    },
    {
      title: 'Sports Court',
      description: 'Stay active and have fun on our multi-purpose sports court. Whether you prefer basketball, tennis, or pickleball, this versatile court offers endless entertainment for guests of all ages.',
      imagePlaceholder: true
    },
    {
      title: 'Lake',
      description: 'Enjoy the serene beauty of our private lake, offering peaceful views and a tranquil setting. The lake provides a perfect backdrop for relaxation and nature appreciation.',
      imagePlaceholder: true
    }
  ];

  return (
    <div className="accommodations-page" id="accommodations">
      <TopInfoBar />
      <Navbar onBookNowClick={handleOpenBooking} />
      
      <section className="accommodations-hero" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="accommodations-hero-overlay"></div>
        <div className="accommodations-hero-container">
          <h1 className="accommodations-hero-title">Accommodations & Amenities</h1>
          <p className="accommodations-hero-subtitle">
            Discover the comfort and luxury that awaits you at Hacienda Del Sol Resort
          </p>
        </div>
      </section>

      <section className="amenities-section">
        <div className="amenities-container">
          {amenities.map((amenity, index) => (
            <div 
              key={index} 
              className={`amenity-item ${index % 2 === 0 ? 'amenity-item--left' : 'amenity-item--right'} ${amenity.title === 'Fireplace' ? 'amenity-item--fireplace' : ''}`}
            >
              <div className="amenity-content">
                <div className="amenity-text">
                  <h2 className="amenity-title">{amenity.title}</h2>
                  <p className="amenity-description">{amenity.description}</p>
                  {amenity.showGalleryButton && (
                    <button className="amenity-gallery-button" onClick={handleViewGallery}>
                      VIEW GALLERY
                    </button>
                  )}
                </div>
                <div className="amenity-image-wrapper">
                  {amenity.imagePlaceholder ? (
                    <div className="amenity-image-placeholder">
                      <span className="placeholder-text">Image Coming Soon</span>
                    </div>
                  ) : (
                    <img 
                      src={amenity.image} 
                      alt={amenity.title} 
                      className="amenity-image"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <BookingSidebar isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}

export default Accommodations;

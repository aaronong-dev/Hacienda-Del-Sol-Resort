import React from 'react';
import './Accommodations.css';
import Navbar from '../components/Navbar';
import TopInfoBar from '../components/TopInfoBar';

function Accommodations() {
  const handleOpenBooking = () => {
    // Booking functionality can be added here later
  };

  return (
    <div className="accommodations-page" id="accommodations">
      <TopInfoBar />
      <Navbar onBookNowClick={handleOpenBooking} />
    </div>
  );
}

export default Accommodations;

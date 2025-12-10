import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import WeddingsEvents from './pages/WeddingsEvents';
import Gallery from './pages/Gallery';
import Accommodations from './pages/Accommodations';
import AboutUs from './pages/AboutUs';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accomodations" element={<Accommodations />} />
          <Route path="/weddings-events" element={<WeddingsEvents />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="home" id="home">
      <Navbar />
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
    </div>
  );
}

export default Home;


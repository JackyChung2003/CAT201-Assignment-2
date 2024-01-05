import React from 'react';
import './VideoBackground.css';
import { Link } from 'react-scroll';
import VideoBg from '../assets/videos/powerbank-video-bg.mp4';

const VideoBackground = () => {
  return (
    <div className='main' id='home'>
      {/* background video */}
      <video src={VideoBg} autoPlay loop muted className='background-video' />

      <div className='overlay'></div>
        <div className='landing-main-content'>
          <div className="name-container">
            <h1 className='brand-name'>QuantumCharge</h1>
          </div>

          <div className="content-container">
            <h1>Power up with </h1>
            <h1 className='logo-name-xl'>QuantumCharge</h1>
            <p>
              Your Ultimate Destination for Affordable and Convenient Power Bank Rentals. Charge ahead with ElectroRent's cutting-edge solutions!
            </p>
            <Link to="populars" spy={true} smooth={true} offset={-100} duration={500}>
              <button className="cta-button">Get Started</button> 
            </Link>
          </div>
      </div>
    </div>
  );
};

export default VideoBackground;

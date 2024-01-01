// VideoBackground.js
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
            {/* <button className="cta-button">Get Started</button>
            <Link to="populars" spy={true} smooth={true} offset={-150} duration={500}>Populars</Link>
            <button className="cta-button">
              <Link to="populars" spy={true} smooth={true} offset={-150} duration={500}>Get Started</Link>
            </button> */}
            
            <Link to="populars" spy={true} smooth={true} offset={-150} duration={500}>
              <button className="cta-button">Get Started</button> 
            </Link>
          </div>
      </div>
      
      <video src={VideoBg} autoPlay loop muted />
      {/* <div className='content'>
        <h1>QuantumCharge</h1>
        <p>Charge your phone in seconds</p>
        <div className='buttons'>
          <button className='btn btn-one'>Watch Video</button>
          <button className='btn btn-two'>Explore</button>
        </div>
      </div> */}
    </div>
  );
};

export default VideoBackground;

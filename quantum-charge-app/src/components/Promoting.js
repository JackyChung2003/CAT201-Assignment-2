// VideoSection.js

import React from 'react';
import './Promoting.css'; // Import your CSS file
import street_bg from '../assets/images/street_bg.png';
import quantum_video_bg from '../assets/videos/quantum-bg.mp4';

const Promoting = () => {
  return (
    <div className="promoting">
        <div className="promoting-upper-section">
            <div className="promoting-upper-section-image" style={{ backgroundImage: `url(${street_bg})` }}>
                        {/* <img src={streat_bg} alt="streat" /> */}

            </div>
        </div>

        <div className='promoting-lower-section'>
            <div className='promoting-left-section'>
                <h1>Product Stories: Direct from QuantumCharge</h1>
                <div className="promoting-video-section">
                  {/* Your video embed code goes here */}
                  {/* Example: */}
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/your-video-id"
                    title="Video Title"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
            </div>

            <div className='promoting-right-section'>
                {/* <video src={quantum_video_bg} autoPlay loop muted className='quantum-background-video' /> */}
                <div className="quantum-video-background">
                  {/* <video autoPlay loop muted>
                    <source src={quantum_video_bg} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}
                  <video src={quantum_video_bg} autoPlay loop muted className='quantum-background-video' />
                  <div className='promoting-overlay'></div>
                </div>

                
                
                <div className="promoting-content-overlay">
                  <h2>QuantumCharge</h2>
                  <p>Power Up Your Day, Light Up Your Way: Charge into Tomorrow!</p>
                  <button className="promoting-about-us-cta-button">Learn More</button>
                </div>
            </div>
        </div>
        
    </div>
  );
};

export default Promoting;

import React from 'react';
import './Promoting.css'; 
import street_bg from '../assets/images/street_bg.png';
import quantum_video_bg from '../assets/videos/quantum-bg.mp4';

const Promoting = () => {
  return (
    <div className="promoting">
      <div className="promoting-upper-section">
          <div className="promoting-upper-section-image" style={{ backgroundImage: `url(${street_bg})` }}>
          </div>
      </div>

      <div className='promoting-lower-section'>
        <div className='promoting-left-section'>
          <h1>The Innovative Powerbank We Want</h1>
          <div className="promoting-video-section">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/PjyjET_bzBs" 
              title="The Innovative Powerbank We Want." 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              // allowfullscreen
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen" 
              msallowfullscreen="msallowfullscreen" 
              oallowfullscreen="oallowfullscreen" 
              webkitallowfullscreen="webkitallowfullscreen">
            </iframe>
          </div>
        </div>

        <div className='promoting-right-section'>
          <div className="quantum-video-background">
            <video src={quantum_video_bg} autoPlay loop muted className='quantum-background-video' />
            <div className='promoting-overlay'></div>
          </div>
          
          <div className="promoting-content-overlay">
            <h2>Your curiosity makes your whole day better.</h2>
            <h3>Watch this video to find out how and why. </h3>
            <h3>Don't forget to like, share, and subscribe !</h3>
          </div>
        </div>
      </div>

      <div className='gradient-bg'></div>
      
    </div>
  );
};

export default Promoting;

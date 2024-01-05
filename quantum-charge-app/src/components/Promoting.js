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
                <h1>The Innovative Powerbank We Want</h1>
                <div className="promoting-video-section">
                  {/* Your video embed code goes here */}
                  {/* Example: */}
                  {/* <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/your-video-id"
                    title="Video Title"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe> */}
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/DQq6J35ZgfE" 
                    title="小翔哥的粉丝藏龙卧虎，爽文男主继承家业剧情竟在现实上演？太爽了" 
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
                  <h2>Your curiosity makes your whole day better.</h2>
                  {/* <h3>That's why you need a powerbank that can keep up.</h3> */}
                  <h3>Watch this video to find out how and why. </h3>
                  <h3>Don't forget to like, share, and subscribe !</h3>
                  {/* <p>Power Up Your Day, Light Up Your Way: Charge into Tomorrow!</p> */}
                  {/* <button className="promoting-about-us-cta-button">Learn More</button> */}
                </div>
            </div>
        </div>

        <div className='gradient-bg'></div>
        
    </div>
  );
};

export default Promoting;

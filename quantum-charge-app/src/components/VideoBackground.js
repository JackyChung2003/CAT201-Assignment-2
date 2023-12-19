// VideoBackground.js
import React from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="video-background">
        <source src="assets/videos/powerbank-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Add other content on top of the video if needed */}
      <div className="content">
        {/* Your additional content goes here */}
      </div>
    </div>
  );
};

export default VideoBackground;

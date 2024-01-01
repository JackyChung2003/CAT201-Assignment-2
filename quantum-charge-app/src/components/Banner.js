import React, { useState } from 'react';
import './Banner.css'; // Import your CSS file
import PopOutNotDevelop from './PopOutNotDevelop';

const Banner = () => {
  const [isFeedbackPopOutVisible, setIsFeedbackPopOutVisible] = useState(false);

  const handleFeedbackPopOutToggle = () => {
    setIsFeedbackPopOutVisible(!isFeedbackPopOutVisible);
  };

  const closePopOuts = () => {
    setIsFeedbackPopOutVisible(false);
  };

  return (
    <div className="banner-section">
      <p className="banner-message">Power Up Your Day, Light Up Your Way: Charge into Tomorrow!</p>
      <button className="learn-more-cta-button" onClick={handleFeedbackPopOutToggle}>
        Learn More
      </button>
      {isFeedbackPopOutVisible  && <PopOutNotDevelop onClose={closePopOuts} />}
    </div>
  );
};

export default Banner;

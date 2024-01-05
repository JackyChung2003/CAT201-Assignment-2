// NewReleaseSpotlight.js
import React, { useState } from 'react';
import './NewReleaseSpotlight.css'; // Import the CSS file for styling
import New_Powerbank1 from '../assets/images/new_powerbank_1.png';
import New_Powerbank2 from '../assets/images/new_powerbank_2.png';
import New_Powerbank3 from '../assets/images/new_powerbank_3.png';

import PopOutNotDevelop from './PopOutNotDevelop';

const NewReleaseSpotlight = () => {
  const [isFeedbackPopOutVisible, setIsFeedbackPopOutVisible] = useState(false);

  const handleFeedbackPopOutToggle = () => {
    setIsFeedbackPopOutVisible(!isFeedbackPopOutVisible);
  };

  const closePopOuts = () => {
    setIsFeedbackPopOutVisible(false);
  };

  return (
    <div className="new-release-spotlight" id='new-releases'>
      <div className="title">
        <p>New Release Spotlight</p>
        </div>
      <div className='new-release-spotlight-container'>
        <div className="product">
          <img
            src={New_Powerbank1}
            alt="Product 1"
          />
          <div className='product-detail'>
            <h1>Quantum Charge ProPulse 10000</h1>
            <p>
              Experience cutting-edge charging technology with the Quantum Charge ProPulse 10000. Designed for the tech-savvy user on the go, this sleek and durable power bank offers rapid, efficient charging and the reliability you need to stay connected.
            </p>
          </div>
        </div>

        <div className="product">
          <img
            src={New_Powerbank2}
            alt="Product 1"
          />
          <div className='product-detail'>
            <h1>Quantum Charge FlexHub 5000</h1>
            <p>
            Unleash the power of convenience with the Quantum Charge FlexHub 5000, your all-in-one charging solution. Featuring built-in cables and wireless charging, this power bank is your perfect companion for daily use and travel, ensuring you're always powered up and ready to go.
            </p>
          </div>
        </div>

        <div className="product">
          <img
            src={New_Powerbank3}
            alt="Product 1"
          />
          <div className='product-detail'>
            <h1>Quantum Charge X500</h1>
            <p>
              The Quantum Charge X500: Unleash freedom in the tech wilderness. Ultra-fast charging, 50% in 30 minutes. Intelligent power allocation for multiple devices. Solar panels for on-the-go charging. Rugged, water-resistant, and adventure-ready – your perfect companion, keeping you connected anywhere.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="ending">ending</div> */}
      <div className="end-title">
        <p>
          <button className="explore-button" onClick={handleFeedbackPopOutToggle}>
            <span>Explore more</span>
          </button>
        </p>
        
        {/* <button className="explore-button" >
          <span>Explore more</span>
        </button> */}
      </div>
      
      {/* <button className="explore-button">Explore More</button> */}
      {isFeedbackPopOutVisible  && <PopOutNotDevelop onClose={closePopOuts} />}
    </div>
  );
};

export default NewReleaseSpotlight;

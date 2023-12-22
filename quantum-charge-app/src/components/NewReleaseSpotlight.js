// NewReleaseSpotlight.js
import React from 'react';
import './NewReleaseSpotlight.css'; // Import the CSS file for styling
import New_Powerbank1 from '../assets/images/new_powerbank_1.png';

const NewReleaseSpotlight = () => {
  return (
    <div className="new-release-spotlight">
      <div className="title">New Release Spotlight</div>
      <div className='new-release-spotlight-container'>
        <div className="product">
          <img
            src={New_Powerbank1}
            alt="Product 1"
          />
          <div className='product-detail'>
            <h1>Quantum S8 Ultra</h1>
            <p>Unmatched Power, Unparalleled Style.Stay charged, stay connected, and embrace the future with Quantum S8 Ultra.</p>
          </div>
        </div>

        <div className="product">
          <img
            src={New_Powerbank1}
            alt="Product 1"
          />
          <div className='product-detail'>
            <h1>Quantum S8 Ultra</h1>
            <p>Unmatched Power, Unparalleled Style.Stay charged, stay connected, and embrace the future with Quantum S8 Ultra.</p>
          </div>
        </div>

        <div className="product">
          <img
            src={New_Powerbank1}
            alt="Product 1"
          />
          <div className='product-detail'>
            <h1>Quantum S8 Ultra</h1>
            <p>Unmatched Power, Unparalleled Style.Stay charged, stay connected, and embrace the future with Quantum S8 Ultra.</p>
          </div>
        </div>
      </div>

      <div className="ending">ending</div>
      <div className="title">
        
      </div>
      
      {/* <button className="explore-button">Explore More</button> */}
    </div>
  );
};

export default NewReleaseSpotlight;
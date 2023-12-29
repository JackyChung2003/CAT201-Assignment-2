// NewReleaseSpotlight.js
import React from 'react';
import './NewReleaseSpotlight.css'; // Import the CSS file for styling
import New_Powerbank1 from '../assets/images/new_powerbank_1.png';
import New_Powerbank2 from '../assets/images/new_powerbank_2.png';
import New_Powerbank3 from '../assets/images/new_powerbank_3.png';

const NewReleaseSpotlight = () => {
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
            <h1>Quantum S8 Ultra</h1>
            <p>Unmatched Power, Unparalleled Style.Stay charged, stay connected, and embrace the future with Quantum S8 Ultra.</p>
          </div>
        </div>

        <div className="product">
          <img
            src={New_Powerbank2}
            alt="Product 1"
          />
          <div className='product-detail'>
            <h1>Quantum S8 Ultra</h1>
            <p>Unmatched Power, Unparalleled Style.Stay charged, stay connected, and embrace the future with Quantum S8 Ultra.</p>
          </div>
        </div>

        <div className="product">
          <img
            src={New_Powerbank3}
            alt="Product 1"
          />
          <div className='product-detail'>
            <h1>Quantum S8 Ultra</h1>
            <p>Unmatched Power, Unparalleled Style.Stay charged, stay connected, and embrace the future with Quantum S8 Ultra.</p>
          </div>
        </div>
      </div>

      {/* <div className="ending">ending</div> */}
      <div className="end-title">
        <p>
        <button className="explore-button" >
          <span>Explore more</span>
        </button>
        </p>
        {/* <button className="explore-button" >
          <span>Explore more</span>
        </button> */}
      </div>
      
      {/* <button className="explore-button">Explore More</button> */}
    </div>
  );
};

export default NewReleaseSpotlight;

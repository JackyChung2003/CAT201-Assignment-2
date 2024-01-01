import React, { useState } from 'react';
import './Topsell.css';
import Powerbank1 from '../assets/images/powerbank_1.jpeg';
import PopOutNotDevelop from './PopOutNotDevelop';

const Topsell = () => {
    const [isFlipped, setFlipped] = useState(false);

    const handleFlip = () => {
      setFlipped(!isFlipped);
    };

    const powerbankDetails = [
      { attribute: 'Brand', value: 'ABC Electronics' },
      { attribute: 'Model', value: 'PB-1234' },
      { attribute: 'Capacity', value: '10000mAh' },
      { attribute: 'Output Ports', value: '2' },
      { attribute: 'Output Current', value: '5V/2A (Each)' },
      { attribute: 'Input', value: '5V/2A' },
      { attribute: 'Battery Type', value: 'Lithium Polymer' },
      { attribute: 'Charging Time', value: '4-6 hours' },
      { attribute: 'Dimensions', value: '150 x 75 x 10 mm' },
      { attribute: 'Weight', value: '200g' },
      // Add more attributes and values as needed
    ];
    const [isFeedbackPopOutVisible, setIsFeedbackPopOutVisible] = useState(false);

  const handleFeedbackPopOutToggle = () => {
    setIsFeedbackPopOutVisible(!isFeedbackPopOutVisible);
  };

  const closePopOuts = () => {
    setIsFeedbackPopOutVisible(false);
  };

    return (
        <div className='main-topsell' id='populars'>
            <div className={`flip-card${isFlipped ? ' flipped' : ''}`}>
              <div className="flip-card-inner" style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)' }}>
                <div className="flip-card-front">
                    <div className='product-image'>
                        <img src={Powerbank1} alt='Powerbank1' />
                    </div>
                    <div className='product-info'>
                        <h1 className='product-title'>BEST SALLER of the year</h1>
                        <div className='product-front-info'>
                          <h1>Quantum S8 Ultra</h1>
                          <p>A powerhouse of innovation and style. Experience rapid charging and futuristic design, setting a new standard in portable energy.</p>
                          <p>T&C Apply.</p>
                        </div>

                        <div className='button-container'>  
                          <button className="flip-button" onClick={handleFlip}>
                            <span class="hover-underline-animation"> View detail </span>
                          </button>
                          <button className="buy-button" onClick={handleFeedbackPopOutToggle}>
                            <span>Buy Now</span>
                          </button>
                          
                        </div>
                        
                    </div>
                  {/* <p className="title">FLIP CARD</p>
                  <p>Hover Me</p> */}
                </div>
                {/* <div className="flip-card-back">
                  <p className="title">BACK</p>
                  <p>Leave Me</p>
                  <button className="flip-button" onClick={handleFlip}>
                    Flip Card
                  </button>
                </div> */}
                <div className="flip-card-back">
                  <h1 className="product-title">Product Details</h1>

                  {/* Table for Powerbank Details */}
                  <table>
                    <thead>
                      <tr>
                        <th>Attribute</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {powerbankDetails.map((detail, index) => (
                        <tr key={index}>
                          <td>{detail.attribute}</td>
                          <td>{detail.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                      
                  <div className='button-container'>  
                          <button className="flip-button" onClick={handleFlip}>
                            <span class="hover-underline-animation"> Return </span>
                          </button>
                          <button className="buy-button" onClick={handleFeedbackPopOutToggle}>
                            <span>Buy Now</span>
                          </button>
                        </div>
                </div>

              </div>

            </div>
            {isFeedbackPopOutVisible  && <PopOutNotDevelop onClose={closePopOuts} />}
        </div>
        
    );
};

export default Topsell;

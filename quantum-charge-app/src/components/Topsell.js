import React, { useState } from 'react';
import './Topsell.css';
import Powerbank1 from '../assets/images/powerbank_1.jpeg';

const Topsell = () => {
    const [isFlipped, setFlipped] = useState(false);

    const handleFlip = () => {
      setFlipped(!isFlipped);
    };

    return (
        <div className='main-topsell'>
            <div className={`flip-card${isFlipped ? ' flipped' : ''}`}>
              <div className="flip-card-inner" style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)' }}>
                <div className="flip-card-front">
                    <div className='product-image'>
                        <img src={Powerbank1} alt='Powerbank1' />
                    </div>
                    <div className='product-info'>
                        <h1>BEST SALLER of the year</h1>
                        <br />
                        <br />
                        <br />
                        <br />
                        <h1>Quantum S8 Ultra</h1>
                        <p>A powerhouse of innovation and style. Experience rapid charging and futuristic design, setting a new standard in portable energy.</p>
                        <p>T&C Apply.</p>

                        <div className='button-container'>  
                          <button className="flip-button" onClick={handleFlip}>
                            <span class="hover-underline-animation"> View detail </span>
                          </button>
                          <button className="buy-button" onClick={handleFlip}>
                            <span>Buy Now</span>
                          </button>
                        </div>
                        
                    </div>
                  {/* <p className="title">FLIP CARD</p>
                  <p>Hover Me</p> */}
                </div>
                <div className="flip-card-back">
                  <p className="title">BACK</p>
                  <p>Leave Me</p>
                  <button className="flip-button" onClick={handleFlip}>
                    Flip Card
                  </button>
                </div>

              </div>

            </div>
        </div>
        
    );
};

export default Topsell;

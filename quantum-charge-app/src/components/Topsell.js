import React, { useState } from 'react';
import './Topsell.css';

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
                        [picture]
                    </div>
                    <div className='product-info'>
                        <h1>Product Name</h1>
                        <p>Product Description</p>
                        <p>Product Price</p>
                        
                        <button className="flip-button" onClick={handleFlip}>
                          Flip Card
                        </button>
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

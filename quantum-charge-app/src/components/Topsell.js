import React, { useState } from 'react';
import './Topsell.css';
import Powerbank1 from '../assets/images/powerbank_1.jpeg';
import PopOutNotDevelop from './PopOutNotDevelop';

const Topsell = () => {
    const [isFlipped, setFlipped] = useState(false);

    const handleFlip = () => {
      setFlipped(!isFlipped);
    };

    // const powerbankDetails = [
    //   { attribute: 'Brand', value: 'QuantumCharge' },
    //   { attribute: 'Model', value: 'Quantum S8 Ultra' },
    //   { attribute: 'Capacity', value: '20,000mAh Advanced High-Density Lithium-Ion Cells' },
    //   { attribute: 'Output Ports', value: `2 x USB-C with Power Delivery (PD) 3.0  | 
    //     2 x USB-A with Quick Charge (QC) 4.0
    //     Integrated wireless charging surface with Qi standard` },
    //   { attribute: 'Output Current', value: `USB-C PD: 5V/3A, 9V/2.22A, 12V/1.67A (20W Max)
    //     USB-A QC: 3.6V-6V/3A, 6V-9V/2A, 9V-12V/1.5A (18W Max per port)
    //     Wireless Charging: Up to 10W` },
    //   { attribute: 'Input', value: `Dual Input: USB-C PD and Micro-USB
    //     USB-C PD: 5V/3A, 9V/2.22A, 12V/1.67A
    //     Micro-USB: 5V/2A` },
    //   { attribute: 'Battery Type', value: 'Lithium-Ion with Quantum Charge Shield Protection' },
    //   { attribute: 'Charging Time', value: `Approximately 6 hours with 20W USB-C PD charger
    //     Approximately 10 hours with standard 5V/2A charger` },
    //   { attribute: 'Dimensions', value: '98mm x 98mm x 98mm' },
    //   { attribute: 'Weight', value: '450g' },
    //   // Add more attributes and values as needed
    // ];

    // const powerbankDetails = [
    //   { attribute: 'Brand', value: 'QuantumCharge' },
    //   { attribute: 'Model', value: 'Quantum S8 Ultra' },
    //   { attribute: 'Capacity', value: '20,000mAh Advanced High-Density Lithium-Ion Cells' },
    //   { attribute: 'Output Ports', value: [
    //     '2 x USB-C with Power Delivery (PD) 3.0',
    //     '2 x USB-A with Quick Charge (QC) 4.0',
    //     'Integrated wireless charging surface with Qi standard'
    //   ] },
    //   { attribute: 'Output Current', value: [
    //     'USB-C PD: 5V/3A, 9V/2.22A, 12V/1.67A (20W Max)',
    //     'USB-A QC: 3.6V-6V/3A, 6V-9V/2A, 9V-12V/1.5A (18W Max per port)',
    //     'Wireless Charging: Up to 10W'
    //   ] },
    //   { attribute: 'Input', value: [
    //     'Dual Input: USB-C PD and Micro-USB',
    //     'USB-C PD: 5V/3A, 9V/2.22A, 12V/1.67A',
    //     'Micro-USB: 5V/2A'
    //   ] },
    //   { attribute: 'Battery Type', value: 'Lithium-Ion with Quantum Charge Shield Protection' },
    //   { attribute: 'Charging Time', value: [
    //     'Approximately 6 hours with 20W USB-C PD charger',
    //     'Approximately 10 hours with standard 5V/2A charger'
    //   ] },
    //   { attribute: 'Dimensions', value: '98mm x 98mm x 98mm' },
    //   { attribute: 'Weight', value: '450g' },
    //   // Add more attributes and values as needed
    // ];

    const powerbankDetails = [
      { attribute: 'Brand', value: 'QuantumCharge' },
      { attribute: 'Model', value: 'Quantum S8 Ultra' },
      { attribute: 'Capacity', value: '20,000mAh Lithium-Ion Cells' },
      { attribute: 'Output Ports', value: [
        '2 x USB-C (PD) 3.0',
        '2 x USB-A (QC) 4.0',
        'Integrated wireless Qi charging'
      ] },
      { attribute: 'Output Current', value: [
        'USB-C PD: 5V/3A, 9V/2.22A, 12V/1.67A (20W Max)',
        'USB-A QC: 3.6V-6V/3A, 6V-9V/2A, 9V-12V/1.5A (18W Max per port)',
        'Wireless Charging: Up to 10W'
      ] },
      { attribute: 'Input', value: [
        'Dual Input: USB-C PD and Micro-USB',
        'USB-C PD: 5V/3A, 9V/2.22A, 12V/1.67A',
        'Micro-USB: 5V/2A'
      ] },
      { attribute: 'Battery Type', value: 'Lithium-Ion with Quantum Charge Shield' },
      { attribute: 'Charging Time', value: [
        '6 hours with 20W USB-C PD charger',
        '10 hours with standard 5V/2A charger'
      ] },
      { attribute: 'Dimensions', value: '98mm x 98mm x 98mm' },
      { attribute: 'Weight', value: '450g' },
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
                        <h1 className='product-title'>BEST SELLER of the year</h1>
                        <div className='product-front-info'>
                          <h1>Quantum Charge TitanVault 20000</h1>
                          <p>The Quantum Charge TitanVault 20000 is a powerhouse of energy wrapped in a compact, futuristic design. With an impressive capacity and multiple charging options, it's built for the tech enthusiast who demands both style and performance on the move.</p>
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
                  {/* <table>
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
                  </table> */}
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
        <td>
          {Array.isArray(detail.value) ? (
            detail.value.map((val, i) => (
              <React.Fragment key={i}>
                {val}
                <br />
              </React.Fragment>
            ))
          ) : (
            detail.value
          )}
        </td>
      </tr>
    ))}
  </tbody>
</table>
                  {/* <table>
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    {powerbankDetails.map((detail, index) => (
      Array.isArray(detail.value) ? (
        detail.value.map((v, i) => (
          <tr key={i}>
            <td>{i === 0 ? detail.attribute : ''}</td>
            <td>{v}</td>
          </tr>
        ))
      ) : (
        <tr key={index}>
          <td>{detail.attribute}</td>
          <td>{detail.value}</td>
        </tr>
      )
    ))}
  </tbody>
</table> */}
                      
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

// Benefits.js

import React from 'react';
import './Benefits.css'; // Import your CSS file for styling
import Features1 from '../assets/images/features_portability.jpg';
import Features2 from '../assets/images/features_reliable.jpg';
import Features3 from '../assets/images/features_fast.jpg';

const Benefits = () => {
  return (  
    <section className="benefits">
      <h1>Why choose QuantumCharge?</h1>
      
      <div className="content">
        <div className="item">
          <div className="image">
            <img src={Features1} alt="Portablility features" />
          </div>

          <div className="text">
            <h2>Portability</h2>
            <p>Designed with your on-the-go lifestyle in mind, QuantumCharge is incredibly compact and lightweight. Slip it into your pocket or bag effortlessly, ensuring you have reliable power wherever your adventures take you.</p>
          </div>
        </div>

        <div className="item">
          <div className="text">
            <h2>Reliable</h2>
            <p>Trust in QuantumCharge's unwavering reliability. Built with top-notch quality and precision, it ensures consistent and dependable power whenever you need it. Rely on QuantumCharge for a seamless charging experience.</p>
          </div>
          <div className="image">
            <img src={Features2} alt="Fast Charging" />
          </div>
        </div>

        <div className="item">
          <div className="image">
            <img src={Features3} alt="Portablility features" />
          </div>
          <div className="text">
            <h2>Fast</h2>
            <p>Experience the speed of QuantumCharge. Boasting rapid charging capabilities, it's your solution for quickly powering up your devices. Spend less time waiting and more time enjoying your fully charged devices with QuantumCharge.</p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Benefits;

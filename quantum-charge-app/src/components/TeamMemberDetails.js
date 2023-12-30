// TeamMemberDetails.js

// import React from 'react';
import React, { useState, useEffect } from 'react';

import './TeamMemberDetails.css'; // Import your CSS file
import Jacky_Picture from '../assets/images/Jacky.png';
import HongJun_Picture from '../assets/images/HongJun.png';
import Axler_Picture from '../assets/images/Axler.png';
import Andrew_Picture from '../assets/images/Andrew.png';


const TeamMemberDetails = ({ onClose }) => {
  const [isPopOutOpen, setIsPopOutOpen] = useState(false);

  useEffect(() => {
    // Function to toggle the scroll lock
    // const toggleScrollLock = () => {
    //   if (isPopOutOpen) {
    //     document.body.style.overflow = 'hidden';
    //   } else {
    //     document.body.style.overflow = 'auto';
    //   }
    // };
    const toggleScrollLock = () => {
      const body = document.body;
    
      if (isPopOutOpen) {
        body.style.overflow = 'hidden';
        body.classList.add('no-scroll');
      } else {
        body.style.overflow = 'auto';
        body.classList.remove('no-scroll');
      }
    };

    toggleScrollLock();

    return () => {
      // Cleanup: Restore the scroll when the component is unmounted
      document.body.style.overflow = 'auto';
    };
  }, [isPopOutOpen]);

  return (
    <div className="pop-out-overlay">
      <div className="pop-out-section">
        <h1 id='team-title'>Our Dream Team</h1>
        <h2 id="team-title">Meet the people behind QuantumCharge</h2>
        <div className='team-card-section'>
          {/* Team Member 1 */}
          <div className="team-member" >
            <div className="profile-picture" style={{ background: 'linear-gradient(to bottom, rgba(142, 45, 226, 0.8), rgba(74, 0, 224, 0.8))', boxShadow: '0 35px 60px rgba(74, 0, 224, 0.4)' }}>
              <img id="first-img" src={Jacky_Picture} alt="Jacky's Pictures" />
              <div id="second-img-container">
                <img id="second-img" src={Jacky_Picture} alt="Jacky's Pictures" />
              </div>
            </div>

            <div className="member-details">
              <h1 id='people-name'>Jacky Chung Sze Yung</h1>
              <p id='member-position'>CEO</p>
              <p id='member-position'>163326</p>
              <p id='member-info'>Visionary leader guiding QuantumCharge with strategic insights and innovation in portable power solutions.</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="team-member">
            <div className="profile-picture" style={{ background: 'linear-gradient(to bottom, rgba(245, 175, 25, 0.8), rgba(241, 39, 17, 0.8))', boxShadow: '0 35px 60px rgba(241, 39, 17, 0.4)' }}>
              <img id="first-img" src={HongJun_Picture} alt="Jacky's Pictures" />
              <div id="second-img-container">
                <img id="second-img" src={HongJun_Picture} alt="Jacky's Pictures" />
              </div>
            </div>

            <div className="member-details">
              <h1 id='people-name'>Teh Hong Jun</h1>
              <p id='member-position'>CTO </p>
              <p id='member-position'>164723</p>
              <p id='member-info'>Technical mastermind overseeing advanced battery systems and charging solutions for QuantumCharge.</p>
              {/* Add other information about Team Member 2 */}
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="team-member">
            <div className="profile-picture" style={{ background: 'linear-gradient(to bottom, rgba(153, 242, 200, 0.8), rgba(31, 64, 55, 0.8))', boxShadow: '0 35px 60px rgba(31, 64, 55, 0.4)' }}>
              <img id="first-img" src={Axler_Picture} alt="Jacky's Pictures" />
              <div id="second-img-container">
                <img id="second-img" src={Axler_Picture} alt="Jacky's Pictures" />
              </div>
            </div>

            <div className="member-details">
              <h1 id='people-name'>Axler Chin Shun Yuan </h1>
              <p id='member-position'>CFO </p>
              <p id='member-position'>162331</p>
              <p id='member-info'>Financial steward ensuring QuantumCharge's fiscal health and sustainability.</p>
              {/* Add other information about Team Member 3 */}
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="team-member">
            <div className="profile-picture" style={{ background: 'linear-gradient(to bottom, rgba(241, 95, 121, 0.8), rgba(178, 69, 146, 0.8))', boxShadow: '0 35px 60px rgba(178, 69, 146, 0.4)' }}>
              <img id="first-img" src={Andrew_Picture} alt="Jacky's Pictures" />
              <div id="second-img-container">
                <img id="second-img" src={Andrew_Picture} alt="Jacky's Pictures" />
              </div>
            </div>
            <div className="member-details">
              <h1 id='people-name'>Andrew Tee Wei Xiong</h1>
              <p id='member-position'>CMO </p>
              <p id='member-position'>164761</p>
              <p id='member-info'>Creative force leading QuantumCharge's brand presence and marketing initiatives.</p>
              {/* Add other information about Team Member 4 */}
            </div>
          </div>

          {/* <button className="close-button" onClick={onClose}>
            Close
          </button> */}
        </div>
      </div>
      {/* <button className="close-button" onClick={onClose}>
        
      </button> */}
      <button className="close-button" onClick={() => onClose(setIsPopOutOpen(false))}>
        {/* Add your close button content */}
      </button>
    </div>
  );
};

export default TeamMemberDetails;
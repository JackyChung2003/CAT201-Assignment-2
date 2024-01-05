import React from 'react';
import './Footer.css'; 
import LogoImage from '../assets/images/quantum-charge-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer" id='contact'>
      <div className="upper-section">
        <div className="logo-section">
          <div className="logo-container">
            <img className="logo-img" src={LogoImage} alt="QuantumCharge Icon" />
            <h1 className='logo-name'>QuantumCharge</h1>
          </div>

          <div className="company-info">
            <p>Power Up Your Day, Light Up Your Way: Charge into Tomorrow!</p>
          </div>
        </div>

        <div className="about-section">                                           
          <h3>Product</h3>
          <ul>
            <li>Features</li>
            <li>Security</li>
            <li>Promotion</li>
            <li>Membership</li>
            <li>Resources</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>Community</h3>
          <ul>
            <li>Sponsors</li>
            <li>Forum</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>Support</h3>
          <ul>
            <li>Docs</li>
            <li>Status</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Line Separator */}
      <hr className="separator" />

      <div className="lower-section">
        <div className='copy-right'>
          <p>Copyright © 2023 CAT_ASSIGNMENT_2_GROUP_22. All rights reserved.</p>
        </div>

        <div className="social-media-icons">
          <h3>Follow Us</h3>
          <span>
            <FontAwesomeIcon icon={faFacebook} />
          </span>
          <span>
            <FontAwesomeIcon icon={faTwitter} />
          </span>
          <span>
            <FontAwesomeIcon icon={faInstagram} />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

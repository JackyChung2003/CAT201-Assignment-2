import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import LogoImage from '../assets/images/quantum-charge-logo.png';

const Footer = () => {
  return (
    <footer className="footer" id='contact'>
      {/* Upper Section */}
      <div className="upper-section">
        {/* Logo and Name Section */}
        <div className="logo-section">
          <div className="logo-container">
            <img className="logo-img" src={LogoImage} alt="QuantumCharge Icon" />
            <h1 className='logo-name'>QuantumCharge</h1>
          </div>

          <div className="company-info">
            {/* <h3>Your Company</h3> */}
            <p>Power Up Your Day, Light Up Your Way: Charge into Tomorrow!</p>
          </div>
        </div>

        {/* About Section */}
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

      {/* Lower Section */}
      <div className="lower-section">
        <div className='copy-right'>
          <p>Copyright © 2023 CAT_ASSIGNMENT_2_GROUP_22. All rights reserved.</p>
        </div>
        {/* Social Media Icons */}
        <div className="social-media-icons">
          <h3>Follow Us</h3>
          {/* Add your social media icons here */}
          <span>Icon1</span>
          <span>Icon2</span>
          <span>Icon3</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

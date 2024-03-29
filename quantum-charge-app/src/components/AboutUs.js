import React, { useState } from 'react';
import TeamMemberDetails from './TeamMemberDetails';
import PopOutNotDevelop from './PopOutNotDevelop';
import './AboutUs.css'; 
import Team_Picture from '../assets/images/team_picture.jpeg';
import Feedback_Picture from '../assets/images/feedback_picture.jpeg';

const AboutUs = () => {
  const [isTeamPopOutVisible, setIsTeamPopOutVisible] = useState(false);
  const [isFeedbackPopOutVisible, setIsFeedbackPopOutVisible] = useState(false);

  const handleTeamPopOutToggle = () => {
    setIsTeamPopOutVisible(!isTeamPopOutVisible);
  };

  const handleFeedbackPopOutToggle = () => {
    setIsFeedbackPopOutVisible(!isFeedbackPopOutVisible);
  };

  const closePopOuts = () => {
    setIsTeamPopOutVisible(false);
    setIsFeedbackPopOutVisible(false);
  };
  
  return (
    <div className="about-us-section" id='about'>
      <h1>About Us</h1>
      
      <div className="est-title">
          <p>Est. 2002</p>
      </div>
      <div className='est-section'>
        <div className="about-text">
          <p>
            At QuantumCharge, we embark on a mission to redefine your charging experience.
            Established in 2002, we are more than a power bank brand — we are your reliable
            power companion designed for the modern lifestyle.
          </p>
        </div>
        <div className="mission-vision-section">
          <div className="left-section">
            <h2>Mission</h2>
            <p>
              Our mission is to provide cutting-edge charging solutions that seamlessly
              integrate into your daily life, ensuring you stay connected and empowered
              wherever you go.
            </p>
          </div>
          <div className="right-section">
            <h2>Vision</h2>
            <p>
              We envision a world where charging is not just a necessity but a delightful
              experience — where our products become an integral part of your lifestyle,
              enhancing convenience and connectivity.
            </p>
          </div>
        </div>
    
        <div className="bottom-section">
          <div className="left-box">
            <div className="box-image">
              <img src={Team_Picture} alt="Team Pictures" />
            </div>

            <h2>Our Dream Team</h2>
            <p>Crafted by a team of four exceptional individuals, exclusively tailored for the CAT Assignment 2.</p>
            <button className="about-us-cta-button" onClick={handleTeamPopOutToggle}>
              Learn More
            </button>

            {isTeamPopOutVisible  && <TeamMemberDetails onClose={closePopOuts} />}
          </div>
          <div className="right-box">
            <div className="box-image">
              <img src={Feedback_Picture} alt="Feedback Pictures" />
            </div>

            <h2>Your Voice Matters</h2>
            <p>We'd love to hear your thoughts on DREAM TEAM and QuantumCharge. Share your feedback to help us improve and better serve your needs. Thank you for being a valued part of our community.</p>
            <button className="about-us-cta-button" onClick={handleFeedbackPopOutToggle}>
              Learn More
            </button>
            {isFeedbackPopOutVisible  && <PopOutNotDevelop onClose={closePopOuts} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

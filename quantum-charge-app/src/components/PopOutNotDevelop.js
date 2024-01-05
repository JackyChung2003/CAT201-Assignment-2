// TeamMemberDetails.js

// import React from 'react';
import React, { useState, useEffect } from 'react';

import './PopOutNotDevelop.css'; // Import your CSS file
import sad_people_video from '../assets/videos/sad-people.mp4';


const PopOutNotDevelop = ({ onClose }) => {
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
    <div className="pop-out-overlay-2">
      <div className="pop-out-section-2">
        <div className='pop-out-left-section'>
          <div className="sad-video-background">
            {/* <video autoPlay loop muted>
              <source src={quantum_video_bg} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <video src={sad_people_video} autoPlay loop muted className='sad-background-video' />
          </div>
          
        </div>
        <div className='pop-out-right-section'>
            
            <h1 id='error-title'>Opps! We couldn't find the page you were looking for...</h1>
            <h2 id="error-subtitle">The page you searching for doesn't exist or temporarily unavailable for the following reason..</h2>
            <p id="error-reason">1. The page has been removed or relocated.</p>
            <p id="error-reason">2. The page is temporarily unavailable.</p>
            <p id="error-reason">3. The page is under development or maintenance.</p>
            <p id="error-reason">4. The page is not yet developed due to the assignment scope; only the designing of a company web home page is available at the moment.</p>
            <h2 id="error-solution"> If you continue to encounter issues, feel free to contact our support team for assistance.</h2>
        </div>
      </div>
      {/* <button className="close-button" onClick={onClose}>
        
      </button> */}
      <button className="pop-out-close-button" onClick={() => onClose(setIsPopOutOpen(false))}>
        {/* Add your close button content */}
      </button>
    </div>
  );
};

export default PopOutNotDevelop;
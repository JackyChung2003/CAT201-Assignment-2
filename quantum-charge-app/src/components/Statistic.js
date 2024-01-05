import React, { useEffect, useRef } from 'react';
import './Statistic.css';

const Statistic = () => {
  const statisticRef = useRef(null);

  useEffect(() => {
    const animateCounter = (valueDisplay, endValue, duration) => {
      let startValue = 0;

      let counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = startValue;

        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let valueDisplays = entry.target.querySelectorAll('.statistic-num');

          valueDisplays.forEach((valueDisplay) => {
            let endValue = parseInt(valueDisplay.getAttribute('data-val'));
            let duration = Math.floor(4000 / endValue);

            animateCounter(valueDisplay, endValue, duration);
          });

          observer.disconnect();
        }
      });
    }, options);

    if (statisticRef.current) {
      observer.observe(statisticRef.current);
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className='main-statistic' ref={statisticRef}>
      <div className='statistic-box'>
        <h1 className='statistic-title'>Milestone Excellence</h1>
        <div className='statistic-container'>
          <div className='statistic-circle-1'>
            <div className='statistic-circle-2'>
              <span className='statistic-num' data-val="21"></span>
              <p>Years</p>
            </div>
          </div>
          <div className='statistic-circle-1'>
            <div className='statistic-circle-2'>
              <span className='statistic-num' data-val="45"></span>
              <p>Countries</p>
            </div>
          </div>
          <div className='statistic-circle-1'>
            <div className='statistic-circle-2'>
              <div className='statistic-data'>
                <span className='statistic-num' data-val="100"></span>
                <h1>k+</h1>
              </div>
              <p>Sales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;

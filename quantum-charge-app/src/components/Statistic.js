import React, { useEffect } from 'react';
import './Statistic.css';

const Statistic = () => {
    useEffect(() => {
        // Function to animate the counter
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
    
        // Select all elements with the class "statistic-num"
        let valueDisplays = document.querySelectorAll(".statistic-num");
    
        // Loop through each element and animate the counter
        valueDisplays.forEach((valueDisplay) => {
          let endValue = parseInt(valueDisplay.getAttribute("data-val"));
          let duration = Math.floor(4000 / endValue);
    
          animateCounter(valueDisplay, endValue, duration);
        });
      }, []); 

    return (
        <div className='main-statistic'>
            <div className='statistic-box'>
                <h1 className='statistic-title'>Milestone Excellence</h1>
                <div className='statistic-container'>
                    <div className='statistic-circle-1'> 
                        <div className='statistic-circle-2'>
                            {/* <h1>21</h1> */}
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

import React from 'react';
import './Statistic.css';

const Statistic = () => {
    return (
        <div className='main-statistic'>
            <div className='statistic-box'>
                <h1 className='statistic-title'>Milestone Excellence</h1>
                <div className='statistic-container'>
                    <div className='statistic'>
                        <h1>21</h1>
                        <p>Years</p>
                    </div>
                    <div className='statistic'>
                        <h1>45</h1>
                        <p>Countries</p>
                    </div>
                    <div className='statistic'>
                        <h1>100k+</h1>
                        <p>Sales</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Statistic;

// src/App.js

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import VideoBackground from './components/VideoBackground';
import Statistic from './components/Statistic';

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <VideoBackground/>
      <Statistic/>
    </div>
  );
}


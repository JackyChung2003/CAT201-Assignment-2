// src/App.js

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import VideoBackground from './components/VideoBackground';

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <VideoBackground/>
    </div>
  );
}


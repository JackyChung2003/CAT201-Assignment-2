// src/App.js

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import VideoBackground from './components/VideoBackground';
import Statistic from './components/Statistic';
import Topsell from './components/Topsell';
import NewReleaseSpotlight from './components/NewReleaseSpotlight';
import Benefits from './components/Benefits';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <VideoBackground/>
      <Statistic/>
      <Topsell/>
      <NewReleaseSpotlight/>
      <Benefits/>
      <Banner/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}


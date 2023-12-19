// src/App.js

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="QuantumCharge Logo" />
        <h1>Welcome to QuantumCharge</h1>
        <p>
          Powering the Future with Innovative Solutions
        </p>
        <a
          className="App-link"
          href="https://www.quantumcharge.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Our Website
        </a>
      </header>

      <section className="App-section">
        <h2>About Us</h2>
        <p>
          QuantumCharge is a leading technology company specializing in cutting-edge solutions
          to revolutionize the energy industry. Our team of experts is dedicated to creating
          sustainable and efficient energy solutions for a brighter future.
        </p>
      </section>

      <section className="App-section">
        <h2>Our Services</h2>
        <ul>
          <li>Renewable Energy Solutions</li>
          <li>Smart Grid Technologies</li>
          <li>Energy Storage Solutions</li>
          <li>Consulting and Advisory Services</li>
        </ul>
      </section>

      <section className="App-section">
        <h2>Contact Us</h2>
        <p>
          QuantumCharge Headquarters <br />
          123 Tech Street, Innovation City <br />
          Quantumland <br />
          Email: info@quantumcharge.com <br />
          Phone: +1 (123) 456-7890
        </p>
      </section>
    </div>
  );
}

export default App;

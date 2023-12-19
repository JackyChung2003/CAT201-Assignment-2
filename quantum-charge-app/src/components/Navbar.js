// import logoImage from '../../assets/images/quantum-charge-logo.png';
// import logoImage from './../assets/images/logo.png';
import React from 'react';
import './Navbar.css';


function Navbar(){
    return(
        <>
            <nav>
                <a href="index.html">
                    <img 
                        className="logo-img"
                        src="assets/images/quantum-charge-logo.png" 
                        alt="QuantumCharge Logo" 
                    />
                </a>

                <div>
                    <ul id="navbar">
                        <li><a className="active" href="index.html">Home</a></li>
                        <li><a href="populars.html">Populars</a></li>
                        <li><a href="new-releases.html">New Releases</a></li>
                        <li><a href="why-us.html">Why Us</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>


                </div>
            </nav>
        </>
    )
}

export default Navbar;
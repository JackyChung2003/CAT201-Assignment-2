import React, { useState} from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import LogoImage from '../assets/images/quantum-charge-logo.png';

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
    
    return(
        <div className='header'>
            <nav>
                <Link to="home" class="logo-link" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>
                    <div class="logo-container">
                        <img className="logo-img" src={LogoImage} alt="QuantumCharge Icon" />
                        <h1 className='logo-name'>QuantumCharge</h1>
                    </div>
                </Link>

                <div>
                    <ul id="navbar" className={click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-item'>
                            <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="populars" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Populars</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="new-releases" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>New Releases</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="why-us" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Why Us</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="about" spy={true} smooth={true} offset={-95} duration={500} onClick={closeMenu}>About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="contact" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Contact Us</Link>
                        </li>
                    </ul>
                </div>

                <div id="mobile" onClick={handleClick}>
                     <i id="bar" className={click? "fas fa-times" : "fas fa-bars"}></i>
                </div>

            </nav>
        
        </div>
    )
}

export default Navbar;
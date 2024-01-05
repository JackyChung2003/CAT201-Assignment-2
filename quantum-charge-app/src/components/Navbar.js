// import logoImage from '../../assets/images/quantum-charge-logo.png';
// import logoImage from './../assets/images/logo.png';
import React, { useState} from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import LogoImage from '../assets/images/quantum-charge-logo.png';

// class Navbar extends Component{
    
// state = {clicked: false};
// handleClick = () => {
//     this.setState((prevState) => ({ clicked: !prevState.clicked }));
// };

const Navbar = () => {
    // state = {clicked: false};
    // handleClick = () => {
    //     this.setState({clicked: !this.state.clicked})
    // }

    // handleClick = () => {
    //     this.setState((prevState) => ({ clicked: !prevState.clicked }));
    // };
    

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    

    const closeMenu = () => setClick(false)
    
    // render(){
        return(
            <div className='header'>
                
                <nav>
                    <Link href="/" class="logo-link">
                        <div class="logo-container">
                            <img className="logo-img" src={LogoImage} alt="QuantumCharge Icon" />
                            <h1 className='logo-name'>QuantumCharge</h1>
                        </div>
                    </Link>

                    <div>
                        {/* <ul id="navbar" className={this.state.clicked ? "navbar active" : "#navbar"}> */}
                        <ul id="navbar" className={click ? "nav-menu active" : "nav-menu"}>
                            {/* <li><a className="active" href="/">Home</a></li> */}
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
                            
                            {/* <li><a href="#populars">Populars</a></li> */}
                            {/* <li><a href="#new-releases">New Releases</a></li>
                            <li><a href="#why-us">Why Us</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact Us</a></li> */}
                        </ul>


                    </div>

                    <div id="mobile" onClick={handleClick}>
                        {/* <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i> */}
                        {/* <div className={this.state.clicked ? "burger-menu active" : "#burger-menu"} ></div> */}
                        {/* <div className='burger-manu'></div> */}
                        {/* <div
                            className={`burger-menu ${
                                this.state.clicked ? 'burger-bar clicked' : 'burger-bar unclicked'
                            }`}
                        ></div> */}
                         <i id="bar" className={click? "fas fa-times" : "fas fa-bars"}></i>
                    </div>

                </nav>
            
            </div>
        )
    // }
}

// import './Navbar.css'

// const Navbar = () => {

//     const [click, setClick] = useState(false)
//     const handleClick = () => setClick(!click)

//     const closeMenu = () => setClick(false)

//     return (
//         <div className='header'>
//             <nav className='navbar'>
//                 <a href='/' className='logo'>
//                     <img src={logo} alt='logo' />
//                 </a>
//                 <div className='hamburger' onClick={handleClick}>
//                     {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
//                         : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

//                 </div>
//                 <ul className={click ? "nav-menu active" : "nav-menu"}>
//                     <li className='nav-item'>
//                         <a href='/' onClick={closeMenu}>Home</a>
//                     </li>
//                     <li className='nav-item'>
//                         <a href='#about' onClick={closeMenu}>About</a>
//                     </li>
//                     <li className='nav-item'>
//                         <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
//                     </li>
//                     <li className='nav-item'>
//                         <a href='#demo' onClick={closeMenu}>Demo</a>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     )
// }

export default Navbar;
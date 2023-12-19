// import logoImage from '../../assets/images/quantum-charge-logo.png';
// import logoImage from './../assets/images/logo.png';
import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component{
    state = {clicked: false};
    // handleClick = () => {
    //     this.setState({clicked: !this.state.clicked})
    // }

    handleClick = () => {
        this.setState((prevState) => ({ clicked: !prevState.clicked }));
    };
    
    render(){
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
                        <ul id="navbar" className={this.state.clicked ? "navbar active" : "#navbar"}>
                            <li><a className="active" href="index.html">Home</a></li>
                            <li><a href="populars.html">Populars</a></li>
                            <li><a href="new-releases.html">New Releases</a></li>
                            <li><a href="why-us.html">Why Us</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>


                    </div>

                    <div id="mobile" onClick={this.handleClick}>
                        {/* <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i> */}
                        {/* <div className={this.state.clicked ? "burger-menu active" : "#burger-menu"} ></div> */}
                        {/* <div className='burger-manu'></div> */}
                        {/* <div
                            className={`burger-menu ${
                                this.state.clicked ? 'burger-bar clicked' : 'burger-bar unclicked'
                            }`}
                        ></div> */}
                         <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>

                </nav>
            </>
        )
    }
}

export default Navbar;
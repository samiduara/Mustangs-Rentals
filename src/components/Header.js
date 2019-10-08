import React, { Component } from 'react';
import '../pages/styles/Header.css';
import NavBar from './NavBar/NavBar'

class Header extends Component {
    render(){
        return (
            <header className="main-header">
            <NavBar 
            user={this.props.user}
            handleLogout={this.props.handleLogout}
            />
                <nav className="meganav navbar navbar-default" role="navigation">
                    <div id="meganavBar" className="navbar-collapse collapse">
                        <div className="meganavContainerUp">
                            <div className="container">
                                <ul className="meganav-up nav navbar-nav navbar-right">
                                    <li className="top-buttons orange">
                                        <a href="">Choose A Country <i className="fas fa-caret-down"></i></a>
                                        <select><option value="ISO 3166-2:AX">Åland Islands</option>
	<option value="ISO 3166-2:UA">Kenya</option>
	<option value="ISO 3166-2:AE">United Arab Emirates</option>
	<option value="ISO 3166-2:GB">United Kingdom</option>
	<option value="ISO 3166-2:US">United States</option>
	<option value="ISO 3166-2:UM">United States Minor Outlying Islands</option></select>
                                    </li>
                                </ul>
                            </div> 
                        </div>
                        <div className="meganavContainerDown">
                                <span className="title"><h1>Mustang Rentals</h1></span>
                            <div className="container">
                                <ul className="meganav-down nav navbar-nav navbar-left">
                                    <li className="top-buttons orange">
                                        <a href=" ">
                                            <span>Help</span>
                                        </a>
                                    </li>
                                    <li className="loginMenu">
                                        <a href=" ">
                                            <span>Terms &amp; Conditions</span>
                                        </a>
                                    </li>
                                    <li className="loginMenu">
                                        <a href=" ">
                                            <span>About</span>
                                        </a>
                                    </li>
                                    <li className="loginMenu">
                                        <a href=" ">
                                            <span>Contact Us</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="container reg">
                                <ul className="meganav-down nav navbar-nav navbar-right register">
                                    <li className=" ">
                                        <a href=" ">
                                            {/* <span>Register</span> */}
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a href=" ">
                                            {/* <span>Sign In</span> */}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;
import React, { Component } from 'react';
import '../extras/styles/Header.css';


class Header extends Component {
    render(){
        return (
            <header className="main-header">
                <nav className="meganav navbar navbar-default" role="navigation">
                    <div id="meganavBar" className="navbar-collapse collapse">
                        <div className="meganavContainerUp">
                            <div className="container">
                                <ul className="meganav-up nav navbar-nav navbar-right">
                                    <li className="top-buttons grey">
                                        <a href="#">USA <i className="fas fa-caret-down"></i> </a>
                                    </li>
                                    <li className="top-buttons orange">
                                        <a href="#">Choose A Country <i className="fas fa-caret-down"></i></a>
                                    </li>
                                </ul>
                            </div> 
                        </div>
                        <div className="meganavContainerDown">
                            <a>
                              
                                <span className="title"><h1>Mustang Rentals</h1></span>
                            </a>
                            <div className="container">
                                <ul className="meganav-down nav navbar-nav navbar-left">
                                    <li className="top-buttons orange">
                                        <a href="#">
                                            <span>Help</span>
                                        </a>
                                    </li>
                                    <li className="loginMenu">
                                        <a href="#">
                                            <span>Terms &amp; Conditions</span>
                                        </a>
                                    </li>
                                    <li className="loginMenu">
                                        <a href="#">
                                            <span>About</span>
                                        </a>
                                    </li>
                                    <li className="loginMenu">
                                        <a href="#">
                                            <span>Contact Us</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="container reg">
                                <ul className="meganav-down nav navbar-nav navbar-right register">
                                    <li className="top-buttons reg-button">
                                        <a href="#">
                                            <span>Register</span>
                                        </a>
                                    </li>
                                    <li className="top-buttons log-button">
                                        <a href="#">
                                            <span>Sign In</span>
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
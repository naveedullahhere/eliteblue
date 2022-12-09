import React, { useState } from 'react';
import './Header.css';
import Logo from '../Assets/logo.png';
import Close from '../Assets/Close.png';
import { Button } from '../Button/Button';

export const Header = () => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <>
            <header className="main-header header-style-one">


                <div className="header-upper">
                    <div className="inner-container clearfix">

                        <div className="logo-box">
                            <div className="logo"><a href="index-2.html" title="Linoor - DIgital Agency HTML Template"><img
                                src={Logo} id="thm-logo" alt="Linoor - DIgital Agency HTML Template"
                                title="Linoor - DIgital Agency HTML Template" /></a></div>
                        </div>
                        <div className="nav-outer clearfix">

                            <div className="mobile-nav-toggler" onClick={toggleClass}><span className="icon flaticon-menu-2"></span><span className="txt">Menu</span></div>

                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                        <li><a
                                            href="#">Home</a>
                                        </li>
                                        <li><a href="#">About</a>
                                        </li>
                                        <li><a href="#">Portfolio</a>
                                        </li>
                                        <li className="dropdown"><a href="#">Services</a>
                                            <ul>
                                                <li><a href="#">All Services</a></li>
                                                <li><a href="#">Web Development</a></li>
                                                <li><a href="#">ReactJS</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>

                        <div className="other-links clearfix">
                            <div className="link-box">
                                <div className="call-us">
                                    <Button text="get a quote" link="" type="dark" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class={`side-menu__block ${isActive ? "active" : ""}`}>
                <div className="side-menu__block-overlay custom-cursor__overlay" onClick={() => setActive(false)}>
                    <div className="cursor"></div>
                    <div className="cursor-follower"></div>
                </div>
                <div className="side-menu__block-inner">
                    <div className="side-menu__top justify-content-end">
                        <a href="#" className="side-menu__toggler side-menu__close-btn" onClick={() => setActive(false)}><img src={Close} alt="" /></a>
                    </div>

                    <nav className="mobile-nav__container">
                        <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul class="navigation clearfix">
                                <li><a href="#">Home</a>
                                </li>
                                <li><a href="#">About</a>
                                </li>
                                <li><a href="#">Portfolio</a>
                                </li>
                                <li class="dropdown">
                                    <a href="about.html">Services<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div></a>
                                    <ul>
                                        <li><a href="#">All Services</a></li>
                                        <li><a href="#">Web Development</a></li>
                                        <li><a href="#">ReactJS</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="side-menu__sep"></div>
                    <div className="side-menu__content">
                        <p>We are a prominent software development business focused on enterprise solutions and outsourced product development, offering professional IT solutions to our global clientele.</p>
                        <p><a href="mailto:info@eliteblue.net">info@eliteblue.net</a> <br /> <a href="tel:+923118091779">+92 311 809 1779</a></p>
                        <div className="side-menu__social">
                            <a href="#"><i className="fab fa-facebook-square"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from '../Assets/logof.png';


export const Footer = () => {
  return (
    <footer className="main-footer normal-padding position-relative overflow-hidden">
      <div className="container">

        <section className="section">
          <div className="circle"></div>
          <div className="circle circle-1"></div>
          <div className="row clearfix">

            <div className="column col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="footer-widget logo-widget">
                <div className="widget-content">
                  <div className="logo">
                    <Link to="/"><img id="fLogo" src={Logo} alt="" /></Link>
                  </div>
                  <div className="info-widget">
                    <ul className="contact-info">
                      <li><span className="icon flaticon-call"></span><a href="tel:+923118091779">+92 311 809 1779</a></li>
                      <li><span className="icon flaticon-email-2"></span><a href="mailto:info@eliteblue.net">info@eliteblue.net</a></li>
                      <li className="address"><span className="icon flaticon-pin-1"></span> Shahrah-e-Faisal Rd. P.E.C.S.H <br /> Block 6, Karachi, Pakistan.</li>
                    </ul>
                  </div>
                  <ul className="social-links clearfix">
                    <li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
                    <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                    <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                    <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="footer-widget info-widget">
                <div className="widget-content">
                  <h6>Contact</h6>
                  <ul className="contact-info">
                    <li className="address"><span className="icon flaticon-pin-1"></span> 66 Broklyn Street,
                      New York <br />United States of America</li>
                    <li><span className="icon flaticon-call"></span><a href="tel:666888000">666 888
                      000</a></li>
                    <li><span className="icon flaticon-email-2"></span><a href="mailto:needhelp@linoor.com">needhelp@linoor.com</a></li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="footer-widget links-widget">
                <div className="widget-content">
                  <h6>Explore</h6>
                  <div className="row clearfix">
                    <div className="col-md-6 col-sm-12">
                      <ul>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="#">Servies</Link></li>
                        <li><Link to="#">Portfolio</Link></li>
                        <li><Link to="#">Anything Else</Link></li>
                        <li><Link to="#">Contact</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>





            <div className="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="footer-widget newsletter-widget">
                <div className="widget-content">
                  <h6>Newsletter</h6>
                  <div className="newsletter-form">
                    <form method="post" action="">
                      <div className="form-group clearfix">
                        <input type="email" name="email" value="" placeholder="Email Address" className='light' required="" />
                        <button type="submit" className="theme-btn"><span className="fa fa-envelope"></span></button>
                      </div>
                    </form>
                  </div>
                  <div className="text">Our latest news, articles, and resources, we will sent to your inbox weekly.</div>
                </div>
              </div>
            </div>

          </div>

        </section>
      </div>


      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner clearfix">
            <div className="copyright">© 2022 All Rights Reserved. Designed By Elite Blue Technologies</div>
          </div>
        </div>
      </div>

    </footer>
  )
}

import React from 'react';
import './Footer.css';
import Logo from '../Assets/logof.png';


export const Footer = () => {
  return (
    <footer class="main-footer normal-padding">
      <div class="container">

        <section class="section">
          <div class="row clearfix">


            <div class="column col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div class="footer-widget logo-widget info-widget">
                <div class="widget-content">
                  <div class="logo">
                    <a href="index-2.html"><img id="fLogo" src={Logo} alt="" /></a>
                  </div>
                  {/* <ul class="social-links clearfix">
                    <li><a href="#"><span class="fab fa-facebook-square"></span></a></li>
                    <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                    <li><a href="#"><span class="fab fa-instagram"></span></a></li>
                    <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
                  </ul> */}
                  <ul class="contact-info">
                    <li><span class="icon flaticon-call"></span><a href="tel:+923118091779">+92 311 809 1779</a></li>
                    <li><span class="icon flaticon-email-2"></span><a href="mailto:info@eliteblue.net">info@eliteblue.net</a></li>
                    <li class="address"><span class="icon flaticon-pin-1"></span> Shahrah-e-Faisal Rd. P.E.C.S.H <br /> Block 6, Karachi, Pakistan.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <div class="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div class="footer-widget info-widget">
                <div class="widget-content">
                  <h6>Contact</h6>
                  <ul class="contact-info">
                    <li class="address"><span class="icon flaticon-pin-1"></span> 66 Broklyn Street,
                      New York <br />United States of America</li>
                    <li><span class="icon flaticon-call"></span><a href="tel:666888000">666 888
                      000</a></li>
                    <li><span class="icon flaticon-email-2"></span><a href="mailto:needhelp@linoor.com">needhelp@linoor.com</a></li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div class="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div class="footer-widget links-widget">
                <div class="widget-content">
                  <h6>Explore</h6>
                  <div class="row clearfix">
                    <div class="col-md-6 col-sm-12">
                      <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Servies</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Anything Else</a></li>
                        <li><a href="#">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>





            <div class="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div class="footer-widget newsletter-widget">
                <div class="widget-content">
                  <h6>Newsletter</h6>
                  <div class="newsletter-form">
                    <form method="post" action="">
                      <div class="form-group clearfix">
                        <input type="email" name="email" value="" placeholder="Email Address" className='light' required="" />
                        <button type="submit" class="theme-btn"><span class="fa fa-envelope"></span></button>
                      </div>
                    </form>
                  </div>
                  <div class="text">Our latest news, articles, and resources, we will sent to your inbox weekly.</div>
                </div>
              </div>
            </div>

          </div>

        </section>
      </div>


      <div class="footer-bottom">
        <div class="auto-container">
          <div class="inner clearfix">
            <div class="copyright">© 2022 All Rights Reserved. Designed By Elite Blue Technologies</div>
          </div>
        </div>
      </div>

    </footer>
  )
}

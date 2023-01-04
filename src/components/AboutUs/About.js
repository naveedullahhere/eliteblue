import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { Button } from '../Button/Button';
import { HomeForm } from '../Forms/HomeForm';
import { Team } from '../Team/Team';
import AboutImg from '../Assets/About/home.png';
import WhoWeAre from '../Assets/About/who-we-are.png';
import AboutSec from '../Assets/About/sec-2-vector.png';

export const About = () => {
  return (
    <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}>
      {/* <motion.div initial={{ width: 0, opacity: 0, x: 100 }} animate={{ width: "100%", opacity: 1, x: 0 }} exit={{ width: window.innerWidth, transition: { duration: 0.2 }, opacity: 0, x: 100 }}> */}
      <section className="section about-section position-relative overflow-hidden w-100">
        <div className="container">
          <div className="circle"></div>
          <div className="circle circle-1"></div>
          <div className="row ">
            <div className="col-lg-6 col-12 my-auto">
              <div className="inner">
                <div className="head">
                  <h4 className='heading-sm text-white'>About</h4>
                  <h2 className='heading text-white'>One of the fastest growing agency<span className="dot">.</span></h2>
                  <p className="para text-white">we design and develop web and mobile applications for our clients worldwide</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <img src={AboutImg} alt="About" draggable="false" className='aboutimg w-100' />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="circle"></div>
          <div className="circle circle-1"></div>
          <div className="row ">
            <div className="col-lg-6 col-12">
              <img src={WhoWeAre} alt="About" draggable="false" className='aboutimg w-100' />
            </div>
            <div className="col-lg-6 col-12 my-auto">
              <div className="inner">
                <div className="head">
                  <h4 className='heading-sm'>About</h4>
                  <h2 className='heading'>Who we are<span className="dot">.</span></h2>
                  <p className="para">we design and develop web and mobile applications for our clients worldwidewe design and develop web and mobile applications for our clients worldwidewe design and develop web and mobile applications for our clients worldwidewe design and develop web and mobile applications for our clients worldwid ewe design and develop web and mobile applications for our clients worldwidewe design and develop web and mobile applications for our clients worldwidewe design and develop web and mobile applications for our clients worldwidewe design and develop web and mobile applications for our clients worldwide</p>
                  {/* <Button link="" text="Read more" type="light" /> */}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section class="services what-we-do section">
        <div class="container">
          <div class="row">

            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div class="inner">
                <div class="sec-title">
                  <h2 className='heading'>We Shape the Perfect <br />Solutions<span class="dot">.</span></h2>
                </div>
              </div>
            </div>

            <div class="service-sec col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div class="inner-sec" count="01">
                <div class="bottom-curve"></div>
                <div class="icon-box"><span class="flaticon-responsive"></span></div>
                <h6><a href="#">Website <br />Development</a></h6>
              </div>
            </div>

            <div class="service-sec col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div class="inner-sec" count="02">
                <div class="bottom-curve"></div>
                <div class="icon-box"><span class="flaticon-computer"></span></div>
                <h6><a href="#">graphic <br />designing</a></h6>
              </div>
            </div>

            <div class="service-sec col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div class="inner-sec" count="03">
                <div class="bottom-curve"></div>
                <div class="icon-box"><span class="flaticon-computer"></span></div>
                <h6><a href="#">digital <br />marketing</a></h6>
              </div>
            </div>

            <div class="service-sec col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div class="inner-sec" count="04">
                <div class="bottom-curve"></div>
                <div class="icon-box"><span class="flaticon-computer"></span></div>
                <h6><a href="#">Blockchain <br /> development</a></h6>
              </div>
            </div>

            <div class="service-sec col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div class="inner-sec" count="05">
                <div class="bottom-curve"></div>
                <div class="icon-box"><span class="flaticon-computer"></span></div>
                <h6><a href="#">App <br />Development</a></h6>
              </div>
            </div>

            <div class="service-sec col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div class="inner-sec" count="06">
                <div class="bottom-curve"></div>
                <div class="icon-box"><span class="flaticon-computer"></span></div>
                <h6><a href="#">Amazon <br /> service provider</a></h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section about-instruction py-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 my-auto">
              <div className="inner">
                <div className="head">
                  <h2 className='heading'>Why Us<span className="dot">.</span></h2>
                  <p className="para">We are an agile, steadfast, and committed team who strives, to learn new technologies, enter untapped avenues, beat tedious challenges, and succeed at heights never imagined through our positively nurtured attitude.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 position-relative imgSec">
              <img src={AboutSec} alt="About" draggable="false" className='aboutsecimg w-100' />
            </div>
          </div>
        </div>
      </section>
      <Team/>
    </motion.div>
   
  )
}

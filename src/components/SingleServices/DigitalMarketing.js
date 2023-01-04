import React from 'react'
import { motion } from 'framer-motion';
import serviceone from "../Assets/SMM.png";
import ourwork from "../Assets/services/cro-img.png";
import LetsTalk from '../LetsTalk/LetsTalk';
import { Tech } from '../Technologies/Tech';



export const DigitalMarketing = () => {
    return (
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}>

            <section className="section about-section services-section position-relative overflow-hidden w-100">
                <div className="container">
                    <div className="circle"></div>
                    <div className="circle circle-1"></div>
                    <div className="row ">
                        <div className="col-lg-6 col-12 my-auto">
                            <div className="inner">
                                <div className="head">
                                    {/* <h4 className='heading-sm text-white'>Services</h4> */}
                                    <h2 className='heading text-white' style={{ textTransform: 'unset' }}>Enhance Your Brand Visibility With Our Digital Marketing Services<span className="dot">.</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 banner-img-h">
                            <img src={serviceone} alt="About" draggable="false" className='aboutimg ' style={{ width: '70%' }} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section ">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-12 my-auto">
              <h2 className="heading heading-h mb-3">
              
Cost effective digital marketing services that can  <span style={{ color: '#16539e' }}>impact various target markets </span>
              </h2>
            </div>
            <div className="col-lg-6 col-12 my-auto">
              <div className="inner">
                <div className="head py-2">
                  <p className="para">We at Digital Auxilius provide scalable digital marketing solutions that can be metamorphosed according to different target demographics. Living up to our name, we are the digital auxiliary that helps our clients develop an online footprint so strong it remains undeterred in the face of adversity. DAX helps businesses acquire quality leads through information-dense marketing that directly influences their target market. With us you get a digital marketing consultant that turns visitors into loyal customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            <section className="section bg-radial">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-12 my-auto">
                            <h1 className='heading-sm '>OUR WORK PROCESS</h1>
                            <h1 className='heading heading-h mb-4'>Unified Marketing Services for <span>Clinical Research Organizations</span></h1>
                        </div>
                        <div className="col-lg-6 col-12 my-auto">
                            <img src={ourwork} alt="About" draggable="false" className=' w-100' />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-lg-4 my-4">
                            <div className="card p-5 border-0 h-100 card-h-2">
                                <h1 className='heading-m-h'>Challenge</h1>
                                <p className='para'>The biggest challenge in offering healthcare marketing services for clinical research organizations is that they adopt trends slowly. Still, there are several healthcare organizations that do not have websites. Hence, it is tough for a clinical research organization to stand out in the competitive market since they have no initial online presence.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 my-4">
                            <div className="card p-5 border-0 h-100 card-h-3">
                                <h1 className='heading-m-h'>Solution</h1>
                                <p className='para'>Our esteemed healthcare marketing agency provides result-guaranteed digital solutions to the healthcare industry. Our professional team prioritizes digital marketing strategies for clinical trials. Our marketing services help clinical research organizations boost brand awareness and referrals. We create social media marketing plans, run paid campaigns, do sponsored searches, and encourage native advertising.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 my-4">
                            <div className="card p-5 border-0 h-100 card-h-2">
                                <h1 className='heading-m-h'>Results</h1>
                                <p className='para'>Our marketing service for clinical research organizations capabilities have advanced well beyond what was originally believed to be achievable as a result of adopting internet marketing in all formats. This development has further created significant opportunities for the clinical research sector. To help clients stay ahead of the competition we persistently advance strategies through research.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section><br />
            <section className="section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="head">
                                <h4 className="heading-sm">TECHNOLOGIES WE USE
                                </h4>
                                <h2 className="heading">Highlights of technologies we use
                                    <span className="dot">.</span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <Tech />

                </div>
            </section>
            <section className="section pt-0">
                <LetsTalk />
            </section>
        </motion.div>

    )
}

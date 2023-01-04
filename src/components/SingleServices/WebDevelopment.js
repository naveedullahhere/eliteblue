import { motion } from 'framer-motion';
import React from 'react'
import serviceone from "../Assets/development.png";
import LetsTalk from '../LetsTalk/LetsTalk';
import { Tech } from '../Technologies/Tech';
import { Button } from '../Button/Button';
import sr1 from '../Assets/services/e-commerce-development.png'
import sr2 from '../Assets/services/web-portal.png'
import sr3 from '../Assets/services/web-&-app-development.png'
import AngleRight from '../Assets/angleRight.png';
import WhoWeAre from '../Assets/About/who-we-are.png';
import { ContactForm } from '../Contact/ContactForm';




export const WebDevelopment = () => {
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
                                    <h2 className='heading text-white'>
                                        Get Unique, End to End & Full Stack Website Development<span className="dot">.</span></h2>
                                    {/* <Button text="get a quote" link="" type="light" /> */}

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 banner-img-h">
                            <img src={serviceone} alt="About" draggable="false" className='aboutimg ' style={{ width: '70%' }} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section bg-radial">
                <div className="container">
                    {/* <div className="row ">
                        <div className="col-lg-6 col-12 my-auto">
                            <div className="inner">
                                <div className="head">
                                    <h4 className='heading-sm'>Our Service</h4>
                                    <h2 className='heading'>Web <br /> Development<span className="dot">.</span></h2>
                                </div>
                            </div>
                           <Button link="" text="Learn more" type="dark" /> 
                        </div>
                    </div> */}
                    <div className="row ">
                        <div className="col-lg-6 col-12 my-auto">
                            <img src={WhoWeAre} alt="About" draggable="false" className='aboutimg w-100' />
                        </div>
                        <div className="col-lg-6 col-12 my-auto">
                            <div className="inner">
                                <div className="head py-2">
                                    {/* <h4 className='heading-sm'>About</h4> */}
                                    <h2 className='heading'>CUSTOM WEB DEVELOPMENT<span className="dot">.</span></h2>
                                    <p className="para">Today in the over saturated niche of website development, we are one of the very few companies that are offering our clients the most customized robust, and creative solutions completely customized for their business needs. We excel at developing unique code for unique uses. Our team of developers has diverse experiences that complement our ability to provide out-of-the-box service.
                                        We have created thousands of tools and unique projects for our clients based on code made specifically for them. Our work will ensure that your business website gets all the functionalities it needs to achieve its intended purpose.
                                        We can help you develop any kind of web-based project. As we have experience in working with every industry and a dedicated R&D department to help us discover new technologies along with trends of every industry. We know how to help you make the best of your business website and develop the best code for its effective utilization.
                                        We can work with any technology or coding language; hence we are not limited and you have the luxury to choose the technology for the base of your web project</p>
                                    {/* <Button link="" text="Read more" type="light" /> */}
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <div className="card mb-3 col-md-12 card-css-h">
                        <div className="row g-0 " >
                            <div className="col-md-4 card-css-h-img " >
                                <img src={serviceone} className="img-fluid rounded-start w-100 p-5 " alt="..." />

                            </div>
                            <div className="col-md-8 my-auto px-4" >
                                <div className="card-body ps-md-5">

                                    <h5 className="card-title heading">CUSTOM WEB DEVELOPMENT</h5>
                                    <p className="card-text para">Today in the over saturated niche of website development, we are one of the very few companies that are offering our clients the most customized robust, and creative solutions completely customized for their business needs. We excel at developing unique code for unique uses. Our team of developers has diverse experiences that complement our ability to provide out-of-the-box service.
                                        We have created thousands of tools and unique projects for our clients based on code made specifically for them. Our work will ensure that your business website gets all the functionalities it needs to achieve its intended purpose.
                                        We can help you develop any kind of web-based project. As we have experience in working with every industry and a dedicated R&D department to help us discover new technologies along with trends of every industry. We know how to help you make the best of your business website and develop the best code for its effective utilization.
                                        We can work with any technology or coding language; hence we are not limited and you have the luxury to choose the technology for the base of your web project</p>
                                </div>
                            </div>
                        </div>
                    </div> */}


                </div>

            </section>
            <section className="section bg-radial-h">
                <div className="container">
                    <div className="row">
                        <div className='col-sm-12 col-md-6 col-lg-4 my-4 '>
                            <div className="services-card px-2 services-card-h px-lg-4">

                                <div className="row p-3 ">
                                    <div className="col-12">
                                        <div className="bottom-curve"></div>
                                    </div>
                                    <div className="col-12 my-3 mb-5">
                                        <img src={sr1} alt="Services" className='ServicesImg  ' draggable="false" />
                                    </div>
                                    <div className="col-12 my-auto">
                                        <div>
                                            <h2 className="heading gradiant mb-3" >ECOMMERCE DEVELOPMENT</h2>
                                            <p className="para pt-0">
                                                In our experience, we have developed many eCommerce websites for businesses that have gone up to be major brands online.
                                            </p>
                                            <div className="link-box"><a href='#'>
                                                <span className=""> <img src={AngleRight} alt="Angle" className='angle' /></span>
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 my-4 '>
                            <div className="services-card px-2 services-card-h px-lg-4">

                                <div className="row p-3 ">
                                    <div className="col-12">
                                        <div className="bottom-curve"></div>
                                    </div>
                                    <div className="col-12 my-3 mb-5">
                                        <img src={sr2} alt="Services" className='ServicesImg  ' draggable="false" />
                                    </div>
                                    <div className="col-12 my-auto">
                                        <div>
                                            <h2 className="heading gradiant mb-3" >WEB PORTAL DEVELOPMENT</h2>
                                            <p className="para pt-0">
                                                We can develop your very own web portal or marketplace. This way you can help other people earn while earning a lot more yourself.
                                            </p>
                                            <div className="link-box"><a href='#'>
                                                <span className=""> <img src={AngleRight} alt="Angle" className='angle' /></span>
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 my-4 '>
                            <div className="services-card px-2 services-card-h px-lg-4">

                                <div className="row p-3 ">
                                    <div className="col-12">
                                        <div className="bottom-curve"></div>
                                    </div>
                                    <div className="col-12 my-3 mb-5">
                                        <img src={sr3} alt="Services" className='ServicesImg  ' draggable="false" />
                                    </div>
                                    <div className="col-12 my-auto">
                                        <div>
                                            <h2 className="heading gradiant mb-3" >WEB APP <br /> DEVELOPMENT</h2>
                                            <p className="para pt-0">
                                                If you want to create a tool that can benefit your business or your customers, our custom web development will surely make it possible.
                                            </p>
                                            <div className="link-box"><a href='#'>
                                                <span className=""> <img src={AngleRight} alt="Angle" className='angle' /></span>
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>

            </section>

            <section className="section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="head">
                                <h4 className="heading-sm">TECHNOLOGIES WE USE
                                </h4>
                                <h2 className="heading">Tools & Technologies we use
                                    <span className="dot">.</span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <Tech />

                </div>
            </section>
            <section className="section contact main__form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 my-auto">
                            <div className="contact__content">
                                <div className="head">
                                    <h2 className='heading'>Ready to build a website that engage customers<span className="dot">?</span></h2>
                                    <ul class="contact-info my-2">
                                        <li><span class="icon flaticon-call"></span><a href="tel:+923118091779">+92 311 809 1779</a></li>
                                        <li><span class="icon flaticon-email-2"></span><a href="mailto:info@eliteblue.net">info@eliteblue.net</a></li>
                                        <li class="address"><span class="icon flaticon-pin-1"></span> Shahrah-e-Faisal Rd. P.E.C.S.H <br /> Block 6, Karachi, Pakistan.</li>
                                    </ul>
                                    {/* <Button text="Let's Talk" link="" type="light" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-box">
                                <div className="default-form">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="section pt-0">
                <LetsTalk />
            </section> */}
        </motion.div>
    )
}

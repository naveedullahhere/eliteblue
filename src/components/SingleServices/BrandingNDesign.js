import { motion } from 'framer-motion';
import React from 'react'
import { Button } from '../Button/Button';
import { CurrentTab } from './CurrentTab';
// import { serviceimg } from '../img/GRAPHIC-DESIGN.png';'
import serviceone from "../Assets/graphics.png";
import LetsTalk from '../LetsTalk/LetsTalk';
import { Tech } from '../Technologies/Tech';
import { Testimonial } from '../Testimonial/Testimonial';
import g1 from '../Assets/services/Brand-Identity.jpg';
import g2 from '../Assets/services/Graphic-Design-2.jpg';
import g3 from '../Assets/services/Business-Card-design.jpg';
import g4 from '../Assets/services/Infographics-Design.jpg';
import g5 from '../Assets/services/Packaging-img.jpg';
import { ContactForm } from '../Contact/ContactForm';



export const BrandingNDesign = () => {
    return (
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}>

            {/* <section className="section page-banner servicesz">
                <div className="image-layer image-layerh" style={{ "backgroundImage": "url('/Assets/bg1.png')" }}>
                    <div className="container p-5">
                        <div className="row ">
                            <div className="col-lg-6 col-">
                                <div className="inner">
                                    <div className="head">
                                        <h4 className='heading-sm text-white'>About</h4>
                                        <h2 className='heading text-white'>One of the fastest growing agency<span className="dot">.</span></h2>
                                        <p className="para text-white">we design and develop web and mobile applications for our clients worldwide</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <img src=".." alt="About" draggable="false" className='aboutimg w-100' />
                            </div>
                        </div>
                    </div>
                </div>
                =====================================
                <div className="shape-1"></div>
                <div className="shape-2"></div>
  ==========================================================
                <div className="banner-inner">
                    <div className="container">
                        ==========================
                        <h1 className='heading'>Website Development</h1>
                        <h1 className='heading'>Creative Branding Design</h1>
                        <div className="page-nav">
                            <ul className="bread-crumb">
                                <li><a href="index-main.html">Home</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li className="active">Website Development</li>
                            </ul>
                        </div>
                        =============================
                    </div>
                </div>
            </section> */}
            {/* <section className=" position-relative overflow-hidden w-100 image-layerh" style={{ "backgroundImage": "url('/Assets/bg1.png')" }}>
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-6 col-12 my-auto">
                            <div className="inner">
                                <div className=" p-5 text-center">
                                  <h1 className='heading text-white'>Creative Branding & Design</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 banner-img-h text-center">
                            <img src='Assets/bg1 icon.png'  alt="About" draggable="false" style={{width:"50%"}} />
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="section about-section services-section position-relative overflow-hidden w-100">
                <div className="container">
                    <div className="circle"></div>
                    <div className="circle circle-1"></div>
                    <div className="row ">
                        <div className="col-lg-6 col-12 my-auto">
                            <div className="inner">
                                <div className="head">
                                    <h4 className='heading-sm text-white'>Services</h4>
                                    <h2 className='heading text-white' style={{ textTransform: 'unset' }}>Get Personalized Brand Development from Scratch<span className="dot">.</span></h2>
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
                            <h2 className="heading heading-h mb-3">
                                Our UI UX Designer Creates Digital Visitor Journeys that Activates <br /> <span style={{ color: '#16539e' }}> Lead Conversions and Customer Relationships </span>
                            </h2>
                        </div>
                        <div className="col-lg-6 col-12 my-auto">
                            <div className="inner">
                                <div className="head py-2">
                                    {/* <h4 className='heading-sm'>About</h4> */}
                                    {/* <h2 className='heading'>CUSTOM WEB DEVELOPMENT<span className="dot">.</span></h2> */}
                                    <p className="para">Our UI UX design has physical, ergonomic, and cognitive sciences infused within every corner of your website’s canvas. Our UI UX designer believes in creating websites that give visitors control. We not only craft user interfaces that are easy to navigate, but we also ensure reduced user cognitive load. Through needs anticipation, reversible actions, purchase statuses, minimal task completion actions, and page sections visitors can enjoy quality shopping experiences.
                                    </p>
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
            <section className="section ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 my-auto">
                            {/* <h4 className='heading-sm'>About</h4> */}
                            <h2 className='heading heading-2 my-3'>Logo Design<span className="dot">.</span></h2>
                            <p className="para">The face of your company should be easy to recognize and impossible to forget. We can design such a logo that is unique to your business identity and will get imprinted the memories of your targeted audience as it appears in their range of view.</p>
                            <p className='para'>
                                <svg className='me-2' width="20" height="20" fill="none" stroke="#16539e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m4 12 6 6L20 6"></path>
                                </svg>
                                Clear, simple, and relevant <br />
                                <svg className='me-2' width="20" height="20" fill="none" stroke="#16539e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m4 12 6 6L20 6"></path>
                                </svg>
                                Impactful design that tells your story <br />
                                <svg className='me-2' width="20" height="20" fill="none" stroke="#16539e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m4 12 6 6L20 6"></path>
                                </svg>
                                Compatible on web and print materials</p>
                            <Button text="Let's Talk" link="/contact" type="dark" />
                        </div>
                        <div className="col-lg-6 col-12 my-auto ">
                            <img src={g1} alt="About" className='rounded-2 shadow-sm w-100' />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 my-auto">
                            <img src={g2} alt="About" className='rounded-2 shadow-sm w-100' />
                        </div>
                        <div className="col-lg-6 col-12 my-auto">
                            {/* <h4 className='heading-sm'>About</h4> */}
                            <h3 className='heading heading-2 my-3'>Flyer / Brochure Design<span className="dot">.</span></h3>
                            <p className="para">Your marketing strategy will definitely need to use print media for spreading your brand awareness. We can design effective banners, flyers, and brochures to share them with your targeted audience. Our specially designed print media will ensure that your marketing goals are effectively achieved.</p>
                            <p className='para'>
                                <svg className='me-2' width="20" height="20" fill="none" stroke="#16539e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m4 12 6 6L20 6"></path>
                                </svg>
                                Strategic Design according to Business <br />
                                <svg className='me-2' width="20" height="20" fill="none" stroke="#16539e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m4 12 6 6L20 6"></path>
                                </svg>
                                Crisp Reading Flow <br />
                                <svg className='me-2' width="20" height="20" fill="none" stroke="#16539e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m4 12 6 6L20 6"></path>
                                </svg>
                                Simple Yet Effective Content</p>
                            <Button text="Let's Talk" link="/contact" type="dark" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 my-auto">
                            {/* <h4 className='heading-sm'>About</h4> */}
                            <h2 className='heading heading-2 my-3'>Business Card Design<span className="dot">.</span></h2>
                            <p className="para">Your business cards are the very first impressions of your business. The card must show off professionalism and creativity. It must be easy to read, unique to be memorable, and yet effective in proving your worth. We will help you make your first impression the best one.</p>
                            <p className='para'>
                                <svg className='me-2' width="20" height="20" fill="none" stroke="#16539e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m4 12 6 6L20 6"></path>
                                </svg>
                                Professional And Creative Design <br />
                                <svg className='me-2' width="20" height="20" fill="none" stroke="#16539e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m4 12 6 6L20 6"></path>
                                </svg>
                                Easy To Read And Understand<br />
                                <svg className='me-2' width="20" height="20" fill="none" stroke="#16539e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m4 12 6 6L20 6"></path>
                                </svg>
                                Unique And Customized To Brand Identity</p>
                            <Button text="Let's Talk" link="/contact" type="dark" />
                        </div>
                        <div className="col-lg-6 col-12 my-auto ">
                            <img src={g3} alt="About" className='rounded-2 shadow-sm w-100' />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 my-auto">
                            <img src={g4} alt="About" className='rounded-2 shadow-sm w-100' />
                        </div>
                        <div className="col-lg-6 col-12 my-auto">
                            {/* <h4 className='heading-sm'>About</h4> */}
                            <h3 className='heading heading-2 my-3'>Animation And Illustrations<span className="dot">.</span></h3>
                            <p className="para">Video is a very effective form of marketing but animated videos have been proven via research that they have a higher rate of success. That is what we focus on because we want our customers to leave satisfied and get the right service for their goals.</p>
                            <p className='para'>
                                <svg className='me-2' width="20" height="20" fill="none" stroke="#16539e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m4 12 6 6L20 6"></path>
                                </svg>
                                Animated and Motion Graphics <br />
                                <svg className='me-2' width="20" height="20" fill="none" stroke="#16539e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m4 12 6 6L20 6"></path>
                                </svg>
                                Explainer Videos <br />
                                <svg className='me-2' width="20" height="20" fill="none" stroke="#16539e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m4 12 6 6L20 6"></path>
                                </svg>
                                3D And 2D Animation</p>
                            <Button text="Let's Talk" link="/contact" type="dark" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 my-auto">
                            {/* <h4 className='heading-sm'>About</h4> */}
                            <h2 className='heading heading-2 my-3'>Product Packaging<span className="dot">.</span></h2>
                            <p className="para">We have designed packaging for many products that are known worldwide right now. Our designs are specialized for effectiveness and are attention-grabbing. The designs we make are unique to brand identity as well as easy to memorize. Once your customers see your product, they will never forget it.</p>
                            <p className='para'>
                                <svg className='me-2' width="20" height="20" fill="none" stroke="#16539e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m4 12 6 6L20 6"></path>
                                </svg>
                                Designs For Multiple Sizes<br />
                                <svg className='me-2' width="20" height="20" fill="none" stroke="#16539e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m4 12 6 6L20 6"></path>
                                </svg>
                                From Pouches To Packets <br />
                                <svg className='me-2' width="20" height="20" fill="none" stroke="#16539e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m4 12 6 6L20 6"></path>
                                </svg>
                                Memorable And Unforgettable</p>
                            <Button text="Let's Talk" link="/contact" type="dark" />
                        </div>
                        <div className="col-lg-6 col-12 my-auto ">
                            <img src={g5} alt="About" className='rounded-2 shadow-sm w-100' />
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="section bg-service-sec-2">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-12 my-auto">
                            <div className="inner">
                                <div className="head">
                                    <h4 className='heading-sm'>2nd sec</h4>
                                    <h2 className='heading'>Creative Branding & Design Part 2<span className="dot">.</span></h2>
                                </div>
                            </div>
                             <Button link="" text="Learn more" type="dark" /> 
                        </div>
                    </div>
                    <div class="card-group row">
                        <div class="card col-md-4">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div class="card col-md-4">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div class="card col-md-4">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div className="card-group row">
                            <div class="card col-md-4">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                            <div class="card col-md-4">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}
            <br />
            <section className="section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="head">
                                <h2 className="heading">Stacks Used in Service
                                    <span className="dot">.</span>
                                </h2>
                                <h4 className="heading-sm">We use these tools for the best designs we can provide to you.
                                </h4>

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
                        <div className="col-lg-6" id='graphic_contact'>
                            <div className="form-box">
                                <div className="default-form">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </motion.div>
    )
}

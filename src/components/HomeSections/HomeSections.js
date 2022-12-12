import React from 'react';
import { Button } from '../Button/Button';
import { HomeForm } from '../Forms/HomeForm';
import Portfolio from '../Portfolio.json';
import Circle from '../Assets/shape-circle.png';
import pr from '../Assets/pr.jpg';
import Service from '../Services/Service';
import LetsTalk from '../LetsTalk/LetsTalk';
import { Tech } from '../Technologies/Tech';
import { motion } from 'framer-motion';
import './Home.css';




export const HomeSections = () => {


    return (
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }} id="home">
            <section className="section bg-radial">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-12 my-auto">
                            <div className="inner">
                                <div className="head">
                                    <h4 className='heading-sm'>About</h4>
                                    <h2 className='heading'>we do desgn, code & develipment<span className="dot">.</span></h2>
                                    <p className="para">Eliteblue is a group of driven engineers and strategists dedicated to creating mission-critical software solutions. Thanks to our business-focused strategy, we thrive on creating state-of-the-art bespoke applications that boost your business operations fro</p>
                                </div>
                            </div>
                            <Button link="about" text="Learn more" type="dark" />
                        </div>
                        <div className="col-lg-6 col-11 bg-white p-md-5 p-4 py-5 rounded-md-5 rounded-4 shadow-main mt-lg-0 mt-5 mx-auto">
                            <HomeForm action="" method="" formId="contactForm" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section position-relative overflow-hidden pb-5 services">
                <div className="container">
                    <div className="row">
                        <div className="col-12 shape-circle">
                            <img src={Circle} alt="Shape" />
                        </div>
                        <div className="col-12">
                            <div className="head">
                                <h4 className="heading-sm">What we can do for you</h4>
                                <h2 className="heading">Services We can help you with
                                    <span className="dot">.</span>
                                </h2>
                                <p className="para">A wide selection of solutions is available, which are ideal for your project’s success. We mix digital craftsmanship with customer experiences and brand development.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row my-4 w-100 mx-auto">
                        <Service title="BLOCKCHAIN DEVELOPMENT" link="#" description="Blockchain development services are revolutionising the way people deal all around the world. With the support of secure, dependable, and high-quality blockchain technology development services, you can avoid third-party intrusion." image="./Assets/services_1.png" />
                        <Service title="DIGITAL MARKETING" link="#" description="There are more leads. More sales are expected. Increased revenue. Eliteblue Technologies provides digital marketing services. We’ll assist your company in making the most significant impact, from traffic to income." image="./Assets/services_2.png" />
                        <Service title="ECOMMERCE SOFTWARE DEVELOPMENT" link="#" description="ECommerce software development addresses the requirement for a digital presence from worldwide manufacturing, distribution, and retail organizations." image="./Assets/services_3.png" />
                        <Service title="MOBILE APPLICATION DEVELOPMENT" link="#" description="Mobile Systems Custom Platform Back-End Executions Interface Apps" image="./Assets/services_4.png" />
                        <Service title="Web Development" link="#" description="Web development on the front-end Web development on the backend WordPress Customization Development of a CMS" image="./Assets/services_5.png" />
                        <Service title="Creative Branding & Design" link="#" description="Designing a brand identity and logo, as well as packaging, web and  mobile design, and layout and print design." image="./Assets/services_6.png" />
                    </div>
                </div>
            </section>
            <section class="services section">
                <div class="container">
                    <div class="sec-title">

                        <div class="row">
                            <div class="head col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                <h2 className='heading'>Lorem ipsum is are many <br />together<span class="dot">.</span></h2>
                            </div>
                            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                <p class="para">There are many variations of passages of Lorem Ipsum available, but
                                    the majority have suffered alteration in some form, by injected humour, or randomised.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="services">
                        <div class="row">
                            <div class="servicez col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div class="inner-box wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div class="bottom-curve"></div>
                                    <div class="icon-box"><span class="flaticon-vector"></span></div>
                                    <h5><a href="#">Sincerity</a></h5>
                                    <div class="text">Lorem ipsum is are many variations of pass of majority.</div>
                                    <div class="link-box"><a href="#"><span class="fa fa-angle-right"></span></a></div>
                                </div>
                            </div>


                            <div class="servicez col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div class="inner-box wow fadeInUp animated" >
                                    <div class="bottom-curve"></div>
                                    <div class="icon-box"><span class="flaticon-digital"></span></div>
                                    <h5><a href="#">Dedication</a></h5>
                                    <div class="text">Lorem ipsum is are many variations of pass of majority.</div>
                                    <div class="link-box"><a href="#"><span class="fa fa-angle-right"></span></a></div>
                                </div>
                            </div>


                            <div class="servicez col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div class="inner-box wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms" >
                                    <div class="bottom-curve"></div>
                                    <div class="icon-box"><span class="flaticon-instant-camera"></span></div>
                                    <h5><a href="#">Results</a></h5>
                                    <div class="text">Lorem ipsum is are many variations of pass of majority.</div>
                                    <div class="link-box"><a href="#"><span class="fa fa-angle-right"></span></a></div>
                                </div>
                            </div>


                            <div class="servicez col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div class="inner-box wow fadeInUp animated" data-wow-delay="900ms">
                                    <div class="bottom-curve"></div>
                                    <div class="icon-box"><span class="flaticon-monitor"></span></div>
                                    <h5><a href="#">Development</a></h5>
                                    <div class="text">Lorem ipsum is are many variations of pass of majority.</div>
                                    <div class="link-box"><a href="#"><span class="fa fa-angle-right"></span></a></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section class="section jarallax">
                <div class="container">
                    <div class="content-box">
                        <div class="sec-title">

                            <div class="row">
                                <div class="head col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-3">
                                    <h2 className='heading'>Change us for your custom software development<span class="dot">.</span></h2>
                                </div>
                                <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4">
                                    <p class="para">There are many variations of passages of Lorem Ipsum available, but
                                        the majority have suffered alteration in some form, by injected humour, or randomised.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="link-box">
                            <Button link={''} text={'Get a quote'} type={'dark'} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section pt-0 portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="head">
                                <h4 className="heading-sm">Portfolio</h4>
                                <h2 className="heading">RECENT WORK
                                    <span className="dot">.</span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="filter-list row">
                        {
                            Portfolio.slice(0, 6).map((item) => {
                                return <div className="gallery-item all web-design col-lg-4 col-md-6 col-sm-12" >
                                    <div className="inner-box">
                                        <figure className="image"><img src={item.image} alt="" /></figure>
                                        <a href="images/gallery/1.jpg" className="lightbox-image overlay-box" target='_blank'></a>
                                        <div className="cap-box">
                                            <div className="cap-inner">
                                                <div className="cat"><span>{item.category}</span></div>
                                                <div className="title">
                                                    <h5><a href={item.portfolio_url}>{item.title}</a></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="row filter-layout dynamic-filter-count-layout masonary-layout">
                        {/* {
                            Portfolio.map((item) => {
                                return <div className="col-lg-6 col-md-6 filter-item masonary-item branding ">
                                    <div className="portfolio-masonary__box">
                                        <img src={item.image} alt="" />
                                        <div className="portfolio-masonary__box-content">
                                            <p>{item.category}</p>
                                            <h3><a href={item.portfolio_url}>{item.title}</a></h3>
                                        </div>
                                    </div>
                                </div>
                            })
                        } */}
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

import React from 'react';
import { Button } from '../Button/Button';
import { HomeForm } from '../Forms/HomeForm';
import Portfolio from '../Portfolio.json';
import Circle from '../Assets/shape-circle.png';
import Service from '../Services/Service';
// import p1 from '../Assets/1.jpg';
// import p2 from '../Assets/2.jpg';
// import p3 from '../Assets/3.jpg';
// import p4 from '../Assets/4.jpg';
// import p5 from '../Assets/5.jpg';
// import p6 from '../Assets/6.jpg';
import './Home.css';
import LetsTalk from '../LetsTalk/LetsTalk';
import { Tech } from '../Technologies/Tech';

export const HomeSections = () => {
    return (
        <>
            <section class="section bg-radial">
                <div class="container">
                    <div class="row clearfix">
                        <div class="col-lg-6 col-12 my-auto">
                            <div class="inner">
                                <div class="head">
                                    <h4 className='heading-sm'>About</h4>
                                    <h2 className='heading'>we do design, code & develipment<span class="dot">.</span></h2>
                                    <p class="para">Eliteblue is a group of driven engineers and strategists dedicated to creating mission-critical software solutions. Thanks to our business-focused strategy, we thrive on creating state-of-the-art bespoke applications that boost your business operations fro</p>
                                </div>
                            </div>
                            <Button link="" text="Learn more" type="dark" />
                        </div>
                        <div class="col-lg-6 col-12 bg-white p-5 rounded-5 shadow-main">
                            <HomeForm action="" method="" formId="contactForm" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section position-relative overflow-hidden pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 shape-circle">
                            <img src={Circle} alt="Shape" />
                        </div>
                        <div className="col-12">
                            <div class="head">
                                <h4 class="heading-sm">What we can do for you</h4>
                                <h2 class="heading">Services We can help you with
                                    <span class="dot">.</span>
                                </h2>
                                <p class="para">A wide selection of solutions is available, which are ideal for your project’s success. We mix digital craftsmanship with customer experiences and brand development.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row my-4">
                        <Service title="BLOCKCHAIN DEVELOPMENT" description="Blockchain development services are revolutionising the way people deal all around the world. With the support of secure, dependable, and high-quality blockchain technology development services, you can avoid third-party intrusion." image="./Assets/services_1.png" />
                        <Service title="DIGITAL MARKETING" description="There are more leads. More sales are expected. Increased revenue. Eliteblue Technologies provides digital marketing services. We’ll assist your company in making the most significant impact, from traffic to income." image="./Assets/services_2.png" />
                        <Service title="ECOMMERCE SOFTWARE DEVELOPMENT" description="ECommerce software development addresses the requirement for a digital presence from worldwide manufacturing, distribution, and retail organizations." image="./Assets/services_3.png" />
                        <Service title="MOBILE APPLICATION DEVELOPMENT" description="Mobile Systems Custom Platform Back-End Executions Interface Apps" image="./Assets/services_4.png" />
                        <Service title="Web Development" description="Web development on the front-end Web development on the backend WordPress Customization Development of a CMS" image="./Assets/services_5.png" />
                        <Service title="Creative Branding & Design" description="Designing a brand identity and logo, as well as packaging, web and  mobile design, and layout and print design." image="./Assets/services_6.png" />
                    </div>
                </div>
            </section>
            <section className="section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div class="head">
                                <h4 class="heading-sm">Portfolio</h4>
                                <h2 class="heading">RECENT WORK
                                    <span class="dot">.</span>
                                </h2>
                                <p class="para">A wide selection of solutions is available, which are ideal for your project’s success. We mix digital craftsmanship with customer experiences and brand development.</p>
                            </div>
                        </div>
                    </div>



                    <div class="filter-list row">
                        {
                            Portfolio.map((item) => {
                                return <div class="gallery-item mix all web-design col-lg-4 col-md-6 col-sm-12" >
                                    <div class="inner-box">
                                        <figure class="image"><img src={item.image} alt="" /></figure>
                                        <a href="images/gallery/1.jpg" class="lightbox-image overlay-box" target='_blank'></a>
                                        <div class="cap-box">
                                            <div class="cap-inner">
                                                <div class="cat"><span>{item.category}</span></div>
                                                <div class="title">
                                                    <h5><a href={item.portfolio_url}>{item.title}</a></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div class="row filter-layout dynamic-filter-count-layout masonary-layout">
                        {/* {
                            Portfolio.map((item) => {
                                return <div class="col-lg-6 col-md-6 filter-item masonary-item branding ">
                                    <div class="portfolio-masonary__box">
                                        <img src={item.image} alt="" />
                                        <div class="portfolio-masonary__box-content">
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
                            <div class="head">
                                <h4 class="heading-sm">Portfolio</h4>
                                <h2 class="heading">RECENT WORK
                                    <span class="dot">.</span>
                                </h2>
                                <p class="para">A wide selection of solutions is available, which are ideal for your project’s success. We mix digital craftsmanship with customer experiences and brand development.</p>
                            </div>
                        </div>
                    </div>

                    <Tech />

                </div>
            </section>
            <section className="section pt-0">
                <LetsTalk />
            </section>
        </>
    )
}

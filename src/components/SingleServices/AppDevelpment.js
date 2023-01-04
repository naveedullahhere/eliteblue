import React from 'react'
import { motion } from 'framer-motion';
import serviceone from "../Assets/mobile-app-dev.png";
import mobileapp from "../Assets/services/mobile-application-development.jpg";
import LetsTalk from '../LetsTalk/LetsTalk';
import { Tech } from '../Technologies/Tech';
import c1 from '../Assets/services/servicios-app-1024x751.png';
import c2 from '../Assets/services/CkP-4uSWgAAa4Cm.png';


export const AppDevelpment = () => {
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
                                    <h2 className='heading text-white' style={{ textTransform: 'unset' }}>Outstanding Mobile App Development For Your Business<span className="dot">.</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 banner-img-h">
                            <img src={serviceone} alt="About" draggable="false" className='aboutimg ' style={{ width: '70%' }} />
                        </div>
                    </div>
                </div>
            </section>
            <section className=" bg-radial">
                <div className="container-fluide">

                    <div className="row ">
                        <div className="col-lg-6 col-12 my-auto">
                            <img src={mobileapp} alt="About" draggable="false" className=' w-100' />
                        </div>
                        <div className="col-lg-6 col-12 p-5 my-auto">
                            <div className="inner">
                                <div className="head py-2">
                                    <h2 className='heading heading-h'>Digital Auxilius – Helping global brands introduce superior digital products<span className="dot">.</span></h2>
                                    <p className='para'>
                                        We understand how crucial it is for businesses to keep at pace with the ever-changing consumer behavior. Modern technology is constantly evolving and is also playing its part to influence how people shop and satisfy their needs. Today, people expect services/goods to be as accessible as if at their fingertips – a phenomenon that gave birth to mobile app development.</p>
                                    <p className="para " >
                                        Using an agile development methodology, Digital Auxilius churns android app development and iOS app development for businesses of all scales. We aim to create solutions that not only meet the user’s needs but also cater to the business industry and its vertical needs. We offer a versatile engagement model that begins with a detailed assessment of your business and IT requirements to deliver a mobile app design that allows quick and cost-effective solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-5">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-12 my-auto">
                            <img src={c1} alt="About" draggable="false" className='aboutimg w-100' />
                        </div>
                        <div className="col-lg-6 col-12 my-auto">
                            <div className="inner">
                                <div className="head py-2">
                                    {/* <h4 className='heading-sm'>About</h4> */}
                                    {/* <h2 className='heading'>CUSTOM WEB DEVELOPMENT<span className="dot">.</span></h2> */}
                                    <p className="para">The past decade witnessed a surge in the world’s inclination towards mobile applications. With the sales of smartphones surpassing 3 billion mark, the rise in the need and demand for mobile app development was inevitable. While the consumer enjoyed a more reliable, personalized, and convenient approach, businesses reveled in increased ROI and brand promotion. Hence, today, businesses and firms are keen to incorporate such applications into their digital existence.</p>
                                    {/* <Button link="" text="Read more" type="light" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-5 bg-radial">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-12 my-auto">
                            <div className="inner">
                                <div className="head py-2">
                                    {/* <h4 className='heading-sm'>About</h4> */}
                                    {/* <h2 className='heading'>CUSTOM WEB DEVELOPMENT<span className="dot">.</span></h2> */}
                                    <p className="para">We live in a world where mobile usage has increased tremendously due to the smartphone era that we are living in, and more than that, mobile applications have taken over the world with more and more advancements, and now you have an app for literally every service, every business, and every other basic necessity.</p>
                                    {/* <Button link="" text="Read more" type="light" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 my-auto">
                            <img src={c2} alt="About" draggable="false" className='aboutimg w-100' />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section ">
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

import React from 'react'
import { motion } from 'framer-motion';
import serviceone from "../Assets/mobile-app-dev.png";
import LetsTalk from '../LetsTalk/LetsTalk';
import { Tech } from '../Technologies/Tech';


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
                                    <h2 className='heading text-white' style={{ textTransform: 'unset' }}>Mobile Application Development<span className="dot">.</span></h2>
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
                    <div className="row ">
                        <div className="col-lg-6 col-12 my-auto">
                            <div className="inner">
                                <div className="head">
                                    <h4 className='heading-sm'>Our Service</h4>
                                    <h2 className='heading'>Mobile Application Development<span className="dot">.</span></h2>
                                </div>
                            </div>
                            {/* <Button link="" text="Learn more" type="dark" /> */}
                        </div>
                    </div>
                    <div className="card mb-3 col-md-12 card-css-h">
                        <div className="row g-0 " >
                            <div className="col-md-4 card-css-h-img " >
                                <img src="/assets/services_3.png" className="img-fluid rounded-start " alt="..." />

                            </div>
                            <div className="col-md-8 my-auto" >
                                <div className="card-body ps-md-5">
                                    <h5 className="card-title heading-sm">Part One</h5>
                                    <h5 className="card-title heading">Part One</h5>
                                    <p className="card-text para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro quod illum fugit libero quos, ducimus ab explicabo mollitia eligendi dicta eius reiciendis nihil, itaque nobis! Ea neque at ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium porro ab veniam, architecto quidem labore ex doloribus magnam ut recusandae nobis ipsa esse ipsum deleniti veritatis debitis nesciunt cumque? Reiciendis.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 col-md-12 card-css-h">
                        <div className="row g-0 flex-md-row flex-column-reverse" >
                            <div className="col-md-8 my-auto" >
                                <div className="card-body pe-md-5">
                                    <h5 className="card-title heading-sm">Part Two</h5>
                                    <h5 className="card-title heading">Part Two</h5>
                                    <p className="card-text para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro quod illum fugit libero quos, ducimus ab explicabo mollitia eligendi dicta eius reiciendis nihil, itaque nobis! Ea neque at ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium porro ab veniam, architecto quidem labore ex doloribus magnam ut recusandae nobis ipsa esse ipsum deleniti veritatis debitis nesciunt cumque? Reiciendis.</p>

                                </div>
                            </div>
                            <div className="col-md-4 card-css-h-img" >
                                <img src="/assets/services_3.png" className="img-fluid rounded-start" alt="..." />

                            </div>

                        </div>
                    </div>
                    <div className="card mb-3 col-md-12 card-css-h">
                        <div className="row g-0 " >
                            <div className="col-md-4 card-css-h-img " >
                                <img src="/assets/services_3.png" className="img-fluid rounded-start " alt="..." />

                            </div>
                            <div className="col-md-8 my-auto" >
                                <div className="card-body ps-md-5">
                                    <h5 className="card-title heading-sm">Part Three</h5>
                                    <h5 className="card-title heading">Part Three</h5>
                                    <p className="card-text para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro quod illum fugit libero quos, ducimus ab explicabo mollitia eligendi dicta eius reiciendis nihil, itaque nobis! Ea neque at ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium porro ab veniam, architecto quidem labore ex doloribus magnam ut recusandae nobis ipsa esse ipsum deleniti veritatis debitis nesciunt cumque? Reiciendis.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 col-md-12 card-css-h">
                        <div className="row g-0 flex-md-row flex-column-reverse" >
                            <div className="col-md-8 my-auto" >
                                <div className="card-body pe-md-5">
                                    <h5 className="card-title heading-sm">Part Four</h5>
                                    <h5 className="card-title heading">Part Four</h5>
                                    <p className="card-text para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro quod illum fugit libero quos, ducimus ab explicabo mollitia eligendi dicta eius reiciendis nihil, itaque nobis! Ea neque at ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium porro ab veniam, architecto quidem labore ex doloribus magnam ut recusandae nobis ipsa esse ipsum deleniti veritatis debitis nesciunt cumque? Reiciendis.</p>

                                </div>
                            </div>
                            <div className="col-md-4 card-css-h-img" >
                                <img src="/assets/services_3.png" className="img-fluid rounded-start" alt="..." />

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

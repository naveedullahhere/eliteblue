import { motion } from 'framer-motion';
import React from 'react'
import { CurrentTab } from './CurrentTab';

export const BrandingNDesign = () => {
    return (
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}>

            <section class="section page-banner servicesz">
                <div class="image-layer" style={{ "backgroundImage": "url('/Assets/services-banner.jpg')" }}></div>
                <div class="shape-1"></div>
                <div class="shape-2"></div>
                <div class="banner-inner">
                    <div class="container">
                        <h1 className='heading'>Website Development</h1>
                        <div class="page-nav">
                            <ul class="bread-crumb">
                                <li><a href="index-main.html">Home</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li class="active">Website Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <div class="container py-5">
                <div class="row">


                    <div class="content-side col-lg-8 col-md-12 col-sm-12">
                        <div class="service-details">
                            <div class="main-image image">
                                <img src="/Assets/services.jpg" alt="" />
                            </div>
                            <div class="text-content">
                                <h3 className='heading'>Website Development</h3>
                                <p className="para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla provident tempora,
                                    dolor repudiandae quaerat, et natus inventore illo numquam rerum sequi eveniet, quos
                                    asperiores! Consectetur aperiam error recusandae fugit modi deleniti culpa voluptate cumque
                                    dignissimos non, voluptates corporis, alias veritatis nam possimus quis molestiae? Exercitationem,
                                    sunt nihil? Veritatis, saepe.alias veritatis nam possimus quis molestiae? Exercitationem,
                                    sunt nihil? Veritatis, saepe.
                                </p>
                                <div class="featured">
                                    <div class="row clearfix">
                                        <div class="image-col col-md-6 col-sm-12">
                                            <div class="image">
                                                <img src="/Assets/serviz.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div class="text-col col-md-6 col-sm-12 my-auto">
                                            <div class="inner">
                                                <h4>planning & strategy</h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry.</p>
                                                <ul>
                                                    <li>Research beyond the business plan</li>
                                                    <li>Marketing options and rates</li>
                                                    <li>The ability to turnaround consulting</li>
                                                    <li>Customer engagement matters</li>
                                                    <li>Customer engagement matters</li>
                                                    <li>Customer engagement matters</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla provident tempora,
                                    dolor repudiandae quaerat, et natus inventore illo numquam rerum sequi eveniet, quos
                                    asperiores! Consectetur aperiam error recusandae fugit modi deleniti culpa voluptate cumque
                                    dignissimos non, voluptates corporis, alias veritatis nam possimus quis molestiae? Exercitationem,
                                    sunt nihil? Veritatis, saepe.alias veritatis nam possimus quis molestiae? Exercitationem,
                                    sunt nihil? Veritatis, saepe.
                                </p>
                                <p className="para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla provident tempora,
                                    dolor repudiandae quaerat, et natus inventore illo numquam rerum sequi eveniet, quos
                                    asperiores! Consectetur aperiam error recusandae fugit modi deleniti culpa voluptate cumque
                                    dignissimos non, voluptates corporis, alias veritatis nam possimus quis molestiae? Exercitationem,
                                    sunt nihil? Veritatis, saepe.alias veritatis nam possimus quis molestiae? Exercitationem,
                                    sunt nihil? Veritatis, saepe.
                                </p>
                            </div>
                        </div>
                    </div>

                    <CurrentTab currentPage={'web'} />

                </div>
            </div>

        </motion.div>
    )
}

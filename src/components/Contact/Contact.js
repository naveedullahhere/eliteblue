import React from 'react';
import ContactImg from '../Assets/Contact/banner.png';
import './Contact.css';
import { ContactForm } from './ContactForm';


export const Contact = () => {
    return (
        <>
            <section className="section about-section position-relative overflow-hidden w-100 contact-instruction py-0 text-center">
                <div className="container">
                    <div className="circle"></div>
                    <div className="circle circle-1"></div>
                    <div className="row ">
                        <div className="col-lg-6 col-12 my-auto text-start">
                            <div className="inner">
                                <div className="head">
                                    <h2 className='heading text-white'>Contact Us<span className="dot">.</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 imgSec">
                            <img src={ContactImg} alt="About" draggable="false" className='contactimg' />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section contact main__form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact__content">
                                <div className="head">
                                    <h2 className='heading'>Fill out this form to get in touch<span className="dot">.</span></h2>
                                    <ul class="contact-info my-5">
                                        <li><span class="icon flaticon-call"></span><a href="tel:+923118091779">+92 311 809 1779</a></li>
                                        <li><span class="icon flaticon-email-2"></span><a href="mailto:info@eliteblue.net">info@eliteblue.net</a></li>
                                        <li class="address"><span class="icon flaticon-pin-1"></span> Shahrah-e-Faisal Rd. P.E.C.S.H <br /> Block 6, Karachi, Pakistan.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="form-box">
                                <div className="default-form">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

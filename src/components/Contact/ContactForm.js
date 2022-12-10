import React from 'react';
import { Button } from '../Button/Button';


export const ContactForm = ({ action, method, formId }) => {
    return (
        <form method={method} action={action} id={formId} >
            <div className="row">
                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="field-inner">
                        <input type="text" name="username" className='light' value="" placeholder=" Name" required />
                    </div>
                </div>
                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="field-inner">
                        <input type="email" name="email" className='light' value="" placeholder="Email " required />
                    </div>
                </div>
                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <div className="field-inner">
                        <input type="number" name="contact" className='light' value="" placeholder="Contact" required />

                    </div>
                </div>
                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <div className="field-inner">
                        <textarea name="message" className='light' placeholder="Write Message" required=""></textarea>
                    </div>
                </div>
                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <Button link={''} text={"Submit"} type={'dark'} />
                </div>
            </div>
        </form>
    )
}

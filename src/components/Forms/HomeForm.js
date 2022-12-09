import React from 'react';
import { Button } from '../Button/Button';
import './Form.css';

export const HomeForm = ({ action, method, formId }) => {
    return (
        <form method={method} action={action} id={formId} noValidate="novalidate">
            <div class="row clearfix">
                <div class="form-group col-12">
                    <div class="field-inner">
                        <input type="text" className='light' name="name" placeholder="Name" />
                    </div>
                </div>
                <div class="form-group col-12">
                    <div class="field-inner">
                        <input type="email" name="email" placeholder="Email" className='light' />
                    </div>
                </div>
                <div class="form-group col-12">
                    <div class="field-inner">
                        <input type="text" className='light' name="subject" placeholder="Subject" />
                    </div>
                </div>
                <div class="form-group col-12">
                    <div class="field-inner">
                        <textarea name="message" placeholder="Write Message" className='light'></textarea>
                    </div>
                </div>
                <div class="form-group col-12 mx-auto text-center mb-0">
                    <Button text="submit now" link="" type="light" />
                </div>
            </div>
        </form>
    )
}

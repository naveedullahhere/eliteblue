import React from 'react';
import { Button } from '../Button/Button';
import './LetsTalk.css';

export default function LetsTalk() {
    return (
        <section className="call-to-section">
            <div className="container">
                <div className="inner clearfix">
                    <div className="shape-1 wow slideInRight" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
                    <div className="shape-2 wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
                    <h2>Let's Get Your Project <br />Started!</h2>
                    <div className="link-box">
                        <Button text="Lets Talk" type="light" link="#" />
                    </div>
                </div>
            </div>
        </section>
    )
}

import React from 'react';
import { Button } from '../Button/Button';
import './LetsTalk.css';

export default function LetsTalk() {
    return (
        <section className="call-to-section">
            <div className="container">
                <div className="inner">
                    <div className="shape-1"></div>
                    <div className="shape-2"></div>
                    <h2>Let's Get Your Project <br />Started!</h2>
                    <div className="link-box">
                        <Button text="Lets Talk" type="light" link="/contact" />
                    </div>
                </div>
            </div>
        </section>
    )
}

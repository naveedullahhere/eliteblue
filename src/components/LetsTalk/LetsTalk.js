import React from 'react';
import { Button } from '../Button/Button';
import './LetsTalk.css';

export default function LetsTalk() {
    return (
        <section class="call-to-section">
            <div class="container">
                <div class="inner clearfix">
                    <div class="shape-1 wow slideInRight" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
                    <div class="shape-2 wow fadeInDown" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
                    <h2>Let's Get Your Project <br />Started!</h2>
                    <div class="link-box">
                        <Button text="Lets Talk" type="light" link="#" />
                    </div>
                </div>
            </div>
        </section>
    )
}

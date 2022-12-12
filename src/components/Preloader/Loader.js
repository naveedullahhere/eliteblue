import React from 'react';
import './Loading.css';

export const Loader = () => {
    return (
        <div class="preloader" id="preloader">
            <div class="progresss" id="prgrs"></div>
            <div class="counter" id="preloaderCounter">
                0
            </div>
        </div>
    )
}

import React from 'react';
import config from '../../config';
import Banner from '../Assets/banner.png';
import BannerLogo from '../Assets/BannerLogo.png';
import './Home.css';

export const Home = () => {
    return (
        <>
            <div>
                <div className='bluredHeader position-relative overflow-hidden'>
                    <div className={`blur position-${config.HEADER_TYPE}`} style={{ "backgroundImage": `url('${Banner}')` }}></div>
                    <div className="bannerLogo position-absolute top-50 start-50 translate-middle "><img src={BannerLogo} alt="Banner Logo" /></div>
                </div>
            </div>
        </>
    )
}

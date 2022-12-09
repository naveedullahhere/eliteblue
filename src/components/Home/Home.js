import React from 'react';
import config from '../../config';
import Banner from '../Assets/bg.jpg';
import BannerVideo from '../Assets/bg.mp4';
import BannerLogo from '../Assets/BannerLogo.png';
import './Home.css';

export const Home = () => {
    return (
        <>
            <div>
                <div className='bluredHeader position-relative overflow-hidden'>
                    <div className={`blur position-${config.HEADER_TYPE}`} ></div>
                    {/* <div className={`blur position-${config.HEADER_TYPE}`} style={{ "backgroundImage": `url('${Banner}')` }}></div> */}
                    <video width="100%" height="100%" loop muted autoPlay className='homeVideo'>
                        <source type="video/mp4" src={BannerVideo} />
                    </video>
                    <div className="bannerLogo position-absolute top-50 start-50 translate-middle "><img src={BannerLogo} alt="Banner Logo" /></div>
                </div>
            </div>
        </>
    )
}

import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { HomeSections } from '../HomeSections/HomeSections';
import { About } from '../AboutUs/About';
import { Contact } from '../Contact/Contact';
import { AnimatePresence } from 'framer-motion';
import { Portfolio } from '../Portfolio/Portfolio';
import { AppDevelpment } from '../SingleServices/AppDevelpment';
import { BrandingNDesign } from '../SingleServices/BrandingNDesign';
import { DigitalMarketing } from '../SingleServices/DigitalMarketing';
import { ECommerceDevelopment } from '../SingleServices/ECommerceDevelopment';
import { WebDevelopment } from '../SingleServices/WebDevelopment';


export const AnimatedRoutes = () => {
    const locaion = useLocation();

    return (
        <AnimatePresence>
            <Routes location={locaion} key={locaion.pathname}>
                <Route path="/" element={<HomeSections />} />
                <Route path="about" element={<About />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="android-development" element={<AppDevelpment />} />
                <Route path="branding-and-design" element={<BrandingNDesign />} />
                <Route path="digital-marketing" element={<DigitalMarketing />} />
                <Route path="ecommerce-development" element={<ECommerceDevelopment />} />
                <Route path="web-development" element={<WebDevelopment />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )

}

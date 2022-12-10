import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { HomeSections } from '../HomeSections/HomeSections';
import { About } from '../AboutUs/About';
import { Contact } from '../Contact/Contact';
import { AnimatePresence } from 'framer-motion';


export const AnimatedRoutes = () => {
    const locaion = useLocation();

    return (
        <AnimatePresence>
            <Routes location={locaion} key={locaion.pathname}>
                <Route path="/" element={<HomeSections />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PortfolioItem from '../Portfolio.json';
import './Portfolio.css';
import { PortfolioItems } from './PortfolioItems';
import { PortfolioFilter } from './PortfolioFilter';



export const Portfolio = () => {

    const [items, setItems] = useState(PortfolioItem);

    const filterItems = (category) => {
        console.log("Out");
        // if (category === "all") {
        //     setItems(PortfolioItem);
        // }
        // else {
        //     const updatedItems = PortfolioItem.filter((currElem) => {
        //         return currElem.filter === category;
        //     });
        //     setItems(updatedItems);

        // }
    }

    return (
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}>
            <section className="section pt-0 portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="head">
                                <h4 className="heading-sm">Portfolio</h4>
                                <h2 className="heading">RECENT WORK
                                    <span className="dot">.</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <section className="gallery-section">
                        <div className="auto-container">
                            <div className="mixitup-gallery">
                                <PortfolioFilter filterItems={filterItems} />
                                <PortfolioItems PortfolioItem={items} />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </motion.div>
    )
}

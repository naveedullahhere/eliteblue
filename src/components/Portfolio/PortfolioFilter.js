import React, { useState } from 'react'

export const PortfolioFilter = ({ filterItems }) => {

    const [isActive, setIsActive] = useState(false);
    const links = [{ 'link': "All", "category": "all" }, { 'link': "WEB APPLICATIONS", "category": "web" }, { 'link': "MOBILE APPLICATION", "category": "app" }, { 'link': "GRAPHIC DESIGN", "category": "graphics" }, { 'link': "BLOCKCHAIN NFT", "category": "nft" }];

    const [active, setActive] = useState(null);

    const handleFilter = ({ category, link }) => {
        // filterItems(category);
        setIsActive(isActive => !isActive);
        setActive(link);
        console.log(category);
    }

    return (
        <div className="filters">
            <ul className='filter-tabs filter-btns'>
                {links.map((link) => {
                    return <li class={`filter ${active == link.link && 'active'}`} data-filter={`${link.category === "all" ? `all` : `.${link.category}`}`} onClick={() => handleFilter(link)}>{link.link}</li>
                })}
            </ul>
        </div>

    )
}




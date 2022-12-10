import React, { useState } from 'react'

export const PortfolioFilter = ({ filterItems }) => {

    const [isActive, setIsActive] = useState(false);
    const links = [{ 'link': "All", "category": "all" }, { 'link': "WEB APPLICATIONS", "category": "web" }, { 'link': "MOBILE APPLICATION", "category": "app" }, { 'link': "GRAPHIC DESIGN", "category": "graphics" }, { 'link': "BLOCKCHAIN NFT", "category": "nft" }];

    const [active, setActive] = useState(null);

    const handleFilter = ({ category, link }) => {
        filterItems(category);
        setIsActive(isActive => !isActive);
        setActive(link);
        console.log(category);
    }

    return (
        <div class="filters">


            <ul className='filter-tabs filter-btns'>
                {links.map((link) => {
                    return <li class={`filter ${active == link.link && 'active'}`} onClick={() => handleFilter(link)}>{link.link}</li>
                })}
            </ul>

            <ul class="filter-tabs filter-btns clearfix">
                {/* <li class="filter active" data-role="button" data-filter="all">All<sup>[8]</sup></li> */}
                {/* <li class={`filter ${isActive && 'active'}`} onClick={() => handleFilter('all')}>All</li>
                <li class={`filter ${isActive && 'active'}`} onClick={() => handleFilter('web')}>WEB APPLICATIONS</li>
                <li class={`filter ${isActive && 'active'}`} onClick={() => handleFilter('all')}>MOBILE APPLICATION
                </li>
                <li class={`filter ${isActive && 'active'}`} onClick={() => handleFilter('all')}>GRAPHIC DESIGN
                </li>
                <li class={`filter ${isActive && 'active'}`} onClick={() => handleFilter('all')}>BLOCKCHAIN NFT
                </li> */}
            </ul>
        </div>
    )
}




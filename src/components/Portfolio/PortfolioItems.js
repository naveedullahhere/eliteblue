import React from 'react'

export const PortfolioItems = ({ PortfolioItem }) => {
    return (
        <div className="filter-list row">
            {PortfolioItem.map((item) => {
                return <div className="gallery-item mix all web-design col-lg-4 col-md-6 col-sm-12" key={item.id}>
                    <div className="inner-box">
                        <figure className="image"><img src={item.image} alt="" /></figure>
                        <a href="images/gallery/1.jpg" className="lightbox-image overlay-box" target='_blank'></a>
                        <div className="cap-box">
                            <div className="cap-inner">
                                <div className="cat"><span>{item.category}</span></div>
                                <div className="title">
                                    <h5><a href={item.portfolio_url}>{item.title}</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

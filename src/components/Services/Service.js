import React from 'react';
import './Services.css';

export default function Service({ title, description, image }) {
    return (
        <div className='col-12 text-center my-4 services-card'>
            <div className="row">
                <div className="col-md-6 col-12 my-auto">
                    <img src={image} alt="Services" className='ServicesImg' draggable="false" />
                </div>
                <div className="col-md-6 col-12 my-auto">
                    <div className='px-4'>
                        <h1 className="heading gradiant">{title}</h1>
                        <p className="para">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

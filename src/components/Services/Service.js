import React from 'react';
import './Services.css';

export default function Service({ title, description, image, align }) {
    return (
        <div className='col-12 text-center my-5'>
            <div className="row">
                <div className="col-md-6 col-12 my-auto">
                    {align === "left" ?
                        <img src={image} alt="Services" className='ServicesImg' draggable="false" />
                        :
                        <div className='px-4'>
                            <h1 className="heading gradiant">{title}</h1>
                            <p className="para">
                                {description}
                            </p>
                        </div>
                    }
                </div>
                <div className="col-md-6 col-12 my-auto">
                    {align === "left" ?
                        <div className='px-4'>
                            <h1 className="heading gradiant">{title}</h1>
                            <p className="para">
                                {description}
                            </p>
                        </div>
                        :
                        <img src={image} alt="Services" className='ServicesImg' draggable="false" />
                    }
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import "./Team.css";
import man from "../Assets/About/man.jpg";

export const Team = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 px-0 team-card" >
                            <img src={man} alt="" className='w-100 t-img' />
                        </div>
                        <div className="col-md-3  text-center bg-light p-3">
                            <h1 className='heading-sm heading-sm-h'>Naveed Ullah</h1>
                            <p className='para  para-team'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                        </div>
                        <div className="col-md-3 px-0 team-card" >
                            <img src={man} alt="" className='w-100 t-img' />
                        </div>
                        <div className="col-md-3  text-center bg-light p-3">
                            <h1 className='heading-sm heading-sm-h'>Naveed Ullah</h1>
                            <p className='para  para-team'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                        </div>
                        <div className="col-md-3  text-center bg-light p-3">
                            <h1 className='heading-sm heading-sm-h'>Naveed Ullah</h1>
                            <p className='para  para-team'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                        </div>
                        <div className="col-md-3 px-0 team-card" >
                            <img src={man} alt="" className='w-100 t-img' />
                        </div>
                        <div className="col-md-3  text-center bg-light p-3">
                            <h1 className='heading-sm heading-sm-h'>Naveed Ullah</h1>
                            <p className='para  para-team'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                        </div>
                        <div className="col-md-3 px-0 team-card" >
                            <img src={man} alt="" className='w-100 t-img' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

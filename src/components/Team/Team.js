import React from 'react'
import "./Team.css";

export const Team = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-md-4 mb-3">
                            <h1 className="heading">
                                People are the key to success
                                <span>.</span>
                            </h1>
                        </div>
                        <div className="col-12">
                            <div className="row mx-auto w-100">
                                <div class="col-xl-3 col-lg-3 col-md-6 teams-card">

                                    <div class="tpteam mb-30">

                                        <div class="tpteam__shape-1">
                                            <img decoding="async" src="https://weblearnbd.net/wp/collax/wp-content/themes/collax/assets/img/team/team-shape-5.1.png" alt="" />
                                        </div>
                                        <div class="tpteam__shape-2">
                                            <img decoding="async" src="https://weblearnbd.net/wp/collax/wp-content/themes/collax/assets/img/team/team-shape-5.2.png" alt="" />
                                        </div>

                                        <div class="tpteam__thumb">
                                            <img decoding="async" class="w-100" src="https://weblearnbd.net/wp/collax/wp-content/uploads/2022/09/team-1.jpg" alt="" />
                                        </div>

                                        <div class="tpteam__content">

                                            <h3 class="tp-team-sm-title"><a href="https://weblearnbd.net/wp/collax/about-me/">Alextina Derex</a></h3>
                                            <h5 class="tp-team-sm-subtitle">
                                                <a href="https://weblearnbd.net/wp/collax/about-me/">UI/UX Designer</a>
                                            </h5>
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>

                                            <a href="#"><i class="fab fa-twitter"></i></a>

                                            <a href="#"><i class="fab fa-instagram"></i></a>

                                            <a href="#"><i class="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

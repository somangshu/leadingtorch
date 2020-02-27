import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

export default class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <section className="p-0 team">
                <Carousel emulateTouch showThumbs={false} centerMode centerSlidePercentage={50} selectedItem={1} autoPlay interval={4000} infiniteLoop useKeyboardArrows showStatus={false}>
                    <div>
                        <img className="pr-1" src="/images/comp/about1.jpg" />
                    </div>
                    <div>
                        <img className="pr-1" src="/images/comp/about2.jpg" />
                    </div>
                    <div>
                        <img className="pr-1" src="/images/comp/carrier1.jpg" />
                    </div>
                    <div>
                        <img className="pr-1" src="/images/comp/about3.jpg" />
                    </div>
                    <div>
                        <img className="pr-1" src="/images/comp/carrier2.jpg" />
                    </div>
                </Carousel>
                <img src="/images/team_shape.png" className="position-absolute" style={{ zIndex: '-999' }} />
                <div className="container py-5">
                    <div className="row mb-4">
                        <div className="col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-12 py-5">
                            <h5 className="text-dark">our team</h5>
                            <h3 className="text-dark">Leading Torch has hired the best talents of the industry who are eager to always work for the company. Their sheer determination helped us to grow from nowhere to the best cloud solutions provider. Take a look at our experts who are willing to work with you. </h3>
                        </div>
                    </div>
                    <div className="row mb-3 position-relative">
                        <div className="col-lg-2 col-md-2 col-12">
                            <h1 className="mt-lg-5 mt-md-5 mb-5">The warriors</h1>
                        </div>
                        <div className="col-lg-10 col-md-10 col-12 row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
                            <div className="col d-flex">
                                <div className="card card-lg card-body align-items-center">
                                    <span className="badge badge-primary badge-top">Founder</span>
                                    <img src="/images/female-4.jpg" alt="Helena Price" width="100px" className="rounded-circle mb-3" />
                                    <h5 className="mb-0">Srinivasa Busireddy</h5>
                                    <span className="h6 text-muted text-center">CEO</span>
                                </div>
                            </div>
                            <div className="col d-flex">
                                <div className="card card-lg card-body align-items-center">
                                    <img src="/images/female-4.jpg" alt="Helena Price" width="100px" className="rounded-circle mb-3" />
                                    <h5 className="mb-0">Jayabharatha</h5>
                                    <span className="h6 text-muted text-center">VP Cloud/Application Solutions</span>
                                </div>
                            </div>
                            <div className="col d-flex">
                                <div className="card card-lg card-body align-items-center">
                                    <img src="/images/female-4.jpg" alt="Helena Price" width="100px" className="rounded-circle mb-3" />
                                    <h5 className="mb-0">Sashidhar Seelaboyina</h5>
                                    <span className="h6 text-muted text-center">VP Data Solutions</span>
                                </div>
                            </div>
                            <div className="col d-flex">
                                <div className="card card-lg card-body align-items-center">
                                    <img src="/images/female-4.jpg" alt="Helena Price" width="100px" className="rounded-circle mb-3" />
                                    <h5 className="mb-0">Sai Belaganti</h5>
                                    <span className="h6 text-muted text-center">Enterprise Data Architect</span>
                                </div>
                            </div>
                            <div className="col d-flex">
                                <div className="card card-lg card-body align-items-center">
                                    <img src="/images/team/radha.png" alt="Helena Price" width="100px" className="rounded-circle mb-3" />
                                    <h5 className="mb-0">Radha Bavanari</h5>
                                    <span className="h6 text-muted text-center">Offshore Delivery Head</span>
                                </div>
                            </div>
                            <div className="col d-flex">
                                <div className="card card-lg card-body align-items-center">
                                    <img src="/images/team/ravindra.png" alt="Helena Price" width="100px" className="rounded-circle mb-3" />
                                    <h5 className="mb-0 text-center">Ravindra Babu Bommineni</h5>
                                    <span className="h6 text-muted text-center">Delivery Manager</span>
                                </div>
                            </div>
                            <div className="col d-flex aos-init">
                                <div className="card card-lg card-body align-items-center">
                                    <img src="/images/team/girivardhan.png" alt="Helena Price" width="100px" className="rounded-circle mb-3" />
                                    <h5 className="mb-0">Giri Vardhan Kumar</h5>
                                    <span className="h6 text-muted text-center">Application/Technical Manager</span>
                                </div>
                            </div>
                            <div className="col d-flex">
                                <div className="card card-lg card-body align-items-center">
                                    <img src="/images/team/satyanarayan.png" alt="Helena Price" width="100px" className="rounded-circle mb-3" />
                                    <h5 className="mb-0">Satyanarayana MD</h5>
                                    <span className="h6 text-muted text-center">Offshore Operations Head</span>
                                </div>
                            </div>
                            <div className="col d-flex">
                                <div className="card card-lg card-body align-items-center">
                                    <img src="/images/team/razi.png" alt="Helena Price" width="100px" className="rounded-circle mb-3" />
                                    <h5 className="mb-0">Razi Ahmed</h5>
                                    <span className="h6 text-muted text-center">Offshore Business Development Lead</span>
                                </div>
                            </div>
                            <div className="col d-flex">
                                <div className="card card-lg card-body align-items-center">
                                    <img src="/images/female-4.jpg" alt="Helena Price" width="100px" className="rounded-circle mb-3" />
                                    <h5 className="mb-0">Prabhakar Ranga</h5>
                                    <span className="h6 text-muted text-center">Operations Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <span>Interested in joining our team? <Link to="/careers">View career openings</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        )
    };
}

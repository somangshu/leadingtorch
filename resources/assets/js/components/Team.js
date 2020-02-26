import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <section className="p-0 team">
                <div className="container pb-5">
                    <div className="row mb-4">
                        <div className="col">
                            <h3 className="text-center">Our Team</h3>
                            <p className="lead">Leading Torch has hired the best talents of the industry who are eager to always work for the company. Their sheer determination helped us to grow from nowhere to the best cloud solutions provider. Take a look at our experts who are willing to work with you. </p>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                            <div className="card card-lg card-body align-items-center">
                                <span className="badge badge-primary badge-top">Founder</span>
                                <img src="/images/female-4.jpg" alt="Helena Price" width="100px" className="rounded-circle mb-3" />
                                <h5 className="mb-0">Srinivasa Busireddy</h5>
                                <span className="h6 text-muted text-center">CEO</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                            <div className="card card-lg card-body align-items-center">
                                <img src="/images/female-4.jpg" alt="Helena Price" width="100px" className="rounded-circle mb-3" />
                                <h5 className="mb-0">Jayabharatha</h5>
                                <span className="h6 text-muted text-center">VP Cloud/Application Solutions</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                            <div className="card card-lg card-body align-items-center">
                                <img src="/images/female-4.jpg" alt="Helena Price" width="100px" className="rounded-circle mb-3" />
                                <h5 className="mb-0">Sashidhar Seelaboyina</h5>
                                <span className="h6 text-muted text-center">VP Data Solutions</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                            <div className="card card-lg card-body align-items-center">
                                <img src="/images/female-4.jpg" alt="Helena Price" width="100px" className="rounded-circle mb-3" />
                                <h5 className="mb-0">Sai Belaganti</h5>
                                <span className="h6 text-muted text-center">Enterprise Data Architect</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                            <div className="card card-lg card-body align-items-center">
                                <img src="/images/team/radha.png" alt="Helena Price" width="100px" className="rounded-circle mb-3" />
                                <h5 className="mb-0">Radha Bavanari</h5>
                                <span className="h6 text-muted text-center">Offshore Delivery Head</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                            <div className="card card-lg card-body align-items-center">
                                <img src="/images/team/ravindra.png" alt="Helena Price" width="100px" className="rounded-circle mb-3" />
                                <h5 className="mb-0 text-center">Ravindra Babu Bommineni</h5>
                                <span className="h6 text-muted text-center">Delivery Manager</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 d-flex aos-init">
                            <div className="card card-lg card-body align-items-center">
                                <img src="/images/team/girivardhan.png" alt="Helena Price" width="100px" className="rounded-circle mb-3" />
                                <h5 className="mb-0">Giri Vardhan Kumar</h5>
                                <span className="h6 text-muted text-center">Application/Technical Manager</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                            <div className="card card-lg card-body align-items-center">
                                <img src="/images/team/satyanarayan.png" alt="Helena Price" width="100px" className="rounded-circle mb-3" />
                                <h5 className="mb-0">Satyanarayana MD</h5>
                                <span className="h6 text-muted text-center">Offshore Operations Head</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                            <div className="card card-lg card-body align-items-center">
                                <img src="/images/team/razi.png" alt="Helena Price" width="100px" className="rounded-circle mb-3" />
                                <h5 className="mb-0">Razi Ahmed</h5>
                                <span className="h6 text-muted text-center">Offshore Business Development Lead</span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                            <div className="card card-lg card-body align-items-center">
                                <img src="/images/female-4.jpg" alt="Helena Price" width="100px" className="rounded-circle mb-3" />
                                <h5 className="mb-0">Prabhakar Ranga</h5>
                                <span className="h6 text-muted text-center">Operations Manager</span>
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

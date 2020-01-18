import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.scrollDown = this.scrollDown.bind(this)
    }

    scrollDown() {
        window.scrollTo(0, 600)
    }

    render() {
        return (
            <div>
                <div className="position-relative d-flex justify-content-center align-items-center py-5 home-hero">
                    <div className="col-sm-12 col-md-6 col-lg-12 py-3 text-center px-3 text-center my-5">
                        <h1>ON THE CLOUD!</h1>
                        <h2 className="font-weight-light mt-3">Developing, Storing, and Securing</h2>
                    </div>
                    <div className="waveWrapper waveAnimation">
                        <div className="waveWrapperInner bgTop">
                            <div className="wave waveTop" style={{ backgroundImage: "url('/images/wave-top.png')" }}></div>
                        </div>
                        <div className="waveWrapperInner bgMiddle">
                            <div className="wave waveMiddle" style={{ backgroundImage: "url('/images/wave-mid.png')" }}></div>
                        </div>
                        <div className="waveWrapperInner bgBottom">
                            <div className="wave waveBottom" style={{ backgroundImage: "url('/images/wave-bot.png')" }}></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center align-self-end pt-5 view-more">
                        <button className="btn btn-outline-dark rounded" type="button" onClick={() => this.scrollDown()} >Know more</button>
                    </div>
                    <div className="position-relative divider">
                        <svg width="100%" height="96px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" datasrc="assets/images/divider-2.svg">
                            <path d="M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z"></path>
                        </svg>
                    </div>
                </div>
                {/* why this company section */}
                <section className="bg-primary why-company pb-3">
                    <div className="container">
                        <div className="row text-light mb-4">
                            <div className="col">
                                <h3 className="h1 mt-4">Why Leading Torch?</h3>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-sm-6 col-lg-4">
                                <div className="card card-sm card-body flex-row align-items-center">
                                    <img src="/images/whyus/data.png" alt="Data" />
                                    <div className="ml-3">
                                        <h6 className="mb-0">Innovative enterprise solutions from data storing to securing</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4">
                                <div className="card card-sm card-body flex-row align-items-center">
                                    <img src="/images/whyus/goal.png" alt="Growth" />
                                    <div className="ml-3">
                                        <h6 className="mb-0">Developing quality software solutions for your business growth.</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4">
                                <div className="card card-sm card-body flex-row align-items-center">
                                    <img src="/images/whyus/team.png" height="64" width="64" alt="Team" />
                                    <div className="ml-3">
                                        <h6 className="mb-0">Professional team to handle our services.</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4">
                                <div className="card card-sm card-body flex-row align-items-center">
                                    <img src="/images/whyus/time.png" height="64" width="64" alt="Time" />
                                    <div className="ml-3">
                                        <h6 className="mb-0">On-time delivery of projects.</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4">
                                <div className="card card-sm card-body flex-row align-items-center">
                                    <img src="/images/whyus/save.png" height="64" width="64" alt="Savings" />
                                    <div className="ml-3">
                                        <h6 className="mb-0">Cost-effective services with perfect efficiency</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end off why this company section */}
                {/* services section */}
                <div className="text-dark my-5 text-center">
                    <div className="col">
                        <h3 className="h1">Our services</h3>
                    </div>
                </div>
                <Services />
                {/* end of services section */}
                <div className="text-dark my-5 text-center">
                    <div className="col">
                        <h3 className="h1">Our blogs</h3>
                    </div>
                </div>
                <div className="row col-12 justify-content-lg-center mb-5">
                    <div className="col-md-6 why-company col-lg-4 d-flex">
                        <div className="card p-0">
                            <Link to="/blog/legal-ai">
                                <img src="/images/service/ml1.jpg" alt="Image" className="card-img-top" />
                            </Link>
                            <div className="card-body d-flex flex-column">
                                <div className="d-flex justify-content-between mb-3">
                                    <div className="text-small d-flex">
                                        <span className="text-primary text-small mr-2">Technology</span>
                                        <span className="text-muted text-small">15th January</span>
                                    </div>
                                </div>
                                <Link to="/blog/legal-ai">
                                    <h4 className="text-dark">legal AI: How machine learning is aiding concerning law practitioners</h4>
                                </Link>
                                <p className="flex-grow-1 lead text-small">
                                    Law firms entrusted with investigating a lot of information and translating rules can boundlessly improve their effectiveness...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 why-company col-lg-4 d-flex">
                        <div className="card p-0">
                            <Link to="/blog/automation-engineering">
                                <img src="/images/service/platform1.jpg" alt="Image" className="card-img-top" />
                            </Link>
                            <div className="card-body d-flex flex-column">
                                <div className="d-flex justify-content-between mb-3">
                                    <div className="text-small d-flex">
                                        <span className="text-primary text-small mr-2">Technology</span>
                                        <span className="text-muted text-small">17th January</span>
                                    </div>
                                </div>
                                <Link to="/blog/automation-engineering">
                                    <h4 className="text-dark">What is Automation Engineering?</h4>
                                </Link>
                                <p className="flex-grow-1 lead text-small">
                                    Automation is a set of numerous advances like devices, Electrical, mechanical, Softwares which results in work with no human intercession with incredible productivity and dependability...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


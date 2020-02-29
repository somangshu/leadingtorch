import React, { Component } from 'react';

export default class Careers extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-5 col-12">
                            <h2 className="font-weight-light a-title-40 text-center px-4 py-2">The future depends on what you do today <br /> - Mahatma Gandhi</h2>
                        </div>
                        <div className="col-lg-7 col-md-7 col-12">
                            <img src="/images/careers.jpg" className="w-100" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="position-relative divider">
                        <svg width="100%" height="96px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" datasrc="assets/images/divider-2.svg">
                            <path d="M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z"></path>
                        </svg>
                    </div>
                </div>
                {/* why this company section */}
                <section className="bg-white why-company pb-3">
                    <div className="container">
                        <div className="row mb-4">
                            <div className="col">
                                <h3 className="h2 mt-4">Why Leading Torch?</h3>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-sm-6 col-lg-4 d-flex">
                                <div className="card card-sm card-body flex-row align-items-center">
                                    <img src="/images/whyus/data.png" alt="Data" />
                                    <div className="ml-3">
                                        <h6 className="mb-0">Innovative enterprise solutions from data storing to securing</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4 d-flex">
                                <div className="card card-sm card-body flex-row align-items-center">
                                    <img src="/images/whyus/goal.png" alt="Growth" />
                                    <div className="ml-3">
                                        <h6 className="mb-0">Developing quality software solutions for your business growth.</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4 d-flex">
                                <div className="card card-sm card-body flex-row align-items-center">
                                    <img src="/images/whyus/team.png" height="64" width="64" alt="Team" />
                                    <div className="ml-3">
                                        <h6 className="mb-0">Professional team to handle our services.</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4 d-flex">
                                <div className="card card-sm card-body flex-row align-items-center">
                                    <img src="/images/whyus/time.png" height="64" width="64" alt="Time" />
                                    <div className="ml-3">
                                        <h6 className="mb-0">On-time delivery of projects.</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4 d-flex">
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
                <section className="m-content-wi m-content-wi--dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-5 m-content-wi__col-left">
                                <header className="m-content-wi__header scroll-animation scroll-animation__ease-in-from-bottom active">
                                    <div className="scroll-animation scroll-animation__ease-in-from-bottom active">
                                        <div className="a-text-20">
                                            Leading Torch has continuously been in trend since its entry into the industry. All this is because of our team members that stood for the company in every possible way. Working with Leading Torch will be fun as well as challenging. We always hire the best talents, nurture them, and make them the best professionals in the industry.
                                        </div>
                                    </div>
                                </header>
                            </div>
                            <div className="col-12 col-sm-7">
                                <div className="m-content-wi__image">
                                    <img className="b-lazy b-loaded" alt="airplane" src="/images/comp/carrier1.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <section className="m-image-wc">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-6 h-text-align-center">
                                    <div className="m-image-wc__image m-image-wc__image--top">
                                        <img className="b-lazy b-loaded" alt="Two people talking" src="/images/comp/carrier2.jpg" />
                                    </div>
                                </div>
                                <div className="m-image-wc__content col-12 col-sm-6 scroll-animation scroll-animation__ease-in-from-bottom active">
                                    <header>
                                        <h3 className="a-title-40 ">
                                            Join our team
                                        </h3>
                                    </header>
                                    <div className="scroll-animation scroll-animation__list-ease-in-from-bottom active">
                                        <div className="row m-image-wc__lists">
                                            <div className="col-6">
                                                <ul>
                                                    <li className="m-image-wc__list-item">
                                                        <h5>Full Stack Developer</h5>
                                                        <h5 className="font-weight-light text-muted">Development</h5>
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        <h5>DevOps Engineer</h5>
                                                        <h5 className="font-weight-light text-muted">Cloud</h5>
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        <h5>Data Engineer</h5>
                                                        <h5 className="font-weight-light text-muted">Analytics</h5>
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        <h5>MDM Developer</h5>
                                                        <h5 className="font-weight-light text-muted">Development</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-6">
                                                <ul>
                                                    <li className="m-image-wc__list-item">
                                                        <h5>Cloud Architect</h5>
                                                        <h5 className="font-weight-light text-muted">Cloud</h5>
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        <h5>Test Automation Engineer</h5>
                                                        <h5 className="font-weight-light text-muted">QA</h5>
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        <h5>AWS Engineer</h5>
                                                        <h5 className="font-weight-light text-muted">Cloud</h5>
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        <h5>Azure Engineer</h5>
                                                        <h5 className="font-weight-light text-muted">Cloud</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-12 mt-5">
                                                <p className="mb-2 h4">To apply, email us at:</p>
                                                <p className="mb-1 font-weight-light h5">recruitement@leadingtorch.com,</p>
                                                <p className="mb-0 font-weight-light h5">razi.ahmed@leadingtorch.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* <section className="m-content-wi m-content-wi--left">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-7">
                                <div className="m-content-wi__image" style={{ right: '2rem' }}>
                                    <img className="b-lazy b-loaded" alt="airplane" src="/images/comp/carrier2.jpg" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-5 m-content-wi__col-left">
                                <header className="m-content-wi__header scroll-animation scroll-animation__ease-in-from-bottom active">
                                    <div className="scroll-animation scroll-animation__ease-in-from-bottom active">
                                        <h3 className="a-title-40">Join our team</h3>
                                    </div>
                                    <div className="mt-4">
                                        <div className="row row-cols-2 pb-3 m-content-wi__intro">
                                            <div className="col mb-3">
                                                <h5>Full Stack Developer</h5>
                                                <h5 className="font-weight-light text-muted">Development</h5>
                                            </div>
                                            <div className="col mb-3">
                                                <h5>DevOps Engineer</h5>
                                                <h5 className="font-weight-light text-muted">Cloud</h5>
                                            </div>
                                            <div className="col mb-3">
                                                <h5>Data Engineer</h5>
                                                <h5 className="font-weight-light text-muted">Analytics</h5>
                                            </div>
                                            <div className="col mb-3">
                                                <h5>Cloud Architect</h5>
                                                <h5 className="font-weight-light text-muted">Cloud</h5>
                                            </div>
                                            <div className="col mb-3">
                                                <h5>Test Automation Engineer</h5>
                                                <h5 className="font-weight-light text-muted">QA</h5>
                                            </div>
                                            <div className="col mb-3">
                                                <h5>AWS Engineer</h5>
                                                <h5 className="font-weight-light text-muted">Cloud</h5>
                                            </div>
                                            <div className="col mb-3">
                                                <h5>Azure Engineer</h5>
                                                <h5 className="font-weight-light text-muted">Cloud</h5>
                                            </div>
                                            <div className="col mb-3">
                                                <h5>MDM Developer</h5>
                                                <h5 className="font-weight-light text-muted">Development</h5>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="mb-2 h4">To apply, email us at:</p>
                                            <p className="mb-1 font-weight-light h5">recruitement@leadingtorch.com,</p>
                                            <p className="mb-0 font-weight-light h5">razi.ahmed@leadingtorch.com</p>
                                        </div>
                                    </div>
                                </header>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
        );
    }
}

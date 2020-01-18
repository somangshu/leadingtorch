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
                <div className="position-relative contact-hero" style={{ backgroundImage: 'url("/images/hero7.jpg")', backgroundAttachment: "unset" }}>
                    <div className="col-12 py-4 px-3 text-center my-5">
                        <h2 className="font-weight-light text-left h1 px-5">Work with us</h2>
                    </div>
                    <div className="divider">
                        <svg width="100%" height="96px" style={{ fill: "#ffffff" }} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" datasrc="assets/images/divider-2.svg">
                            <path d="M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z"></path>
                        </svg>
                    </div>
                </div>
                <div className="container my-5">
                    <p className="text-left lead text-dark">Leading Torch has continuously been in trend since its entry into the industry. All this is because of our team members that stood for the company in every possible way. Working with Leading Torch will be fun as well as challenging. We always hire the best talents, nurture them, and make them the best professionals in the industry. </p>
                    <div className="row justify-content-around">
                        <img className="col-12 col-lg-5 col-md-5 mb-3 img-fluid img-thumbnail p-1 rounded" src="/images/comp/carrier1.jpg" />
                        <img className="col-12 col-lg-5 col-md-5 mb-3 img-fluid img-thumbnail p-1 rounded" src="/images/comp/carrier2.jpg" />
                    </div>
                    <h4 className="my-4">We have the following openings in our company:</h4>
                    <ul>
                        <li className="lead">Full Stack Developer</li>
                        <li className="lead">DevOps Engineer</li>
                        <li className="lead">Data Engineer</li>
                        <li className="lead">Cloud Architect</li>
                        <li className="lead">Test Automation Engineer</li>
                        <li className="lead">AWS Engineer</li>
                        <li className="lead">Azure Engineer</li>
                        <li className="lead">MDM Developer</li>
                    </ul>
                    <h4 className="my-4">To apply, Email us at:</h4>
                    <div className="row justify-content-start">
                        <div className="col-12 col-lg-5 col-md-5">
                            <div className="card card-sm card-body flex-row align-items-center mb-4">
                                <img src="/images/hr.png" height="64px" width="64px" alt="email support" />
                                <div className="ml-3">
                                    <h6 className="mb-2 text-center">recruitement@leadingtorch.com</h6>
                                    <h5 className="text-center">OR</h5>
                                    <h6 className="mb-0 text-center">razi.ahmed@leadingtorch.com</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

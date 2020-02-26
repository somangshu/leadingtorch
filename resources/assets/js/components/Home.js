import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';
import { Carousel } from 'react-responsive-carousel';

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
                <div className="position-relative d-flex justify-content-center align-items-center">
                    <Carousel emulateTouch showThumbs={false} autoPlay interval={4000} useKeyboardArrows showStatus={false}>
                        <div>
                            <img src="/images/homecor/cloud.jpg" class="home-hero" />
                            <p className="legend">
                                <span className="h1">Up and above the cloud</span><br /><br />
                                <span className="h5"> "They don't call it the Internet anymore, they call it cloud computing." - Larry Ellison</span>
                            </p>
                        </div>
                        <div>
                            <img src="/images/homecor/iot.jpg" class="home-hero" />
                            <p className="legend">
                                <span className="h1">Connecting the Streams</span><br /><br />
                                <span className="h5">Computers, Tabs, Phones, Sensors, Social Messaging, and Web - they all have different names but what is common is data</span>
                            </p>
                        </div>
                        <div>
                            <img src="/images/homecor/analytics.jpg" class="home-hero" />
                            <p className="legend">
                                <span className="h1">Descriptive, Prescriptive and Predictive</span><br /><br />
                                <span className="h5">"Numbers have an important story to tell. They rely on you to give them a voice." – Stephen Few</span>
                            </p>
                        </div>
                        <div>
                            <img src="/images/homecor/ai.jpg" class="home-hero" />
                            <p className="legend">
                                <span className="h1">Bridging the intelligence</span><br /><br />
                                <span className="h5">"AI will be a foundational tool for creating social good as well as business success." – Mark Hurd, CEO(Oracle)</span>
                            </p>
                        </div>
                    </Carousel>
                    {/* <div className="waveWrapper waveAnimation">
                        <div className="waveWrapperInner bgTop">
                            <div className="wave waveTop" style={{ backgroundImage: "url('/images/wave-top.png')" }}></div>
                        </div>
                        <div className="waveWrapperInner bgMiddle">
                            <div className="wave waveMiddle" style={{ backgroundImage: "url('/images/wave-mid.png')" }}></div>
                        </div>
                        <div className="waveWrapperInner bgBottom">
                            <div className="wave waveBottom" style={{ backgroundImage: "url('/images/wave-bot.png')" }}></div>
                        </div>
                    </div> */}
                </div>
                {/* <div>
                    <div className="d-flex justify-content-center align-self-end py-5 view-more">
                        <button className="btn btn-outline-dark rounded" type="button" onClick={() => this.scrollDown()} >Know more</button>
                    </div>
                </div> */}
                {/* services section */}
                <div className="text-dark my-5 text-center">
                    <div className="col py-3">
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


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
                <Carousel emulateTouch showThumbs={false} autoPlay interval={4000} infiniteLoop useKeyboardArrows showStatus={false}>
                    <div>
                        <img src="/images/homecor/cloud.jpg" class="home-hero" />
                        <p className="legend">
                            <span className="h1">Up and above the cloud</span><br /><br />
                            <span className="h3"> "They don't call it the Internet anymore, they call it cloud computing." - Larry Ellison</span>
                        </p>
                    </div>
                    <div>
                        <img src="/images/homecor/iot.jpg" class="home-hero" />
                        <p className="legend">
                            <span className="h1">Connecting the Streams</span><br /><br />
                            <span className="h3">Computers, Tabs, Phones, Sensors, Social Messaging, and Web - they all have different names but what is common is data</span>
                        </p>
                    </div>
                    <div>
                        <img src="/images/homecor/analytics.jpg" class="home-hero" />
                        <p className="legend">
                            <span className="h1">Descriptive, Prescriptive and Predictive</span><br /><br />
                            <span className="h3">"Numbers have an important story to tell. They rely on you to give them a voice." – Stephen Few</span>
                        </p>
                    </div>
                    <div>
                        <img src="/images/homecor/ai.jpg" class="home-hero" />
                        <p className="legend">
                            <span className="h1">Bridging the intelligence</span><br /><br />
                            <span className="h3">"AI will be a foundational tool for creating social good as well as business success." – Mark Hurd, CEO(Oracle)</span>
                        </p>
                    </div>
                </Carousel>
                <div>
                    <div className="d-flex justify-content-center align-self-end py-5 view-more">
                        <button className="btn btn-outline-dark rounded-circle" type="button" onClick={() => this.scrollDown()} ><i class="fas fa-caret-down"></i></button>
                    </div>
                </div>
                {/* services section */}
                <div className="text-dark my-5 text-center">
                    <div className="col py-3">
                        <h3 className="h1">Our services</h3>
                    </div>
                </div>
                <Services />
                {/* end of services section */}
            </div >
        );
    }
}


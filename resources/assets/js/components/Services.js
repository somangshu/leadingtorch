import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <section className="m-content-wi m-content-wi--right ">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-5 m-content-wi__col-left">
                                <header className="m-content-wi__header scroll-animation scroll-animation__ease-in-from-bottom active">
                                    <div className="scroll-animation scroll-animation__ease-in-from-bottom active">
                                        <h2 className="a-si h-text-bold">
                                            <Link to="/service/cloud-solutions" className="a-link--wline">Cloud</Link>
                                        </h2> </div>
                                    <div className="scroll-animation scroll-animation__ease-in-from-bottom active">
                                        <h3 className="a-title-40 ">
                                            Up and above the cloud
                                        </h3> </div>
                                    <div className="scroll-animation scroll-animation__ease-in-from-bottom active">
                                        <div className="text-muted pb-3 m-content-wi__intro">
                                            <p style={{ lineHeight: "1.5rem" }}>They don't call it the Internet anymore, they call it cloud computing</p>
                                            <ul className="list">
                                                <li>Cloud Architecture</li>
                                                <li>Serverless Architecture</li>
                                                <li>Establish DevOps</li>
                                                <li>Cloud Application Development</li>
                                                <li>Containerization</li>
                                                <li>Disaster Recovery</li>
                                                <li>Application & Data Security</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Link to="/service/cloud-solutions" className="btn btn-outline-primary">More Details</Link>
                                </header>
                            </div>
                            <div className="col-12 col-sm-7">
                                <div className="m-content-wi__image" style={{ left: '2rem' }}>
                                    <img className="b-lazy b-loaded" alt="airplane" src="/images/homecor/cloud.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="m-content-wi m-content-wi--left">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-7">
                                <div className="m-content-wi__image" style={{ right: '2rem' }}>
                                    <img className="b-lazy b-loaded" alt="airplane" src="/images/homecor/iot.jpg" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-5 m-content-wi__col-left">
                                <header className="m-content-wi__header scroll-animation scroll-animation__ease-in-from-bottom active">
                                    <div className="scroll-animation scroll-animation__ease-in-from-bottom active">
                                        <h2 className="a-si h-text-bold">
                                            <Link to="/service/data-platforms" className="text-primary">IoT</Link>
                                        </h2>
                                    </div>
                                    <div className="scroll-animation scroll-animation__ease-in-from-bottom active">
                                        <h3 className="a-title-40">Connecting the Streams</h3>
                                    </div>
                                    <div className="scroll-animation scroll-animation__ease-in-from-bottom active">
                                        <div className="text-muted pb-3 m-content-wi__intro">
                                            <p style={{ lineHeight: "1.5rem" }}>Computers, Tabs, Phones, Sensors, Social Messaging, and Web - they all have different names but what is common is data</p>
                                            <ul className="list">
                                                <li>Establish IoT Hub</li>
                                                <li>Connect Devices to the Hub</li>
                                                <li>Industrial IoT</li>
                                                <li>Connected Vehicles</li>
                                                <li>Time-Series Insights</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Link to="/service/data-platforms" className="btn btn-outline-primary">
                                        More Details
                                    </Link>
                                </header>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="m-content-wi m-content-wi--right">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-5 m-content-wi__col-left">
                                <header className="m-content-wi__header scroll-animation scroll-animation__ease-in-from-bottom active">
                                    <div className="scroll-animation scroll-animation__ease-in-from-bottom active">
                                        <h2 className="a-si h-text-bold">
                                            <Link to="/service/business-intelligence" className="a-link--wline">Analytics</Link>
                                        </h2> </div>
                                    <div className="scroll-animation scroll-animation__ease-in-from-bottom active">
                                        <h3 className="a-title-40 ">
                                            Descriptive, Prescriptive and Predictive
                                    </h3> </div>
                                    <div className="scroll-animation scroll-animation__ease-in-from-bottom active">
                                        <div className="text-muted pb-3 m-content-wi__intro">
                                            <p style={{ lineHeight: "1.5rem" }}>Numbers have an important story to tell. They rely on you to give them a voice." – Stephen Few</p>
                                            <ul className="list">
                                                <li>Enterprise Data Warehouses</li>
                                                <li>Domain specific Datamarts</li>
                                                <li>Data Governance</li>
                                                <li>Master Data Management</li>
                                                <li>Self-Service Analytics</li>
                                                <li>Big Data Analytics</li>
                                                <li>Cloud Warehouses</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Link to="/service/business-intelligence" className="btn btn-outline-primary">More Details</Link>
                                </header>
                            </div>
                            <div className="col-12 col-sm-7">
                                <div className="m-content-wi__image" style={{ left: '2rem' }}>
                                    <img className="b-lazy b-loaded" alt="airplane" src="/images/homecor/analytics.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="m-content-wi m-content-wi--left">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-7">
                                <div className="m-content-wi__image" style={{ right: '2rem' }}>
                                    <img className="b-lazy b-loaded" alt="airplane" src="/images/homecor/ai.jpg" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-5 m-content-wi__col-left">
                                <header className="m-content-wi__header scroll-animation scroll-animation__ease-in-from-bottom active">
                                    <div className="scroll-animation scroll-animation__ease-in-from-bottom active">
                                        <h2 className="a-si h-text-bold">
                                            <Link to="/service/machine-learning" title="industries " className="text-primary">AI</Link>
                                        </h2>
                                    </div>
                                    <div className="scroll-animation scroll-animation__ease-in-from-bottom active">
                                        <h3 className="a-title-40">Bridging the intelligence</h3>
                                    </div>
                                    <div className="scroll-animation scroll-animation__ease-in-from-bottom active">
                                        <div className="text-muted pb-3 m-content-wi__intro">
                                            <p style={{ lineHeight: "1.5rem" }}>AI will be a foundational tool for creating social good as well as business success." – Mark Hurd, CEO - Oracle</p>
                                            <ul className="list">
                                                <li>Continuously Learning Agents</li>
                                                <li>Robotic Process Automation</li>
                                                <li>Chatbots</li>
                                                <li>Image Recognition</li>
                                                <li>Sequence-2-Sequence Models</li>
                                                <li>Regression Models</li>
                                                <li>Classification Models</li>
                                                <li>UnSupervised Learning</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Link to="/service/machine-learning" className="btn btn-outline-primary">More Details</Link>
                                </header>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            // <section className="pt-0 mb-5">
            //     <div className="container pb-4">
            //         <div className="row mb-5">
            //             <div className="col-md-6 col-lg-6">
            //                 <Link className="fade-page" to="/service/cloud-solutions">
            //                     <img src="/images/service/cloud.png" alt="Cloud Storage" className="rounded w-100 shadow-3d hover-shadow-3d border mb-3 mb-md-0" />
            //                 </Link>
            //             </div>
            //             <div className="col">
            //                 <div className="row justify-content-center">
            //                     <div className="col-xl-9 col-lg-10">
            //                         <Link to="/service/cloud-solutions" className="text-dark">
            //                             <h3>Cloud solutions</h3>
            //                         </Link>
            //                         <p className="lead">The storage problem is real. Not only in our home but also to store files on our PC or the mobile. Gone are the days where hard drives were important to store files. Don’t feel insecure as we have got the best solution for you.</p>
            //                         <Link to="/service/cloud-solutions">Read more</Link>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="row mb-5">
            //             <div className="col-md-6 col-lg-6">
            //                 <Link className="fade-page" to="/service/machine-learning">
            //                     <img src="/images/service/ml.jpg" alt="Machine Learning" className="rounded w-100 shadow-3d hover-shadow-3d border mb-3 mb-md-0" />
            //                 </Link>
            //             </div>
            //             <div className="col">
            //                 <div className="row justify-content-center">
            //                     <div className="col-xl-9 col-lg-10">
            //                         <Link to="/service/machine-learning" className="text-dark">
            //                             <h3>Machine Learning</h3>
            //                         </Link>
            //                         <p className="lead">Have you heard of building systems without being explicitly programmed? No, then take a look at this service that provides systems the ability to learn and improve their experience which helps to better predict the future.</p>
            //                         <Link to="/service/machine-learning">Read more</Link>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="row mb-5">
            //             <div className="col-md-6 col-lg-6">
            //                 <Link className="fade-page" to="/service/business-intelligence">
            //                     <img src="/images/service/bi.jpg" alt="Business Intelligence" className="rounded w-100 shadow-3d hover-shadow-3d border mb-3 mb-md-0" />
            //                 </Link>
            //             </div>
            //             <div className="col">
            //                 <div className="row justify-content-center">
            //                     <div className="col-xl-9 col-lg-10">
            //                         <Link to="/service/business-intelligence" className="text-dark">
            //                             <h3>Business Intelligence</h3>
            //                         </Link>
            //                         <p className="lead">Leading Torch has built many BI solutions for domains like Manufacturing, Marketing, Accounting & Finance, Logistics, Product planning and many more.</p>
            //                         <Link to="/service/business-intelligence">Read more</Link>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="row mb-5">
            //             <div className="col-md-6 col-lg-6">
            //                 <Link className="fade-page" to="/service/data-platforms">
            //                     <img src="/images/service/platforms.jpg" alt="Cloud Storage" className="rounded w-100 shadow-3d hover-shadow-3d border mb-3 mb-md-0" />
            //                 </Link>
            //             </div>
            //             <div className="col">
            //                 <div className="row justify-content-center">
            //                     <div className="col-xl-9 col-lg-10">
            //                         <Link to="/service/data-platforms" className="text-dark">
            //                             <h3>Data Platforms</h3>
            //                         </Link>
            //                         <p className="lead">Leading Torch is also indulged in Big Data Platform where this platform generally consists of big data storage, data management, business intelligence, and other utilities.</p>
            //                         <Link to="/service/data-platforms">Read more</Link>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="row mb-5">
            //             <div className="col-md-6 col-lg-6">
            //                 <Link className="fade-page" to="/service/application-development">
            //                     <img src="/images/service/dev.jpg" alt="Application development" className="rounded w-100 shadow-3d hover-shadow-3d border mb-3 mb-md-0" />
            //                 </Link>
            //             </div>
            //             <div className="col">
            //                 <div className="row justify-content-center">
            //                     <div className="col-xl-9 col-lg-10">
            //                         <Link to="/service/application-development" className="text-dark">
            //                             <h3>Application development</h3>
            //                         </Link>
            //                         <p className="lead">Leading Torch also helps in cross-platform app development services. We have developed apps for iOS, Android, Windows for cross-platform development.</p>
            //                         <Link to="/service/application-development">Read more</Link>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="row mb-5">
            //             <div className="col-md-6 col-lg-6">
            //                 <Link className="fade-page" to="/service/data-governance">
            //                     <img src="/images/service/policy.jpg" alt="Data Governance" className="rounded w-100 shadow-3d hover-shadow-3d border mb-3 mb-md-0" />
            //                 </Link>
            //             </div>
            //             <div className="col">
            //                 <div className="row justify-content-center">
            //                     <div className="col-xl-9 col-lg-10">
            //                         <Link to="/service/data-governance" className="text-dark">
            //                             <h3>Data Governance</h3>
            //                         </Link>
            //                         <p className="lead">Have you ever thought of losing your company’s data? Not yet? It’s high time and you need to get on this immediately. To secure your data, Leading Torch provides data governance service to secure your data according to laws and policies.</p>
            //                         <Link to="/service/data-governance">Read more</Link>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </section>
        )
    };
}

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
                <section className="m-content-wi m-content-wi--dark">
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
                                        <div className="a-text-20">
                                            They don't call it the Internet anymore, they call it cloud computing
                                        </div>
                                        <div className="row m-image-wc__lists">
                                            <div className="col-6">
                                                <ul>
                                                    <li className="m-image-wc__list-item">
                                                        Cloud Architecture
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        Serverless Architecture
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        Cloud Application Development
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-6">
                                                <ul>
                                                    <li className="m-image-wc__list-item">
                                                        Containerization
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        Disaster Recovery
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        Application & Data Security
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/service/cloud-solutions" title="View all industries" className="a-bt">
                                        Learn more
                                    </Link>
                                </header>
                            </div>
                            <div className="col-12 col-sm-7">
                                <div className="m-content-wi__image">
                                    <img className="b-lazy b-loaded" alt="airplane" src="/images/homecor/cloud.jpg" />
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
                                        <img className="b-lazy b-loaded" alt="Two people talking" src="/images/homecor/iot.jpg" />
                                    </div>
                                </div>
                                <div className="m-image-wc__content col-12 col-sm-6 scroll-animation scroll-animation__ease-in-from-bottom active">
                                    <header>
                                        <h2 className="a-si h-text-bold">
                                            <Link to="/service/data-platforms" className="a-link--wline">IoT</Link>
                                        </h2>
                                        <h3 className="a-title-40 ">
                                            Connecting the Streams
                                        </h3>
                                    </header>
                                    <div className="a-text-20">
                                        <p>Computers, Tabs, Phones, Sensors, Social Messaging, and Web - they all have different names but what is common is data</p>
                                    </div>
                                    <div className="scroll-animation scroll-animation__list-ease-in-from-bottom active">
                                        <div className="row m-image-wc__lists">
                                            <div className="col-6">
                                                <ul>
                                                    <li className="m-image-wc__list-item">
                                                        Establish IoT Hub
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        Connect Devices to the Hub
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        Industrial IoT
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-6">
                                                <ul>
                                                    <li className="m-image-wc__list-item">
                                                        Connected Vehicles
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        Time-Series Insights
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/service/data-platforms" title="Learn more" className="a-bt">
                                        Learn more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="m-content-wi m-content-wi--dark">
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
                                        <div className="a-text-20">
                                            Numbers have an important story to tell. They rely on you to give them a voice." – Stephen Few
                                        </div>
                                        <div className="row m-image-wc__lists">
                                            <div className="col-6">
                                                <ul>
                                                    <li className="m-image-wc__list-item">
                                                        Enterprise Data Warehouses
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        Domain specific Datamarts
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        Data Governance
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        Master Data Management
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-6">
                                                <ul>
                                                    <li className="m-image-wc__list-item">
                                                        Self-Service Analytics
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        Big Data Analytics
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        Cloud Warehouses
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/service/business-intelligence" title="View all industries" className="a-bt">
                                        Learn more
                                    </Link>
                                </header>
                            </div>
                            <div className="col-12 col-sm-7">
                                <div className="m-content-wi__image">
                                    <img className="b-lazy b-loaded" alt="airplane" src="/images/homecor/analytics.jpg" />
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
                                        <img className="b-lazy b-loaded" alt="Two people talking" src="/images/homecor/ai.jpg" />
                                    </div>
                                </div>
                                <div className="m-image-wc__content col-12 col-sm-6 scroll-animation scroll-animation__ease-in-from-bottom active">
                                    <header>
                                        <h2 className="a-si h-text-bold">
                                            <Link to="/service/machine-learning" className="a-link--wline">AI</Link>
                                        </h2>
                                        <h3 className="a-title-40 ">
                                            Bridging the intelligence
                                        </h3>
                                    </header>
                                    <div className="a-text-20">
                                        <p>AI will be a foundational tool for creating social good as well as business success." – Mark Hurd, CEO - Oracle</p>
                                    </div>
                                    <div className="scroll-animation scroll-animation__list-ease-in-from-bottom active">
                                        <div className="row m-image-wc__lists">
                                            <div className="col-6">
                                                <ul>
                                                    <li className="m-image-wc__list-item">
                                                        Continuously Learning Agents
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        Robotic Process Automation
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        Chatbots
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        Image Recognition
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-6">
                                                <ul>
                                                    <li className="m-image-wc__list-item">
                                                        Sequence-2-Sequence Models
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        Regression Models
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        Classification Models
                                                    </li>
                                                    <li className="m-image-wc__list-item">
                                                        UnSupervised Learning
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/service/machine-learning" title="Learn more" className="a-bt">
                                        Learn more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* //older section */}
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

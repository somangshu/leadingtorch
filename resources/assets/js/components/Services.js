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
            <section className="pt-0 mb-5">
                <div className="container pb-4">
                    <div className="row mb-5">
                        <div className="col-md-6 col-lg-6">
                            <Link className="fade-page" to="/service/cloud-solutions">
                                <img src="/images/service/cloud.png" alt="Cloud Storage" className="rounded w-100 shadow-3d hover-shadow-3d border mb-3 mb-md-0" />
                            </Link>
                        </div>
                        <div className="col">
                            <div className="row justify-content-center">
                                <div className="col-xl-9 col-lg-10">
                                    <Link to="/service/cloud-solutions" className="text-dark">
                                        <h3>Cloud solutions</h3>
                                    </Link>
                                    <p className="lead">The storage problem is real. Not only in our home but also to store files on our PC or the mobile. Gone are the days where hard drives were important to store files. Don’t feel insecure as we have got the best solution for you.</p>
                                    <Link to="/service/cloud-solutions">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-6 col-lg-6">
                            <Link className="fade-page" to="/service/machine-learning">
                                <img src="/images/service/ml.jpg" alt="Machine Learning" className="rounded w-100 shadow-3d hover-shadow-3d border mb-3 mb-md-0" />
                            </Link>
                        </div>
                        <div className="col">
                            <div className="row justify-content-center">
                                <div className="col-xl-9 col-lg-10">
                                    <Link to="/service/machine-learning" className="text-dark">
                                        <h3>Machine Learning</h3>
                                    </Link>
                                    <p className="lead">Have you heard of building systems without being explicitly programmed? No, then take a look at this service that provides systems the ability to learn and improve their experience which helps to better predict the future.</p>
                                    <Link to="/service/machine-learning">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-6 col-lg-6">
                            <Link className="fade-page" to="/service/business-intelligence">
                                <img src="/images/service/bi.jpg" alt="Business Intelligence" className="rounded w-100 shadow-3d hover-shadow-3d border mb-3 mb-md-0" />
                            </Link>
                        </div>
                        <div className="col">
                            <div className="row justify-content-center">
                                <div className="col-xl-9 col-lg-10">
                                    <Link to="/service/business-intelligence" className="text-dark">
                                        <h3>Business Intelligence</h3>
                                    </Link>
                                    <p className="lead">Leading Torch has built many BI solutions for domains like Manufacturing, Marketing, Accounting & Finance, Logistics, Product planning and many more.</p>
                                    <Link to="/service/business-intelligence">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-6 col-lg-6">
                            <Link className="fade-page" to="/service/data-platforms">
                                <img src="/images/service/platforms.jpg" alt="Cloud Storage" className="rounded w-100 shadow-3d hover-shadow-3d border mb-3 mb-md-0" />
                            </Link>
                        </div>
                        <div className="col">
                            <div className="row justify-content-center">
                                <div className="col-xl-9 col-lg-10">
                                    <Link to="/service/data-platforms" className="text-dark">
                                        <h3>Data Platforms</h3>
                                    </Link>
                                    <p className="lead">Leading Torch is also indulged in Big Data Platform where this platform generally consists of big data storage, data management, business intelligence, and other utilities.</p>
                                    <Link to="/service/data-platforms">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-6 col-lg-6">
                            <Link className="fade-page" to="/service/application-development">
                                <img src="/images/service/dev.jpg" alt="Application development" className="rounded w-100 shadow-3d hover-shadow-3d border mb-3 mb-md-0" />
                            </Link>
                        </div>
                        <div className="col">
                            <div className="row justify-content-center">
                                <div className="col-xl-9 col-lg-10">
                                    <Link to="/service/application-development" className="text-dark">
                                        <h3>Application development</h3>
                                    </Link>
                                    <p className="lead">Leading Torch also helps in cross-platform app development services. We have developed apps for iOS, Android, Windows for cross-platform development.</p>
                                    <Link to="/service/application-development">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-6 col-lg-6">
                            <Link className="fade-page" to="/service/data-governance">
                                <img src="/images/service/policy.jpg" alt="Data Governance" className="rounded w-100 shadow-3d hover-shadow-3d border mb-3 mb-md-0" />
                            </Link>
                        </div>
                        <div className="col">
                            <div className="row justify-content-center">
                                <div className="col-xl-9 col-lg-10">
                                    <Link to="/service/data-governance" className="text-dark">
                                        <h3>Data Governance</h3>
                                    </Link>
                                    <p className="lead">Have you ever thought of losing your company’s data? Not yet? It’s high time and you need to get on this immediately. To secure your data, Leading Torch provides data governance service to secure your data according to laws and policies.</p>
                                    <Link to="/service/data-governance">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    };
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

export default class BlogWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-12 d-flex align-items-center justify-content-center">
                            <h3 className="h1 text-dark a-title-40">Try to climb high</h3>
                        </div>
                        <div className="col-lg-7 col-md-7 col-12">
                            <img src="/images/blog_cover.jpg" className="w-100" alt="Image" />
                        </div>
                    </div>
                </div>
                <img src="/images/blog_shape.png" className="position-absolute" style={{ zIndex: '-999' }} />
                <div className="container mt-5 pt-5">
                    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 mb-5">
                        <div className="col why-company col-lg-4 d-flex">
                            <div className="card p-0">
                                <Link to="/blog/legal-ai">
                                    <img src="/images/service/ml1.jpg" alt="Image" className="card-img-top" />
                                </Link>
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="text-small d-flex">
                                            <span className="text-primary h4 mr-2">Technology</span>
                                            <span className="text-muted h4">15th January</span>
                                        </div>
                                    </div>
                                    <Link to="/blog/legal-ai">
                                        <h4 className="text-dark">legal AI: How machine learning is aiding concerning law practitioners</h4>
                                    </Link>
                                    <p className="flex-grow-1 mt-3 h4">
                                        Law firms entrusted with investigating a lot of information and translating rules can boundlessly improve their effectiveness...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col why-company col-lg-4 d-flex">
                            <div className="card p-0">
                                <Link to="/blog/automation-engineering">
                                    <img src="/images/service/platform1.jpg" alt="Image" className="card-img-top" />
                                </Link>
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="text-small d-flex">
                                            <span className="text-primary h4 mr-2">Technology</span>
                                            <span className="text-muted h4">17th January</span>
                                        </div>
                                    </div>
                                    <Link to="/blog/automation-engineering">What is Automation Engineering?</Link>
                                    <p className="flex-grow-1 mt-3 h4">
                                        Automation is a set of numerous advances like devices, Electrical, mechanical, Softwares which results in work with no human intercession with incredible productivity and dependability...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col why-company col-lg-4 d-flex">
                            <div className="card p-0">
                                <Link to="/blog/legal-ai">
                                    <img src="/images/service/ml1.jpg" alt="Image" className="card-img-top" />
                                </Link>
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="text-small d-flex">
                                            <span className="text-primary h4 mr-2">Technology</span>
                                            <span className="text-muted h4">15th January</span>
                                        </div>
                                    </div>
                                    <Link to="/blog/legal-ai">
                                        <h4 className="text-dark">legal AI: How machine learning is aiding concerning law practitioners</h4>
                                    </Link>
                                    <p className="flex-grow-1 mt-3 h4">
                                        Law firms entrusted with investigating a lot of information and translating rules can boundlessly improve their effectiveness...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col why-company col-lg-4 d-flex">
                            <div className="card p-0">
                                <Link to="/blog/automation-engineering">
                                    <img src="/images/service/platform1.jpg" alt="Image" className="card-img-top" />
                                </Link>
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="text-small d-flex">
                                            <span className="text-primary h4 mr-2">Technology</span>
                                            <span className="text-muted h4">17th January</span>
                                        </div>
                                    </div>
                                    <Link to="/blog/automation-engineering">
                                        <h4 className="text-dark">What is Automation Engineering?</h4>
                                    </Link>
                                    <p className="flex-grow-1 mt-3 h4">
                                        Automation is a set of numerous advances like devices, Electrical, mechanical, Softwares which results in work with no human intercession with incredible productivity and dependability...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col why-company col-lg-4 d-flex">
                            <div className="card p-0">
                                <Link to="/blog/legal-ai">
                                    <img src="/images/service/ml1.jpg" alt="Image" className="card-img-top" />
                                </Link>
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="text-small d-flex">
                                            <span className="text-primary h4 mr-2">Technology</span>
                                            <span className="text-muted h4">15th January</span>
                                        </div>
                                    </div>
                                    <Link to="/blog/legal-ai">
                                        <h4 className="text-dark">legal AI: How machine learning is aiding concerning law practitioners</h4>
                                    </Link>
                                    <p className="flex-grow-1 mt-3 h4">
                                        Law firms entrusted with investigating a lot of information and translating rules can boundlessly improve their effectiveness...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col why-company col-lg-4 d-flex">
                            <div className="card p-0">
                                <Link to="/blog/automation-engineering">
                                    <img src="/images/service/platform1.jpg" alt="Image" className="card-img-top" />
                                </Link>
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="text-small d-flex">
                                            <span className="text-primary h4 mr-2">Technology</span>
                                            <span className="text-muted h4">17th January</span>
                                        </div>
                                    </div>
                                    <Link to="/blog/automation-engineering">
                                        <h4 className="text-dark">What is Automation Engineering?</h4>
                                    </Link>
                                    <p className="flex-grow-1 mt-3 h4">
                                        Automation is a set of numerous advances like devices, Electrical, mechanical, Softwares which results in work with no human intercession with incredible productivity and dependability...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col why-company col-lg-4 d-flex">
                            <div className="card p-0">
                                <Link to="/blog/legal-ai">
                                    <img src="/images/service/ml1.jpg" alt="Image" className="card-img-top" />
                                </Link>
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="text-small d-flex">
                                            <span className="text-primary h4 mr-2">Technology</span>
                                            <span className="text-muted h4">15th January</span>
                                        </div>
                                    </div>
                                    <Link to="/blog/legal-ai">
                                        <h4 className="text-dark">legal AI: How machine learning is aiding concerning law practitioners</h4>
                                    </Link>
                                    <p className="flex-grow-1 mt-3 h4">
                                        Law firms entrusted with investigating a lot of information and translating rules can boundlessly improve their effectiveness...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col why-company col-lg-4 d-flex">
                            <div className="card p-0">
                                <Link to="/blog/automation-engineering">
                                    <img src="/images/service/platform1.jpg" alt="Image" className="card-img-top" />
                                </Link>
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="text-small d-flex">
                                            <span className="text-primary h4 mr-2">Technology</span>
                                            <span className="text-muted h4">17th January</span>
                                        </div>
                                    </div>
                                    <Link to="/blog/automation-engineering">
                                        <h4 className="text-dark">What is Automation Engineering?</h4>
                                    </Link>
                                    <p className="flex-grow-1 mt-3 h4">
                                        Automation is a set of numerous advances like devices, Electrical, mechanical, Softwares which results in work with no human intercession with incredible productivity and dependability...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


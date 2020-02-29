import React, { Component } from 'react';
import Clients from './Clients';
import Services from './Services';
import Team from './Team';

export default class AboutUs extends Component {
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
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-lg-5 col-md-5 col-12">
							<h1 className="font-weight-light a-title-40 text-center px-4 py-2">The journey of LeadingTorch</h1>
						</div>
						<div className="col-lg-7 col-md-7 col-12">
							<img src="/images/team.png" className="w-100" />
						</div>
					</div>
				</div>
				<div>
					<section className="m-image-wc">
						<div className="container">
							<div className="row">
								<div className="col-12 col-sm-6 h-text-align-center">
									<div className="m-image-wc__image m-image-wc__image--top">
										<img className="b-lazy b-loaded" alt="company photo" src="/images/comp/about3.jpg" />
									</div>
								</div>
								<div className="m-image-wc__content col-12 col-sm-6 scroll-animation scroll-animation__ease-in-from-bottom active">
									<header>
										<h2 className="a-si h-text-bold">
											our approach
                                        </h2>
										<h3 className="a-title-40 ">
											Focus on the client’s problems
                                        </h3>
									</header>
									<div className="a-text-20">
										<p>Leading Torch, a company behind every enterprise to store and secure data through the quality service that our team excels in providing. Leading Torch was launched in 2014 at Texas by our Founder & CEO Srinivasa Busireddy. With his determination and leadership, our company is leading in providing software solutions in areas like cloud, data analytics, machine learning, and business intelligence. Right from consulting to building our own products and solutions, the journey of Leading Torch was not that easy.
											Leading Torch focuses on the client’s problems rather than just providing a service. Our modern approach towards the problem resulted in making quick decisions, faster processing to value the client’s investment. We have set our future goals and to reach that point our team is taking maximum efforts. Leading Torch believes in customer satisfaction and is committed to improving customer experience through focused and timely delivery.
											We value client’s investments and returning a better ROI for that is what we always look for. Our cost-effective methods are proven techniques in the industry for every solution. Believe in Leading Torch, the rest is history.</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<div className="container my-5">
					<div className="col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-12 mt-5 py-5">
						<h5 className="text-dark">core values</h5>
						<h3 className="text-dark">Our core values are an active part of everything we do. Each one reminds us to stay true to ourselves while driving amazing outcomes for our clients.</h3>
					</div>
					<div className="d-flex flex-wrap align-items-center justify-content-center">
						<div className="col-6 col-lg-4 col-md-4 text-center my-4">
							<img src="/images/core-values/trust.png" width="64px" />
							<h4 className="font-weight-light mt-2">Trust</h4>
						</div>
						<div className="col-6 col-lg-4 col-md-4 text-center my-4">
							<img src="/images/core-values/honest.png" width="64px" />
							<h4 className="font-weight-light mt-2">Honesty</h4>
						</div>
						<div className="col-6 col-lg-4 col-md-4 text-center my-4">
							<img src="/images/core-values/humility.png" width="64px" />
							<h4 className="font-weight-light mt-2">Humility</h4>
						</div>
						<div className="col-6 col-lg-4 col-md-4 text-center my-4">
							<img src="/images/core-values/respect.png" width="64px" />
							<h4 className="font-weight-light mt-2">Respect</h4>
						</div>
						<div className="col-6 col-lg-4 col-md-4 text-center my-4">
							<img src="/images/core-values/team.png" width="64px" />
							<h4 className="font-weight-light mt-2">Teamwork</h4>
						</div>
					</div>
				</div>
				<section className="m-content-wi m-content-wi--dark mb-0">
					<div className="container">
						<div className="row">
							<div className="col-12 col-sm-5 m-content-wi__col-left">
								<header className="m-content-wi__header scroll-animation scroll-animation__ease-in-from-bottom active">
									<div className="scroll-animation scroll-animation__ease-in-from-bottom active">
										<h2 className="a-si h-text-bold">our vision and mission
                                        </h2>
									</div>
									<div className="scroll-animation scroll-animation__ease-in-from-bottom active">
										<h3 className="a-title-40 ">
											Develop products that will help our clients to grow
                                        </h3>
									</div>
									<div className="scroll-animation scroll-animation__ease-in-from-bottom active">
										<div className="a-text-20">
											Leading Torch’s longterm vision is crystal clear. We want to help the enterprises in every possible way so that they can lead in their respective industries. Our vision always focuses on the roadmap that we create considering quality and sustainable growth. Our team is the driving force behind our success and we aim at continuing it. We believe in the client’s vision is our vision and with the utmost passion, we try to achieve the client’s goal. <br />
											Leading Torch is on the mission to develop products and solutions that will help our clients to grow. Our mission focuses on the longterm path rather than planning it as a short-term goal. We believe in creating value and making a difference in the industry. Also, our core values, which are trust, respect, humility, and integrity helps in providing the right service to the right clients. Get us on our mission to build a successful enterprise.
                                        </div>
									</div>
								</header>
							</div>
							<div className="col-12 col-sm-7">
								<div className="m-content-wi__image">
									<img className="b-lazy b-loaded" alt="airplane" src="/images/comp/about2.jpg" />
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <section className="m-content-wi m-content-wi--right mb-0">
					<div className="container">
						<div className="row">
							<div className="col-12 col-sm-5 m-content-wi__col-left">
								<header className="m-content-wi__header scroll-animation scroll-animation__ease-in-from-bottom active">
									<div className="scroll-animation scroll-animation__ease-in-from-bottom active">
										<h2 className="a-si h-text-bold">
											<h5 className="text-dark">our vision and mission</h5>
										</h2> </div>
									<div className="scroll-animation scroll-animation__ease-in-from-bottom active">
										<h3 className="a-title-40 ">
											Develop products that will help our clients to grow
                                    		</h3>
									</div>
									<div className="scroll-animation scroll-animation__ease-in-from-bottom active">
										<div className="text-muted pb-3 m-content-wi__intro">
											<p style={{ lineHeight: "1.5rem" }}>Leading Torch’s longterm vision is crystal clear. We want to help the enterprises in every possible way so that they can lead in their respective industries. Our vision always focuses on the roadmap that we create considering quality and sustainable growth. Our team is the driving force behind our success and we aim at continuing it. We believe in the client’s vision is our vision and with the utmost passion, we try to achieve the client’s goal.</p>
											<p style={{ lineHeight: "1.5rem" }}>Leading Torch is on the mission to develop products and solutions that will help our clients to grow. Our mission focuses on the longterm path rather than planning it as a short-term goal. We believe in creating value and making a difference in the industry. Also, our core values, which are trust, respect, humility, and integrity helps in providing the right service to the right clients. Get us on our mission to build a successful enterprise.</p>
										</div>
									</div>
								</header>
							</div>
							<div className="col-12 col-sm-7">
								<div className="m-content-wi__image" style={{ left: '2rem' }}>
									<img className="b-lazy b-loaded" alt="airplane" src="/images/comp/about2.jpg" />
								</div>
							</div>
						</div>
					</div>
				</section> */}
				<Clients />
			</div>
		);
	}
}

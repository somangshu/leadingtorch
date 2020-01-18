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
				<div className="position-relative about-hero">
					<div className="col-12 py-4 px-3 text-center my-5">
						<h2 className="font-weight-light text-left h1 px-5">The journey of Leading Torch</h2>
					</div>
					<div className="divider">
						<svg width="100%" height="96px" style={{ fill: "#ffffff" }} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" datasrc="assets/images/divider-2.svg">
							<path d="M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z"></path>
						</svg>
					</div>
				</div>
				<div className="container mt-5">
					<div className="row my-5 py-4">
						<div className="col text-center">
							<h1 className="text-dark">Our story</h1>
							<p className="quote">Leading Torch focuses on the client’s problems rather than just providing a service</p>
						</div>
						<div className="col-lg-8 col-md-8 col-sm-12 text-left">
							<p className="lead">Leading Torch, a company behind every enterprise to store and secure data through the quality service that our team excels in providing. Leading Torch was launched in 2014 at Texas by our Founder & CEO Srinivasa Busireddy. With his determination and leadership, our company is leading in providing software solutions in areas like cloud, data analytics, machine learning, and business intelligence. Right from consulting to building our own products and solutions, the journey of Leading Torch was not that easy.</p>
							<p className="lead">Leading Torch focuses on the client’s problems rather than just providing a service. Our modern approach towards the problem resulted in making quick decisions, faster processing to value the client’s investment. We have set our future goals and to reach that point our team is taking maximum efforts. Leading Torch believes in customer satisfaction and is committed to improving customer experience through focused and timely delivery.</p>
							<p className="lead">We value client’s investments and returning a better ROI for that is what we always look for. Our cost-effective methods are proven techniques in the industry for every solution. Believe in Leading Torch, the rest is history.</p>
						</div>
					</div>
					<div className="row justify-content-around">
						<img className="col-12 col-lg-5 col-md-5 mb-3 img-fluid img-thumbnail p-1 rounded" src="/images/comp/about3.jpg" />
						<img className="col-12 col-lg-5 col-md-5 mb-3 img-fluid img-thumbnail p-1 rounded" src="/images/comp/about2.jpg" />
					</div>
					<div className="row my-5 py-4">
						<div className="col-lg-8 col-md-8 col-sm-12 order-lg-first order-sm-last order-last">
							<p className="lead">Leading Torch’s longterm vision is crystal clear. We want to help the enterprises in every possible way so that they can lead in their respective industries. Our vision always focuses on the roadmap that we create considering quality and sustainable growth. Our team is the driving force behind our success and we aim at continuing it. We believe in the client’s vision is our vision and with the utmost passion, we try to achieve the client’s goal.</p>
						</div>
						<div className="col text-center order-lg-last order-sm-first order-first">
							<h1 className="text-dark">Our Vision</h1>
							<p className="quote">Help the enterprises in every possible way so that they can lead in their respective industries</p>
						</div>
					</div>
					<div className="row my-5 py-4">
						<div className="col text-center">
							<h1 className="text-dark">Our Mission</h1>
							<p className="quote">Develop products and solutions that will help our clients to grow</p>
						</div>
						<div className="col-lg-8 col-md-8 col-sm-12 text-left">
							<p className="lead">Leading Torch is on the mission to develop products and solutions that will help our clients to grow. Our mission focuses on the longterm path rather than planning it as a short-term goal. We believe in creating value and making a difference in the industry. Also, our core values, which are trust, respect, humility, and integrity helps in providing the right service to the right clients. Get us on our mission to build a successful enterprise.</p>
						</div>
					</div>
					<Clients />
					<Team />
				</div>
			</div>
		);
	}
}

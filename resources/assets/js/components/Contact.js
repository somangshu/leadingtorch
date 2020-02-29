import React, { Component } from 'react';

export default class Contact extends Component {
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
				<div className="position-relative contact-hero">
					<div className="col-12 py-4 px-3 text-center my-5">
						<h2 className="font-weight-light text-left h1 px-5">Contact us</h2>
					</div>
					<div className="divider">
						<svg width="100%" height="96px" style={{ fill: "#fafafa" }} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" datasrc="assets/images/divider-2.svg">
							<path d="M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z"></path>
						</svg>
					</div>
				</div>
				{/* <img src="/images/contact_shape.png" className="position-absolute" style={{ zIndex: '-999', right: 0 }} /> */}
				<div className="container my-5">
					<p className="text-left text-dark">Are you interested in our services? Or, do you have any query? Leading Torch won’t disappoint anyone. We are here to help you in every possible way. Connect with us now.</p>
					<h4 className="my-4">We are located at:</h4>
					<div className="row justify-content-start">
						<div className="col-12 col-lg-5 col-md-5 d-flex">
							<div className="card card-sm card-body flex-row align-items-center mb-4">
								<img src="/images/usa.png" alt="texas" />
								<div className="ml-3">
									<h6 className="h4 mb-0">Leading Torch, Plano, Texas, US (Headquarters)</h6>
								</div>
							</div>
						</div>

						<div className="col-12 col-lg-5 col-md-5 d-flex">
							<div className="card card-sm card-body flex-row align-items-center mb-4">
								<img src="/images/india.png" width="100px" alt="india" />
								<div className="ml-3">
									<h6 className="h4 mb-0">Leading Torch, Hyderabad, India</h6>
								</div>
							</div>
						</div>
					</div>
					<h4 className="my-4">Write to us at:</h4>
					<div className="row justify-content-start">
						<div className="col-12 col-lg-5 col-md-5">
							<div className="card card-sm card-body flex-row align-items-center mb-4">
								<img src="/images/email-support.png" width="64px" alt="email support" />
								<div className="ml-3">
									<h6 className="h4 mb-2 text-center">info@leadingtorch.com</h6>
									<h5 className="h3 text-center">OR</h5>
									<h6 className="h4 mb-0 text-center">srinivasa_reddy@leadingtorch.com</h6>
								</div>
							</div>
						</div>
					</div>
					<h4 className="my-4">Call to us at:</h4>
					<div className="row justify-content-start">
						<div className="col-12 col-lg-5 col-md-5">
							<div className="card card-sm card-body flex-row align-items-center mb-4">
								<img src="/images/call-support.png" width="64" alt="phone support" />
								<div className="ml-3">
									<h6 className="h4 mb-2 text-center">001 972 372 0202</h6>
									<h5 className="h3 text-center">OR</h5>
									<h6 className="h4 mb-0 text-center">091 88869 93470</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

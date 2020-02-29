import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className="bg-white">
				<div className="px-3 pt-2">
					<h4 className="py-3 text-dark">Our offices:</h4>
					<div className="row justify-content-start">
						<div className="col-12 col-lg-4 col-md-4 d-flex">
							<div className="card card-sm card-body flex-row align-items-center mb-4 box-shadow-ak">
								<img src="/images/usa.png" width="54px" alt="texas" />
								<div className="ml-3">
									<h6 className="h4 mb-0">Leading Torch, Plano, Texas, US (Headquarters)</h6>
								</div>
							</div>
						</div>

						<div className="col-12 col-lg-4 col-md-4 d-flex">
							<div className="card card-sm card-body flex-row align-items-center mb-4 box-shadow-ak">
								<img src="/images/india.png" width="54px" alt="india" />
								<div className="ml-3">
									<h6 className="h4 mb-0">Leading Torch, Hyderabad, India</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="px-1 d-flex flex-column flex-lg-row flex-md-row mb-2">
					<div className="col-12 col-lg-4 col-md-4">
						<h4 className="py-3 text-dark">Email us:</h4>
						<div className="justify-content-start">
							<div className="card card-sm card-body flex-row align-items-center mb-4 box-shadow-ak">
								<img src="/images/email-support.png" width="54px" alt="email support" />
								<div className="ml-3">
									<h6 className="h4 mb-2 text-center">info@leadingtorch.com</h6>
									<h5 className="h3 text-center">OR</h5>
									<h6 className="h4 mb-0 text-center">srinivasa_reddy@leadingtorch.com</h6>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-4 col-md-4">
						<h4 className="py-3 text-dark">Contact us:</h4>
						<div className="justify-content-start">
							<div className="card card-sm card-body flex-row align-items-center mb-4 box-shadow-ak">
								<img src="/images/call-support.png" width="54px" alt="phone support" />
								<div className="ml-3">
									<h6 className="h4 mb-2 text-center">001 972 372 0202</h6>
									<h5 className="h3 text-center">OR</h5>
									<h6 className="h4 mb-0 text-center">091 88869 93470</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-main">
					<p className="mb-0">Leading Torch LLC © 2020</p>
					<div>
						<Link to="/careers" className="link ml-2">CAREERS</Link>
					</div>
					<div className="social-links">
						<a href="https://www.facebook.com/leadingtorch/" className="mr-1" target="_blank">
							<i className="fab fa-facebook"></i>
						</a>
						<a href="https://www.linkedin.com/company/leadingtorchindia" target="_blank">
							<i className="fab fa-linkedin"></i>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

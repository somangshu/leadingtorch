import React, { Component } from 'react';
import Services from './Services';

export default class ServiceWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div>
				<div className="position-relative contact-hero mb-5" style={{ backgroundImage: 'url("/images/services.jpg")', height: "450px", backgroundSize: "unset" }}>
					<div className="col-12 py-5 my-5">
						<h2 className="font-weight-light text-center" style={{ fontSize: "62px" }}>What we do</h2>
					</div>
					<div className="divider">
						<svg width="100%" height="96px" style={{ fill: "#fafafa" }} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" datasrc="assets/images/divider-2.svg">
							<path d="M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z"></path>
						</svg>
					</div>
				</div>
				<Services />
			</div>
		);
	}
}

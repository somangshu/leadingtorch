import React, { Component } from 'react';

export default class Clients extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div style={{ backgroundColor: "#fff" }}>
				<div className="py-5 container">
					<div className="col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-12 py-5">
						<h5 className="text-dark">our clients</h5>
						<h3 className="text-dark">Leading Torch has worked with the best clients so far. The quality service that we provide helps them to reach great heights. We have provided services like Master Data Management, Data Governance, Data Warehouse, Incentive Analytics, Data Platform, App Modernization to our clients. We have also worked with small enterprises that are the leaders in their respective industries.</h3>
					</div>
					<div className="d-flex flex-lg-row flex-md-row flex-column justify-content-around align-items-center">
						<img src="/images/logo/toyota.png" className="mb-5" height="128px" width="128px" alt="Toyota" />
						<img src="/images/logo/mazda.png" className="mb-5" height="100px" width="100px" alt="Mazda" />
						<img src="/images/logo/microsoft.png" className="mb-5" height="55px" alt="Microsoft" />
					</div>
				</div>
			</div>
		)
	};
}

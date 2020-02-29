import React, { Component } from 'react';

export default class ServiceDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: null,
			data: [
				{
					id: 1,
					slug: 'cloud-solutions',
					header: 'cloud solutions',
					subheader: 'Storage space as big as cloud!',
					cover: '/images/service/cloud1.png',
					intro: 'The storage problem is real. Not only in our home but also to store files on our PC or mobile. Gone are the days where hard drives were important to store files. Don’t feel insecure as we have got the best solution for you. And that’s CLOUD SOLUTIONS. Cloud Computing, a new approach towards storage, means storing and accessing the data over the internet from wherever you are rather than storing it in hard drives. With the best transfer speed and security to store it in the cloud, Leading Torch is the leading provider of cloud solutions.',
					fillerImage: '/images/service/cloud2.jpg',
					pointerIntro: 'We have mastered to build solutions in the following services to fulfill the client’s needs.',
					pointers: [
						'SaaS (Software as a Service) - In SaaS, our team helps to build the software for your company so that your customers can have direct access over the internet. The benefit is, your customers will not have to download and store it in the drive and they can easily access from anywhere with an internet connection.',
						'PaaS (Platform as a Service) - In PaaS, we provide a platform for our clients where they can develop an application or customize the previously built application. This platform is purely accessed through the internet and the client can easily work on it whenever you want. It is the best framework for developers to build their own customizable applications.',
						'IaaS (Infrastructure as a Service) - In IaaS, clients can access and monitor things like computers, networking, and other services that are provided by our cloud services providers like AWS, Azure, and Google. You can purchase resources on the internet rather than buying and storing it in the drive.'
					],
					summary: 'Leading Torch has helped many clients in providing cloud solutions in the past that resulted in leading the industry. Our services are reliable and cost-effective to produce more and more value to our clients.'
				},
				{
					id: 2,
					slug: 'machine-learning',
					header: 'Machine Learning',
					subheader: 'Predicting your company’s future!',
					cover: '/images/service/ml1.jpg',
					intro: 'Have you heard of building systems without being explicitly programmed? No, then take a look at this service that provides systems the ability to learn and improve their experience which helps to better predict the future. A branch of Artificial Intelligence (AI), machine learning is based on the idea that systems learn from input data, identify their patterns, and make correct decisions with less human intervention in them to produce correct results. Leading Torch provides Machine Learning as a service that reduces the need for complex programming by taking advantage of AI and Big Data for delivering the right tasks. Our solution minimizes the cost and time so that clients can focus on their core activities.',
					fillerImage: '/images/service/ml.jpg',
					pointerIntro: 'Benefits of using Machine Learning as a service -',
					pointers: [
						'Quick Decisions - Machine Learning helps in producing realtime results and accurate outcomes to make decisions faster. When AI is embedded with Machine Learning it is easier to solve the issues efficiently and that leads to making quick decisions. ',
						'Works beyond the human mind - Faster the processing, the faster is the results. The human mind is not capable of predicting future and that’s where machine learning steps in to predict future business opportunities by processing patterns of the previous data. ',
						'Superior Output - Human errors cannot be avoided. And so to eliminate the errors, machine learning is the best way to eliminate errors to produce superior results. It also helps to protect the sensitive data of your organization. '
					],
					summary: 'Leading Torch has been in this industry for a long time and has built models for Sentiment Analysis, Text Analytics, Customer Loyalty, Brand Affinity, Predictive Analysis, etc. Also, the professionals at Leading Torch has build Image, Speech, and Character recognition system using neural network models. Chatbots are the next big thing. Leading Torch’s chatbots has been perfectly trained to deliver quick communication with your customers in scheduling meetings, customer service, sales, etc. We have also built monitoring bots to determine the audience’s behavior with your business. Associating with Leading Torch not only helps in the smooth process of your business but we try hard to make your business’s future bright. Contact us to know more about how we can make a change in your business. '
				},
				{
					id: 3,
					slug: 'business-intelligence',
					header: 'Business Intelligence',
					subheader: 'Intelligent data = Smart decisions',
					cover: '/images/service/bi3.jpg',
					intro: 'Does your business insights are meaningful enough to take profitable actions? Are you still using the raw data to make decisions? Get into the world of actionable intelligent data by using Business Intelligence as a service. Business Intelligence uses a set of procedures, the latest technologies that convert raw data into meaningful data that leads to making better business decisions. It believes in fact-based decisions using historical data rather than assumptions. Leading Torch has built many BI solutions for domains like Manufacturing, Marketing, Accounting & Finance, Logistics, Product planning and many more. Our team has worked full-fledged to make Business Intelligence as a great service that creates KPI’s, set benchmarks, Identify market trends, Data visualization and a lot more to make the right business decisions. ',
					fillerImage: '/images/service/bi.jpg',
					pointerIntro: 'How Leading Torch helps businesses using Business Intelligence as a service?',
					pointers: [
						'Delivering actionable insights - We make sure that every meaningful data is displayed on the mobile dashboard. Our insights will provide you reports, KPI’s, market trends, operational issues with your business that will help you to get a broader view of your business on a single dashboard.',
						'Tailored according to your needs - Leading Torch makes customized BI solutions according to the business requirements. We take care of your short term and long term goals to develop better reports as per the business needs. ',
						'Integration with other sources - Our team will look after every data source that will value us to make better insights into your business. We integrate our service with every possible source, including your outdated systems.'
					],
					summary: 'Leading Torch always believe in innovations and thus we developed a Profitability Analytics Solution for a big enterprise like ________. This has given us a reputation in the market as the best Business Intelligence Service provider. Want to make your business intelligent? Connect with us today to lead in your industry.'
				},
				{
					id: 4,
					slug: 'data-platforms',
					header: 'Data Platforms',
					subheader: 'Data platforms for data storage!',
					cover: '/images/service/platforms.jpg',
					intro: 'With every industry relying on data and that’s for sure that future technologies will rely on data and integrations, it is an important step to save your data safely. And that’s where Data Platforms kicks in to store the data and can be accessed whenever you want. Data Platform combines all the data collected from various data sets and acts as a centralized hub of data that can be accessed for analysis and integrations. Leading Torch is also indulged in Big Data Platform where this platform generally consists of big data storage, data management, business intelligence, and other utilities. The benefit of this platform is to reduce the complexity of multiple solutions into one profitable solution. We have developed one such platform for an enterprise using Hadoop Stack, Spark, and Kafka. ',
					fillerImage: '/images/service/platform1.jpg',
					pointerIntro: 'Benefits of using Data Platform as a service -',
					pointers: [
						'Better Insights - Integrating with multiple data types that store real-time data from both internal as well as external sources. Leading Torch’s predictive analytics solution can also be integrated with the Data Platform to process the data and give better results.',
						'Analytics - Data analytics is important for your business. Automated data integration means your multi-source data is always clean and up-to-date and provides a single version of your business insights throughout the organization.',
						'Cost-effective - Leading Torch provides cost-effective service to store customized data that can be used as your business grows. We always aim at the high value at low cost and that resulted in saving millions of dollars on data platforms. '
					],
					summary: 'Leading Torch is recognized as the best in building Data Platforms. Recently, our team has built a 100TB data warehouse for a large enterprise which helped them a lot in storing data as per their needs. Our team also build a data platform as per the specific product so that the data can be used for marketing purposes. We believe in innovation and it would be great to partner with your company to provide good results. Believe in us, we are the driving force behind you.'
				},
				{
					id: 5,
					slug: 'application-development',
					header: 'Application development',
					subheader: 'The development that your enterprise needs!',
					cover: '/images/service/dev2.jpg',
					intro: 'In today’s world, it is not advisable to work offline. Your online presence matters. To solve the business problems while going online, Leading Torch helps in building an application, whether it is a mobile or web development, we are indulged in both. Our professional programmers have mastered every backend code to build your app uniquely. Nevertheless, we have designed responsive web designs using HTML5, CSS, PHP, Java and many more. Leading Torch also helps in cross-platform app development services. We have developed apps for iOS, Android, Windows for cross-platform development. Along with this, we have full strength in providing enhanced graphics, high security, and great performance for your application. Your customers will have a seamless experience in your application across all platforms.',
					fillerImage: '/images/service/dev.jpg',
					pointerIntro: 'Leading Torch excels in providing - ',
					pointers: [
						'App prototyping and strategy',
						'Enterprise application development',
						'Cloud mobility solution',
						'Full-stack mobile development services',
						'Integration with existing services and data'
					],
					summary: 'Leading Torch’s recently built application is worth $250 million. We have built various forms of complex incentive models to dealers across the USA. Client satisfaction was at par and that leads to retaining them for their future projects. Leading Torch worked with the top MNCs for regulatory compliance purposes. Our team has so perfectly designed that we got an opportunity to expand that project to all the regions. Not to mention, the majority of the apps that we build are cloud-based with DevOps and Kubernetes technology. We value our service and that resulted in being the best application developer that ensures quality service. Let’s get started immediately. Contact us today.'
				},
				{
					id: 6,
					slug: 'data-governance',
					header: 'Data Governance',
					subheader: 'Protecting data seamlessly!',
					cover: '/images/service/policy.jpg',
					intro: 'Have you ever thought of losing your company’s data? Not yet? It’s high time and you need to get on this immediately. To secure your data, Leading Torch provides data governance service to secure your data according to laws and policies. Due to rising online thefts, your company should take an initiative in assigning accountability to your employees who are responsible for data assets. Also, storing the data securely, backing it up, protecting from internal and external threats are some of the reasons where Leading Torch excels.',
					fillerImage: '/images/service/policy1.jpg',
					pointerIntro: 'Benefits of Data Governance -',
					pointers: [
						'Providing accurate and consistent data through continuous monitoring.',
						'Prevention of data silos.',
						'Data is accessible to all departments safely.',
						'Thorough maintenance of data.',
						'Compliance with laws that protects data.'
					],
					summary: 'Leading Torch is a well-established data governance service provider for so many years especially helping large enterprises. We have provided solutions for Metadata repository, Master Data Management, Data Security and Data Quality framework. Leading Torch’s team believes in safety first. And this is the reason why the client’s believed in us. Our cost-effective service is beneficial for all the clients working with us and that resulted in the client’s investments. Protect your data today itself, it’s worth millions and Leading Torch cares for it.'
				}
			]
		};
	}

	componentDidMount() {
		window.scrollTo(0, 0)
		var selected = (this.props.match.params && this.props.match.params.slug) ?
			_.find(this.state.data, { 'slug': this.props.match.params.slug }) : null
		this.setState({ selected })
	}

	render() {
		const { selected } = this.state

		return (
			<div>
				{selected && <div>
					<div className="position-relative contact-hero mb-5" style={{ backgroundImage: 'url("' + selected.cover + '")', backgroundAttachment: "unset" }}>
						<div className="col-12 py-4 px-3 text-center my-5">
							<h2 className="font-weight-light text-left h1 px-5">Our Services > {selected.header}</h2>
							<h4 className="font-weight-light text-white text-left px-5">{selected.subheader}</h4>
						</div>
						<div className="divider">
							<svg width="100%" height="96px" style={{ fill: "#fafafa" }} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" datasrc="assets/images/divider-2.svg">
								<path d="M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z"></path>
							</svg>
						</div>
					</div>
					<div className="container my-5">
						<p className="text-left a-text-20 mb-5">{selected.intro}</p>
						<p className="text-left a-text-20 mb-3">{selected.pointerIntro}</p>
						<ul className="mb-5">
							{selected.pointers.map((val, key) => {
								return <li key={key} className="a-text-20">{val}</li>
							})}
						</ul>
						<img src={selected.fillerImage} className="img-fluid img-thumbnail mb-5" alt={selected.header}></img>
						<p className="text-left a-text-20 mb-3">{selected.summary}</p>
					</div>
				</div>}
			</div>
		);
	}
}

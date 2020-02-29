import React, { Component } from 'react';

export default class BlogDetail1 extends Component {
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
                <div>
                    <div className="position-relative contact-hero mb-5" style={{ backgroundImage: 'url("/images/service/web1.jpeg")', backgroundAttachment: "unset" }}>
                        <div className="col-12 py-4 px-3 text-center my-5">
                            <h2 className="font-weight-light text-left text-dark px-5">Blogs > What is Automation Engineering?</h2>
                        </div>
                        <div className="divider">
                            <svg width="100%" height="96px" style={{ fill: "#ffffff" }} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" datasrc="/images/divider-2.svg">
                                <path d="M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="container my-5">
                        <p className="text-left a-text-20 mb-3">Automation is a set of numerous advances like devices, Electrical, mechanical, Softwares which results in work with no human intercession with incredible productivity and dependability. </p>
                        <p className="text-left a-text-20 mb-3">With the blasting of amazing innovation, businesses are endeavoring to decrease labor and endeavoring to grow automation designing in different divisions. The reak time development of automation over the most recent couple of years has presented new arrangements of prophets that can anticipate destiny. In this way, with the developing area of automation building, the interest of automation architects has additionally be expanded. Robotization builds, for the most part, to propose, plan, execute, recreate and test mechanized apparatus and their procedures in finishing exact methods. Automation has been a foundation of the manufacturing business for a considerable length of time, yet it's generally new to the businesses of medicinal services and fund enterprises. Outside of assembling and production line automation, IT automation is normally centered around administration robotization and QA testing of automated forms. The objective of an automation specialist is to take out imperfections, mistakes, and issues with item or programming improvement and with business or client administration forms.</p>
                        <p className="text-left a-text-20 mb-3">Automation is additionally used to streamline IT help work area ticketing, administration the executives and to convey quality items and programming quicker, with fewer imperfections. At last, the objective of an automation designer is to diminish the burden on laborers and to improve proficiency and quality by streamlining manual procedures that are excess or conflicting.</p>
                        <p className="text-left a-text-20 pb-2">Automation Engineering Services takes care of - </p>
                        <ul className="mb-5">
                            <li className="h4">Identifying opportunities in the software industry for its automation.</li>
                            <li className="h4">Plan and execute QA tests utilizing contents that naturally test usefulness.</li>
                            <li className="h4">Run tests for databases, frameworks, systems, applications, equipment, and programming.</li>
                            <li className="h4">Distinguish bugs and quality issues being developed, administration or business forms.</li>
                            <li className="h4">Introduce applications and databases important to mechanization.</li>
                            <li className="h4">Team up with different specialty units to see how automation can improve the work process.</li>
                            <li className="h4">Accumulate necessities from customers, clients or end-clients to build up the best automation arrangements.</li>
                        </ul>
                        <img src="/images/service/web.jpg" className="img-fluid img-thumbnail mb-5" alt="leagal ai"></img>
                        <p className="text-left a-text-20 mb-3">Python is an open-source scripting language, therefore used to robotize anything. To automate various things in python, you can basically compose content.</p>
                        <p className="text-left mb-3 h2">In scripting:</p>
                        <p className="text-left h3 mb-1">The code is written as scripts.</p>
                        <p className="text-left h3 mb-1">The machine reads that code and analyzes it.</p>
                        <p className="text-left h3 mb-3">Error checking, if any, is finished during runtime.</p>
                        <p className="text-left a-text-20 pb-2">Python is your end language to send your automation arrangement. Python is considered as the best programming language among all in recent years. It is useful to automate things using their high-level language. T create web applications, online sites, GUIs, python is considered as the best. Python is a dynamic programming language that enables you to focus on the core part of web applications while dealing with usual programming methods. It has got a straightforward linguistic structure that keeps the code comprehensible. There are likewise various reasons why you ought to lean toward Python to other programming languages.</p>
                        <ul className="mb-3">
                            <li className="h4">Web and Internet development.</li>
                            <li className="h4">Scientific and numeric.</li>
                            <li className="h4">Education.</li>
                            <li className="h4">Desktop GUIs.</li>
                            <li className="h4">Software development.</li>
                            <li className="h4">Business Applications.</li>
                        </ul>
                        <p className="text-left a-text-20 mb-3">There are various reasons why you should write the automation code in python. Unlike other codes, python is readable and can be maintained well. It is compatible with various operating systems and can also run on specific platforms. It has a robust standard library that can be used for many applications to automate. Without increasing development costs, you can actually automate the things using python frameworks and tools.</p>
                    </div>
                </div>
            </div>
        );
    }
}

import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'react-drag-drawer'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
        this.toggle = this.toggle.bind(this)
    }

    // The Header creates links that can be used to navigate
    // between routes.
    toggle() {
        let { toggle } = this.state

        this.setState({ toggle: !toggle })
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link to="/" className="navbar-brand">
                        <img src="/images/logo.png" width="200" alt="Leading Torch LLC" />
                    </Link>

                    <button className="navbar-toggler" type="button" onClick={this.toggle}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Drawer
                        open={this.state.toggle}
                        onRequestClose={this.toggle}
                        direction='left'
                        modalElementClass="drawer" >
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link to="/services" onClick={this.toggle} className="nav-link">What we do</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about-us" onClick={this.toggle} className="nav-link">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/team" onClick={this.toggle} className="nav-link">Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" onClick={this.toggle} className="nav-link">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/careers" onClick={this.toggle} className="nav-link">Careers</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact-us" onClick={this.toggle} className="nav-link">Contact us</Link>
                            </li>
                        </ul>
                    </Drawer>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link to="/services" className="nav-link">What we do</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about-us" className="nav-link">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/team" className="nav-link">Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/careers" className="nav-link">Careers</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact-us" className="nav-link">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}


import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area-two">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info">
                               
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info">
                                <h4>Phone No:</h4>
                                <span>
                                    <Link href="#">
                                        <a>07456804259</a>
                                    </Link>
                                </span>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info">
                                <h4>Email:</h4>
                                <span>
                                    <Link href="#">
                                        <a>pascual.vila.segura@gmail.com</a>
                                    </Link>
                                </span>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info">
                                <h4>Address:</h4>
                                <span>London, UK</span>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="bar"></div>
                        </div>

                        <div className="col-lg-7 col-md-7">
                            <p><i className="far fa-copyright"></i> 2020 <Link href="/"><a>Pascual Vila</a></Link></p>
                        </div>

                        <div className="col-lg-5 col-md-5">
                            <ul>
                                <li>
                                    <Link href="http://www.pascual.vila.segura@gmail.com">
                                        <a  href="http://www.pascual.vila.segura@gmail.com" target="_blank"><i className="fab fa-envelope"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <a href="href=https://www.instagram.com/pascual143/"target="_blank"><i className="fab fa-instagram"></i></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <a href="https://www.linkedin.com/in/pascual-vila-web-developer/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;

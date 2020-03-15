import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';

class Banner extends Component {
    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };
    render() {
        return (
            <React.Fragment>
                <div id="home" className="freelancer-banner">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-8">
                                        <div className="freelancer-banner-content">
                                            <h1>I'm A Full Stack Web <span>Developer</span></h1>
                                            <img src="./images/googleCertificated.jpg"></img>
                                            <h1><span>Digital Marketing</span></h1>
                                            <ul>
                                                <li>
                                                    <Link href="https://github.com/pascual143">
                                                        <a target="_blank"><i className="fab fa-github"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.instagram.com/pascual143/">
                                                        <a target="_blank"><i className="fab fa-instagram"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.linkedin.com/in/pascual-vila-web-developer/">
                                                        <a target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="http://www.pascual.vila.segura@gmail.com">
                                                        <a target="_blank"><i className="fa fa-envelope"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="http://www.thetraveloco.com">
                                                        <a target="_blank"><i className="fab fa-gitlab"></i></a>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="btn-box">
                                                <Link href="#">
                                                    <a className="btn btn-primary">Get Started</a>
                                                </Link>
                                                <Link href="#">
                                                    <a
                                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                                        className="video-btn popup-youtube"
                                                    > 
                                                        <i className="fas fa-play"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="freelancer-banner-image">
                                            <img src={require("../../images/model3.jpg")} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="back-text"><h1>Developer</h1></div>
                </div>
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='vn-fIJ_V-tA' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </React.Fragment>
        );
    }
}

export default Banner;

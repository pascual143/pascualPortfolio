import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';

class BannerLead extends Component {
    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };
    render() {
        return (
            <React.Fragment>
                <div id="home" className="lead-generation-banner jarallax" data-jarallax='{"speed": 0.2}'>
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-md-12">
                                        <div className="lead-generation-banner-content">
                                            <h1>Great Way To show Your Services</h1>
                                            <p>It should be noted that although application software is thought of as a program, it can be anything that runs on a computer.</p>
                                            <div className="btn-box">
                                                <Link href="#">
                                                    <a className="btn btn-primary">Get Started</a>
                                                </Link>
                                                <Link href="#">
                                                    <a
                                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                                        className="video-btn popup-youtube"
                                                    > 
                                                        <i className="fab fa-google-play"></i> Watch our video
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 col-md-12">
                                        <div className="lead-generation-form">
                                            <div className="form-header">
                                                <h3>Start Your Free Trial</h3>
                                                <span>Supporting call-to-action goes here</span>
                                            </div>

                                            <form>
                                                <div className="form-group">
                                                    <input type="text" placeholder="Your name" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="email" placeholder="Your email" className="form-control" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="text" placeholder="Phone number" className="form-control" />
                                                </div>

                                                <button type="submit" className="btn btn-primary">Call to Action</button>
                                            </form>
                                            <p><i className="fas fa-info-circle"></i> We will never share your personal info</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='szuchBiLrEM' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </React.Fragment>
        );
    }
}

export default BannerLead;

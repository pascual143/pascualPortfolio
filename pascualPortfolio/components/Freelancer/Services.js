import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='fas fa-angle-left'></i>",
        "<i class='fas fa-angle-right'></i>"
    ],
    responsive: {
        0: {
            items:1,
        },
        768: {
            items:2,
        },
        1200: {
            items:3,
        }
    }
}

class Services extends Component {

    state = { display:false};

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <section className="services-area ptb-100 pt-0">
                <div className="container">
                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                            className="services-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="single-services">
                                    <i className="fas fa-laptop"></i>
                                    <h3>Graphic Design</h3>
                                    <p>Working in visual motion graphics and knowledge in package Adobe</p>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-services">
                                    <i className="fas fa-mobile-alt"></i>
                                    <h3>Web Development and Web Design</h3>
                                    <p>Knowledge of the most advenced softwares as React, Next, GraphQl...</p>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-services">
                                    <i className="fas fa-rocket"></i>
                                    <h3>Branding Identity</h3>
                                    <p>Focused in the client experience</p>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-services">
                                    <i className="fas fa-camera"></i>
                                    <h3>Photography</h3>
                                    <p>Passionated and graduated as a Photographer</p>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-services">
                                    <i className="fab fa-sketch"></i>
                                    <h3>Sketch</h3>
                                    <p>With 15 years of experience in Graphic Design, make easy with XD to create agile dedicated UX/UI experiences fo the client</p>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;

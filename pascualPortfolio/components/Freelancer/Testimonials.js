import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
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

class Testimonials extends Component {
    state = { display:false};

    componentDidMount(){ 
        this.setState({ display: true }) 
    }
    render() {
        return (
            <section id="testimonials" className="feedback-area-two ptb-100">
                <div className="container">
                    <div className="freelancer-section-title">
                        <h2>What People <span>Say</span></h2>
                        <p>Introducing people who I've been working with</p>
                    </div>

                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                            className="feedback-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="feedback-item">
                                    <img src={require("../../images/Israel.jpg")} alt="client" />
                                    <p>"It was amazing to work with Pascual. I just updated my site and, WoW, it was SO SIMPLE. I am blown away. Thanks for being so awesome. High fives!"</p>

                                    <div className="client-info">
                                        <h3>Israel Garcia</h3>
                                        <span>Rolex</span>
                                    </div>

                                    <i className="fas fa-quote-left"></i>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="feedback-item">
                                    <img src={require("../../images/kamila.jpg")} alt="client" />
                                    <p>"When we lunch our website it was like a snowball effect. We grew quickly. My new site is so much faster and easier to work with than my old site. It was a pleasure to work with Pascual and will recommended 100%"</p>

                                    <div className="client-info">
                                        <h3>Kamila Ptaszynska </h3>
                                        <span>Ashurst</span>
                                    </div>

                                    <i className="fas fa-quote-left"></i>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="feedback-item">
                                    <img src={require("../../images/jose.jpg")} alt="client" />
                                    <p>"We developed a great partnership with Pascual as a Freelancer and his dedication to our website is evident in all aspects of the site. We appreciate his attention to detail and creative approach to bringing our new exhibit to life online"</p>

                                    <div className="client-info">
                                        <h3>Jose Castro</h3>
                                        <span>Digital Arquitect</span>
                                    </div>

                                    <i className="fas fa-quote-left"></i>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;

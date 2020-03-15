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

class PhotographyShop extends Component {

    state = { display:false};

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <section className="services-area ptb-100 pt-0">
                <div className="container" style={{marginTop: "20px"}}>
                <h1  className="single-blog-item" style={{margin: "20px", padding:"40px"}}>Shop                
                    <h5 style={{paddingTop: "20px"}}>Buy clicking in the picture you like</h5>
                </h1>
                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                            className="services-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="single-services single-blog-item">
                                    <i className="fas fa-camera"></i>
                                    <h3>London Eye</h3>
                                    <div className="blog-image"><a href='https://fineartamerica.com/featured/fire-pascual-vila.html'><img class='imageShare' src='https://fineartamerica.com/images/rendered/share/29584689&domainId=1' alt='Photography Prints' title='Photography Prints'></img></a></div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-services single-blog-item">
                                    <i className="fas fa-camera"></i>
                                    <h3>Deer</h3>
                                    <div className="blog-image"><a href='https://fineartamerica.com/featured/deer-pascual-vila.html'><img class='imageShare' src='https://render.fineartamerica.com/images/rendered/share/29584931&domainId=1' alt='Photography Prints' title='Photography Prints'></img></a></div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-services single-blog-item">
                                    <i className="fas fa-camera"></i>
                                    <h3>Deer BnW</h3>
                                    <div className="blog-image"><a href='https://fineartamerica.com/featured/deer-bnw-pascual-vila.html'><img class='imageShare' src='https://fineartamerica.com/images/rendered/share/29589828&domainId=1' alt='Art Prints' title='Art Prints'></img></a></div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-services single-blog-item">
                                    <i className="fas fa-camera"></i>
                                    <h3>Ballons</h3>
                                    <div className="blog-image"><a href='https://fineartamerica.com/featured/ballons-pascual-vila.html'><img class='imageShare' src='https://fineartamerica.com/images/rendered/share/29589879&domainId=1' alt='Art Prints' title='Art Prints'></img></a></div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-services single-blog-item">
                                    <i className="fab fa-camera"></i>
                                    <h3>Batersea Park, London</h3>
                                    <div className="blog-image"><a href='https://fineartamerica.com/featured/battersea-pascual-vila.html'><img class='imageShare' src='https://fineartamerica.com/images/rendered/share/29596225&domainId=1' alt='Art Prints' title='Art Prints'></img></a></div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-services single-blog-item">
                                    <i className="fab fa-camera"></i>
                                    <h3>Bristol</h3>
                                    <div className="blog-image"><a href='https://fineartamerica.com/featured/bristol-pascual-vila.html'><img class='imageShare' src='https://fineartamerica.com/images/rendered/share/29596257&domainId=1' alt='Art Prints' title='Art Prints'></img></a></div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-services single-blog-item">
                                    <i className="fab fa-camera"></i>
                                    <h3>Bristol</h3>
                                    <div className="blog-image"><a href='https://fineartamerica.com/featured/1-bristol-pascual-vila.html'><img class='imageShare' src='https://fineartamerica.com/images/rendered/share/29596293&domainId=1' alt='Sell Art Online' title='Sell Art Online'></img></a></div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-services single-blog-item">
                                    <i className="fab fa-camera"></i>
                                    <h3>Wroclaw, Poland</h3>
                                    <div className="blog-image"><a href='https://fineartamerica.com/featured/wroclaw-pascual-vila.html'><img class='imageShare' src='https://fineartamerica.com/images/rendered/share/29596378&domainId=1' alt='Photography Prints' title='Photography Prints'></img></a></div>
                                </div>
                            </div>                            
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </section>
        );
    }
}

export default PhotographyShop;

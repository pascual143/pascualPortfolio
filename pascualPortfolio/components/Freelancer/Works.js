import React, { Component } from 'react';
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';
import Link from 'next/link';

const isServer = typeof window === 'undefined'
const mixitup = !isServer ? require('mixitup') : null

const images = [
    require("../../images/munch.jpg"),
    require("../../images/thetraveloco.jpg"),
    require("../../images/Clyma.jpg"),
    require("../../images/SearchMovie.jpg"),
    require("../../images/musicdb.jpg"),
    require("../../images/powergym.jpg") 
];

class Works extends Component {

    state = {
        photoIndex: 0,
        isOpen: false
    };

    componentDidMount() {
        mixitup("#mix-wrapper", {
            animation: {
                effects: "fade rotateZ(0deg)",
                duration: 700
            },
            classNames: {
                block: "programs",
                elementFilter: "filter-btn",
            },
            selectors: {
                target: ".mix-target"
            }
        });
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <section id="portfolio" className="portfolio-area ptb-100 bg-f9f9f9">
                <div className="container">
                    <div className="freelancer-section-title">
                        <h2>My Latest <span>Work</span></h2>
                        <p>Have a look in some of my real projects and some personal projects that I made to learn, work and just to have fun.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="shorting-menu">
                                <button className="filter" data-filter="all"><a href="https://protected-shore-92697.herokuapp.com/projects" target="_blank">All</a></button>
                                <button className="filter" data-filter=".design"><a href="https://protected-shore-92697.herokuapp.com/projects" target="_blank">React</a></button>
                                <button className="filter" data-filter=".seo"><a href="https://protected-shore-92697.herokuapp.com/projects" target="_blank">JavaScript</a></button>
                                <button className="filter" data-filter=".branding"><a href="https://protected-shore-92697.herokuapp.com/projects" target="_blank">PHP</a></button>
                                <button className="filter" data-filter=".print"><a href="https://protected-shore-92697.herokuapp.com/projects" target="_blank">GraphQl</a></button>
                                <button className="filter" data-filter=".video"><a href="https://protected-shore-92697.herokuapp.com/projects" target="_blank">MongoDB</a></button>
                                <button className="filter" data-filter=".html"><a href="https://protected-shore-92697.herokuapp.com/projects" target="_blank">HTML/CSS</a></button>
                                <button className="filter" data-filter=".logos"><a href="https://protected-shore-92697.herokuapp.com/projects" target="_blank">Logos</a></button>
                                <button className="filter" data-filter=".motion"><a href="https://protected-shore-92697.herokuapp.com/projects" target="_blank">Motion</a></button>
                            </div>
                        </div>
                    </div>

                    <div className="shorting">
                        <div className="row" id="mix-wrapper">
                            <div className="col-lg-4 col-md-6 mix design mix-target">
                                <div className="single-work">
                                    <Link href="#" style={{width: "300px", height:"300"}}>
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ photoIndex: 0, isOpen: true })}}
                                        ></a>
                                    </Link>

                                    <div className="work-image" style={{width: "300px", height:"300"}}>
                                        <img src={images[0]} alt="work-image" />

                                        <div className="work-overlay">
                                            <a href="https://protected-shore-92697.herokuapp.com/projects" target="_blank"><h3>Web Development</h3></a>
                                            <span>REACT/MongoDB</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mix print seo mix-target">
                                <div className="single-work" style={{width: "300px", height:"300"}}>
                                    <Link href="#" style={{width: "300px", height:"300"}}>
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ photoIndex: 1, isOpen: true })}}
                                        ></a>
                                    </Link>

                                    <div className="work-image" style={{width: "300px", height:"300"}}>
                                        <img src={images[1]} alt="work-image" />

                                        <div className="work-overlay">
                                        <a href="https://protected-shore-92697.herokuapp.com/projects" target="_blank"><h3>Wed Design</h3></a>
                                            <span>Wordpress, AWS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mix video branding mix-target">
                                <div className="single-work" style={{width: "300px", height:"300"}}>
                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ photoIndex: 2, isOpen: true })}}
                                        ></a>
                                    </Link>

                                    <div className="work-image" style={{width: "300px", height:"300"}}>
                                        <img src={images[2]} alt="work-image" />

                                        <div className="work-overlay">
                                            <a href="https://protected-shore-92697.herokuapp.com/projects" target="_blank"><h3>Web Development</h3></a>
                                            <span>Python/ Flask</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mix design print mix-target">
                                <div className="single-work" style={{width: "300px", height:"300"}}>
                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ photoIndex: 3, isOpen: true })}}
                                        ></a>
                                    </Link>

                                    <div className="work-image" style={{width: "300px", height:"300"}}>
                                        <img src={images[3]} alt="work-image" />

                                        <div className="work-overlay">
                                            <a href="https://protected-shore-92697.herokuapp.com/projects" target="_blank"><h3>Web Development</h3></a>
                                            <span>React/ API</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mix branding video mix-target">
                                <div className="single-work" style={{width: "300px", height:"300"}}>
                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ photoIndex: 4, isOpen: true })}}
                                        ></a>
                                    </Link>

                                    <div className="work-image" style={{width: "300px", height:"300"}}>
                                        <img src={images[4]} alt="work-image" />

                                        <div className="work-overlay">
                                            <a href="https://protected-shore-92697.herokuapp.com/projects" target="_blank"><h3>Web Development</h3></a>
                                            <span>React/ MongoDB</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mix seo design mix-target">
                                <div className="single-work" style={{width: "300px", height:"300"}}>
                                    <Link href="#">
                                        <a 
                                            className="popup-btn"
                                            onClick={e => {e.preventDefault(); this.setState({ photoIndex: 5, isOpen: true })}}
                                        ></a>
                                    </Link>

                                    <div className="work-image">
                                        <img src={images[5]} alt="work-image" />

                                        <div className="work-overlay">
                                            <a href="https://protected-shore-92697.herokuapp.com/projects" target="_blank"><h3>Web Design</h3></a>
                                            <span>HTML/ CSS/ JavaScript</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        imageTitle={photoIndex + 1 + "/" + images.length}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length
                        })
                        }
                        onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + 1) % images.length
                        })
                        }
                    />
                )}
            </section>
        );
    }
}

export default Works;

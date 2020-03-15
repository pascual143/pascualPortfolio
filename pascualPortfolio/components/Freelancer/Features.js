import React, { Component } from 'react';

class Features extends Component {
    render() {
        return (
            <section id="features" className="boxes-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-box">
                                <i className="fas fa-bezier-curve"></i>
                                <h3>Stunning Design</h3>
                                <p>Creativity is the basis of our strategy, of our mindset and is an essential part of our work environment. This is how we design a website, a logo or an image that are considered brands by themselves.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-box">
                                <i className="fas fa-filter"></i>
                                <h3>Intelligent Interactions</h3>
                                <p>Textual, Visual and Agile content to create a stunning UX/UI focused on the client</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-box">
                                <i className="fas fa-headset"></i>
                                <h3>Sustainable</h3>
                                <p>UNIque KOKO© offers a unique design experience for small and medium business, delivered with originality, ingenuity and imagination by providing the highest quality of custom web development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;

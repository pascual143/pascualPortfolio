import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section id="about" className="about-area-two ptb-100">
                <div className="container">
                    <div className="freelancer-section-title">
                        <h2>About <span>Me</span></h2>
                        <p>Enjoy turning the complex problem into a simple.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="freelancer-about-content">
                                <h3>Hello!</h3>
                                <span>I’m Pascual Vila, a freelance Full Stack Web Developer.</span>
                                <p>Creative and ambitious seeking to apply knowledge in
                        JavaScript UI technologies – REACT, Next, NodeJs,
                        GraphQl - and creating RESTful web services to make a
                        direct impact on the company’s business and clients.
                        After gaining experience in Junior Web Developer hunting
                        for another challenges and looking to find the industry
                        role as a Web Developer or Software Engineer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;

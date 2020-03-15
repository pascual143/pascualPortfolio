import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section id="contact" className="contact-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="contact-content">
                                <h3>Leave a <span>Message</span></h3>
                                <h6>Feel free to send a message.</h6>
                                <p>Client, company, recruiter, or your have simple question about coding or design, will be a pleasure to answer them</p>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <form 
                                id="contactForm" 
                                className="freelancer-contact-form"
                                action="mailto:pascual.vila.segura@gmail.com" 
                                method="post" 
                                enctype="text/plain">
                                
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" placeholder="Name" className="form-control" required data-error="Please enter your name" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input name="mail" type="email" placeholder="Email" className="form-control" required data-error="Please enter your email" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea placeholder="Message" className="form-control" cols="30" rows="5" required data-error="Write your message" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <button  action="mailto:pascual.vila.segura@gmail.com" method="get" type="submit" className="btn btn-primary">Send Message</button>
                                        <div style={{margin: "20px"}}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1579981313297!5m2!1sen!2suk" width="600" height="450" frameborder="0" allowfullscreen=""></iframe></div>
                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                        <div className="clearfix"></div>
                                        
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;

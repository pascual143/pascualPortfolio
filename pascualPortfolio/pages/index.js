import React, { Component } from 'react';
// import Navbar from '../components/Layouts/Navbar';
// import Footer from '../components/Layouts/Footer';
// import Banner from '../components/Agency/Banner';
// import Partner from '../components/Agency/Partner';
// import About from '../components/Agency/About';
// import Features from '../components/Agency/Features';
// import Research from '../components/Agency/Research';
// import Cta from '../components/Agency/Cta';
// import Funfact from '../components/Agency/Funfact';
// import Testimonials from '../components/Agency/Testimonials';
// import Pricing from '../components/Agency/Pricing';
// import Blog from '../components/Agency/Blog';
// import Contact from '../components/Agency/Contact';
// import Subscribe from '../components/Agency/Subscribe';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import Banner from '../components/Freelancer/Banner';
import Features from '../components/Freelancer/Features';
import About from '../components/Freelancer/About';
import Services from '../components/Freelancer/Services';
import Skill from '../components/Freelancer/Skill';
import Works from '../components/Freelancer/Works';
import Funfact from '../components/Freelancer/Funfact';
import Testimonials from '../components/Freelancer/Testimonials';
import Interests from '../components/Freelancer/Interests';
import Cta from '../components/Freelancer/Cta';
import Blog from '../components/Freelancer/Blog';
import Contact from '../components/Freelancer/Contact';
import Footer from '../components/Freelancer/Footer';

class Index extends Component {
    render() {
        return (
            // <React.Fragment>
            //     <Navbar />
            //     <Banner />
            //     <Partner />
            //     <About />
            //     <Features />
            //     <Research />
            //     <Cta />
            //     <Funfact />
            //     <Testimonials />
            //     <Pricing />
            //     <Blog />
            //     <Contact />
            //     <Subscribe />
            //     <Footer />
            // </React.Fragment>
            <React.Fragment>
            <NavbarTwo />
            <Banner />
            <Features />
            <About />
            <Services />
            <Skill />
            <Works />
            <Funfact />
            <Testimonials />
            <Interests />
            <Cta />
            <Blog />
            <Contact />
            <Footer />
        </React.Fragment>
        );
    }
}

export default Index;

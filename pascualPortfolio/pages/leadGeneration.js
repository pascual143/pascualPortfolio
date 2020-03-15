import React, { Component } from 'react';
import NavbarFour from '../components/Layouts/NavbarFour';
import Footer from '../components/Layouts/Footer';
import BannerLead from '../components/LeadGeneration/BannerLead';
import Partner from '../components/LeadGeneration/Partner';
// import About from '../components/Software/About';
import Features from '../components/LeadGeneration/Features';
// import Pricing from '../components/Software/Pricing';
import Cta from '../components/LeadGeneration/Cta';
import Testimonials from '../components/Freelancer/Testimonials';
// import Trial from '../components/Software/Trial';
// import Blog from '../components/Software/Blog';
// import Subscribe from '../components/Software/Subscribe';
// import AboutAgency from '../components/Agency/About';
import Faq from '../components/LeadGeneration/Faq';
import Services from '../components/LeadGeneration/Services';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarFour />
                <BannerLead />
                <Services />
                <Features />
                <Faq />
                <Testimonials />
                <Cta />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;

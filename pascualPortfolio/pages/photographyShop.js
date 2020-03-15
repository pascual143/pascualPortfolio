import React, { Component } from 'react';
import NavbarNine from '../components/Layouts/NavbarNine';
import Footer from '../components/Freelancer/Footer';
import PhotographyShop from '../components/PhotographyShop/PhotographyShop';
import Features from '../components/PhotographyShop/Features';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarNine />
                <Features />
                <PhotographyShop />
                <Features />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;

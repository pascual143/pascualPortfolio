import React, { Component } from 'react';
import Link from 'next/link';
import SeoSection from './SeoSection';

class NavbarSix extends Component {
    render() {
        return (
            <React.Fragment>
            <SeoSection 
                title="Unique koko - Error"
                desc="Unique koko portfolio agency "
                url="https://pascualvila.herokuapp.com/"
            />
            <nav id="navbar" className="navbar navbar-expand-lg navbar-style-three navbar-light bg-light">
                <div className="container">
                    <Link href="/freelancer">
                        <a className="navbar-brand">
                            <img src={require('../../images/logos/5.png')} alt="logo" />
                        </a>
                    </Link>
                </div>
            </nav>
            </React.Fragment>
        );
    }
}

export default NavbarSix;
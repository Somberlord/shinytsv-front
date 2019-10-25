import React from 'react';
import Navbar from './Navbar'

function Hero(props) {
    return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-1">Shiny TSV</h1>
                        <h2 className="subtitle is-2">La loterie des oeufs shiny</h2>
                    </div>
                </div>
                <Navbar />
            </section>
            
    );
}

export default Hero;
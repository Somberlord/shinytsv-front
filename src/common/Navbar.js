import React from 'react';

function Navbar(props) {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            </div>
            <div className="navbar-menu is-active">
                <div className="navbar-start">
                        <a className="navbar-item" href="/">Accueil</a>
                        <a className="navbar-item" href="/">TSV</a>
                </div>
                <div className="navbar-end">
                    <a className="navbar-item" href="/">Connexion</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
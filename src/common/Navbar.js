import React from 'react';

function Navbar(props) {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
            </div>
            <div class="navbar-menu is-active">
                <div class="navbar-start">
                        <a class="navbar-item" href="/">Accueil</a>
                        <a class="navbar-item" href="/">TSV</a>
                </div>
                <div class="navbar-end">
                    <a class="navbar-item" href="/">Connexion</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
import React from 'react';
import Playerlist from './Playerlist'
import Tsvlist from './Tsvlist'

class Tsvdisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerlist: ["Capture", "Somberlord", "TinyDoowy"],
            tsvdata: [{name: 'Zorua', gender: 'M', nature: 'Modeste', ability: 'Illusion', ball: 'Honor Ball', lp: 31, atk: 31, def: 31, spatk: 31, spdef: 31, spe: 31, hp: 'Dark', atk1: 'Tricherie', atk2: 'Coup Bas', atk3: 'Danse lames', atk4: 'Machination'},{name: 'Zorua', gender: 'M', nature: 'Modeste', ability: 'Illusion', ball: 'Honor Ball', lp: 31, atk: 31, def: 31, spatk: 31, spdef: 31, spe: 31, hp: 'Dark', atk1: 'Tricherie', atk2: 'Coup Bas', atk3: 'Danse lames', atk4: 'Machination'},{name: 'Zorua', gender: 'M', nature: 'Modeste', ability: 'Illusion', ball: 'Honor Ball', lp: 31, atk: 31, def: 31, spatk: 31, spdef: 31, spe: 31, hp: 'Dark', atk1: 'Tricherie', atk2: 'Coup Bas', atk3: 'Danse lames', atk4: 'Machination'},{name: 'Zorua', gender: 'M', nature: 'Modeste', ability: 'Illusion', ball: 'Honor Ball', lp: 31, atk: 31, def: 31, spatk: 31, spdef: 31, spe: 31, hp: 'Dark', atk1: 'Tricherie', atk2: 'Coup Bas', atk3: 'Danse lames', atk4: 'Machination'}],
            activePlayer: null,
        }
    }

    render() {
        return (
            <section className="section">
                <div className="container">
                    <Playerlist playerlist={this.state.playerlist} />
                    <Tsvlist tsvdata={this.state.tsvdata} />
                </div>
            </section>
        );
    }
}

export default Tsvdisplay;
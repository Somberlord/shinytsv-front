import React from 'react';
import Playerlist from './Playerlist'
import Tsvlist from './Tsvlist'
import Tsvdetails from './Tsvdetails'
import axios from 'axios';
import config from '../config/config';

class Tsvdisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerlist: [],
            activePlayer: null,
            tsvdata: [],
            activetsv: null,
        }
        axios.get(config.host + '/users')
           .then(response => {
               var state = Object.assign({}, this.state, {playerlist: response.data});
               this.setState(state);
           });

        this.playerSelected = this.playerSelected.bind(this);
        this.handleTsvClick = this.handleTsvClick.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    playerSelected(event) {
        const playerid = event.target.value;
        axios.get(config.host + '/tsvlist/' + playerid)
            .then(response => {
                var state = Object.assign({}, this.state, {tsvdata: response.data, activePlayer:playerid});
                this.setState(state);
            });
    }

    handleTsvClick(tsvid) {
        var state = Object.assign({}, this.state, {activetsv: tsvid});
        this.setState(state);
    }

    handleCloseModal(event) {
        this.handleTsvClick(null);
    }

    render() {
        return (
            <section className="section">
                <div className="container">
                    <Playerlist playerlist={this.state.playerlist} onChange={this.playerSelected} />
                    <Tsvlist tsvdata={this.state.tsvdata} onTsvClick={this.handleTsvClick} activetsv={this.state.activetsv} />
                    <Tsvdetails tsvid={this.state.activetsv} tsvdata={this.state.tsvdata} onclose={this.handleCloseModal} />
                </div>
            </section>
        );
    }
}

export default Tsvdisplay;
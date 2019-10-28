import React from 'react';
import Playerlist from './Playerlist'
import Tsvlist from './Tsvlist'
import axios from 'axios';

class Tsvdisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerlist: [],
            tsvdata: [],
            activePlayer: null,
        }
        axios.get('http://localhost:3001/users')
           .then(response => {
               console.log(response);
               var state = Object.assign({}, this.state, {playerlist: response.data});
               this.setState(state);
           });

        this.playerSelected = this.playerSelected.bind(this);
    }

    playerSelected(event) {
        axios.get('http://localhost:3001/tsvlist/' + event.target.value)
            .then(response => {
                console.log(response);
                var state = Object.assign({}, this.state, {tsvdata: response.data});
                this.setState(state);
            });
    }

    render() {
        return (
            <section className="section">
                <div className="container">
                    <Playerlist playerlist={this.state.playerlist} onChange={this.playerSelected} />
                    <Tsvlist tsvdata={this.state.tsvdata} />
                </div>
            </section>
        );
    }
}

export default Tsvdisplay;
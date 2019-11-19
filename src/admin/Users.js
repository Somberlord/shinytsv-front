import React from 'react';
import UsersList from './UsersList';
import AddUser from './AddUser';
import axios from 'axios';

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            activeUser: null,
            newplayeractive: false,
        }
    
        this.toggleNewPlayer = this.toggleNewPlayer.bind(this);
        this.addPlayer = this.addPlayer.bind(this);
        this.loadPlayers = this.loadPlayers.bind(this);

        this.loadPlayers();
    }

    loadPlayers() {
        axios.get('http://localhost:3001/users')
           .then(response => {
               var state = Object.assign({}, this.state, {userList: response.data});
               this.setState(state);
           });
    }

    toggleNewPlayer(event) {
        var state = Object.assign({}, this.state, {newplayeractive: !this.state.newplayeractive});
        this.setState(state);
    }

    addPlayer(values) {
        //event.preventDefault();
        // todo axios post
        console.log("axios post " + values);
        console.log(values);
        this.toggleNewPlayer(null);
        axios.post('http://localhost:3001/users', {values})
            .then(response => {
                console.log(response);
                this.loadPlayers();
            });
    }

    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="buttons">
                        <button className="button is-link" onClick={this.toggleNewPlayer}>
                            Ajouter un nouveau joueur
                        </button>
                    </div>
                    <UsersList usersList={this.state.userList}/>
                    <AddUser active={this.state.newplayeractive} onclose={this.toggleNewPlayer} onsubmit={this.addPlayer} />
                </div>
            </section>
                
        );
    }
}

export default Users;
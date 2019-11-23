import React from 'react';
import UsersList from './UsersList';
import AdduserModal from './AddUser';
import axios from 'axios';
import config from '../config/config';

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            activeUser: null,
            modalactive: false,
        }
    
        this.toggleNewPlayer = this.toggleModal.bind(this);
        this.addOrUpdatePlayer = this.addOrUpdatePlayer.bind(this);
        this.loadPlayers = this.loadPlayers.bind(this);
        this.editPlayer = this.editPlayer.bind(this);

        this.loadPlayers();
    }

    loadPlayers() {
        axios.get(config.host + '/users')
           .then(response => {
               var state = Object.assign({}, this.state, {userList: response.data});
               this.setState(state);
           });
    }

    toggleModal(val, user) {
        var state = Object.assign({}, this.state, {modalactive: val, activeUser: user});
        this.setState(state);
    }

    addOrUpdatePlayer(values) {
        this.toggleModal(false);
        axios.post(config.host + '/users', {values})
            .then(response => {
                this.loadPlayers();
            });
    }

    editPlayer(user) {
        console.log(user);
        this.toggleModal(true, user);
    }
    

    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="buttons">
                        <button className="button is-link" onClick={() => this.toggleModal(true, null)}>
                            Ajouter un nouveau joueur
                        </button>
                    </div>
                    <UsersList usersList={this.state.userList} 
                                activeuser={this.state.activeUser} 
                                edit={this.editPlayer}/>
                    <AdduserModal active={this.state.modalactive} 
                                    onclose={() => this.toggleModal(false, null)} 
                                    onsubmit={this.addOrUpdatePlayer} 
                                    user={this.state.activeUser} />
                </div>
            </section>
                
        );
    }
}

export default Users;
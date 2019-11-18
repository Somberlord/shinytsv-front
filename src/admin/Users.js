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
        axios.get('http://localhost:3001/users')
           .then(response => {
               var state = Object.assign({}, this.state, {userList: response.data});
               this.setState(state);
           });
           this.toggleNewPlayer = this.toggleNewPlayer.bind(this);
    }

    toggleNewPlayer(event) {
        var state = Object.assign({}, this.state, {newplayeractive: !this.state.newplayeractive});
        this.setState(state);
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
                    <AddUser active={this.state.newplayeractive} onclose={this.toggleNewPlayer}/>
                </div>
            </section>
                
        );
    }
}

export default Users;
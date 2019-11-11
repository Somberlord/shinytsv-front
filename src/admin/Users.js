import React from 'react';
import UsersList from './UsersList';
import axios from 'axios';

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            activeUser: null,
        }
        axios.get('http://localhost:3001/users')
           .then(response => {
               var state = Object.assign({}, this.state, {userList: response.data});
               this.setState(state);
           });
    }

    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="buttons">
                        <button className="button is-link">
                            Ajouter un nouveau joueur
                        </button>
                    </div>
                    <UsersList usersList={this.state.userList}/>
                </div>
            </section>
                
        );
    }
}

export default Users;
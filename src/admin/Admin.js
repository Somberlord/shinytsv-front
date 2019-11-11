import React from 'react';
import Users from './Users';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

function Admin(props) {

    return (
        <Router>
            <Switch>
                <Route path="/admin/users" component={Users} />
            </Switch>
        </Router>
            
    );
}

export default Admin;
import React from 'react';
import Hero from './common/Hero';
import Tsvdisplay from './tsvdisplay/Tsvdisplay';
import Admin from './admin/Admin';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.sass';
import './App.css';
import Notfound from './common/notfound';

function App() {
  return (
    <>
      <Hero />
      <Router>
        <Switch>
          <Route exact path="/" component={Tsvdisplay} />
          <Route path="/admin" component={Admin} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

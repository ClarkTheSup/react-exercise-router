import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import AboutUs from './AboutUs';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">My Profile</Link></li>
            <li><Link to="/aboutUs">About Us</Link></li>
          </ul>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/profile" component={Profile}/>
              <Route exact path="/aboutUs" component={AboutUs}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import AboutUs from './AboutUs';
import Products from './Products';
import ProductsDetail from './ProductsDetail';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <navigator>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/profile">My Profile</Link></li>
              <li><Link to="/aboutUs">About Us</Link></li>
            </ul>
          </navigator>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/products" component={Products}/>
              <Route exact path="/goods" component={Products}/>
              <Route exact path="/profile" component={Profile}/>
              <Route exact path="/aboutUs" component={AboutUs}/>
              <Route path="/products/:item" component={ProductsDetail}/>
              <Route component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

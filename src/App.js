import React from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';


import logo from './logo2.png';
import UserListing from './pages/UserListing/UserListing';
import Home from './pages/Home/Home';
import './App.css';

export default class App extends React.Component {


  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <img src={logo} className="App-logo asda" alt="logo" />
            <h1 className="App-title">
              Payments App
            </h1>
            <nav className="App-nav">
              <NavLink exact to="/" className="App-link" activeClassName="App-link-CurrentPage" >
                Home
              </NavLink>
              <NavLink exact to="/UserListing" className="App-link" activeClassName="App-link-CurrentPage" >
                Users
              </NavLink>
            </nav>
          </header>


          <div className="App-content">
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/UserListing" exact={true} component={() => <UserListing scrollFunction={'this.contentScrollPage'} />} />
            </Switch>
          </div>
        
          <footer className="App-footer">
              <div>
                <h3>This is the Footer Title</h3>
                <p>This is the footer paragraph, to write nothing or anything you want. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae quam mauris. Maecenas convallis luctus sem, euismod rutrum odio tempus ut.</p>
                <small>© 2021 BrandGoesHere. All Rights Reserved.</small>
              </div>
          </footer>

        </BrowserRouter>
      </div>
    );
  };
};

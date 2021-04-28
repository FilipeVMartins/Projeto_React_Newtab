import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';


import logo from './logo.png';
import UserListing from './pages/UserListing/UserListing';
import Home from './pages/Home/Home';
import './App.css';

export default class App extends React.Component {


  handleContentScroll = e => {
    let element = e.target
    console.log('scroll')
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // do something at end of scroll
      console.log('fim do scroll');
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">
              Payments App
            </h1>
            <nav className="App-nav">
              <Link to="/" className="App-link" >
                Home
              </Link>
              <Link to="/UserListing" className="App-link" >
                Users
              </Link>
            </nav>
          </header>


          <div className="App-content" onScroll={this.handleContentScroll}>
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/UserListing" exact={true} component={UserListing} />
               {/*  
              <Route path="/Payment" exact={true} component="" />
              <Route path="/PaymentReceipt" exact={true} component="" />
              */}
            </Switch>
          </div>
        
          <footer className="App-footer">
              <div>
                <h3>This is the Footer Title</h3>
                <p>This is the footer paragraph, to write nothing or anything you want. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae quam mauris. Maecenas convallis luctus sem, euismod rutrum odio tempus ut.</p>
                <small>© 2021 FilipeVMartins. All Rights Reserved.</small>
              </div>
          </footer>

        </BrowserRouter>
      </div>
    );
  };
};

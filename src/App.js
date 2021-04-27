import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';


import logo from './logo.png';
import UserListing from './pages/UserListing/UserListing';
import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Listagem de Usuários
            </p>
            <nav className="App-nav">
              <Link to="/" className="App-link" >
                Home
              </Link>
              <Link to="/UserListing" className="App-link" >
                Usuários
              </Link>
            </nav>
          </header>


          <div className="App-content">
            <Switch>
              <Route path="/" exact={true} component="" />
              <Route path="/UserListing" exact={true} component={UserListing} />
               {/*  
              <Route path="/Payment" exact={true} component="" />
              <Route path="/PaymentReceipt" exact={true} component="" />
              */}
            </Switch>
          </div>
        
          <footer className="App-footer">

          </footer>

        </BrowserRouter>
      </div>
    );
  };
};

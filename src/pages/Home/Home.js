import React from 'react';

import PageTitle from '../../components/PageTitle/PageTitle'

import './Home.css';

export default class Home extends React.Component {

    state = {
        usersData: []
    }




    async componentDidMount(){
        fetch('https://www.mocky.io/v2/5d531c4f2e0000620081ddce', {
            method: 'GET'
        })
        .then(response => response.json())
        .then((responseJson) => {
            this.setState({usersData:responseJson})
        })
    };






  render() {


    return (
    
      <div className="App">

          <PageTitle title="Home" />


          <div className="home-content">
            <p>This is the homepage</p>
          </div>
      </div>




    );
  };
};

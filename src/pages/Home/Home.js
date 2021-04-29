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
    
      <div className="home-content">

          <PageTitle title="Home" />


          <div className="App-description-wrapper">
            <div className="App-description-title">
              <h3>Application Description</h3>
            </div>
            <div className="App-description-text">
              <p>Here i shall tell a bit more about this project. It's based on Picpay's test but with a few more stuff. Using react to build a SPA where a user 
                could use it to pay others users from a list, this list should be brought from an API request. The user then could scroll down the list with infinite scrolling 
                technique, which makes it more mobile friendly rather than clicking paginations, and choose an user to click on its pay button. After that a payment modal would 
                open and then allow the user to input the payment value, choose one of the registered credit cards and click the submit button. When the payment modal is submitted, the 
                application would start an API post request sending along with it the inputed data and the incoming data from the selected user to be paid, this API would answer
                confirmation or failure and a response modal would be shown to the user with the respective confirmation answer.</p>
            </div>
          </div>
      </div>




    );
  };
};

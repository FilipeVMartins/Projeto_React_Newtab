import React from 'react';

import './UserListing.css';

export default class UserListing extends React.Component {

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
            console.log(this.state.usersData)
        })
    };






  render() {


    return (
    
      <div className="App">
          <p>asdasd</p>
          <ul>

        
            {this.state.usersData.map( (user, index) => {

                return (<li >aaaa</li>)
            } )}

          </ul>
      </div>




    );
  };
};

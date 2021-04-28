import React from 'react';

import PageTitle from '../../components/PageTitle/PageTitle'

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
        })

        //window.addEventListener("scroll", (e) => console.log(e.target.scrollHeight)); //funcinou
    };



    


  render() {


    return (
    
      <div className="App-user-listing">

          <PageTitle title="Listagem de Usuários" />


          <div className="user-list">
            {this.state.usersData.map( (user, index) => {

                if (true){

                return (
                    <div className="user-row" key={'user-row-' + index}>
                        <div className="user-wrapper1">
                            <div className="user-data-wrapper">
                                <figure>
                                    <img src={user.img} alt={"Foto do Usuário" + user.name} />
                                </figure>

                                <div className="user-data">
                                    <div className="user-name">{user.name}</div>
                                    <div className="user-id-username">ID: {user.id} - Username: {user.username}</div>
                                </div>
                            </div>

                            <div>
                                <button className="pay-button">Pagar</button>
                            </div>
                        </div>

                    </div>
                )}
            })}

          </div>
      </div>




    );
  };
};

import React from 'react';

import PageTitle from '../../components/PageTitle/PageTitle'
import PaymentModal from '../../components/PaymentModal/PaymentModal'
import ClickButton from '../../components/ClickButton/ClickButton'

import './UserListing.css';

export default class UserListing extends React.Component {

    state = {
        usersData: [],
        contentScrollIndex: 6 // because it starts rendering 6 rows by default
    }

    
    handleContentScroll = e => {
        let element = e.target
        // If: (Height of the whole element including the hidden part due to overflow) - (Measurement of the distance from the element's top to its topmost visible content) === (Height of the visible part on scroll)
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            // do something at end of scroll
            // check if there are users still left to be rendered, that is, if the last rendered index is less or equal to the existing number of users
            if (this.state.contentScrollIndex <= this.state.usersData.length){
                
                console.log(`end of scroll at scroll-index ${this.state.contentScrollIndex} rendering new users...`);
                this.setState({contentScrollIndex: this.state.contentScrollIndex + 4 });

                // call render function (i don't know if it's realy necessary, first time i did it, it seemed that i had to use it to render new scrollable elements upon 'contentScrollIndex' value change, but now i've tried to remove it and the render of new elements automatically happened)
                // this.render();
            } else {
                console.log(`end of scroll at scroll-index ${this.state.contentScrollIndex} there are no more users to be rendered...`);
            };
        };
    };



    async componentDidMount(){
        fetch('https://www.mocky.io/v2/5d531c4f2e0000620081ddce', {
            method: 'GET'
        })
        .then(response => response.json())
        .then((responseJson) => {
            this.setState({usersData:responseJson})
        })
    };


    contentScrollToTop = e => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        document.querySelector('.user-list').scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }

    showPaymentModal (){
        
    }
    


  render() {


    return (
    
      <div className="App-user-listing">

          <PageTitle title="Listagem de Usuários" scroll="true" scrollFunction={this.contentScrollToTop} />
          

          <div className="user-list" onScroll={this.handleContentScroll}>
            {this.state.usersData.map( (user, index) => {

                // because it starts rendering 6 rows by default
                if (index < this.state.contentScrollIndex){
                    return (
                        <div className="user-row" key={'user-row-' + index}>
                            <div className="user-wrapper">
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
                                    <ClickButton classN="pay-button" onClickFunction={this.showPaymentModal()} displayText="Pagar" />
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
          </div>




          <PaymentModal username="testeuser"></PaymentModal>
      </div>




    );
  };
};

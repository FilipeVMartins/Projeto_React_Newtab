import React from 'react';

import ClickButton from '../../components/ClickButton/ClickButton'

import './PaymentModal.css';

export default class PaymentModal extends React.Component {


    state ={
        availableCards: [
            {
            card_number: '1111111111111111',
            cvv: 789,
            expiry_date: '01/18',
            },
            {
            card_number: '4111111111111234',
            cvv: 123,
            expiry_date: '01/20',
            }
        ],
        // the ideal here would be make this a component, and use a call back function to bring the submitted data to the parent's state, since working data updates in nested objects is fighting agaisn't the react. source: https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react#51136076
        submittedFormData: {
            imputedValue: '',
            selectedCard: ''
        }
    };



    
    sendPaymentRequest = () => {


        console.log('sending payment request')
        console.log(this.state.submittedFormData)
/*

        body = JSON.stringify( {
            // Card Info
            card_number: string,
            cvv: number,
            expiry_date: string,
        
            // Destination User ID
            destination_user_id: number,
        
            // Value of the Transaction
            value: number
        } );





        fetch('https://www.mocky.io/v2/5d531c4f2e0000620081ddce', {
            method: 'POST',
            body: body
        })
        .then(response => response.json())
        .then((responseJson) => {
            this.setState({usersData:responseJson})
        })
        */
    }
    

    

      //transaction
      // https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989

      // Payload:
/*
    interface TransactionPayload {
        // Card Info
        card_number: string;
        cvv: number;
        expiry_date: string;
    
        // Destination User ID
        destination_user_id: number;
    
        // Value of the Transaction
        value: number;
    } */



    render() {
  
      return (

        <div className="payment-modal-wrapper" style={{display: this.props.display}}>
            <div className="payment-modal">

                <div className="modal-title">
                    <p>Pagamento para <span>{this.props.username}</span></p>
                    <i className="fa fa-times-circle" aria-hidden="true" onClick={this.props.closeModal}></i>
                </div>

                <div className="modal-body">
                    <form>
                        <div>
                            <input type='number' placeholder="R$ 0,00" onChange={ event => this.setState(state => (state.submittedFormData.inputValue = event.target.value, state)) }></input>
                        </div>
                        <div>
                            <select onChange={ event => this.setState(state => (state.submittedFormData.selectedCard = event.target.value, state)) } >
                                <option value="" selected disabled hidden>Selecione um cartão</option>
                                {this.state.availableCards.map( (card) => {
                                    return (
                                        <option value={card.card_number.substr(-4)}>Cartão com final {card.card_number.substr(-4)}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <ClickButton classN="pay-button" type="submit" displayText="Pagar" onClickFunction={this.sendPaymentRequest} />
                        </div>
                    </form>
                </div>
                
            </div>
            <div className="screen-block">

            </div>
        </div>
      )
    }
}
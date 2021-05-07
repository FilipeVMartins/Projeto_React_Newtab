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
        // the ideal here would be make this simple properties or turn it into a component, and use a call back function to bring the submitted data to the parent's state, since working data updates in nested objects is fighting agaisn't the react. source: https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react#51136076
        submittedFormData: {
            inputValue: '',
            selectCard: ''
        }
    };



    // validations
    validateCard() {
        // if card doesn't exist
        let selectedCard = {
            card_number: false,
            cvv: false,
            expiry_date: false,
        };

        // validate inputed card
        this.state.availableCards.forEach( (card) => {
            // check if there is any card with the informed final digits, if yes then return its full value
            if (card.card_number.substr(-4) == this.state.submittedFormData.selectCard ) {
                selectedCard = card;
            }
        });
        return selectedCard;
    }

    validateValue(){
        let inputValue = this.state.submittedFormData.inputValue

        // value to be sent can not be empty
        if (inputValue == '' || inputValue == undefined){
            inputValue = false
        }

        return inputValue
    }
    // end validations


    // payment form send
    sendPaymentRequest = (event) => {
        event.preventDefault();

        console.log('sending payment request')

        let selectedCard = this.validateCard();
        let sentValue = this.validateValue();
        let body = {
            // Card Info
            card_number: selectedCard.card_number,
            cvv: selectedCard.cvv,
            expiry_date: selectedCard.expiry_date,
        
            // Destination User ID
            destination_user_id: this.props.clickedUser.id,
        
            // Value of the Transaction
            value: sentValue
        };

        

        console.log(body)

        body = JSON.stringify( body );
        

/*



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
                    <p>Pagamento para <span>{this.props.clickedUser.name}</span></p>
                    <i className="fa fa-times-circle" aria-hidden="true" onClick={this.props.closeModal}></i>
                </div>

                <div className="modal-body">
                    <form>
                        <div>
                            <input type='number' placeholder="R$ 0,00" onChange={ event => this.setState(state => (state.submittedFormData.inputValue = event.target.value, state)) }></input>
                        </div>
                        <div>
                            <select defaultValue="" onChange={ event => this.setState(state => (state.submittedFormData.selectCard = event.target.value, state)) } >
                                <option value="" disabled hidden>Selecione um cartão</option>
                                {this.state.availableCards.map( (card, index) => {
                                    return (
                                        <option value={card.card_number.substr(-4)} key={"select-opt-"+index} >Cartão com final {card.card_number.substr(-4)}</option>
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
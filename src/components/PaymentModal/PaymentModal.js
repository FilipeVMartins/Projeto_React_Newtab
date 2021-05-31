import React from 'react';

import ClickButton from '../../components/ClickButton/ClickButton'

import './PaymentModal.css';

export default class PaymentModal extends React.Component {


    state = {
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
            if (card.card_number.substr(-4) === this.state.submittedFormData.selectCard ) {
                selectedCard = card;
            }
        });
        return selectedCard;
    }

    validateValue(){
        let inputValue = this.state.submittedFormData.inputValue

        // value to be sent can not be empty
        if (inputValue === '' || inputValue === undefined){
            inputValue = false
        }

        return inputValue
    }

    printValidationMsg(body){
        let validationFail = false

        // hides small tags with validation messages
        document.querySelector('#select-card-wrapper *:nth-child(1)').style.display = 'none';
        document.querySelector('#input-value-wrapper *:nth-child(1)').style.display = 'none';

        if (body.card_number === false){
            document.querySelector('#select-card-wrapper *:nth-child(1)').style.display = 'block';
            validationFail = true;
        }

        if (body.value === false){
            document.querySelector('#input-value-wrapper *:nth-child(1)').style.display = 'block';
            validationFail = true;
        }
        return validationFail;
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


        // validation fail messages
        let validationFail = this.printValidationMsg(body);
        if (validationFail === true) {
            console.log('sending payment request failed')
            return
        }

        // close payment modal
        this.closeModal();

        // convert body object to string to be attached to the post request
        body = JSON.stringify( body );
        
        // send payment post
        fetch('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', {
            method: 'POST',
            body: body
        })
        .then(response => response.json())
        .then((paymentReceiptResponse) => {
            // send received json to parent component
            this.props.paymentReceiptCallback(paymentReceiptResponse);
        })
    };

    // function to restore modal form state every way it's closed
    closeModal = () => {
        this.props.closeModal();

        // document.querySelector("form").reset(); //not needed after setting the component controlled by value
        // clean payment modal form after closing
        this.setState({submittedFormData: {
            inputValue: '',
            selectCard: ''
        }});

        // hides small tags with validation messages
        document.querySelector('#select-card-wrapper *:nth-child(1)').style.display = 'none';
        document.querySelector('#input-value-wrapper *:nth-child(1)').style.display = 'none';
    }

    //function to apply mask and set state, after state is set react will re-write the input value. event variable is send automatically.
    inputValueChange = (event) => {

        // only allows numbers, ',' and '.'
        let value = event.target.value.replace(/[^\d]/g,'');

        if (value.length > 2){
            value = this.addstr (value, ',', -3);
        } else 

        if (value.length === 1){
            value = this.addstr (value, '0,0', -2);
        } else

        if (value.length === 2){
            value = this.addstr (value, '0,', -3);
        }

        while (value[0]==='0' && value.length > 4) {
            value = value.slice(0, 0) + value.slice(0+1);
        }

        let integers=0
        for (let i=value.length-4 ; i>=0 ; i--){
            integers = integers+1
            if(integers === 4){
                //console.log('index: ', i, 'character: ', value[i])
                value = this.addstr (value, '.', i+1);
                integers = 1;
            }
        };

        console.log(value)
        if (value.length > 0){
            value = this.addstr (value, 'R$ ', 0);
        }

        this.setState(state => (state.submittedFormData.inputValue = value, state))
    }



    addstr (strA, strB, position) {
        let output;
    
        //falta limitar a entrada de position e verificar parametros obrigatorios
    
        if (position < 0){
            output = [strA.slice(0, strA.length+1+position), strB, strA.slice(strA.length+1+position, strA.length)].join('');
        } else {
            output = [strA.slice(0, position), strB, strA.slice(position)].join('');
        };
    
        return output;
    };

    render() {
  
      return (

        <div className="payment-modal-wrapper" style={{display: this.props.display}}>
            <div className="payment-modal">

                <div className="modal-title">
                    <p>Pagamento para <span>{this.props.clickedUser.name}</span></p>
                    <i className="fa fa-times-circle" aria-hidden="true" onClick={this.closeModal}></i>
                </div>

                <div className="modal-body">
                    <form>
                        <div id="input-value-wrapper">
                            <small>O campo abaixo é obrigatório</small>
                            <input type='text' value={this.state.submittedFormData.inputValue} placeholder="R$ 0,00" onChange={ this.inputValueChange }></input>
                        </div>
                        <div id="select-card-wrapper">
                            <small>O campo abaixo é obrigatório</small>
                            <select value={this.state.submittedFormData.selectCard} onChange={ event => this.setState(state => (state.submittedFormData.selectCard = event.target.value, state)) } >
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
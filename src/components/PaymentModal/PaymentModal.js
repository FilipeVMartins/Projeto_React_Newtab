import React from 'react';

import ClickButton from '../../components/ClickButton/ClickButton'

import './PaymentModal.css';

export default class PaymentModal extends React.Component {


    closeFunction(e) {
        e.target.parentNode.parentNode.parentNode.style.display = 'none'
    }

    render() {
  
      return (

        <div className="payment-modal-wrapper">
            <div className="payment-modal">

                <div className="modal-title">
                    <p>Pagamento para <span>{this.props.username}</span></p>
                    <i className="fa fa-times-circle" aria-hidden="true" onClick={(e) => this.closeFunction(e)}></i>
                </div>

                <div className="modal-body">
                    <div>
                        <input type='number' placeholder="R$ 0,00"></input>
                    </div>
                    <div>
                        <select>
                            <option>AAA</option>
                            <option>BBB</option>
                        </select>
                    </div>
                    <div>
                        <ClickButton classN="pay-button"  displayText="Pagar" />
                    </div>
                </div>
                
            </div>
            <div className="screen-block">

            </div>
        </div>
      )
    }
}
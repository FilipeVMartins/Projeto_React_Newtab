import React from 'react';

import './ConfirmationMsgModal.css';

export default class ReceiptMsgModal extends React.Component {


  render() {

    return (
        <div className="receipt-modal-wrapper" style={{display: this.props.display}}>
            <div className="receipt-modal">

                <div className="modal-title">
                    <p>Recibo de Pagamento</p>
                    <i className="fa fa-times-circle" aria-hidden="true" onClick={this.props.closeModal}></i>
                </div>

                <div className="modal-body">
                    <p>{this.props.receiptMsg}</p>
                </div>
                
            </div>
            <div className="screen-block">

            </div>
        </div>
    );
  };
};
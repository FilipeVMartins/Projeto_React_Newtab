import React from 'react';

import ClickButton from '../../components/ClickButton/ClickButton'

import './ReceiptMsgModal.css';

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
                    <p>O pagamento <span>{this.props.receipt.success == true ? '' : 'não'}</span> foi concluído com sucesso.</p>
                    <div>
                        <ClickButton classN="pay-button" type="button" displayText="Confirmar" onClickFunction={this.props.closeModal} />
                    </div>
                </div>
                
            </div>
            <div className="screen-block">

            </div>
        </div>
    );
  };
};
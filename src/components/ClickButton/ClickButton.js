import React from 'react';

import './ClickButton.css';

export default class ClickButton extends React.Component {


    render() {
  
      return (
        <button className={this.props.classN} onClick={this.props.onClickFunction} type={this.props.type ? this.props.type : 'button'}>{this.props.displayText}</button>
      )
    }
}
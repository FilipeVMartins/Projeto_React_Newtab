import React from 'react';

import './PageTitle.css';

export default class PageTitle extends React.Component {


  render() {

    return (
    
      <div className="page-title">
          <h2>{this.props.title}</h2>

          {this.props.scroll ?

            <div onClick={this.props.scrollFunction}>
              <p>Back To Top</p>
              <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
            </div>

            : null
          }
      </div>
    );
  };
};

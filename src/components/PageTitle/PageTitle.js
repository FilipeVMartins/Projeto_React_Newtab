import React from 'react';

import './PageTitle.css';

export default class PageTitle extends React.Component {

  render() {

    return (
    
      <div className="page-title">
          <h2>{this.props.title}</h2>
      </div>
    );
  };
};

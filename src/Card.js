import React, { Component } from 'react';

class Card extends Component {
    render(){
      
      const { name, company, avatar_url } = this.props

      return(
        <div className="github-profile">
          <img src={ avatar_url } />
          <div className="info">
            <div className="name">{ name }</div>
            <div className="company">{ company }</div>
      </div>
        </div>
      );
    }
  }
  
  export default Card;
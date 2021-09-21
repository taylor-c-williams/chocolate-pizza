import React, { Component } from 'react';


export default class IngredientsList extends Component {
  render() {
    return (
      <div className = "Card">
        
        <ul>
          <li>
            {this.props.measure} of {this.props.name}
          </li>
        </ul>
      </div>
    );
  }
}
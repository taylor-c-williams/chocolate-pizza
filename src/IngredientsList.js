import React, { Component } from 'react';


export default class IngredientsList extends Component {
  render() {
    return (
      <div>
        
        <ul>
          <li>
            {this.props.measure} of {this.props.name}
          </li>
        </ul>
      </div>
    );
  }
}
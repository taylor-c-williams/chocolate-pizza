import React, { Component } from 'react';
import Ingredients from './Ingredients.js';

export default class IngredientsList extends Component {
  render() {
    return (
      <div>
        <section className="image1">
          <img src="list-bg.png" alt="recipe card" />
          <Ingredients />
        </section> 
      </div>
    );
  }
}

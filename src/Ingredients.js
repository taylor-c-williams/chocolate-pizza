import React, { Component } from 'react';

export default class Ingredients extends Component {
  render() {
    return (
      <div>
        <Ingredients 
          name = 'Milk'
          measure = '1.5 Cups'
        />
        <Ingredients
          name = 'Mascarpone'
          measure = '1.5 Cups'
        />
        <Ingredients
          name = 'Pink Salt'
          measure = '.5 tsp'
        />
        <Ingredients
          name = 'Black Mission Figs'
          measure = '1lb'
        />
        <Ingredients
          name = 'Brown Sugar'
          measure = '.5 Cup'
        />
        <Ingredients
          name = 'Water'
          measure = '.5 Cup'
        />    
      </div>
    );
  }
}

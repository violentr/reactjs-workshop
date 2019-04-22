import { products } from '~/constants/Products.js';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Image extends Component{
  render() {
    return (
        products.map((product) => (
          <img key={product.id} style={ {width: 200, height: 150} }src={product.imageUrl} />
        ))
    )
  }

}

export default Image;

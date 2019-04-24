import React, { Component } from 'react';
import { products } from '../constants/Products.js';
import ProductCard from './ProductCard.js'

class App extends Component {
  render() {
    let options = { width: 200, height: 150, alt: ''}
    return (
      <div>
        {
          products.map((product) => (
            <ProductCard key={product.id}
              {...product} {...options}
            />
          ))
        }
      </div>
    );
  }
}

export default App;

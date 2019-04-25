import React, { Component } from 'react';
import Image from './Image.js'
import { products } from '../constants/Products.js';
import TextBox from './Textbox.js'
import Price from './Price.js'

class App extends Component {
  render() {
    let options = { width: 200, height: 150, alt: ''}
    return (
      <div>
        <Price price="32"/>
        <TextBox title="List of Products:"/>
        {
          products.map((product) => (
            <Image key={product.id}
              {...product} {...options}
            />
          ))
        }
      </div>
    );
  }
}

export default App;

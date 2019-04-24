import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Image from '~/src/Image.js'
import { products } from '~/constants/Products.js';
import TextBox from '~/src/Textbox.js'
import Price from '~/src/Price.js'

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
ReactDOM.render(<App />, document.getElementById('root'))

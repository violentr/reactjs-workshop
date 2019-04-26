import React, { Component } from 'react'
import { products } from '../constants/Products.js'
import Catalog from './Catalog.js'

class App extends Component {
  render() {
    return (
      <div>
        <Catalog products={ products } />
      </div>
    );
  }
}

export default App;

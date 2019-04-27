import React, { Component } from 'react'
import { products } from '../constants/Products.js'
import Catalog from './Catalog.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {counter: 0}
  }

  render() {
    return (
      <div>
        <button> Basket {this.state.counter} </button>
        <Catalog products={ products } />
      </div>
    );
  }
}

export default App;

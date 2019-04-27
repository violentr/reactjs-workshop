import React, { Component, Fragment } from 'react'
import { products } from '../constants/Products.js'
import Catalog from './Catalog.js'
import BasketContext  from '~/context/BasketContext.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {counter: 0}
  }

  render() {
    return (
      <Fragment>
        <button> Basket {this.state.counter} </button>
        <BasketContext.Provider value={this.state}>
          <Catalog products={ products } />
        </BasketContext.Provider>
      </Fragment>
    );
  }
}

export default App;

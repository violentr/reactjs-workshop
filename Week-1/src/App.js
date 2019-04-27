import React, { Component, Fragment } from 'react'
import { products } from '../constants/Products.js'
import Catalog from './Catalog.js'
import { BasketProvider} from '~/context/BasketContext.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {counter: 0}
  }

  render() {
    return (
      <Fragment>
        <button> Basket {this.state.counter} </button>
        <BasketProvider value={this.state}>
          <Catalog products={ products } />
        </BasketProvider>
      </Fragment>
    );
  }
}

export default App;

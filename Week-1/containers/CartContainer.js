import React, { Component, Fragment } from 'react'
import { products } from '~/constants/Products.js'
import Catalog from '~/src/Catalog.js'
import { BasketProvider} from '~/context/BasketContext.js'

const structure = {
  "Desktop computer": 0,
  "Printer": 0, "HDD": 0,
  "Keyboard": 0,
  "Mouse": 0
}

class CartContainer extends Component {
  constructor(props){
    super(props)
    this.state = structure
    this.addProduct = this.addProduct.bind(this)
    this.totalItems = this.totalItems.bind(this)
  }

  addProduct(product){
    let state = {...this.state}
    this.setState({[product]: state[product] + 1})
  }

  totalItems(){
    let count = Object.values(this.state)
    return count.reduce((total, i) => total + i)
  }

  render(){
    return(
      <Fragment >
        <button> Basket { this.totalItems() } </button>
        <BasketProvider value={this.addProduct}>
          <Catalog products={ products } />
        </BasketProvider>
      </Fragment>
    )
  }
}

export default CartContainer

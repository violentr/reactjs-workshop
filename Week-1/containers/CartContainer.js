import React, { Component, Fragment } from 'react'
import { products } from '~/constants/Products.js'
import Catalog from '~/src/Catalog.js'
import { BasketProvider} from '~/context/BasketContext.js'

class CartContainer extends Component {
  constructor(props){
    super(props)
    this.state = { products: [] }
    this.addProduct = this.addProduct.bind(this)
    this.totalItems = this.totalItems.bind(this)
  }

  addProduct(product){
    this.setState(state => { return state.products.push(product) })
  }

  totalItems(){
    return this.state.products.length
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

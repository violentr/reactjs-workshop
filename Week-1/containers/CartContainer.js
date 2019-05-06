import React, { Component, Fragment } from 'react'
import { BasketProvider} from '~/context/BasketContext.js'
import { checkoutPath } from '~/src/routes/helpers.js'

class CartContainer extends Component {
  constructor(props){
    super(props)
    this.state = { products: [] }
    this.addProduct = this.addProduct.bind(this)
    this.totalItems = this.totalItems.bind(this)
    this.showBasket = this.showBasket.bind(this)
  }

  addProduct(product){
    this.setState({products: [...this.state.products, product]})
  }

  showBasket(){
    this.props.history.push(`${checkoutPath()}`)
  }
  totalItems(){
    return this.state.products.length
  }

  render(){
    return(
      <Fragment >
        <button onClick={this.showBasket}> Basket { this.totalItems() } </button>
        <BasketProvider value={this.addProduct}>
          { this.props.children }
        </BasketProvider>
      </Fragment>
    )
  }
}

export default CartContainer

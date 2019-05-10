import React, { Component, Fragment } from 'react'
import { BasketProvider} from '~/src/context/BasketContext.js'
import { checkoutPath } from '~/src/routes/helpers.js'
import { products } from '~/src/constants/Products.js'

class CartContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: products,
      basket: []
    }
  }

  addProduct = (product) => {
    this.setState({basket: [...this.state.basket, product]})
    console.log("basket", this.state.basket)
  }

  showBasket = () =>{
    console.log("props", this.props)
    this.props.history.push({pathname: checkoutPath(), state: this.state})
  }
  totalItems = () => {
    return this.state.basket.length
  }

  render(){
    let options = {
      products: this.state.products,
      addProduct: this.addProduct,
      basket: this.state.basket
    }
    return(
      <Fragment>
        <button onClick={this.showBasket} disabled={ !this.totalItems() > 0} > Basket { this.totalItems() } </button>
        <BasketProvider value={options}>
          { this.props.children }
        </BasketProvider>
      </Fragment>
    )
  }
}

export default CartContainer

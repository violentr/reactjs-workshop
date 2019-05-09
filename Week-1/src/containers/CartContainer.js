import React, { Component, Fragment } from 'react'
import { BasketProvider} from '~/src/context/BasketContext.js'
import { checkoutPath } from '~/src/routes/helpers.js'

class CartContainer extends Component {
  constructor(props){
    super(props)
    this.state = { products: [] }
  }

  addProduct = (product) => {
    this.setState({products: [...this.state.products, product]})
  }

  showBasket = () =>{
    this.props.history.push({pathname: checkoutPath(), state: this.state})
  }
  totalItems = () => {
    return this.state.products.length
  }

  render(){
    return(
      <Fragment>
        <button onClick={this.showBasket} disabled={ !this.totalItems() > 0} > Basket { this.totalItems() } </button>
        <BasketProvider value={this.addProduct}>
          { this.props.children }
        </BasketProvider>
      </Fragment>
    )
  }
}

export default CartContainer

import React, { Component, Fragment } from 'react'
import { BasketProvider} from '~/src/context/BasketContext.js'
import { checkoutPath } from '~/src/routes/helpers.js'
import { products } from '~/src/constants/Products.js'
import { withRouter } from 'react-router-dom'

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
  }

  showBasket = () =>{
    this.props.history.push(checkoutPath())
  }

  totalItems = () => {
    return this.state.basket.length
  }

  render(){
    let options = {
      products: this.state.products,
      addProduct: this.addProduct,
      basket: this.state.basket,
      showBasket : this.showBasket
    }
    return(
      <Fragment>
        <BasketProvider value={options}>
        <button onClick={this.showBasket} disabled={ !this.totalItems() > 0} > Basket { this.totalItems() } </button>
          { this.props.children }
        </BasketProvider>
      </Fragment>
    )
  }
}

export default withRouter(CartContainer)

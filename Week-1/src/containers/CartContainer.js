import React, { Component, Fragment } from 'react'
import { BasketProvider} from '~/src/context/BasketContext.js'
import { checkoutPath } from '~/src/routes/helpers.js'
import { withRouter } from 'react-router-dom'

class CartContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
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
      addProduct: this.addProduct,
      basket: this.state.basket,
      showBasket: this.showBasket,
      totalItems: this.totalItems
    }
    return(
      <Fragment>
        <BasketProvider value={options}>
          { this.props.children }
        </BasketProvider>
      </Fragment>
    )
  }
}

export default withRouter(CartContainer)

import React, {Component, Fragment} from 'react'
import {BasketProvider} from '~/src/context/BasketContext.js'
import {checkoutPath} from '~/src/routes/helpers.js'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addProductToBasket} from '~/src/actions/Basket.js'

class CartContainer extends Component {
  constructor(props){
    super(props)
  }

  showBasket = () =>{
    this.props.history.push(checkoutPath())
  }

  totalItems = () => (
    this.props.items.length
  )

  totalCost = () => {
    let total = 0
    this.props.items.map((product) => total += product.price)
    return total
  }

  render() {
    let options = {
      addProduct: this.props.addProduct,
      basket: this.props.items,
      showBasket: this.showBasket,
      totalItems: this.totalItems,
      totalCost: this.totalCost
    }
    return (
      <Fragment>
        <BasketProvider value={options}>
          { this.props.children }
        </BasketProvider>
      </Fragment>
    )
  }
}

CartContainer.propTypes = {
  children: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {items: state.basket.items}
}

const actionToProps = (dispatch) => {
  return {
    addProduct: (product) => {
      dispatch(addProductToBasket(product))
    }
  }
}

export default connect(mapStateToProps, actionToProps)(withRouter(CartContainer))

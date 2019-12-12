import React, {Fragment, Component} from 'react'
import ProductCard from 'components/Product/Card.js'
import CheckoutForm from 'components/views/Checkout/Form.js'
import OrderDetails from 'components/views/Checkout/Order/Details.js'

import {connect} from 'react-redux'
import {emptyBasket} from 'actions/Basket.js'

class Order extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    let {form, errors, emptyCart, products, totalCost} = this.props

    console.log("errors", JSON.stringify(errors))
    let customer = {customer: form}

    let order = {
      products: products,
      totalCost: totalCost,
      totalItems: products.length
    }

    if (!errors){
      alert(JSON.stringify(Object.assign({}, customer, order)))
      console.log(JSON.stringify(Object.assign({}, customer, order)))
      emptyCart()
    }
  }

  render(){
    return (
      <Fragment>
        <OrderDetails
          items={this.props.items}
          totalCost={this.props.totalCost}
          handleSubmit={this.handleSubmit}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  let {items} = state.basket

  let props = {
    items: items,
    form: state.form.checkout && state.form.checkout.values,
    errors: state.form.checkout && state.form.checkout.syncErrors,
    products: items.map(item => ([item.title, item.price])),
    totalCost: items.reduce((total, product) => total + product.price, 0)
  }
  return props
}
const actionsToProps = (dispatch) => (
  {
    emptyCart: () => { dispatch(emptyBasket()) }
  }
)

export default connect(mapStateToProps, actionsToProps)(Order)

import React, {Fragment, Component} from 'react'
import ProductCard from '~/src/components/Product/Card.js'
import CheckoutForm from '~/src/components/views/Checkout/Form.js'

import {connect} from 'react-redux'
import {emptyBasket} from '~/src/actions/Basket.js'

const totalCost = (items) => {
  return items.reduce((total, product) => total + product.price, 0)
}

class CheckoutPage extends Component {

  constructor(props){
    super(props)

    this.order = {
      products: [],
      totalItems: null,
      totalCost: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let {form, errors, emptyCart} = this.props
    console.log("errors", JSON.stringify(errors))
    let customer = {customer: form}
    this.currentOrder()

    if (!errors){
      alert(JSON.stringify(Object.assign({}, customer, this.order)))
      console.log(JSON.stringify(Object.assign({}, customer, this.order)))
      emptyCart()
    }
  }

  currentOrder(){
    let {items} = this.props

    if (items.length > 0) {
      items.map((item) =>(
        this.order.products.push([item.title, item.price])
      ))
      this.order.totalItems = items.length
      this.order.totalCost = totalCost(items)
    }
  }

  render(){
    let {items} = this.props
    let products = items.map((product, i) => (
      <ProductCard key={i} product={product}/>)
    )
    return (
      <Fragment>
        <h3> This is Checkout page </h3>
        {products}
        <p> Total: $ {totalCost(items)} </p>
        { items.length > 0 && <CheckoutForm handleSubmit={this.handleSubmit}/> }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => (
  {
    items: state.basket.items,
    form: state.form.checkout && state.form.checkout.values,
    errors: state.form.checkout && state.form.checkout.syncErrors
  }
)
const actionsToProps = (dispatch) => (
  {
    emptyCart: () => { dispatch(emptyBasket()) }
  }
)

export default connect(mapStateToProps, actionsToProps)(CheckoutPage)

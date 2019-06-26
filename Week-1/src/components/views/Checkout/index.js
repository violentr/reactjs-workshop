import React, {Fragment, Component} from 'react'
import ProductCard from 'components/Product/Card.js'
import CheckoutForm from 'components/views/Checkout/Form.js'

import {connect} from 'react-redux'
import {emptyBasket} from 'actions/Basket.js'

const totalCost = (items) => {
  return items.reduce((total, product) => total + product.price, 0)
}

class CheckoutPage extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    let {form, errors, emptyCart, products, totalCost} = this.props
    console.log("errors", JSON.stringify(errors))
    let customer = {customer: form}
    this.props.currentOrder()

    let order = {
      products: products,
      totalCost: totalCost(),
      totalItems: products.length
    }

    if (!errors){
      alert(JSON.stringify(Object.assign({}, customer, order)))
      console.log(JSON.stringify(Object.assign({}, customer, order)))
      emptyCart()
    }
  }

  render(){
    let {items, totalCost} = this.props
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

const mapStateToProps = (state) => {
  let props = {
    items: state.basket.items,
    form: state.form.checkout && state.form.checkout.values,
    errors: state.form.checkout && state.form.checkout.syncErrors,
    products: []
  }
  let items = props.items

  props.totalCost = () => {
    return items.reduce((total, product) => total + product.price, 0)
  }
  props.currentOrder =  () => {
    if (items.length > 0) {
      items.map((item) =>(
        props.products.push([item.title, item.price])
      ))
      props.totalCost = props.totalCost(items)
    }
  }
  return props
}
const actionsToProps = (dispatch) => (
  {
    emptyCart: () => { dispatch(emptyBasket()) }
  }
)

export default connect(mapStateToProps, actionsToProps)(CheckoutPage)

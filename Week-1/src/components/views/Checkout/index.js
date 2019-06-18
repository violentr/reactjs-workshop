import React, {Fragment, Component} from 'react'
import ProductCard from '~/src/components/Product/Card.js'
import {connect} from 'react-redux'
import CheckoutForm from '~/src/components/views/Checkout/Form.js'

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
    let {form} = this.props
    let customer = {customer: form}
    this.currentOrder()

    alert(JSON.stringify(Object.assign({}, customer, this.order)))
    console.log(JSON.stringify(Object.assign({}, customer, this.order)))
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
    form: state.form.checkout && state.form.checkout.values
  }
)
export default connect(mapStateToProps)(CheckoutPage)
